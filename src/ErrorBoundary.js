// mostly from docs on error boundaries
import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(err, info) {
    console.error("Error boundary caught an error", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. Click <Link to="/">here</Link>{" "}
          to go back home or wait 5 seconds
        </h1>
      );
    }

    // in here we pass through and show what is inside the component
    // so it is like yield in ember
    return this.props.children;
  }
}

export default ErrorBoundary;
