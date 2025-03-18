
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projectsData, getCategories, Project } from '@/utils/projectsData';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectsGridProps {
  limit?: number;
  showFilters?: boolean;
}

const ProjectsGrid = ({ limit, showFilters = true }: ProjectsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    try {
      // Carrega as categorias
      const availableCategories = getCategories();
      setCategories(availableCategories);
      
      // Filtra os projetos pela categoria selecionada
      const filteredProjects = selectedCategory === 'Todos'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);
      
      // Limita o número de projetos se necessário
      const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
      setProjects(displayedProjects);
      setError(null);
    } catch (err) {
      console.error('Erro ao carregar projetos:', err);
      setError('Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.');
    }
  }, [selectedCategory, limit]);

  const openModal = (imageSrc: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="projects" className="container mx-auto px-4 md:px-6 py-16">
      {showFilters && (
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-architect-accent text-white'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="group h-full overflow-hidden card-hover">
              <Link to={`/project/${project.id}`} className="block h-full" onClick={(e) => openModal(project.imageSrc, e)}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback para imagem padrão caso haja erro
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center text-architect-accent font-medium text-sm">
                    <span>Ver detalhes</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {limit && projects.length >= limit && (
        <div className="mt-12 text-center">
          <Link to="/projects">
            <button className="button-secondary">
              Ver todos os projetos
            </button>
          </Link>
        </div>
      )}

      {/* Modal de imagem em tela cheia */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button 
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Imagem do projeto em tela cheia"
              className="max-w-full max-h-[90vh] object-contain cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsGrid;
