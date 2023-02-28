import { createContext, useContext } from "react";

export interface TestContext {
  foo: string;
  bar: string;
}

export const TestContext = createContext<TestContext>({
  foo: "",
  bar: "",
});

export const useTestContext = () => useContext(TestContext);
