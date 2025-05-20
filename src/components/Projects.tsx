
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Brain Tumor Detection",
      description: "Developed a machine learning application for early brain tumor detection using Convolutional Neural Networks (CNNs). Built an intuitive front-end interface with Streamlit in Python, enabling seamless interaction with the predictive model.",
      technologies: ["Python", "CNNs", "Streamlit", "Machine Learning"]
    },
    {
      title: "Movie Review Management System",
      description: "Engineered a full-stack Movie Review Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented secure user and admin authentication with JWT, allowing users to create accounts, browse movies, and share reviews.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"]
    },
    {
      title: "Doctor Appointment Booking System",
      description: "Designed and implemented a Doctor Appointment Booking System featuring a user-friendly interface built with Bootstrap and JavaScript, powered by a robust Django backend and database integration for managing appointments.",
      technologies: ["Django", "Bootstrap", "JavaScript", "Database"]
    }
  ];
  
  return (
    <section id="projects" className="bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
