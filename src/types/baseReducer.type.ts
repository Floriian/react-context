export interface ReducerAction<T, K> {
    type: T,
    payload: K
}