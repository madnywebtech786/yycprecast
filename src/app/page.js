'use client';
import React, { useState, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const TopBar = lazy(() => import('./sections//TopBar'));
const Navigation = lazy(() => import('./sections//Navigation'));
const HeroSection = lazy(() => import('./sections//HeroSection'));
const AboutSection = lazy(() => import('./sections//AboutSection'));
const ServicesSection = lazy(() => import('./sections//ServicesSection'));
const WhyChooseUsSection = lazy(() => import('./sections//WhyChooseUsSection'));
const ServiceAreasSection = lazy(() =>
  import('./sections//ServiceAreasSection')
);
const ProcessSection = lazy(() => import('./sections//ProcessSection'));
const TestimonialsSection = lazy(() =>
  import('./sections//TestimonialsSection')
);
const ProjectsSection = lazy(() => import('./sections//ProjectsSection'));
const ContactSection = lazy(() => import('./sections//ContactSection'));
const Footer = lazy(() => import('./sections//Footer'));

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for sticky navigation
  const [isSticky, setIsSticky] = useState(false);

  // State for file uploads
  const [files, setFiles] = useState([]);

  // Sticky navigation effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling for anchor links
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div>
      <div className='font-inter bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden'>
        {/* Top Bar Component */}
        <TopBar />

        {/* Navigation Component */}
        <Navigation
          isSticky={isSticky}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          handleScroll={handleScroll}
        />

        {/* Hero Section */}
        <HeroSection
          handleScroll={handleScroll}
          files={files}
          setFiles={setFiles}
        />

        {/* About Section */}
        <motion.section
          id='about'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='relative overflow-hidden'
        >
          <AboutSection handleScroll={handleScroll} />
        </motion.section>

        {/* Services Section */}
        <motion.section
          id='services'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='bg-gradient-3 relative overflow-hidden'
        >
          <ServicesSection />
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className=''
        >
          <WhyChooseUsSection />
        </motion.section>

        {/* Service Areas Section */}
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className=''
        >
          <ServiceAreasSection />
        </motion.section>

        {/* Process Section */}
        <motion.section
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className=''
        >
          <ProcessSection />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id='testimonials'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='relative overflow-hidden'
        >
          <TestimonialsSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id='projects'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='relative overflow-hidden'
        >
          <ProjectsSection handleScroll={handleScroll} />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id='contact'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='relative overflow-hidden'
        >
          <ContactSection files={files} setFiles={setFiles} />
        </motion.section>

        {/* Footer Component */}
        <Footer handleScroll={handleScroll} />
      </div>
    </div>
  );
}
