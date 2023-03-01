import React, { createContext, Dispatch, useReducer } from "react";
import { testReducer, TestReducerActions } from "../reducers/TestReducer";
import { ReducerAction, TTestContext } from "../types";

const defaultState: TTestContext = {
    bar: "",
    foo: ""
}

export const TestContext = createContext<TTestContext>(defaultState);
export const TestDispatchContext = createContext<Dispatch<ReducerAction<TestReducerActions, string>> | null>(null);

export function TestProvider({ children } : { children: React.ReactNode}) {
    const [test, dispatch] = useReducer(testReducer, defaultState)
    return (
        <TestContext.Provider value={test}>
            <TestDispatchContext.Provider value={dispatch}>
                { children }
            </TestDispatchContext.Provider>
        </TestContext.Provider>
    )
}