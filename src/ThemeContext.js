import { createContext } from "react";

// the arg here is a hook, so state and func, but our func does not need to do anything
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
