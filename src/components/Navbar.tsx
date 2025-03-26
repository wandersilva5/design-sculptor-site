
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-2 glass-panel shadow-md' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-display font-semibold text-foreground z-10"
          >
            Deivisson<span className="text-architect-accent">3D</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={cn('navbar-item', isActive('/') && 'text-architect-accent')}>
              Início
            </Link>
            <Link to="/projects" className={cn('navbar-item', isActive('/projects') && 'text-architect-accent')}>
              Projetos
            </Link>
            <Link to="/about" className={cn('navbar-item', isActive('/about') && 'text-architect-accent')}>
              Sobre
            </Link>
            <Link to="/contact" className={cn('navbar-item', isActive('/contact') && 'text-architect-accent')}>
              Contato
            </Link>
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
        <Link 
          to="/" 
          className="flex items-center text-xl font-medium" 
          onClick={toggleMenu}
        >
          <Home className="mr-2" size={20} />
          Início
        </Link>
        <Link 
          to="/projects" 
          className="flex items-center text-xl font-medium" 
          onClick={toggleMenu}
        >
          <Grid className="mr-2" size={20} />
          Projetos
        </Link>
        <Link 
          to="/about" 
          className="flex items-center text-xl font-medium" 
          onClick={toggleMenu}
        >
          <User className="mr-2" size={20} />
          Sobre
        </Link>
        <Link 
          to="/contact" 
          className="flex items-center text-xl font-medium" 
          onClick={toggleMenu}
        >
          <Mail className="mr-2" size={20} />
          Contato
        </Link>
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
