import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-purple-500 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">
          Welcome to My GitHub Portfolio{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="text-xl text-white text-center mb-8 max-w-xl animate__animated animate__fadeIn">
          Explore my GitHub repositories and discover the projects I've been
          working on{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
        <p
          style={{
            textAlign: "center",
                      fontFamily: "cursive",
    
          }}
          className="lg:pl-96 mb-10 text-center text-white sm:pl-32"
        >
          <span
            style={{ color: "purple", fontWeight: "700", fontSize: "30px" }}
          >
            A quick ask
          </span>
          <br />
          <span>How do you comfort a JavaScript bug?</span>
          <br />
          <br />
          <span>You console it.😂</span>
        </p>

        <Link to="/repos">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full text-xl transition duration-300 animate__animated animate__bounce">
            View Repositories
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
