import { Observable } from "rxjs";

export const combineUpdaters =
    <R, T>(propertyName: string, ...observables: Observable<(state: T) => T>[]): Observable<(state: R) => R> =>
        Observable
            .merge(...observables)
            .map(updater => (state: R) =>
                Object.assign({}, state, { [propertyName]: updater((state as any)[propertyName]) }) as R
            );