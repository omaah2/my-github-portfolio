import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className=" text-center p-16">
          <h2 className="font-bold text-purple-500">
            Oops! Something went wrong. 😔
          </h2>
          <p className="text-purple-500">
            We apologize for the inconvenience. Please try again later.
          </p>
          <Link to="/" className="text-purple-500 hover:underline">
            Back to Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
