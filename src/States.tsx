/**
 * Initial state
 */

export const InitialState: State = {
    visibilityFilter: "all",
    todos: [
        {
            id: 1,
            task: "Finish the app",
            completed: false
        },
        {
            id: 2,
            task: "Play Witcher 3",
            completed: false
        }
    ],
    counter: {
        count: 0
    }
};

/**
 * Main state type
 */

export interface State {
    visibilityFilter: VisibilityFilter;
    todos: Todo[];
    counter: Counter;
};

/**
 * Substate types
 */

export type VisibilityFilter = "all" | "completed" | "active";

export interface Todo {
    id: number;
    task: string;
    completed: boolean;
};

export interface Counter {
    count: number;
}