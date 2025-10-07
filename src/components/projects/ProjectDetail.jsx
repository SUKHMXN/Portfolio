import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaCogs } from "react-icons/fa";
import projectsData from "./projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-300 bg-[#0b0b0d]">
        <h2 className="text-3xl font-bold mb-4">Project Details Not Found</h2>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const { title, liveLink, codeLink, details } = project;

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-200 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* --- PROJECT OVERVIEW --- */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-black mb-6">{title}</h1>
          <div className="flex justify-center gap-4 mb-8">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <FaGithub /> View Code
            </a>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {details.description}
          </p>
        </div>

        {/* --- KEY FEATURES --- */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {details.features.map((feature, index) => (
                    <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.role}</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {feature.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* --- ROLE & TECH STACK --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaCogs /> My Role & Contributions</h3>
                <p className="text-gray-400">{details.myRole}</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaCode /> Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                    {details.techStack.map(tech => (
                        <span key={tech} className="bg-gray-800 text-sm text-blue-300 py-1 px-3 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;

