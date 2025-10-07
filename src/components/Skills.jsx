import React, { useState } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiCplusplus,
  SiPython,
  SiGo,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiPostman,
  SiFigma,
  SiLinux,
  SiFirebase,
  SiAndroidstudio
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Programming Languages',
    'Frontend',
    'Backend',
    'Databases',
    'Tools & Platforms'
  ];

  const skills = [
    // Programming Languages
    { name: 'C++', icon: SiCplusplus, color: '#00599C', bgColor: '#00599C20', category: 'Programming Languages' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bgColor: '#F7DF1E20', category: 'Programming Languages' },
    { name: 'Python', icon: SiPython, color: '#3776AB', bgColor: '#3776AB20', category: 'Programming Languages' },
  
    
    // Frontend
    { name: 'HTML', icon: SiHtml5, color: '#E34F26', bgColor: '#E34F2620', category: 'Frontend' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6', bgColor: '#1572B620', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', bgColor: '#06B6D420', category: 'Frontend' },
    { name: 'React', icon: SiReact, color: '#61DAFB', bgColor: '#61DAFB20', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', bgColor: '#33993320', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', bgColor: '#FFFFFF20', category: 'Backend' },
    
    // Databases
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', bgColor: '#47A24820', category: 'Databases' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', bgColor: '#4479A120', category: 'Databases' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', bgColor: '#FFCA2820', category: 'Databases' },
    
    // Tools & Platforms
    { name: 'Git', icon: SiGit, color: '#F05032', bgColor: '#F0503220', category: 'Tools & Platforms' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', bgColor: '#2496ED20', category: 'Tools & Platforms' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', bgColor: '#FFFFFF20', category: 'Tools & Platforms' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', bgColor: '#FF6C3720', category: 'Tools & Platforms' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', bgColor: '#F24E1E20', category: 'Tools & Platforms' },
    { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84', bgColor: '#3DDC8420', category: 'Tools & Platforms' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#0b0b0d] text-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center text-white mb-4">Technical Skills</h2>
        <p className="text-lg text-center text-gray-400 mb-12">
          Technologies and frameworks I work with
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeCategory === category
                  ? 'bg-gray-700 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/50'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <Icon 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;