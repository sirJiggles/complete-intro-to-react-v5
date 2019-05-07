import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

const App = () => {
  // get the entire array from the hook now
  const themeHook = useState("hotpink");
  return (
    <React.StrictMode>
      {/* everything in here has global app state, the theme hook */}
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
