import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Scroll restoration component
const ScrollToTopOnMount: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Changed from 'smooth' to 'instant' for immediate scroll
    });
  }, [pathname]);

  return null;
};

// Main app content with scroll restoration
const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTopOnMount />
      <div className="fixed inset-0 grid-pattern -z-10" aria-hidden="true"></div>
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Skills />
                <Experience />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop isVisible={isScrolled} />
    </div>
  );
};

// Root app component with router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;