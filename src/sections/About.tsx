import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Blocks } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Next.js', 'Tailwind CSS', 'GraphQL', 'Firebase',
    'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3',
    'Git', 'AWS', 'Docker', 'Redux'
  ];

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building responsive, performant, and accessible websites using modern technologies.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with a focus on user experience.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side applications with security in mind.'
    },
    {
      icon: <Blocks size={24} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end implementation of web applications from concept to deployment.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary-600 dark:text-primary-400 font-medium">
            About Me
          </motion.span>
          <motion.h2 variants={itemVariants} className="mt-2 text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            Who I Am & What I Do
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-4 h-1 w-16 bg-primary-600 dark:bg-primary-400 mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-200">
              <p>
                I'm a full-stack developer with over 5 years of experience building web applications. 
                My journey began with a passion for problem-solving and a curiosity about how things work.
              </p>
              <p>
                I specialize in creating responsive, user-friendly interfaces and robust backend systems. 
                My approach combines technical expertise with a keen eye for design, ensuring that the 
                products I build are not only functional but also aesthetically pleasing.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and tech talks.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white dark:bg-dark-700 px-3 py-1.5 rounded-full text-sm font-medium text-dark-700 dark:text-dark-200 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Services I Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-300 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;