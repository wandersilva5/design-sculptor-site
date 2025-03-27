import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import About from '@/components/About';
import AboutOwner from '@/components/AboutOwner';
import WorkTimeline from '@/components/WorkTimeline';
import PartnersLogos from '@/components/PartnersLogos';
import Contact from '@/components/Contact';
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
      
      {/* Hero section - with ID for navigation */}
      <section id="home" className="section-primary">
        <Hero />
      </section>
      
      {/* Projects section - with ID for navigation */}
      <section id="projects" className="section-accent pattern-grid">
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
      
      {/* About section - with ID for navigation */}
      <section id="about" className="section-primary">
        <About />
      </section>
      
      {/* About Owner section - with ID for navigation */}
      <section id="owner" className="section-secondary pattern-diagonal">
        <AboutOwner />
      </section>
      
      {/* Already has ID="process" in the WorkTimeline component */}
      <section className="section-wood">
        <WorkTimeline />
      </section>
      
      {/* Partners section */}
      <section className="section-accent">
        <PartnersLogos />
      </section>

      {/* Contact section (already has id="contact" internally) */}
      <section className="section-primary">
        <Contact />
      </section>
      
      {/* Add ID for contact - assuming Footer contains contact info */}
      <section id="contact">
        <Footer />
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;