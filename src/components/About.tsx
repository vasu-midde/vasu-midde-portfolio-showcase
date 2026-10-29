
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-navy-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="section-heading">About Me</h2>
            
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                I'm Vasu Midde, an M.Sc. Artificial Intelligence student at BTU Cottbus-Senftenberg
                in Germany, with a B.Tech in Computer Engineering from IIIT Kottayam (2021–2025).
              </p>

              <p>
                As a Research Intern at BTU, I'm building a pipeline that detects, counts and classifies
                insects in high-resolution light-trap images. Alongside that, I'm working on retrieval-augmented
                generation (RAG) with a proper evaluation framework. I care about measuring whether a model
                actually works, not just training it.
              </p>

              <p>
                I'm looking for a Werkstudent position or internship (Pflichtpraktikum) in AI / ML engineering.
              </p>
              
              <p>
                Beyond technical skills, I've demonstrated leadership capabilities as the volleyball team lead 
                during my third year of B.Tech, where I led my team to win the championship trophy in the 
                Inter-IIIT Sports Meet volleyball competition.
              </p>
              
              <p>
                When I'm not coding or learning new technologies, I enjoy traveling and photography, 
                which help me maintain perspective and find creative inspiration from the world around me.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 overflow-hidden rounded-md">
                <img 
                  src="lovable-uploads/3003a73c-f5a8-4fe8-83de-7ee1edd2ee05.png" 
                  alt="Vasu Midde with medal" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Border Frame Animation */}
              <div className="absolute -inset-2 border-2 border-teal rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-3 translate-y-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
