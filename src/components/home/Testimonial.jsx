import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    profession: 'Profession',
    image: 'https://images.unsplash.com/photo-1494790108777-466fd103c8ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    text: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.',
  },
  {
    id: 2,
    name: 'Client Name',
    profession: 'Profession',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    text: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna.',
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Testimonial</h5>
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our Client Saying!
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-secondary text-sm">{testimonial.profession}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;