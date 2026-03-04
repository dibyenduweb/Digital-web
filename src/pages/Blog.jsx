import React from 'react';
import { motion } from 'framer-motion';
import { FaShare, FaComments, FaUser } from 'react-icons/fa';

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
  {
    id: 3,
    title: 'Mobile App',
    author: 'Daniel Martin',
    date: '30 Jan 2023',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.',
    shares: 5324,
    comments: 5,
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Blog</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Latest Blog & News
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                {blog.title}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaUser className="text-secondary mr-2" />
                <span className="text-gray-600 mr-4">{blog.author}</span>
                <span className="text-gray-400">{blog.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{blog.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <span className="flex items-center text-gray-500">
                    <FaShare className="mr-1 text-secondary" /> {blog.shares}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <FaComments className="mr-1 text-secondary" /> {blog.comments}
                  </span>
                </div>
                <button className="bg-secondary text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;