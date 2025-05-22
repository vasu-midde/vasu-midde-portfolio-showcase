
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters for matrix effect (can include letters, numbers, special chars)
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    
    // Set up columns and drops
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize each column's starting position
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    // Draw the matrix animation
    const draw = () => {
      // Semi-transparent overlay to create fade effect
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text color and font
      ctx.fillStyle = '#64FFDA';
      ctx.font = `${fontSize}px 'Courier New'`;
      ctx.textAlign = 'center';
      
      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        // Generate a random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Calculate x position based on column
        const x = i * fontSize + fontSize / 2;
        
        // Calculate y position based on drop
        const y = drops[i] * fontSize;
        
        // Add slight color variation to some characters for effect
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#FFFFFF';
        } else if (Math.random() > 0.9) {
          ctx.fillStyle = '#A8FFF1';
        } else {
          ctx.fillStyle = '#64FFDA';
        }
        
        // Draw the character
        ctx.fillText(text, x, y);
        
        // Move the drop down
        drops[i]++;
        
        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Randomly reset some drops
        if (Math.random() > 0.995) {
          drops[i] = 0;
        }
      }
    };
    
    // Set up animation loop
    const interval = setInterval(draw, 33); // ~30fps
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset columns and drops on resize
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Resize drops array
      for (let i = 0; i < newColumns; i++) {
        if (!drops[i]) {
          drops[i] = Math.floor(Math.random() * -canvas.height);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-start">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto z-10">
        <div className="max-w-3xl">
          <p className="text-teal font-mono mb-5 slide-in-animation opacity-0" style={{ animationDelay: '0.2s' }}>Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white slide-in-animation opacity-0" style={{ animationDelay: '0.4s' }}>
            Vasu Midde.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 slide-in-animation opacity-0" style={{ animationDelay: '0.6s' }}>
            Innovative Software Engineer
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-xl mb-8 slide-in-animation opacity-0" style={{ animationDelay: '0.8s' }}>
            I'm a Computer Science and Engineering graduate with expertise in 
            full-stack development, machine learning, and cloud technologies. 
            Passionate about creating efficient, scalable, and impactful solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 slide-in-animation opacity-0" style={{ animationDelay: '1s' }}>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="button-primary cursor-pointer"
            >
              <span className="relative z-10">View My Work</span>
            </Link>
            <a
              href="https://drive.google.com/file/d/1vhPyzdw2RGpU-5zpiUprnQBvUaR3Bo7q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer" 
              className="button-secondary cursor-pointer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <svg className="w-8 h-8 text-teal animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
