import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import teams4 from "../assets/images/4.png";
import teams3 from "../assets/images/3.png";
import teams2 from "../assets/images/2.png";

const team = [
  { 
    id: 1, 
    name: 'Mr. Ranjit Haldar', 
    designation: 'Founder & CEO &Chief Marketing Officer',
    image: teams4
  },
  { 
    id: 2, 
    name: 'Mr. Debayan Majhi', 
    designation: 'Co-Founder & Chief Operating Officer', 
    image: teams3
  },
  { 
    id: 3, 
    name: 'Mr. Dibyendu Pramanik', 
    designation: 'Chief Technology Officer', 
    image: teams2 
  },
  { 
    id: 4, 
    name: 'Mr. Pulak Pramanik', 
    designation: 'Chief Security Officer (CSO)', 
    image: 'https://media.craiyon.com/2025-10-04/uAN5Q3ZRSl-WjhzCYhjp8g.webp' 
  },
//   { 
//     id: 5, 
//     name: 'Your Name', 
//     designation: 'Project Manager Head', 
//     image: 'https://i.pinimg.com/736x/48/5d/17/485d17ed5e38d1a4e4b24a11d8c4ae45.jpg' 
//   },
//   { 
//     id: 6, 
//     name: 'Your Name', 
//     designation: 'IT Consultant', 
//     image: 'https://i.pinimg.com/736x/48/5d/17/485d17ed5e38d1a4e4b24a11d8c4ae45.jpg' 
//   },
//   { 
//     id: 7, 
//     name: 'Your Name', 
//     designation: 'Security Expert', 
//     image: 'https://i.pinimg.com/736x/48/5d/17/485d17ed5e38d1a4e4b24a11d8c4ae45.jpg' 
//   },
//   { 
//     id: 8, 
//     name: 'Your Name', 
//     designation: 'Data Analyst', 
//     image: 'https://i.pinimg.com/736x/48/5d/17/485d17ed5e38d1a4e4b24a11d8c4ae45.jpg' 
//   },
];

const TeamPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h5 className="text-secondary font-semibold mb-2">Our Team</h5>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet our expert Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. 
            Pellentesque aliquam dolor eget urna ultricies tincidunt.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Social Icons Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-secondary font-medium">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary rounded-xl p-8 text-white"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">25+</div>
            <p>Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">5+</div>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">228+</div>
            <p>Projects Done</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <p>Support</p>
          </div>
        </motion.div>

        {/* Join Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center bg-white rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our expert team. 
            If you're passionate about technology and innovation, we'd love to hear from you.
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 font-semibold">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;