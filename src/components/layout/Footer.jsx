import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaAngleRight, 
  FaCopyright 
} from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <img 
                  src={logo} 
                  alt="DigiPrimeLab" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const fallback = document.createElement('h2');
                    fallback.className = 'text-3xl font-bold';
                    fallback.innerHTML = 'DigiPrime<span class="text-secondary">Lab</span>';
                    parent.appendChild(fallback);
                  }}
                />
              </motion.div>
            </Link>

            <p className="text-gray-300 mb-4">
              DigiPrimeLab is a modern digital agency specializing in website development, digital marketing, branding, and creative solutions to grow your business online.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { Icon: FaFacebookF, link: "https://www.facebook.com/digiprimelab/" },
                { Icon: FaInstagram, link: "https://www.instagram.com/digiprime_lab" },
                { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/digiprimelab" },
                { Icon: FaYoutube, link: "https://www.youtube.com/@DigiprimeLab" }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Short Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">Short Link</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Vision & Mission", path: "/vision-mission" },
                { name: "Our Services", path: "/services" },
                { name: "Our Projects", path: "/projects" },
                { name: "Latest Blog", path: "/blog" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="flex items-center text-gray-300 hover:text-secondary transition-colors"
                  >
                    <FaAngleRight className="text-secondary mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">Help Link</h3>
            <ul className="space-y-2">
              {[
                { name: "Terms Of Use", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "FAQs", path: "/faqs" },
                { name: "Support", path: "/support" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="flex items-center text-gray-300 hover:text-secondary transition-colors"
                  >
                    <FaAngleRight className="text-secondary mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Kolkata, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <span className="text-gray-300">+91 93396 43434</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <span className="text-gray-300">digiprimelab@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center md:flex md:justify-between md:text-left"
        >
          <p className="text-gray-300 mb-4 md:mb-0">
            <FaCopyright className="inline text-secondary mr-1" />
            digiprimelab.com, All rights reserved.2021 - 2026
          </p>

          <p className="text-gray-300">
            Designed By{' '}
            <a 
              href="https://digiprimelab.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Dibyendu Pramanik
            </a>{' '}
            | Distributed By{' '}
            <span className="text-secondary">DigiPrimeLab</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

