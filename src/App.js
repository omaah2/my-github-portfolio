import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import RepoList from "./components/RepoList";
import RepoDetail from "./components/RepoDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <nav className="flex align-items-center bg-purple-400 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/non-existent-route" className="hover:underline">
                Test 404 Page
              </Link>
            </li>
            <li>
              <Link to="/errorBoundary" className="hover:underline">
                Test ErrorBoundary
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<RepoList />} />
          <Route path="/repos/:repoName" element={<RepoDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/errorBoundary" element={<ErrorBoundary />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
