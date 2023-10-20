import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center mx-auto p-16 text-purple-500">
    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found 🙁</h1>
    <p>
      The page you're looking for does not exist. Please check the URL and try
      again.
    </p>
    <Link to="/" className="text-purple-500 hover:underline">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
