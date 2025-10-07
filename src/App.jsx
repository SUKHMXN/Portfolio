import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/projects/Projects";
import ProjectDetail from "./components/projects/ProjectDetail";

function App() {
  return (
    <div className="bg-[#0b0b0d] text-gray-300 font-sans overflow-x-hidden">
      <main>
        <Routes>
          {/* This route now renders the entire home page, including the Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div id="home">
                  <Hero />
                </div>
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
              </>
            }
          />
          {/* This route renders ONLY the ProjectDetail component, without the Navbar or Footer */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

