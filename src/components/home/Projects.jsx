import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Web Design', category: 'Web Analysis', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
  { id: 2, title: 'Cyber Security', category: 'Cyber Security Core', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
  { id: 3, title: 'Mobile Info', category: 'Upcoming Phone', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Project</h5>
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our Recently Completed Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary">{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/projects" className="bg-primary text-white px-8 py-3 rounded-full inline-block hover:bg-opacity-90 transition-colors">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;