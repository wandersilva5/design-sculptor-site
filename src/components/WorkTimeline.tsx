import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, Image, CheckCircle, Send, Clock } from 'lucide-react';

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  subdescription?: string;
  imageSrc: string;
}

const WorkTimeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      icon: <FileUp size={24} />,
      title: "Recebimento dos Arquivos",
      description: "Entrega do projeto arquitetônico completo ou modelagem 3D em meio digital (arquivos na extensão .dwg, skp, rvt, max) etc.",
      imageSrc: "/lovable-uploads/7e7d328d-0d9d-4312-ad9b-a53d0edb6d82.png"
    },
    {
      icon: <Image size={24} />,
      title: "Briefing do Cliente",
      description: "É feito um briefing via whatsapp ou ligação com o cliente para definir especificações de cores e materiais de revestimento, decoração e iluminação para o desenvolvimento das ilustrações 3D.",
      imageSrc: "/lovable-uploads/baddf316-79fb-4399-b32a-022879d8897d.png"
    },
    {
      icon: <Image size={24} />,
      title: "Criação",
      description: "Após o briefing iniciamos os serviços com: Direção de arte, concepção de projeto de interiores e decoração (caso necessário), composição, estudo de câmeras e iluminação1, para fazer uma primeira validação.",
      subdescription: "OBS.: Modelagem de objetos de decoração e mobíliário específicos não fazem parte deste orçamento e deverão ser negociados a parte.",
      imageSrc: "/lovable-uploads/cbdf3c9b-f671-4f86-b74d-118cad389160.png"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Validação",
      description: "Para garantir o entendimento correto do projeto e diminuir retrabalho, o processo de validação com o cliente passa por algumas etapas que são as etapas: OVERRIDE - R00 - R01 - R02.",
      subdescription: "OBS.: Modelagem de objetos de decoração e mobíliário específicos não fazem parte deste orçamento e deverão ser negociados a parte.",
      imageSrc: "/lovable-uploads/ebe8d978-ddde-471b-af95-65135ce02f27.png"
    },
    {
      icon: <Send size={24} />,
      title: "Entrega HR",
      description: "A versão HR é entregue após todas as necessidades do cliente serem atendidas, e são enviadas via Whatsapp ou E-Mail.",
      imageSrc: "/lovable-uploads/334e44c1-588a-4df3-ad57-02c49ee99bfb.png"
    }
  ];

  return (
    <div id="process" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
            Nosso Processo
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Como Trabalho</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Gosto de usar a metodologia estruturada, pois garante resultados excepcionais e uma experiência tranquila do início ao fim do projeto.
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
                    {item.subdescription && (
                      <div className="text-muted-foreground text-xs mt-2">
                        {item.subdescription}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline icon */}
                <div className="flex flex-col items-center">
                  <div className="relative bg-architect-accent text-white p-2 rounded-full z-10">
                    <Clock size={24} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-architect-accent">
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
                    {item.subdescription && (
                      <div className="text-muted-foreground text-xs mt-2">
                        {item.subdescription}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
