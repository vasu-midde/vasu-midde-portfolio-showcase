
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
                I'm Vasu Midde, a passionate Computer Science and Engineering graduate from the 
                Class of 2025 with a deep-rooted interest in building innovative digital solutions 
                that solve real-world problems.
              </p>
              
              <p>
                My academic journey has equipped me with a strong foundation in computer science fundamentals, 
                while my project work has given me practical experience in areas ranging from machine learning and 
                full-stack development to database management and UI design.
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
              <div className="w-64 h-64 overflow-hidden rounded-md bg-slate-dark/30">
                <div className="w-full h-full flex items-center justify-center text-slate">
                  {/* Replace with actual image when available */}
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-2 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-sm">Profile Photo</p>
                  </div>
                </div>
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
