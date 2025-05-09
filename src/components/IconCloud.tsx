import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Terminal, Cloud, LineChart, GitBranch, Cpu, Settings, Globe, Lock, Zap } from 'lucide-react';

interface Icon {
  icon: JSX.Element;
  color: string;
  scale?: number;
  duration?: number;
}

const IconCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const icons: Icon[] = [
    { icon: <Code size={28} />, color: '#60A5FA', scale: 1.3, duration: 3 },
    { icon: <Brain size={24} />, color: '#34D399', duration: 3.2 },
    { icon: <Database size={22} />, color: '#F472B6', scale: 0.9, duration: 3.5 },
    { icon: <Terminal size={26} />, color: '#A78BFA', duration: 3.3 },
    { icon: <Cloud size={24} />, color: '#60A5FA', scale: 1.1, duration: 3.1 },
    { icon: <LineChart size={22} />, color: '#F59E0B', duration: 3.4 },
    { icon: <GitBranch size={24} />, color: '#EC4899', scale: 0.95, duration: 3.2 },
    { icon: <Cpu size={28} />, color: '#8B5CF6', scale: 1.2, duration: 3 },
    { icon: <Settings size={24} />, color: '#6EE7B7', duration: 3.3 },
    { icon: <Globe size={26} />, color: '#93C5FD', scale: 1.1, duration: 3.1 },
    { icon: <Lock size={22} />, color: '#FCD34D', scale: 0.9, duration: 3.4 },
    { icon: <Zap size={24} />, color: '#F472B6', duration: 3.2 }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iconElements = container.children;
    const radius = 120; // Increased radius for better spacing
    const totalIcons = iconElements.length;

    Array.from(iconElements).forEach((icon, index) => {
      const angle = (index / totalIcons) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      (icon as HTMLElement).style.setProperty('--x', `${x}px`);
      (icon as HTMLElement).style.setProperty('--y', `${y}px`);
      (icon as HTMLElement).style.setProperty('--delay', `${index * 0.15}s`);
    });
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
      />
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            animate={{
              x: ['var(--x)', 'calc(var(--x) * -1)'],
              y: ['var(--y)', 'calc(var(--y) * -1)'],
              scale: [item.scale || 1, (item.scale || 1) * 1.2, item.scale || 1],
              opacity: [0.5, 1, 0.5],
              filter: ['blur(0px)', 'blur(1px)', 'blur(0px)']
            }}
            transition={{
              duration: item.duration || 3,
              delay: `var(--delay)`,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            whileHover={{
              scale: (item.scale || 1) * 1.5,
              color: '#fff',
              filter: 'blur(0px)',
              transition: { duration: 0.2 }
            }}
            style={{ color: item.color }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconCloud;