import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex items-center bg-purple-400 p-4 text-white font-bold font-cursive">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="hover:underline"
            activeStyle={{ textDecoration: "underline" }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/non-existent-route"
            className="hover:underline"
            activeStyle={{ textDecoration: "underline" }}
          >
            Test 404 Page
          </Link>
        </li>
        <li>
          <Link to="/errorComponent" activeStyle={{ textDecoration: "underline" }}>
            Error Boundary
          </Link>
        </li>
      </ul>
    </nav>
  );
}

