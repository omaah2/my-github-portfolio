import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../components/Style.css";

const RepoList = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const username = "omaah2";
        const token =
          "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";

        const repoUrl = `https://api.github.com/users/${username}/repos`;
        const response = await fetch(repoUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-right mb-4">
        <Link to="/" className="text-purple-500 hover:underline">
          Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center text-color-change">
        GitHub Repositories
      </h1>

      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {repositories.map((repo) => (
            <motion.li
              key={repo.id}
              className="mb-4"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="bg-opacity-70 bg-white bg-blur rounded-lg shadow-md p-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    to={`/repos/${repo.name}`}
                    className="text-purple-500 hover:underline"
                  >
                    {repo.name}
                  </Link>
                </h3>
                <p>{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-purple-500 hover:underline"
                >
                  View repo
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default RepoList;
