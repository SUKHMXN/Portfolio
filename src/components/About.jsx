import React from 'react';

// Make sure your SVG file is in the correct path
import aboutIllustration from '../assets/about-illustration.svg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0b0d] text-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left Side: Illustration */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={aboutIllustration} 
              alt="Developer Illustration"
              className="max-w-xs md:max-w-sm"
            />
          </div>

          {/* Right Side: Text Content */}
          {/* UPDATED: Text is now split into three balanced paragraphs */}
          <div className="md:w-2/3 max-w-xl text-xl leading-relaxed text-center md:text-left">
            <p className="mb-6 font-bold">
              I'm a <span className="text-orange-500 font-bold">Software Developer</span> passionate about backend development, API design, and building scalable systems. I enjoy solving real-world problems with clean, maintainable code and robust logic.
            </p>
            <p className="mb-6 font-bold">
              I specialize in MERN stack, with strong foundations in DSA, SQL, DBMS, and Operating Systems, along with practical experience in Machine Learning and Deep Learning.
            </p>
            <p className="font-bold">
              I love contributing to projects that challenge me to grow and collaborate. I focus on building reliable, maintainable architectures, optimizing systems, and delivering solutions that are both practical and impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

