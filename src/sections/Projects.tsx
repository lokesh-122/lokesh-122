import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'TypeScript', label: 'TypeScript' }
  ];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.tags.includes(filter);
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium">
            My Work
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p className="mt-6 text-dark-600 dark:text-dark-200 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project solves a unique problem and 
            demonstrates different skills and technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-dark-500 dark:text-dark-300">
              No projects found matching this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;