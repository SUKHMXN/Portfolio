import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0b0b0d] text-gray-300">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-black text-center mb-4">Projects</h2>
        <p className="text-lg text-gray-400 text-center mb-16">
          A collection of projects that showcase my skills in web development,
          design, and problem-solving.
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-12">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="block w-full max-w-sm group"
              >
                <div className="p-1 bg-gradient-to-br from-purple-700 to-blue-600 rounded-2xl h-full cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="bg-[#121214] rounded-xl p-4 h-full flex flex-col">
                    <div className="mb-4 overflow-hidden rounded-lg h-40 flex items-center justify-center bg-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm z-10"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm z-10 ${
                          !project.liveLink ? "w-full" : ""
                        }`}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

