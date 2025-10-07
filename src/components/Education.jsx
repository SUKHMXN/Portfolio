import React from 'react';
// UPDATED: Added FaAward to the import
import { FaCalendarAlt, FaUniversity, FaAward } from 'react-icons/fa';

// Your education data with the new 'score' property
const educationData = [
  {
    degree: 'Bachelor of Engineering: Computer Engineering',
    institution: 'Thapar Institute of Engineering and Technology, Patiala, Punjab - India',
    year: '2022 - 2026',
    score: 'CGPA: 8.00' // Example score
  },
  {
    degree: '12th CBSE Board',
    institution: 'BCM School, Basant Avenue, Dugri, Ludhiana, Punjab - India',
    year: '2021 - 2022',
    score: 'Percentage: 93.4%' // Example score
  },
  {
    degree: '10th CBSE Board',
    institution: 'BCM School, Basant Avenue, Dugri, Ludhiana, Punjab - India',
    year: '2019 - 2020',
    score: 'Percentage: 91.2%' // Example score
  },
];
// The modular component now accepts and displays the 'score'
const EducationItem = ({ degree, institution, year, score }) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-bold text-white">{degree}</h3>
        <div className="flex items-center gap-2 mt-2 text-gray-400">
          <FaUniversity />
          <p>{institution}</p>
        </div>
        {/* Display the score if it exists */}
        {score && (
          <div className="flex items-center gap-2 mt-2 text-gray-400 font-semibold">
            {/* UPDATED: Changed icon and color for a more subtle look */}
            <FaAward className="text-blue-400" />
            <p>{score}</p>
          </div>
        )}
      </div>
      <div className="bg-gray-800 text-gray-300 font-semibold px-4 py-2 rounded-lg flex items-center gap-2 mt-4 sm:mt-0 flex-shrink-0">
        <FaCalendarAlt />
        <span>{year}</span>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0b0b0d] text-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4">Education</h2>
        <p className="text-lg text-center text-gray-400 mb-16">My academic journey.</p>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              score={edu.score} // Pass the score down to the item
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

