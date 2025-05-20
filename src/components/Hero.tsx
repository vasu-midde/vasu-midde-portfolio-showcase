
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Particles setup
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    const colors = ['rgba(100, 255, 218, 0.8)', 'rgba(100, 255, 218, 0.5)', 'rgba(100, 255, 218, 0.3)'];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-start">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-teal font-mono mb-5">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Vasu Midde.</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
            Innovative Software Engineer
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-xl mb-8">
            I'm a Computer Science and Engineering graduate with expertise in 
            full-stack development, machine learning, and cloud technologies. 
            Passionate about creating efficient, scalable, and impactful solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="button-primary cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="button-secondary cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
