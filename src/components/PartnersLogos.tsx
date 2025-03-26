
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Building2, Briefcase, Package2, ShoppingBag } from 'lucide-react';

const PartnersLogos = () => {
  const partners = [
    { id: 1, name: 'Construtora ABC', icon: <Building size={32} /> },
    { id: 2, name: 'Incorporadora XYZ', icon: <Building2 size={32} /> },
    { id: 3, name: 'Grupo Imobiliário', icon: <Briefcase size={32} /> },
    { id: 4, name: 'Design Interiores', icon: <Package2 size={32} /> },
    { id: 5, name: 'Mobiliária Premium', icon: <ShoppingBag size={32} /> },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display mb-4">Empresas Parceiras</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Orgulhosamente entregamos projetos para estas empresas de referência no mercado.
          </p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-md dark:bg-black/60 text-architect-accent mb-3">
                {partner.icon}
              </div>
              <p className="text-sm font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersLogos;
