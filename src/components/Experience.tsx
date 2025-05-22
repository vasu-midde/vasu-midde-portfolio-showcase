
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-12 mt-10">
          {/* Plasmid Internship */}
          <div className="bg-navy-light p-6 rounded-md border border-slate-dark/20 hover:border-teal/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-light mb-2 lg:mb-0">Data Science Intern</h3>
              <div className="flex items-center">
                <span className="text-slate">Plasmid</span>
                <span className="mx-3 text-slate-dark">|</span>
                <span className="text-slate font-mono">Remote</span>
              </div>
            </div>
            
            <p className="text-slate mb-6">
              Successfully completed a comprehensive data science internship at Plasmid, focusing on machine learning
              models and data analysis techniques. Worked on real-world projects and contributed to the company's data-driven initiatives.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <a 
                href="https://drive.google.com/file/d/1vdFCQxFhVcwsGwpM1U5ojW6hF7MaSY5Y/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-dark text-sm px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/5 transition-all"
              >
                Internship Certificate
              </a>
              <a 
                href="https://drive.google.com/file/d/1vr5bkUrOmN5jp77ku0Dc8y3fEETi5Qmh/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-dark text-sm px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/5 transition-all"
              >
                Letter of Recommendation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
