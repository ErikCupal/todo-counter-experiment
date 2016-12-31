import messages from "../../Messages";
import * as React from "react";
import {
    Text,
    View,
    ViewStyle,
    StyleSheet
} from "react-native";
import { State, Todo } from "../../States";
const Checkbox = require("react-native-android-checkbox");

interface Props {
    onClick: () => void;
    onCheck: () => void;
    task: string;
    completed: boolean;
}

const TodoElement = ({ onClick, onCheck, task, completed }: Props) =>
    <View style={styles.container}>
        <Checkbox
            value={completed}
            disabled={false}
            onValueChange={onCheck}
        />
        <Text
            onPress={onClick}
        >
            {task}
        </Text>

    </View>;

export default TodoElement;

interface Style {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
    }
});