import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFileCode, FaExternalLinkAlt, FaUserSecret, FaEnvelopeOpen, FaLaptop } from 'react-icons/fa';

const services = [
  { icon: FaCode, title: 'Web Design', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
  { icon: FaFileCode, title: 'Web Development', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
  { icon: FaExternalLinkAlt, title: 'UI/UX Design', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
  { icon: FaUserSecret, title: 'Web Security', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
  { icon: FaEnvelopeOpen, title: 'Digital Marketing', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
  { icon: FaLaptop, title: 'Programming', description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.' },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Services</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Services Built Specifically For Your Business
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <service.icon className="text-6xl text-primary mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;