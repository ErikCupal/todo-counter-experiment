import messages from "../../Messages";
import * as React from "react";
import { State, Todo } from "../../States";
import TodoElement from "./TodoElement";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { View, Button } from "react-native";

const DialogAndroid = require("react-native-dialogs");

interface Props {
    todos: Todo[];
}

const onTodoClick = (id: number, task: string) => {
    const dialog = new DialogAndroid();
    dialog.set({
        title: "Rename todo",
        positiveText: "Done",
        negativeText: "Cancel",
        input: {
            hint: "Enter new task name",
            prefill: task,
            allowEmptyInput: false,
            callback: (value: string) => onInputSubmit(id, value),
            type: 1,
        }
    });
    dialog.show();
};
const onInputSubmit = (id: number, newTask: string) => messages.renameTodo(id, newTask);
const onTodoCheck = messages.toggleTodo;

const renderTodos = (todos: Todo[]) =>
    todos.map(todo =>
        <TodoElement
            key={todo.id}
            onClick={() => onTodoClick(todo.id, todo.task)}
            onCheck={() => onTodoCheck(todo.id)}
            completed={todo.completed}
            task={todo.task}
        />
    );

const TodoList = ({ todos }: Props) =>
    <View>
        {renderTodos(todos)}
    </View>;

/**
 * Connect
 */

const getVisibleTodos = createSelector(
    (state: State) => state.visibilityFilter,
    (state: State) => state.todos,
    (filter, todos) => {
        switch (filter) {
            case "all":
                return todos;
            case "completed":
                return todos.filter(todo => todo.completed);
            case "active":
                return todos.filter(todo => !todo.completed);
        }
    }
);

export default connect(
    state => ({
        todos: getVisibleTodos(state)
    })
)(TodoList);