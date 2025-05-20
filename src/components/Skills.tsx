
import React, { useState } from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "C"]
    },
    {
      name: "Frontend Technologies",
      skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"]
    },
    {
      name: "Backend Technologies",
      skills: ["Node.js", "AWS", "Docker"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"]
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
  
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {/* Category Navigation */}
          <div className="md:col-span-1">
            <div className="bg-navy-light p-4 rounded-md">
              <ul className="space-y-1">
                {skillCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full text-left px-4 py-2.5 rounded-md transition-colors duration-200 ${
                        activeCategory === category.name
                          ? 'bg-teal/10 text-teal'
                          : 'hover:bg-navy-dark/50'
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Skills Display */}
          <div className="md:col-span-3">
            <div className="bg-navy-light p-6 rounded-md h-full">
              {skillCategories.map((category) => (
                <div
                  key={category.name}
                  className={`transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'opacity-100 h-auto'
                      : 'opacity-0 h-0 absolute'
                  }`}
                >
                  <h3 className="text-xl font-medium text-white mb-4">
                    {category.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-navy p-3 rounded-md group hover:-translate-y-1 transition-transform duration-200 border border-slate-dark/30"
                      >
                        <div className="text-center">
                          <span className="text-teal text-lg block mb-1 opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                          <span className="font-medium">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
