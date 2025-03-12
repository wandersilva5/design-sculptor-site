
import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, Image, CheckCircle, Send, Clock } from 'lucide-react';

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

const WorkTimeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      icon: <FileUp size={24} />,
      title: "Recebimento do Arquivo",
      description: "Recebemos seu modelo SketchUp ou arquivo CAD para iniciar o processo de visualização 3D.",
      imageSrc: "/lovable-uploads/abfd0419-38f5-4637-aa3a-9039214fa0a2.png"
    },
    {
      icon: <Image size={24} />,
      title: "Primeira Prova",
      description: "Desenvolvemos um modelo 3D inicial baseado nos seus arquivos e compartilhamos uma prévia para avaliação.",
      imageSrc: "/lovable-uploads/d9116229-342f-485b-865b-5be76e1e37e6.png"
    },
    {
      icon: <Image size={24} />,
      title: "Renderização de Imagens",
      description: "Após aprovação da modelagem, criamos renderizações de alta qualidade com materiais, texturas e iluminação.",
      imageSrc: "/lovable-uploads/07d83abd-76be-486c-95b3-9ed205dee2c8.png"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Validação Final",
      description: "Refinamos as imagens com base no seu feedback, ajustando detalhes até atingir o resultado ideal.",
      imageSrc: "/lovable-uploads/abfd0419-38f5-4637-aa3a-9039214fa0a2.png"
    },
    {
      icon: <Send size={24} />,
      title: "Entrega",
      description: "Fornecemos todos os arquivos finais em alta resolução, prontos para apresentação ou publicação.",
      imageSrc: "/lovable-uploads/d9116229-342f-485b-865b-5be76e1e37e6.png"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
            Nosso Processo
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Como Trabalhamos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia estruturada garante resultados excepcionais e uma experiência tranquila do início ao fim do projeto.
          </p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-architect-accent/30"></div>

          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Timeline content for large screens */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:w-full' : 'md:hidden'}`}>
                  <div className="glass-panel p-6 rounded-lg">
                    <div className="bg-architect-accent/10 p-3 rounded-full w-fit mb-4 text-architect-accent">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Timeline icon */}
                <div className="flex flex-col items-center">
                  <div className="relative bg-architect-accent text-white p-2 rounded-full z-10">
                    <Clock size={24} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 w-0.5 bg-architect-accent/30 my-4 md:hidden"></div>
                </div>

                {/* Timeline image */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:hidden' : 'md:block'}`}>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Timeline content for mobile and opposite side on large screens */}
                <div className={`md:w-full ${index % 2 === 0 ? 'md:hidden' : 'md:block'}`}>
                  <div className="glass-panel p-6 rounded-lg">
                    <div className="bg-architect-accent/10 p-3 rounded-full w-fit mb-4 text-architect-accent">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
