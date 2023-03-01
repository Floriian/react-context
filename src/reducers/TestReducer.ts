import { TTestContext, ReducerAction } from "../types"
export enum TestReducerActions {
  SET_FOO = 'SET_FOO',
  SET_BAR = 'SET_BAR',
  UNSET_FOO = 'UNSET_FOO',
  UNSET_BAR = 'UNSET_BAR'
}

export const testReducer = (state: TTestContext, action: ReducerAction<TestReducerActions, string>): TTestContext => {
  switch(action.type) {
    case TestReducerActions.SET_FOO: return {
      ...state,
      foo: action.payload
    }
    case TestReducerActions.SET_BAR: return {
      ...state,
      bar: action.payload
    }
    case TestReducerActions.UNSET_BAR: return {
      ...state,
      bar: ""
    }
    case TestReducerActions.UNSET_FOO: return {
      ...state,
      foo: ""
    }
    default:
        return state;
  }
}