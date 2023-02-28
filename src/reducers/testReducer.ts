import { TestContext } from "../context";
import { ReducerAction } from "./baseReducer.type";

export enum TestReducerActions {
  setFoo = "SET_FOO",
  unsetFoo = "UNSET_FOO",
  setBar = "SET_BAR",
  unsetBar = "UNSET_BAR",
}
export const testReducerInitialState: TestContext = {
  bar: "bar",
  foo: "foo",
};
export const testReducer = (
  state: TestContext,
  action: ReducerAction<TestReducerActions, string>
) => {
  switch (action.type) {
    case TestReducerActions.setFoo:
      return {
        ...state,
        foo: action.payload,
      };
    case TestReducerActions.unsetFoo:
      return {
        ...state,
        foo: action.payload,
      };
    case TestReducerActions.setBar:
      return {
        ...state,
        bar: action.payload,
      };
    case TestReducerActions.unsetBar:
      return {
        ...state,
        bar: action.payload,
      };
    default:
      return state;
  }
};
