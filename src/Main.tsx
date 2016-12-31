import TodoList from "./Components/Todos/TodoList";
import * as React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ViewStyle,
    TextStyle,
    Button
} from "react-native";
import { Provider } from "react-redux";
import { Observable } from "rxjs";
import { State, InitialState } from "./States";
import { createStore } from "redux";
import * as updaters from "./Updaters";
import Counter from "./Components/Counter";
import messages from "./Messages";

const DialogAndroid = require("react-native-dialogs");

const mainReducer = (state: State = InitialState, action: { type: string, updater: (state: State) => State }) => {
    switch (action.type) {
        case ("update"):
            const newState = action.updater(state);
            console.log(newState);
            return newState;
        default:
            return state;
    }
};

const store = createStore(mainReducer);

const updater$ = Observable
    .merge(...Object.values(updaters))
    .subscribe(updater =>
        store.dispatch({ type: "update", updater })
    );

export default () =>
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 9 }}>
                <Counter />
                <TodoList />
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button title="All" onPress={() => setVisibilityFilter("all")} />
                </View>
                <View style={styles.button}>
                    <Button title="Completed" onPress={() => setVisibilityFilter("completed")} />
                </View>
                <View style={styles.button}>
                    <Button title="Active" onPress={() => setVisibilityFilter("active")} />
                </View>
            </View>
            <View style={styles.addButton}><Button title="Add Todo" onPress={onAddClick} /></View>
        </View>
    </Provider>;

const { setVisibilityFilter, addTodo } = messages;

const onAddClick = () => {
    const dialog = new DialogAndroid();
    dialog.set({
        title: "Add todo",
        positiveText: "Add",
        negativeText: "Cancel",
        input: {
            hint: "Enter new task name",
            allowEmptyInput: false,
            callback: (value: string) => onInputSubmit(value),
            type: 1,
        }
    });
    dialog.show();
};
const onInputSubmit = (newTask: string) => addTodo(newTask);


interface Style {
    buttonsContainer: ViewStyle;
    button: ViewStyle;
    addButton: ViewStyle;
    counterText: TextStyle;
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
    },
    button: {
        flex: 1,
        padding: 5,
        alignItems: "stretch",
    },
    addButton: {
        padding: 5,
        alignItems: "stretch",
    },
    counterText: {
        margin: 20,
        fontSize: 24
    },
    container: {
        padding: 5,
        flex: 1,
        alignItems: "center"
    },
});