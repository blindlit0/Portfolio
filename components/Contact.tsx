"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/frederick-napey-85426a287',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/blindlit0',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Phone',
      icon: <FaPhone className="w-6 h-6" />,
      value: '+233547068250',
      color: 'hover:text-green-500'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      value: 'napeyfrederick@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out through any of these channels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-black-200 rounded-lg hover:bg-black-300 transition-colors duration-300"
              >
                <div className={`text-white ${link.color} transition-colors duration-300`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{link.name}</h3>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name === 'LinkedIn' ? 'View Profile' : 'View Profile'}
                    </a>
                  ) : (
                    <p className="text-gray-400">{link.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 