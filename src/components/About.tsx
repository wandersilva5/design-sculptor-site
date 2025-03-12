
import React from 'react';
import { motion } from 'framer-motion';
import { Image, Briefcase, Users, Trophy, Cpu } from 'lucide-react';
import Model3D from './Model3D';

const About = () => {
  const stats = [
    { 
      icon: <Image size={24} />, 
      value: '250+', 
      label: 'Projetos Concluídos' 
    },
    { 
      icon: <Briefcase size={24} />, 
      value: '15+', 
      label: 'Anos de Experiência' 
    },
    { 
      icon: <Users size={24} />, 
      value: '50+', 
      label: 'Clientes Satisfeitos' 
    },
    { 
      icon: <Trophy size={24} />, 
      value: '18', 
      label: 'Prêmios Conquistados' 
    }
  ];

  const services = [
    {
      title: 'Modelagem 3D',
      description: 'Criamos modelos tridimensionais detalhados a partir de plantas baixas ou esboços.',
      icon: <Cpu size={24} />
    },
    {
      title: 'Renderização Fotorrealista',
      description: 'Transformamos modelos 3D em imagens com qualidade fotográfica.',
      icon: <Image size={24} />
    },
    {
      title: 'Animações Walkthrough',
      description: 'Criamos passeios virtuais internos e externos para proporcionar uma experiência imersiva.',
      icon: <Users size={24} />
    },
    {
      title: 'Consultoria de Design',
      description: 'Oferecemos sugestões de materiais, texturas e elementos de design para aprimorar projetos.',
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-architect-accent/10 absolute -right-4 -top-4 w-64 h-64 rounded-full blur-3xl"></div>
              <div className="bg-architect-wood/10 absolute -left-4 -bottom-4 w-32 h-32 rounded-full blur-xl"></div>
              <div className="relative glass-panel overflow-hidden rounded-lg h-[450px]">
                <Model3D modelType="building" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
              Nossa Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">Transformamos conceitos em visualizações realistas</h2>
            <p className="text-muted-foreground mb-8">
              Somos especialistas em transformar ideias e projetos arquitetônicos em representações visuais impressionantes.
              Utilizando as mais avançadas ferramentas de modelagem 3D, criamos renderizações que permitem visualizar 
              cada detalhe antes mesmo do início da construção.
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center mb-2 text-architect-accent">
                    {stat.icon}
                    <span className="ml-2 text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
              Nossos Serviços
            </div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">O que oferecemos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fornecemos uma gama completa de serviços de visualização 3D para atender às necessidades de arquitetos, 
              construtoras e incorporadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg"
              >
                <div className="bg-architect-accent/10 p-3 rounded-full w-fit mb-4 text-architect-accent">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
