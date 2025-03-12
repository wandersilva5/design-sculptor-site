
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!overlayRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;
      
      overlayRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black z-0"></div>
      
      {/* 3D Effect Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 z-0 opacity-30 transition-transform duration-200"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/abfd0419-38f5-4637-aa3a-9039214fa0a2.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent animate-fade-in">
            Design Arquitetônico 3D
          </div>
          
          <h1 className="mb-6 font-display animate-fade-in-left" style={{ animationDelay: '200ms' }}>
            Transformando <span className="text-gradient">Visões</span> em Projetos Reais
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-right text-balance" style={{ animationDelay: '400ms' }}>
            Criamos renderizações 3D fotorrealistas para arquitetos, construtoras e incorporadoras,
            dando vida aos seus projetos antes mesmo da construção começar.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Link to="/projects">
              <Button className="button-primary w-full sm:w-auto">Ver Projetos</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="button-secondary w-full sm:w-auto">Entre em Contato</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToProjects}
      >
        <ChevronDown size={32} className="text-foreground opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
