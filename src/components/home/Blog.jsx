import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaShare, FaComments } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: 'Web Design',
    author: 'Daniel Martin',
    date: '24 March 2023',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.',
    shares: 5324,
    comments: 5,
  },
  {
    id: 2,
    title: 'Development',
    author: 'Daniel Martin',
    date: '23 April 2023',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.',
    shares: 5324,
    comments: 5,
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Blog</h5>
        <h2 className="text-4xl font-bold text-primary mb-4">
          Latest Blog & News
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaUser className="text-secondary mr-2" />
                <span className="text-gray-600 mr-4">{blog.author}</span>
                <span className="text-gray-400">{blog.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <span className="flex items-center text-gray-500">
                    <FaShare className="mr-1 text-secondary" /> {blog.shares}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <FaComments className="mr-1 text-secondary" /> {blog.comments}
                  </span>
                </div>
                <Link to="/blog" className="text-secondary font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;