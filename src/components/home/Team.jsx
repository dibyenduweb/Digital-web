import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import team4 from "../../assets/images/4.png";
import team3 from "../../assets/images/3.png";
import team2 from "../../assets/images/2.png";
import teams5 from "../../assets/images/5.jpg";
const teamMembers = [
  { 
    id: 1, 
    name: 'Mr. Ranjit Haldar', 
    designation: 'Founder & CEO & Chief Marketing Officer',
    image: team4
  },
  { 
    id: 2, 
    name: 'Mr. Debayan Majhi', 
    designation: 'Co-Founder & Chief Operating Officer', 
    image: team3
  },
  { 
    id: 3, 
    name: 'Mr. Dibyendu Pramanik', 
    designation: 'Co-Founder & Chief Technology Officer',
    image: team2 
  },
  { 
    id: 4, 
    name: 'Mr. Pulak Pramanik', 
    designation: 'Chief Security Officer (CSO)', 
    image: teams5
  }
];


const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Our Team</h5>
        <h2 className="text-4xl font-bold text-primary mb-4">
          Meet our expert Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-secondary text-sm mb-3">{member.designation}</p>
              
              <div className="flex justify-center space-x-2">
                <a href="#" className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaFacebookF className="text-xs" />
                </a>
                <a href="#" className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaLinkedinIn className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;