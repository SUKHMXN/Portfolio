import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="pt-20 pb-8 bg-[#0b0b0d] text-gray-300">
      <div className="container mx-auto px-6 text-center">
        
        {/* UPDATED: Divider is now at the top of the footer */}
        <hr className="border-gray-800 mb-12" />

        {/* Heading and paragraph with lighter, more sophisticated styling */}
        <h3 className="text-2xl font-light text-gray-400 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll get back to you as soon as I can!
        </p>

        {/* The social links */}
        <div className="flex justify-center items-center gap-12 mb-10">
          <a 
            href="mailto:your-email@example.com" // Replace with your email
            className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FaEnvelope size={32} />
            <span className="mt-2 text-sm font-semibold">Email</span>
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn URL
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={32} />
            <span className="mt-2 text-sm font-semibold">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/your-username" // Replace with your GitHub URL
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={32} />
            <span className="mt-2 text-sm font-semibold">GitHub</span>
          </a>
        </div>

        {/* Copyright notice (divider removed from here) */}
        <p className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sukhman Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;

