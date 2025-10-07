import React, { useState, useEffect } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaBeer } from 'react-icons/fa';
import { AiFillFileText } from 'react-icons/ai';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('header').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-700 ease-out ${isScrolled ? 'pt-3' : 'pt-0'}`}>
      <header
        className={`
          transition-all duration-700 ease-out w-full
          ${isScrolled
            ? 'max-w-4xl bg-black rounded-full border border-gray-800 shadow-md shadow-gray-500/10'
            : 'max-w-7xl bg-transparent border-transparent'
          }
        `}
      >
        <nav
          className={`
            flex justify-between items-center transition-all duration-700 ease-out mx-auto
            ${isScrolled
              ? 'px-6 py-2'
              : 'px-6 py-4'
            }
          `}
        >
          <div className="text-2xl font-bold text-white">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>&lt;&gt;</a>
          </div>
          <ul className="hidden md:flex items-center space-x-6 text-gray-200">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition">About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition">Projects</a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="hover:text-white transition">Education</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition">Contact</a></li>
          </ul>
          {/* UPDATED RESUME BUTTON */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://drive.google.com/file/d/1wipXO1z0kAKyh7xgEIlzo2IRM98ub1hP/view?usp=sharing"
              target="_blank" // It's good practice to open external links in a new tab
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              <span>Resume</span>
              <AiFillFileText className="h-5 w-5" />
            </a>
          </div>
          {/* END OF UPDATED SECTION */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

