import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Home, Grid, User, Mail, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // If we're on another page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
        return;
      }
      
      // Close the mobile menu if it's open
      if (isOpen) setIsOpen(false);
      
      const yOffset = -80; // Account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-2 glass-panel shadow-md' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo and Brand Name */}
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-full bg-architect-accent overflow-hidden flex items-center justify-center">
                <img 
                  src="/LOGO_BRANCO.png" 
                  alt="Estúdio3D Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xl md:text-2xl font-display font-semibold text-foreground z-10">
                Estúdio<span className="text-architect-accent">3D</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="navbar-item" onClick={(e) => scrollToSection('home', e)}>
              Início
            </a>
            <a href="#projects" className="navbar-item" onClick={(e) => scrollToSection('projects', e)}>
              Projetos
            </a>
            <a href="#about" className="navbar-item" onClick={(e) => scrollToSection('about', e)}>
              Sobre
            </a>
            <a href="#owner" className="navbar-item" onClick={(e) => scrollToSection('owner', e)}>
              Quem Sou
            </a>
            <a href="#process" className="navbar-item" onClick={(e) => scrollToSection('process', e)}>
              Processo
            </a>
            <a href="#contact" className="navbar-item" onClick={(e) => scrollToSection('contact', e)}>
              Contato
            </a>
            <button 
              onClick={toggleDarkMode} 
              className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 focus:outline-none z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 glass-panel flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a 
          href="#home" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('home', e)}
        >
          <Home className="mr-2" size={20} />
          Início
        </a>
        <a 
          href="#projects" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('projects', e)}
        >
          <Grid className="mr-2" size={20} />
          Projetos
        </a>
        <a 
          href="#about" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('about', e)}
        >
          <User className="mr-2" size={20} />
          Sobre
        </a>
        <a 
          href="#owner" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('owner', e)}
        >
          <User className="mr-2" size={20} />
          Quem Sou
        </a>
        <a 
          href="#process" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('process', e)}
        >
          <Grid className="mr-2" size={20} />
          Processo
        </a>
        <a 
          href="#contact" 
          className="flex items-center text-xl font-medium" 
          onClick={(e) => scrollToSection('contact', e)}
        >
          <Mail className="mr-2" size={20} />
          Contato
        </a>
        <button 
          onClick={toggleDarkMode} 
          className="flex items-center text-xl font-medium"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="mr-2" size={20} /> : <Moon className="mr-2" size={20} />}
          {isDark ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;