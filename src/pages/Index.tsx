// In src/pages/Index.tsx, update the component to include alternating section backgrounds

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import About from '@/components/About';
import AboutOwner from '@/components/AboutOwner';
import WorkTimeline from '@/components/WorkTimeline';
import PartnersLogos from '@/components/PartnersLogos';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="relative">
      <Navbar />

      {/* Hero section - keep default background */}
      <Hero />

      {/* Projects section - accent background */}
      <section className="section-accent pattern-grid">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.7 }}
        >
          <ProjectsGrid limit={6} />
        </motion.div>
      </section>

      {/* About section - primary background (white/dark) */}
      <section className="section-primary">
        <About />
      </section>

      {/* NEW: About Owner section - secondary background */}
      <section className="section-secondary pattern-diagonal">
        <AboutOwner />
      </section>

      {/* Timeline section - wooden background */}
      <section className="section-wood pattern-diagonal">
        <WorkTimeline />
      </section>

      {/* Partners section - secondary background */}
      <section className="section-secondary">
        <PartnersLogos />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;