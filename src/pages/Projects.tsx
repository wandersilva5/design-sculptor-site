
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
              Portfólio
            </div>
            <h1 className="text-4xl md:text-5xl font-display mb-6">Nossos Projetos</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção completa de projetos e renderizações 3D, criados para clientes 
              em diversos segmentos da construção civil e arquitetura.
            </p>
          </motion.div>
          
          <ProjectsGrid showFilters={true} />
          
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>3</PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="bg-architect-accent hover:bg-architect-accent/90">
                Solicite um orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
