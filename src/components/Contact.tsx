
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default"
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      details: 'contato@estudio3d.com.br',
      link: 'mailto:contato@estudio3d.com.br'
    },
    {
      icon: <Phone size={20} />,
      title: 'Telefone',
      details: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Endereço',
      details: 'Av. Paulista, 1000 - São Paulo, SP',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={20} />,
      title: 'Horário',
      details: 'Seg-Sex: 9h às 18h',
      link: null
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-lg h-full">
              <h3 className="text-2xl font-medium mb-6">Envie uma mensagem</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Detalhes do seu projeto..."
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="button-primary w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="glass-panel p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-medium mb-6">Informações de contato</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-architect-accent/15 p-3 rounded-full text-architect-accent mr-4 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium">{item.title}</h4>
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

            <div className="glass-panel p-8 rounded-lg flex-grow">
              <h3 className="text-2xl font-medium mb-6">Siga-nos</h3>
              <p className="text-muted-foreground mb-6">
                Conecte-se conosco nas redes sociais para acompanhar nossos projetos mais recentes e novidades.
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-architect-accent/15 p-3 rounded-full text-architect-accent hover:bg-architect-accent hover:text-white transition-colors shadow-sm"
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
                  className="bg-architect-accent/10 p-3 rounded-full text-architect-accent hover:bg-architect-accent hover:text-white transition-colors"
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
                  className="bg-architect-accent/10 p-3 rounded-full text-architect-accent hover:bg-architect-accent hover:text-white transition-colors"
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
                  className="bg-architect-accent/10 p-3 rounded-full text-architect-accent hover:bg-architect-accent hover:text-white transition-colors"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
