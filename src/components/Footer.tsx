
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-secondary dark:bg-architect-dark pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4 block">
              Deivisson<span className="text-architect-accent">3D</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transformando visões arquitetônicas em renderizações 3D fotorrealistas para arquitetos, construtoras e incorporadoras.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-architect-accent transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-architect-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-architect-accent transition-colors"
                aria-label="Pinterest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M12 4v3"></path>
                  <path d="M12 17v3"></path>
                  <path d="M16 12h3"></path>
                  <path d="M5 12h3"></path>
                  <path d="M16.5 7.5l-2.1 2.1"></path>
                  <path d="M7.5 16.5l2.1 -2.1"></path>
                  <path d="M16.5 16.5l-2.1 -2.1"></path>
                  <path d="M7.5 7.5l2.1 2.1"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-architect-accent transition-colors"
                aria-label="Behance"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h6m0 0a3 3 0 1 0 0 6h6a3 3 0 1 0 0 -6a3 3 0 1 0 0 -6h-6" />
                  <path d="M15 12h6" />
                  <path d="M18 9v6" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Ilustração 3D
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Planta Humanizada
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Tour Virtual 3D
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  Animação 3D
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-architect-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-muted-foreground">
                  Rio de Janeiro /Brasil
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-architect-accent mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+5511999999999" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-architect-accent mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:contato@estudio3d.com.br" className="text-muted-foreground hover:text-architect-accent transition-colors">
                  contato@estudio3d.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Estúdio3D. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-architect-accent/10 p-3 rounded-full text-architect-accent hover:bg-architect-accent hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
