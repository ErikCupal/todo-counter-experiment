import { Subject, Observable } from "rxjs";
import subjects from "./Subjects";
import { combineUpdaters } from "./rexoredux";
import { State, Todo, VisibilityFilter, Counter } from "./States";

/**
 * todos
 */

const changeCompleted$ = subjects.toggleTodo
    .map(id => (state: Todo[]): Todo[] =>
        state.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo));

const addTodo$ = subjects.addTodo
    .map(task => (state: Todo[]): Todo[] =>
        ([...state, {
            id: Date.now(),
            task,
            completed: false
        }]));

const renameTodo$ = subjects.renameTodo
    .map(([id, task]) => (state: Todo[]): Todo[] =>
        state.map(todo =>
            id === todo.id && todo.task !== task ? { ...todo, task } : todo));

export const todos$ = combineUpdaters<State, Todo[]>(
    "todos",
    changeCompleted$,
    addTodo$,
    renameTodo$
);

/**
 * visibilityFilter
 */

export const visibilityFilter$ = subjects.setVisibilityFilter
    .map(filter => (state: State): State =>
        ({
            ...state,
            visibilityFilter: filter
        }));

/**
 * counter
 */

const increment$ = subjects.increment
    .map(() => (state: Counter): Counter =>
        ({ ...state, count: state.count + 1 }));

const decrement$ = subjects.decrement
    .map(() => (state: Counter): Counter =>
        ({ ...state, count: state.count - 1 }));

export const counter$ = combineUpdaters<State, Counter>(
    "counter",
    increment$,
    decrement$
);