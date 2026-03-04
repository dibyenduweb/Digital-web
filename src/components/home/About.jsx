import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
            alt="About Us"
            className="rounded-lg shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg">
            <span className="text-4xl font-bold">25+</span>
            <p className="text-sm">Years Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h5 className="text-secondary font-semibold mb-2">About Us</h5>
          <h2 className="text-4xl font-bold text-primary mb-4">
            About Digi PrimeLab Agency And It's Innovative IT Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. 
            Pellentesque aliquam dolor eget urna ultricies tincidunt.
          </p>
          <Link
            to="/about"
            className="bg-secondary text-white px-8 py-3 rounded-full inline-block hover:bg-opacity-90 transition-colors"
          >
            More Details
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;