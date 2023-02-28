import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TestContext } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TestContext.Provider
      value={{
        bar: "",
        foo: "",
      }}
    >
      <App />
    </TestContext.Provider>
  </React.StrictMode>
);
