
// Define os tipos para projetos
export interface Project {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  featured?: boolean;
}

// Função para verificar se uma imagem existe
// Isso é apenas para typescript, em runtime o webpack/vite lida com isso
export const imageExists = (path: string): boolean => {
  return true; // Na compilação, todas as imagens são consideradas válidas
}

// Mockup de projetos com as novas imagens
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Residência Contemporânea',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/7e7d328d-0d9d-4312-ad9b-a53d0edb6d82.png',
    description: 'Projeto moderno com piscina e área de lazer integrada, perfeito para famílias.',
    featured: true
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
    imageSrc: '/lovable-uploads/3576643669367029317_22870815280.jpeg',
    description: 'Ambiente interno sofisticado com acabamentos premium e área de entretenimento integrada.'
  },
  {
    id: '7',
    title: 'Residência com Piscina',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/a4814502-84b9-463a-b968-b41e9e5fed62.png',
    description: 'Residência moderna com piscina e área de lazer integrada, perfeita para relaxar e receber amigos.'
  },
  {
    id: '8',
    title: 'Casa Minimalista',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/28da9447-3398-48ff-862d-e39c27889603.png',
    description: 'Design limpo e contemporâneo com terraço amplo e áreas funcionais bem integradas.'
  },
  // As novas imagens serão adicionadas aqui
  {
    id: '9',
    title: 'Vila Moderna',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/1.jpg',
    description: 'Projeto residencial com linhas contemporâneas e integração com a natureza.'
  },
  {
    id: '10',
    title: 'Mansão de Luxo',
    category: 'Residencial',
    imageSrc: '/lovable-uploads/2.jpg',
    description: 'Residência de alto padrão com acabamentos sofisticados e design exclusivo.'
  }
];

// Função para adicionar novos projetos de forma segura
export const addProject = (project: Omit<Project, 'id'>): Project => {
  const newId = (projectsData.length + 1).toString();
  const newProject = { ...project, id: newId };
  
  // Aqui você poderia adicionar verificações adicionais
  // como validar se a imagem existe, etc.
  
  return newProject;
};

// Lista de categorias disponíveis
export const getCategories = (): string[] => {
  const categories = new Set<string>();
  categories.add('Todos');
  
  projectsData.forEach(project => {
    categories.add(project.category);
  });
  
  return Array.from(categories);
};
