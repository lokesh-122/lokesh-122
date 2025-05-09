import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.header 
      initial={{ height: 80, backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{ 
        height: isScrolled ? 64 : 80,
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 border-b ${
        isScrolled ? 'border-white/10 shadow-lg shadow-black/10' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div
            initial={false}
            animate={{ 
              scale: isScrolled ? 0.9 : 1,
              y: isScrolled ? -1 : 0
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <RouterLink
              to="/"
              className="flex items-center space-x-3 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-[#FF004D] transition-colors duration-300"
              >
                <Code size={28} />
              </motion.div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-[#FF004D] group-hover:to-[#FF338B] transition-all duration-300">
                Lokesh Varma
              </span>
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <RouterLink
                key={item.name}
                to={item.to}
                className="relative py-2 text-gray-300 font-medium transition-colors duration-300 group"
              >
                <span className="relative z-10 group-hover:text-[#FF004D]">
                  {item.name}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF004D] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </RouterLink>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <RouterLink
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-gray-300 hover:text-[#FF004D] transition-colors duration-300"
                  >
                    {item.name}
                  </RouterLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;