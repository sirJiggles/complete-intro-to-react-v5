// mostly from docs on error boundaries
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(err, info) {
    console.error("Error boundary caught an error", err, info);
  }

  // each time we get new state or props
  componentDidUpdate() {
    if (this.state.hasError) {
      // in 5 seconds we set redirect as true
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

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
