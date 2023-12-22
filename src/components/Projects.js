import React, {useState, useEffect} from "react";
import {projects} from "../assets/constants.js";
import Shimmer from "./Shimmer.js";

const Projects = () => {
    const [showShimmer, setShowShimmer] = useState(true);

  useEffect(() => {
    const shimmerTimeout = setTimeout(() => {
      setShowShimmer(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(shimmerTimeout);
  }, []);

  return (
    <section id="projects" className="bg-blue-950 m-8 py-8">
  <div className="container mx-auto max-w-screen-xl">
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold text-orange-500 p-2">Projects</h2>
      <p className="text-center text-white">Here are a few projects I have worked on!</p>
    </div>

    {showShimmer ? (
      <Shimmer />
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{project.name}</h3>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="mb-4 rounded-md w-full h-40 object-cover"
              />
            )}
            <p className="text-gray-600 mb-4 text-center">{project.description}</p>
            <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-700 hover:text-orange-300 flex items-center justify-center bg-blue-500 text-white rounded-md py-2 px-4"
                >
                  Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-700 hover:text-orange-300 flex items-center justify-center bg-blue-500 text-white rounded-md py-2 px-4"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>


  );
};

export default Projects;
