import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import RepoList from "./components/RepoList";
import RepoDetail from "./components/RepoDetail";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<RepoList />} />
          <Route path="/repos/:repoName" element={<RepoDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/errorBoundary" element={<ErrorBoundary />} />
          <Route path="/errorComponent" element={<ErrorComponent />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
