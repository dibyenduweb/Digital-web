import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">About Us</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          About Digi PrimeLab And It's Innovative IT Solutions & Digital Marketing
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
            alt="About Us"
            className="rounded-lg shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg">
            <span className="text-4xl font-bold">5+</span>
            <p className="text-sm">Years Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
          DigiPrime Lab empowers businesses with digital marketing, SEO services, website development, IT solutions, and accounting services. We drive SEO services, boost traffic via digital marketing, craft stunning website development, deliver IT solutions, and ensure precise accounting services. Startups thrive with our affordable SEO services, expert digital marketing, reliable IT solutions, seamless website development, and comprehensive accounting services for growth.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">15+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">200+</h3>
              <p className="text-gray-600">Projects Done</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">200+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
          
          <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;