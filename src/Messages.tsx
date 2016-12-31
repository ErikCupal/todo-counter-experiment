import s from "./Subjects";
import { VisibilityFilter } from "./States";
import { Subject } from "rxjs";

function M<T>(subject: Subject<T>, param: T) {
    return new Subject<T>();
}

export default {
    toggleTodo: (id: number) => s.toggleTodo.next(id),
    increment: () => s.increment.next(),
    decrement: () => s.decrement.next(),
    renameTodo: (id: number, task: string) => s.renameTodo.next([id, task]),
    setVisibilityFilter: (filter: VisibilityFilter) => s.setVisibilityFilter.next(filter),
    addTodo: (task: string) => s.addTodo.next(task),
};