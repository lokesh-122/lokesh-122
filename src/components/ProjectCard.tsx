import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-mono font-bold text-gray-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm font-mono">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary-500/10 text-primary-400 text-xs px-2 py-1 rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-mono text-sm transition-colors duration-300"
          >
            View Project
            <ExternalLink size={16} className="ml-1" />
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            aria-label="View source code on GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;