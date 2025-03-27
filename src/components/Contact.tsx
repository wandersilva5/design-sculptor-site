import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'contato@estudio3d.com.br',
      link: 'mailto:contato@estudio3d.com.br'
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      details: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      details: 'Rio de Janeiro, Brasil',
      link: null
    },
    {
      icon: <Clock size={24} />,
      title: 'Horário',
      details: 'Seg-Sex: 9h às 18h',
      link: null
    }
  ];

  const socialMedia = [
    {
      icon: <Instagram size={28} />,
      name: 'Instagram',
      handle: '@deivisson.3d',
      url: 'https://instagram.com/deivisson.3d/'
    },
    {
      icon: <Linkedin size={28} />,
      name: 'LinkedIn',
      handle: 'Deivisson 3D',
      url: 'https://linkedin.com/company/deivisson.3d'
    },
    
    {
      icon: <Globe size={28} />,
      name: 'Website',
      handle: 'www.deivisson3d.com.br',
      url: 'https://www.deivisson3d.com.br'
    }
  ];

  return (
    <div id="contact" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-architect-accent/10 text-architect-accent">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Vamos conversar sobre seu projeto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em contato conosco para
            discutir como podemos ajudar no seu próximo projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-lg h-full">
              <h3 className="text-2xl font-medium mb-8">Informações de contato</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-architect-accent/15 p-4 rounded-full text-architect-accent mr-5 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-architect-accent transition-colors"
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-lg h-full">
              <h3 className="text-2xl font-medium mb-8">Conecte-se conosco</h3>
              <p className="text-muted-foreground mb-8">
                Siga-nos nas redes sociais para ficar por dentro dos nossos projetos mais recentes, 
                novidades e dicas de arquitetura e design.
              </p>
              
              <div className="space-y-6">
                {socialMedia.map((platform, index) => (
                  <motion.a 
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg hover:bg-architect-accent/5 transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-architect-accent/15 p-3 rounded-full text-architect-accent mr-4 shadow-sm">
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{platform.name}</h4>
                      <p className="text-muted-foreground">{platform.handle}</p>
                    </div>
                    <div className="ml-auto">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-muted-foreground"
                      >
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground">
                  Queremos ouvir de você! Entre em contato por qualquer um dos nossos canais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;