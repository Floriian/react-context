import { useContext, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TestContext, useTestContext } from "./context";
import { testReducer, testReducerInitialState } from "./reducers/testReducer";
import { TestReducerActions } from "./reducers/testReducer";

function App() {
  const testContext = useTestContext();
  const [state, dispatch] = useReducer(testReducer, testReducerInitialState);

  return (
    <div className="App">
      <h2>Understanding React Reducer & Contexts.</h2>
      <div className="card">
        <p>Foo is {state.foo}</p>
        <p>Bar is {state.bar}</p>
        <button
          onClick={() => {
            dispatch({
              payload: "foo",
              type: TestReducerActions.setBar,
            });
          }}
        >
          Set bar
        </button>
        <button
          onClick={() => {
            dispatch({
              payload: "bar",
              type: TestReducerActions.unsetBar,
            });
          }}
        >
          Unset bar
        </button>
        <button
          onClick={() => {
            dispatch({
              payload: "bar",
              type: TestReducerActions.setFoo,
            });
          }}
        >
          Set Foo
        </button>
        <button
          onClick={() => {
            dispatch({
              payload: "foo",
              type: TestReducerActions.unsetFoo,
            });
          }}
        >
          Unset foo
        </button>
      </div>
      <p className="read-the-docs">
        Test Context is {testContext.bar ? testContext.bar : "undefined"} &{" "}
        {testContext.foo ? testContext.foo : "undefined"}
      </p>
    </div>
  );
}

export default App;
