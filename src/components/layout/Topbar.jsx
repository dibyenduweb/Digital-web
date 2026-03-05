import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone,
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";


const Topbar = () => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-black py-2 hidden md:block border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">

          {/* Left Section */}
          <div className="flex items-center space-x-6 text-sm">

            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-secondary mr-2" />
              <span>Kolkata, India</span>
            </div>

            <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-secondary mr-2" />
              <span>digiprimelab@gmail.com</span>
            </div>

            <div className="flex items-center text-gray-300">
              <FaPhone className="text-secondary mr-2" />
              <span>Call: +91 93396 43434</span>
            </div>

          </div>

          {/* Center Notice */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-secondary text-sm font-medium"
          >
            🚀 We Help You Grow Your Business
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {[
              { Icon: FaFacebookF, link:  "https://www.facebook.com/digiprimelab/" },
              { Icon: FaInstagram, link:  "https://www.instagram.com/digiprime_lab" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/digiprimelab" },
              { Icon: FaYoutube, link:    "https://www.youtube.com/@DigiprimeLab" }


            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 shadow-md"
              >
                <Icon className="text-black text-sm" />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;