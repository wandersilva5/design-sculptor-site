import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface AboutOwnerProps {
  className?: string;
}

const AboutOwner = ({ className }: AboutOwnerProps) => {
  return (
    <div className={`py-16 md:py-24 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
            Quem Sou
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Conheça o Fundador</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissional com mais de 15 anos de experiência em renderização 3D arquitetônica e design de interiores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-architect-accent/10 absolute -right-4 -top-4 w-32 h-32 rounded-full blur-xl"></div>
            <div className="bg-architect-wood/15 absolute -left-4 -bottom-4 w-48 h-48 rounded-full blur-2xl"></div>
            
            <div className="relative glass-panel overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/owner-portrait.jpg" 
                alt="Carlos Mendes - Fundador do Estúdio3D" 
                className="w-full h-auto rounded-lg object-cover"
                onError={(e) => {
                  // Fallback image if the owner image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "./eu.jpg";
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display mb-6">Carlos Mendes</h3>
            <h4 className="text-lg text-architect-accent mb-4">Arquiteto & Especialista em Visualização 3D</h4>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
              Olá ! Me chamo Deivisson Gonçalves, atuo no mercado de Archviz (visualização para arquitetura) há 5 anos. Sou um especialista em soluções visuais de alta qualidade para projetos de arquitetura.
              </p>
              <p>
              Já trabalhei em alguns Studios como artista generalista, que me trouxe experiências inovadoras. Hoje Atuo como artista Independente, potencializando projetos incríveis, com imagens realistas através da renderização 3D.
              </p>
              <p>
              Meu objetivo é ajudar os clientes a atingir seus objetivos, seja na venda de imóveis ou na apresentação de projetos arquitetônicos. Por meio do meu trabalho criativo e profissional.
              </p>
            </div>
            
            <div className="glass-panel p-6 relative">
              <Quote className="absolute text-architect-accent/20 h-12 w-12 -top-2 -left-2" />
              <blockquote className="pl-6 italic">
                "Acredito que cada projeto conta uma história única. Nossa missão é dar vida a essas histórias através de imagens que inspiram e comunicam a verdadeira essência de cada espaço."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;