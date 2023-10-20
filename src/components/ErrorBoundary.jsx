import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  handleBackToHome = () => {
    window.location.href = "/"; // Redirect to the home page
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-16">
          <h2 className="font-bold text-purple-500">
            Oops! Something went wrong. 😔
          </h2>
          <p className="text-purple-500">
            We apologize for the inconvenience. Please try again later.
          </p>
          <button
            className="text-purple-500 hover:underline"
            onClick={this.handleBackToHome}
          >
            Back to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


