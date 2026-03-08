import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    // { path: '/team', label: 'Team' },
    { path: '/testimonial', label: 'Testimonial' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-2xl' : 'bg-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Logo with Shadow */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="DigiPrimeLab" 
              //  className="h-10 md:h-12 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              className="h-10 md:h-12 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"

              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`relative text-white hover:text-secondary transition-colors text-sm xl:text-base ${
                  location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">

            {/* Contact Info */}
            <div className="hidden xl:block text-right">
              <p className="text-white/70 text-xs">
                Have any questions?
              </p>
              
              <a 
                href="tel:+919339643434"
                className="text-secondary font-semibold text-sm hover:underline"
              >
                 
                Call: +91 93396 43434
              </a>
            </div>
            {/* Icons */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-4"
            >
             
            </motion.div>

            {/* Book Free Consult Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Free Consult
              </Link>
            </motion.div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-white hover:text-secondary transition-colors ${
                  location.pathname === link.path ? 'text-secondary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <a
              href="tel:+919339643434"
              className="block mt-4 text-secondary font-semibold"
            >
              Call: +91 93396 43434
            </a>

            <Link
              to="/contact"
              className="block mt-3 bg-secondary text-white text-center py-2 rounded-full"
            >
              Book a Free Consult
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;