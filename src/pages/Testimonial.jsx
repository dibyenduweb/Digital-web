import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    profession: 'Restaurant Owner',
    image: 'https://browsemycity.com/oc-content/plugins/profile_picture/images/profile33364.jpg?1586342281',
    text: 'Digiprimelab team amar restaurant er jonno website ebong Google marketing koreche. Within 2 months amar online orders onek bere geche. Highly recommended!',
  },
  {
    id: 2,
    name: 'Priya Sen',
    profession: 'Boutique Owner',
    image: 'https://wctour-images.worldchess.com/media/__sized__/social_avatars/user-798214-ea32a0cc1d04f10d0ef485f88c83f506.jpg',
    text: 'Ami amar boutique business er jonno Facebook & Instagram ads run korchi Digiprimelab er sathe. Result khub bhalo, amar brand reach onek barche.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    profession: 'E-commerce Entrepreneur',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=687&q=80',
    text: 'Working with Digiprimelab was a great experience. They improved my store’s SEO and conversions significantly within a short time.',
  },
  {
    id: 4,
    name: 'Emma Williams',
    profession: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=687&q=80',
    text: 'Professional team with excellent communication. They handled branding and digital strategy perfectly. Highly satisfied with the results!',
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Testimonial</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Client Saying!
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  {[...Array(testimonial.rating)].map((_, i) => (
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