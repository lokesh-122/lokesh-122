import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import { useGitHubProjects } from '../data/projects';
import { Loader2 } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects, loading, error } = useGitHubProjects();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <AnimatedText text="FEATURED PROJECTS" />
          <p className="mt-6 text-dark-600 dark:text-dark-200 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project solves a unique problem and 
            demonstrates different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;