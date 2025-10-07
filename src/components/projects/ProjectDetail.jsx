import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaCogs, FaSearch, FaHeart, FaChevronRight } from "react-icons/fa";
import projectsData from "./projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-300 bg-[#0b0b0d]">
        <h2 className="text-3xl font-bold mb-4">Project Details Not Found</h2>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
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
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
              <FaGithub /> View Code
            </a>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {details.description}
          </p>
        </div>

        {/* --- DYNAMIC SECTION: Renders based on data structure --- */}
        <div className="mb-20">
          {/* Creative Horizontal Pipeline for 'pipeline' data */}
          {details.pipeline && (
            <>
              <h2 className="text-3xl font-bold text-center mb-12">ML Pipeline</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {details.pipeline.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 w-full md:w-1/4 h-48 flex flex-col justify-center transform hover:scale-105 hover:border-blue-500 transition-all duration-300">
                      <h3 className="text-lg font-bold text-blue-400 mb-2">{item.stage}</h3>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                    {index < details.pipeline.length - 1 && (
                      <FaChevronRight className="text-gray-600 text-2xl hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          {/* Creative Two-Branch Layout for 'processFlow' */}
          {details.processFlow && (
            <>
              <h2 className="text-3xl font-bold text-center mb-10">System Architecture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3"><FaSearch size={24}/> Detection Pipeline</h3>
                  <div className="space-y-4">
                    {details.processFlow.detection.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                   <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-3"><FaHeart size={24}/> Management Pipeline</h3>
                   <div className="space-y-4">
                    {details.processFlow.management.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Linear 'methodology' layout */}
          {details.methodology && (
            <>
              <h2 className="text-3xl font-bold text-center mb-10">Our Methodology</h2>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 top-4 h-full border-l-2 border-dashed border-gray-700"></div>
                <div className="space-y-12">
                  {details.methodology.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{item.step}</h3>
                        <p className="text-gray-400">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Standard 'features' layout */}
          {details.features && (
           <>
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
            </>
          )}
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

