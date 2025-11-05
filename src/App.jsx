import React, { useEffect, useState } from 'react';
import { motion as Motion , AnimatePresence } from 'framer-motion';

import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialMarquee from './components/SocialMarquee';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import ServiceAccordion from './components/ServiceAccordion';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      {/* Preloader Animation */}
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Main Content Animation */}
      {!isLoading && (
        <Motion.div
          className="bg-[#f9f4f0]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut', // ✅ no error
          }}
        >
          <Navbar />
          <HeroSection />
          <SocialMarquee />
          <ProjectsSection />
          <SkillSection />
          <ServiceAccordion />
          <TestimonialSection />
          <CTASection />
          <ContactSection />
          <Footer />
        </Motion.div>
      )}
    </>
  );
}

export default App;
