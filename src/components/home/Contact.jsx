import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Get In Touch</h5>
        <h2 className="text-4xl font-bold text-primary mb-4">
          Contact for any query
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: FaMapMarkerAlt, title: 'Address', info: 'Kolkata' },
          { icon: FaPhone, title: 'Call Us', info: '+91 93396 43434' },
          { icon: FaEnvelope, title: 'Email Us', info: 'digiprimelab@gmail.com' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4"
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <item.icon className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="text-primary font-bold">{item.title}</h4>
              <p className="text-gray-600">{item.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;