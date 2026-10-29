
import React, { useState } from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Faster R-CNN", "CNNs", "Computer Vision", "NLP", "LLMs", "RAG", "Prompt Engineering", "Explainable AI"]
    },
    {
      name: "Data & Tools",
      skills: ["Pandas", "NumPy", "SQL", "Matplotlib", "CVAT", "Google Colab", "Jupyter"]
    },
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
      skills: ["Node.js", "Django", "Express.js", "AWS", "Docker"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"]
    },
    {
      name: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "Vercel", "Google Colab", "Postman", "AWS", "Docker"]
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
  
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-navy to-navy-light/80">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {/* Category Navigation */}
          <div className="md:col-span-1">
            <div className="bg-navy-light/70 p-4 rounded-lg backdrop-blur-sm border border-slate-dark/20">
              <ul className="space-y-1">
                {skillCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                        activeCategory === category.name
                          ? 'bg-teal/10 text-teal border-l-2 border-teal'
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
            <div className="bg-navy-light/70 p-6 rounded-lg h-full backdrop-blur-sm border border-slate-dark/20">
              {skillCategories.map((category) => (
                <div
                  key={category.name}
                  className={`transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'opacity-100 h-auto'
                      : 'opacity-0 h-0 absolute pointer-events-none'
                  }`}
                >
                  <h3 className="text-xl font-medium text-white mb-6">
                    {category.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-navy/80 p-3 rounded-md group hover:-translate-y-1 transition-all duration-300 border border-slate-dark/20 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
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
