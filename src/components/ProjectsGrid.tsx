import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Define os tipos para projetos
interface Project {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

// Mockup de projetos com as novas imagens
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Residência Contemporânea',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/7e7d328d-0d9d-4312-ad9b-a53d0edb6d82.png',
    description: 'Projeto moderno com piscina e área de lazer integrada, perfeito para famílias.'
  },
  {
    id: '2',
    title: 'Casa de Praia',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/baddf316-79fb-4399-b32a-022879d8897d.png',
    description: 'Design minimalista com garagem coberta e ampla área frontal.'
  },
  {
    id: '3',
    title: 'Sobrado Urbano',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/cbdf3c9b-f671-4f86-b74d-118cad389160.png',
    description: 'Sobrado moderno com acabamentos premium e design funcional para ambientes urbanos.'
  },
  {
    id: '4',
    title: 'Edifício Comercial',
    category: 'Comercial',
    imageSrc: '/lovable-uploads/ebe8d978-ddde-471b-af95-65135ce02f27.png',
    description: 'Espaço comercial com design inovador e sustentável para empresas modernas.'
  },
  {
    id: '5',
    title: 'Condomínio Horizontal',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/334e44c1-588a-4df3-ad57-02c49ee99bfb.png',
    description: 'Conjunto de casas de alto padrão com infraestrutura completa de lazer.'
  },
  {
    id: '6',
    title: 'Área de Lazer Exclusiva',
    category: 'Conceitual',
    imageSrc: '/lovable-uploads/20f0e943-ced5-45eb-8ff8-24b0673c4529.png',
    description: 'Ambiente interno sofisticado com acabamentos premium e área de entretenimento integrada.'
  }
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Conceitual'];

interface ProjectsGridProps {
  limit?: number;
  showFilters?: boolean;
}

const ProjectsGrid = ({ limit, showFilters = true }: ProjectsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const filteredProjects = selectedCategory === 'Todos'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);
  
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

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

  return (
    <div id="projects" className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display mb-4">Nossos Projetos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossa seleção de projetos arquitetônicos em 3D, desde residências modernas até edifícios comerciais inovadores.
        </p>
      </div>
      
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
        {displayedProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Link to={`/project/${project.id}`} className="block h-full" onClick={(e) => openModal(project.imageSrc, e)}>
              <div className="group h-full rounded-lg overflow-hidden bg-card card-hover flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                  <div className="mt-4 flex items-center text-architect-accent font-medium text-sm">
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
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {limit && displayedProjects.length >= limit && (
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
