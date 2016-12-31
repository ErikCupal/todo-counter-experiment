import { Subject } from "rxjs";
import { VisibilityFilter } from "./States";

function S<T>() {
    return new Subject<T>();
}

export default {
    toggleTodo: S<number>(),
    increment: S<{}>(),
    decrement: S<{}>(),
    renameTodo: S<[number, string]>(),
    setVisibilityFilter: S<VisibilityFilter>(),
    addTodo: S<string>(),
};