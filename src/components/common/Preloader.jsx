import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../assets/images/logo.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <motion.img
        src={logo}
        alt="DigiPrimeLab"
        className="h-20 w-auto"
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 1.8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default Preloader;