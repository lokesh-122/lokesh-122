import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrambledText, setScrambledText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    if (isVisible) {
      let iterations = 0;
      const maxIterations = 10;
      const interval = setInterval(() => {
        setScrambledText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iterations += 1;

        if (iterations >= text.length) {
          clearInterval(interval);
          setScrambledText(text);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, text]);

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className={`inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-mono tracking-tight mb-4 ${className}`}
      style={{
        textShadow: '2px 2px 0px rgba(96, 165, 250, 0.2)',
        letterSpacing: '0.1em'
      }}
    >
      {scrambledText}
    </motion.h2>
  );
};

export default AnimatedText;