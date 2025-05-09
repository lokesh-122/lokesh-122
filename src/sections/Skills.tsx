import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Code, Brain, Database, Terminal, Cloud, LineChart, GitBranch, Cpu, ClipboardList, Briefcase } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: <Code size={20} /> },
    { name: 'R', icon: <Terminal size={20} /> },
    { name: 'Java', icon: <Code size={20} /> },
    { name: 'JavaScript', icon: <Code size={20} /> },
    { name: 'SQL', icon: <Database size={20} /> },
    { name: 'MySQL', icon: <Database size={20} /> },
    { name: 'MongoDB', icon: <Database size={20} /> },
    { name: 'Cloud Databases', icon: <Cloud size={20} /> },
    { name: 'TensorFlow', icon: <Brain size={20} /> },
    { name: 'PyTorch', icon: <Brain size={20} /> },
    { name: 'Keras', icon: <Brain size={20} /> },
    { name: 'scikit-learn', icon: <Brain size={20} /> },
    { name: 'NumPy', icon: <LineChart size={20} /> },
    { name: 'Pandas', icon: <LineChart size={20} /> },
    { name: 'OpenCV', icon: <Brain size={20} /> },
    { name: 'HuggingFace', icon: <Brain size={20} /> },
    { name: 'Transformers', icon: <Cpu size={20} /> },
    { name: 'LLMs', icon: <Brain size={20} /> },
    { name: 'NLP', icon: <Brain size={20} /> },
    { name: 'CNNs', icon: <Brain size={20} /> },
    { name: 'RNNs', icon: <Brain size={20} /> },
    { name: 'FastAPI', icon: <Code size={20} /> },
    { name: 'VS Code', icon: <Code size={20} /> },
    { name: 'Git', icon: <GitBranch size={20} /> },
    { name: 'Jupyter', icon: <Terminal size={20} /> },
    { name: 'Google Cloud', icon: <Cloud size={20} /> },
    { name: 'AWS', icon: <Cloud size={20} /> },
    { name: 'Supabase', icon: <Database size={20} /> },
    { name: 'Project Management', icon: <ClipboardList size={20} /> },
    { name: 'Product Management', icon: <Briefcase size={20} /> }
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
          <AnimatedText text="SKILLS" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Specialized in AI/ML technologies with extensive experience in full-stack development
            and data science
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group flex items-center gap-3"
            >
              <span className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                {skill.icon}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;