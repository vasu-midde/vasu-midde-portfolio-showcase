
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies,
  github,
  live,
  index
}) => {
  return (
    <div 
      className="relative bg-navy-light rounded-lg overflow-hidden group"
      style={{ 
        animationDelay: `${index * 200}ms`
      }}
    >
      <div className="p-8">
        <div className="mb-2">
          <span className="text-teal text-sm font-mono">Featured Project</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
          {title}
        </h3>
        
        <div className="mb-5 text-slate">
          <p>{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-sm text-slate-light font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="relative z-10 flex space-x-4 mt-5">
          {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-teal transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          )}
          {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-teal transition-colors"
            aria-label={`View ${title} live demo`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          )}
        </div>
      </div>
      
      {/* Hover overlay with gradient */}
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
      
      {/* Border accent */}
      <div className="absolute bottom-0 left-0 h-1 bg-teal w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
    </div>
  );
};

export default ProjectCard;
