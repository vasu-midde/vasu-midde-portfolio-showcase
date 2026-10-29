
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "ABS AI – Academic-to-Career Assistant",
      description: "Top 5 at the GDG BTU \"Build with AI\" hackathon. An AI system that turns lectures and notes into summaries, key concepts, skill mapping and career-relevance insights. Built in a 5-person team.",
      technologies: ["LLMs", "React", "Supabase", "Google Cloud"],
      github: "https://github.com/SreyaThota/ABS"
    },
    {
      title: "HeatMap.Wohnen",
      description: "Apartment-level heat-stress scoring for German property managers, aligned with the EU EPBD. Presented at the Climathon Award 2026 with a 4-person BTU team.",
      technologies: ["Risk modelling", "SaaS concept", "Climate tech"],
      github: "https://github.com/SreyaThota/heatmap-wohnen"
    },
    {
      title: "Brain Tumor Detection with Explainable AI",
      description: "B.Tech project: a CNN that detects brain tumors in MRI scans, with explainable-AI visualisations showing which image regions drove each prediction, served through a Streamlit interface.",
      technologies: ["Python", "CNNs", "Explainable AI", "Streamlit"]
    },
    {
      title: "Language Detection",
      description: "NLP classifier for 17 languages using a bag-of-words model. Multinomial Naive Bayes reaches 97.7% test accuracy, compared against Random Forest and KNN.",
      technologies: ["Python", "scikit-learn", "NLP", "pandas"],
      github: "https://github.com/vasu-midde/Language-detection"
    },
    {
      title: "Bengaluru House Price Prediction",
      description: "Cleaning, feature engineering and outlier removal on 13k property listings, followed by a regression model with R² 0.86 on the held-out test set.",
      technologies: ["Python", "scikit-learn", "pandas", "Matplotlib"],
      github: "https://github.com/vasu-midde/HousePricePrediction"
    },
    {
      title: "Online Retail Recommendation System",
      description: "Item-based collaborative filtering on 541k transactions from 4,372 customers, plus popularity analysis by country and month. Built during my Plasmid internship.",
      technologies: ["Python", "pandas", "Recommender systems"],
      github: "https://github.com/vasu-midde/Online_Retail_Recommendation_System"
    },
    {
      title: "Photo Colorization",
      description: "Colourises black-and-white photos with a pre-trained CNN (Zhang et al., 2016) through OpenCV's DNN module, using Lab colour-space prediction.",
      technologies: ["Python", "OpenCV", "Deep Learning"],
      github: "https://github.com/vasu-midde/color_photo"
    },
    {
      title: "TextUtils",
      description: "React app for quick text clean-up: case conversion, extra-space removal, copy to clipboard, and live word and character counts.",
      technologies: ["React", "React Router", "Bootstrap"],
      github: "https://github.com/vasu-midde/text-utils",
      live: "https://vasu-midde.github.io/text-utils/"
    },
    {
      title: "BMI Calculator",
      description: "React app that calculates Body Mass Index from weight and height and shows the weight category.",
      technologies: ["React", "Bootstrap"],
      github: "https://github.com/vasu-midde/BMI_calculator",
      live: "https://vasu-midde.github.io/BMI_calculator/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-navy-dark to-navy">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                live={project.live}
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
