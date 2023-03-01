import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TestContext, TestDispatchContext } from './context/TestContext'
import { TestReducerActions } from './reducers/TestReducer';

function App() {
  const states = useContext(TestContext);
  const dispatch = useContext(TestDispatchContext)!;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {states.bar}
        <button onClick={() => {
          dispatch({
            type: TestReducerActions.SET_BAR,
            payload: "asdasd"
          })
        }}>set bar</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
