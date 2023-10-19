import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../components/Style.css";

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    (async () => {
      try {
        // Update the endpoint to fetch data for a specific repository
        const repoUrl = `https://api.github.com/repos/omaah2/${repoName}`;

        const response = await fetch(repoUrl);

        if (response.ok) {
          const data = await response.json();
          setRepository(data);
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
  }, [repoName]);

  return (
    <div className="container mx-auto p-4">
      <div className="text-right mb-4">
        <button className="text-purple-500 hover:underline" onClick={goBack}>
          Back to Previous Page
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center text-color-change">
        Repository Details for {repoName}
      </h1>
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="bg-white text-center rounded-lg shadow-md p-4">
          {repository ? (
            <div>
              <p className="text-xl text-purple-500 font-semibold mb-2">
                Name: {repository.name}
              </p>
              <p className="mb-2 text-purple-500  ">
                Description: {repository.description}
              </p>
              <p className="text-purple-500 ">
                Created At: {new Date(repository.created_at).toLocaleString()}
              </p>
              {/* Add more details as needed */}
            </div>
          ) : (
            <p className="text-red-500">Repository not found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
