import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const messages = [
    "Designing the Future of AI-Powered Experiences",
    "Bridging Minds & Machines with Purpose",
    "Innovating Human-Centric Intelligence",
    "From Algorithms to Impact — One Line at a Time",
    "Transforming Vision into Ethical Intelligence"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const message = messages[currentMessageIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < message.length) {
          setCurrentText(message.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        } else {
          setCurrentText(message.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentMessageIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block bg-primary-100/10 text-primary-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            AI Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight mb-4">
            Hi, I'm <span className="text-primary-400">Lokesh Varma Jampana</span>
          </h1>
          <div className="h-[60px] flex items-center justify-center">
            <p className="text-lg text-gray-400 max-w-2xl">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;