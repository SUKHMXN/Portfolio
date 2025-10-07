import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// STEP 1: Import your photograph from the assets folder
import profilePhoto from '../assets/profile-photo.jpg'; // Make sure your photo is here

const AnimatedHero = () => {
  const roles = ["MERN Stack Developer", "AI/ML Engineer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [animationState, setAnimationState] = useState('in');
  const [boxWidth, setBoxWidth] = useState(0);
  const textRef = useRef(null);

  // Measure the initial width of the text when the component mounts
  useLayoutEffect(() => {
    if (textRef.current) {
      setBoxWidth(textRef.current.offsetWidth);
    }
  }, []);

  // This effect triggers the animation sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('out'); // Start the 'out' animation (text fades out)
    }, 3000); // How long each role is displayed
    return () => clearInterval(interval);
  }, []);

  // This effect changes the role after the text has faded out
  useEffect(() => {
    if (animationState === 'out') {
      const textFadeOutDuration = 500; // Must match the text-out transition duration
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, textFadeOutDuration);
    }
  }, [animationState]);

  // This effect measures the new text and triggers the resize and fade-in animations
  useLayoutEffect(() => {
    if (textRef.current) {
      setBoxWidth(textRef.current.offsetWidth); // Set the new width, triggering the box animation
      setAnimationState('in'); // Trigger the text fade-in animation
    }
  }, [roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0b0b0d] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        <div className="lg:w-1/2 max-w-xl text-center lg:text-left mb-10 lg:mb-0">
          {/* UPDATED: Added font-mono to this container to change the font of all static text inside */}
          <div className="font-mono text-gray-300 leading-relaxed">
            <div className="text-2xl mb-2">
              <span>👋 Hi, I'm </span>
              <span className="font-extrabold text-orange-500">Sukhman</span>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start min-h-[50px]">
              <span className="text-2xl mr-4">a</span>
              {/* This is the BOX container. Its transition is faster. */}
              <span
                className="bg-gray-800/50 rounded-lg inline-block transition-[width] duration-500 ease-in-out"
                style={{ width: `${boxWidth}px` }}
              >
                {/* This is the TEXT. Its transition is slower and includes a blur and delay. */}
                <span
                  ref={textRef}
                  className={`
                    inline-block text-white font-bold py-1 px-4 text-2xl whitespace-nowrap
                    transition-all duration-700 ease-in-out
                    ${animationState === 'out' ? 'opacity-0 blur-sm' : 'opacity-100 blur-0 delay-500'}
                  `}
                >
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            <div className="text-2xl mt-2">
              <span>from India.</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="relative w-full h-full p-0.5 bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-700 rounded-[3rem] shadow-xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.85rem] overflow-hidden">
                      <img
                          src={profilePhoto} 
                          alt="Sukhman"
                          className="w-full h-full object-cover"
                      />
                  </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnimatedHero;


