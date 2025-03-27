
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Transformando <span class='text-gradient'>Visões</span> em Projetos Reais",
    description: "Criamos renderizações 3D fotorrealistas para arquitetos, construtoras e incorporadoras, dando vida aos seus projetos antes mesmo da construção começar.",
    image: "/lovable-uploads/7e7d328d-0d9d-4312-ad9b-a53d0edb6d82.png"
  },
  {
    title: "Excelência em <span class='text-gradient'>Visualização</span> Arquitetônica",
    description: "Nossa expertise combina tecnologia avançada e sensibilidade estética para criar representações precisas e impactantes dos seus projetos.",
    image: "/lovable-uploads/baddf316-79fb-4399-b32a-022879d8897d.png"
  },
  {
    title: "Projetos que <span class='text-gradient'>Impressionam</span>",
    description: "Crie conexões emocionais com seus clientes através de imagens que comunicam a essência e o potencial de seus projetos arquitetônicos.",
    image: "/lovable-uploads/cbdf3c9b-f671-4f86-b74d-118cad389160.png"
  },
  {
    title: "Design <span class='text-gradient'>Contemporâneo</span>",
    description: "Valorizamos espaços ao ar livre integrados à arquitetura, criando ambientes que conectam natureza e design moderno.",
    image: "/lovable-uploads/a4814502-84b9-463a-b968-b41e9e5fed62.png"
  },
  {
    title: "Arquitetura <span class='text-gradient'>Minimalista</span>",
    description: "Linhas limpas e espaços bem planejados que capturam a essência do design moderno com toques sustentáveis.",
    image: "/lovable-uploads/28da9447-3398-48ff-862d-e39c27889603.png"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

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

  useEffect(() => {
    // Auto-rotate slides
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-10 to-white dark:from-gray-900 dark:to-black z-0"></div>

      {/* Image Background with color tint */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0 opacity-70 transition-transform duration-600"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Color overlay to enhance branding */}
      <div className="absolute inset-0 z-0 bg-architect-accent/10 dark:bg-architect-dark/30 mix-blend-multiply"></div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 bg-white/20 backdrop-blur-md text-foreground p-2 rounded-full hover:bg-white/30 transition-colors duration-300 hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 bg-white/20 backdrop-blur-md text-foreground p-2 rounded-full hover:bg-white/30 transition-colors duration-300 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/30 text-black/70 animate-fade-in">
            Design Arquitetônico 3D
          </div>

          {/* Title with background */}
          <h1
            className="mb-6 font-display animate-fade-in-left px-4 py-2 bg-black/20 backdrop-blur-sm rounded-md inline-block"
            style={{ animationDelay: '1200ms' }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />

          {/* Description with background */}
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-right text-balance bg-black/20 backdrop-blur-sm p-4 rounded-md" style={{ animationDelay: '400ms' }}>
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <Link to="/projects">
              <Button className="button-primary w-full sm:w-auto">Ver Projetos</Button>
            </Link>
            <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20meu%20projeto." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="button-secondary w-full sm:w-auto">Entre em Contato</Button>
            </a>
          </div>

          {/* Slide Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-architect-accent' : 'w-2 bg-gray-300 dark:bg-gray-700'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
