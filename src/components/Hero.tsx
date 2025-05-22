
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
    const numberOfParticles = 150;
    
    // Gold-like colors for firefly effect
    const colors = [
      'rgba(255, 223, 0, 0.8)',    // Rich gold
      'rgba(255, 215, 0, 0.7)',    // Gold
      'rgba(218, 165, 32, 0.6)',   // Goldenrod
      'rgba(255, 223, 0, 0.4)',    // Soft gold
      'rgba(250, 250, 210, 0.3)'   // Light gold
    ];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      brightness: number;
      blinkSpeed: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.brightness = 0.5; // Start at half brightness
        this.blinkSpeed = Math.random() * 0.03 + 0.005; // Random blink speed
      }
      
      update() {
        // Update position with gentle movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Simulate firefly floating motion by slightly changing direction
        if (Math.random() > 0.99) {
          this.speedX = (Math.random() - 0.5) * 0.7;
          this.speedY = (Math.random() - 0.5) * 0.7;
        }
        
        // Simulate firefly blinking by changing brightness
        this.brightness += this.blinkSpeed;
        if (this.brightness >= 1 || this.brightness <= 0.3) {
          this.blinkSpeed *= -1; // Reverse direction when min/max reached
        }
        
        // Wrap around screen edges
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        
        // Create glowing effect for fireflies
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.size * 2
        );
        
        // Adjust color based on brightness
        const baseColor = this.color.replace(')', `, ${this.brightness})`);
        
        gradient.addColorStop(0, baseColor);
        gradient.addColorStop(0.5, baseColor.replace(',', ',').replace(')', ', 0.5)'));
        gradient.addColorStop(1, baseColor.replace(',', ',').replace(')', ', 0)'));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        ctx.fillStyle = 'rgba(255, 255, 220, ' + this.brightness + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
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
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
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
