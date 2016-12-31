import * as React from "react";
import messages from "../Messages";
import { connect } from "react-redux";
import {
    View,
    Button,
    Text,
    ViewStyle,
    StyleSheet,
    TextStyle
} from "react-native";

const {
    increment,
    decrement
} = messages;

export interface Props {
    count: number;
}

const Counter = ({ count }: Props) =>
    <View style={styles.container}>
        <Text style={styles.counterText}>Counter:{" " + count}</Text>
        <View style={styles.buttons} >
            <View style={styles.buttonSpace} />
            <View style={styles.button}><Button title="+" onPress={increment} /></View>
            <View style={styles.button}><Button title="-" onPress={decrement} /></View>
            <View style={styles.buttonSpace} />
        </View>
    </View>;

export default connect(
    state => ({
        count: state.counter.count
    })
)(Counter);

interface Style {
    buttons: ViewStyle;
    button: ViewStyle;
    buttonSpace: ViewStyle;
    counterText: TextStyle;
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
    },
    buttonSpace: {
        flex: 0.7
    },
    button: {
        padding: 5,
        flex: 1,
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