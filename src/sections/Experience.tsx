import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Briefcase, Calendar, ArrowRight, Send, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { useGitHubProjects } from '../data/projects';

const Experience: React.FC = () => {
  const { projects } = useGitHubProjects();
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const experiences = [
    {
      title: 'AI/ML Development Lead',
      company: 'Google Developer Student Club',
      period: '2023 - 2024',
      description: 'Leading AI/ML initiatives and mentoring students in cutting-edge technology projects.',
      achievements: [
        'Led AI/ML workshops and mentored 100+ students in project building',
        'Organized hands-on sessions on model development and deployment',
        'Boosted AI learning engagement in the student community by 30%'
      ]
    },
    {
      title: 'AI Intern (Virtual)',
      company: 'BCG X',
      period: '2023',
      description: 'Contributed to developing AI solutions for business optimization and strategic decision-making.',
      achievements: [
        'Built generative AI models for optimizing business operations',
        'Conducted pattern recognition on client datasets for strategic initiatives',
        'Implemented data-driven decision-making frameworks'
      ]
    },
    {
      title: 'Data Analyst Intern (Virtual)',
      company: 'PwC',
      period: '2023',
      description: 'Worked on digital transformation projects focusing on data analytics and process optimization.',
      achievements: [
        'Contributed to digital transformation projects',
        'Embedded intelligence into business processes',
        'Suggested data-backed improvements for efficiency'
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      details: 'India'
    },
    {
      icon: <Mail size={20} />,
      details: 'lokeshvarmaj@gmail.com'
    }
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedText text="WORK HISTORY" />
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-primary-600/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600"></div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 ml-8 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-300">{exp.title}</h3>
                  <span className="text-primary-400">{exp.company}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-400 group">
                      <Briefcase size={16} className="mr-2 mt-1 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                      <span className="group-hover:text-gray-300 transition-colors duration-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedText text="FEATURED WORK" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative AI solutions and impactful technical projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedText text="GET IN TOUCH" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex flex-col space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-400 group">
                      <span className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                        {info.icon}
                      </span>
                      <span className="group-hover:text-gray-300 transition-colors duration-300">
                        {info.details}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </span>
                </Link>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  I'll get back to you as soon as possible
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;