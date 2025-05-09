import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/lokesh-122', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/lokeshvarma-j/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/LokeshvarmaJ', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:lokeshvarmaj@gmail.com', label: 'Email' },
  ];

  const additionalLinks = [
    { name: 'Medium', url: 'https://medium.com/@lokeshvarmaj' },
    { name: 'Google Dev', url: 'https://g.dev/lokeshvarmaj' },
    { name: 'Bento', url: 'https://bento.me/lokeshvarma' }
  ];

  const handleResumeDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/Lokesh_Varma_Resume.pdf'; // Make sure this matches your PDF filename exactly
    link.setAttribute('download', ''); // This will force download instead of opening in new tab
    link.setAttribute('target', '_blank'); // This ensures it works across different browsers
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-black/30 py-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-primary-400 transition-colors duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Download Resume"
            >
              <Download size={20} className="mr-2" />
              <span className="text-sm font-medium">Resume</span>
            </motion.button>
            
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Lokesh Varma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;