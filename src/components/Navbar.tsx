
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  const resumeUrl = "https://drive.google.com/file/d/1vhPyzdw2RGpU-5zpiUprnQBvUaR3Bo7q/view?usp=sharing";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-dark bg-opacity-95 shadow-md py-3' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h2 className="text-2xl font-bold text-teal">VM.</h2>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              spy={true}
            >
              <span className="text-teal mr-1 text-sm">{index + 1}.</span> {item.name}
            </Link>
          ))}
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary ml-4"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-teal focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {!mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`md:hidden absolute w-full bg-navy-light py-4 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 top-full' : 'opacity-0 -top-96'}`}>
        <div className="flex flex-col items-center space-y-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="nav-link w-full text-center"
              activeClass="active"
              spy={true}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-teal mr-1">{index + 1}.</span> {item.name}
            </Link>
          ))}
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary w-[calc(100%-2rem)] text-center mt-2"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
