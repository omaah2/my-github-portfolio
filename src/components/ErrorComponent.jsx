import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    throw new Error("This is an error");
  }, []);

  const triggerError = () => {
    throw new Error("This is an error");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Error Boundary Testing</h2>
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded text-xl transition duration-300 mt-4"
        onClick={triggerError}
      >
        Test
      </button>
      <div className="bg-white text-center rounded-lg shadow-md p-4 mt-4">
        <h2 className="text-2xl font-bold">Ooops!</h2>
        <p className="text-xl">Error Occurred</p>
        <Link to="/" className="block mt-2 text-purple-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

