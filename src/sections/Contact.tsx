import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    // For demo purposes, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'San Francisco, CA'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'hello@example.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-dark-900 dark:text-white">
            Let's Work Together
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
          <p className="mt-6 text-dark-600 dark:text-dark-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Fill out the form below, and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-white dark:bg-dark-700 rounded-xl shadow-sm p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary-600 dark:text-primary-400 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-dark-500 dark:text-dark-300">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-gray-200 dark:border-dark-600 pt-6">
              <h4 className="font-medium text-dark-800 dark:text-white mb-4">
                Business Hours
              </h4>
              <p className="text-dark-500 dark:text-dark-300">
                Monday - Friday: 9am - 6pm<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white dark:bg-dark-700 rounded-xl shadow-sm p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {formStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                formStatus.success 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                  : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-dark-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-dark-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-dark-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 text-dark-800 dark:text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;