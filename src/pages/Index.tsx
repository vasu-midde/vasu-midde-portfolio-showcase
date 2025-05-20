
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-slate-light">
      <Navbar />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <footer className="bg-navy-dark py-6 text-slate text-center text-sm">
        <div className="container mx-auto">
          <p>Designed & Built by Vasu Midde © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
