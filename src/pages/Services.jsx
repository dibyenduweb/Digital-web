import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allServices = [
  { 
    id: 1,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Digital Marketing', 
    description: 'Boost your online presence with our comprehensive digital marketing strategies including ',
    link: '/services/digital-marketing',
    category: 'Marketing',
    subLinks: [
      { name: 'SEO', url: '/services/digital-marketing/seo' },
      { name: 'Social Media Marketing', url: '/services/digital-marketing/social-media' },
      { name: 'PPC Campaigns', url: '/services/digital-marketing/ppc' },
      { name: 'Email Marketing', url: '/services/digital-marketing/email' }
    ]
  },
  { 
    id: 2,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Web Development & App', 
    description: 'Create stunning, responsive websites and powerful mobile applications tailored to your business needs. Services include: ',
    link: '/services/web-development-app',
    category: 'Development',
    subLinks: [
      { name: 'E-commerce Platforms', url: '/services/web-development/ecommerce' },
      { name: 'Custom Web Applications', url: '/services/web-development/custom-apps' },
      { name: 'Mobile App Development', url: '/services/web-development/mobile-apps' },
      { name: 'Responsive Websites', url: '/services/web-development/responsive' }
    ]
  },
  { 
    id: 3,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Accounting Services', 
    description: 'Professional accounting solutions including ',
    link: '/services/accounting-services',
    category: 'Business',
    subLinks: [
      { name: 'Bookkeeping', url: '/services/accounting/bookkeeping' },
      { name: 'Tax Preparation', url: '/services/accounting/tax-preparation' },
      { name: 'Financial Reporting', url: '/services/accounting/financial-reporting' },
      { name: 'Business Advisory', url: '/services/accounting/advisory' }
    ]
  },
  { 
    id: 4,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Cyber Security', 
    description: 'Protect your digital assets with our comprehensive cybersecurity services including ',
    link: '/services/cyber-security',
    category: 'Security',
    subLinks: [
      { name: 'Vulnerability Assessments', url: '/services/cyber-security/assessments' },
      { name: 'Security Audits', url: '/services/cyber-security/audits' },
      { name: 'Threat Monitoring', url: '/services/cyber-security/threat-monitoring' },
      { name: 'Incident Response', url: '/services/cyber-security/incident-response' }
    ]
  },
  { 
    id: 5,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'UI/UX Design', 
    description: 'Create intuitive and engaging user experiences. Our design services include: ',
    link: '/services/ui-ux-design',
    category: 'Design',
    subLinks: [
      { name: 'User Interface Design', url: '/services/ui-ux/ui-design' },
      { name: 'Wireframing', url: '/services/ui-ux/wireframing' },
      { name: 'Prototyping', url: '/services/ui-ux/prototyping' },
      { name: 'Visual Design', url: '/services/ui-ux/visual-design' }
    ]
  },
  { 
    id: 6,
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'AI Content & Video Editor', 
    description: 'Harness the power of artificial intelligence for your content creation. We offer: ',
    link: '/services/ai-content-video-editor',
    category: 'AI',
    subLinks: [
      { name: 'AI Content Writing', url: '/services/ai/content-writing' },
      { name: 'Video Editing', url: '/services/ai/video-editing' },
      { name: 'Script Generation', url: '/services/ai/script-generation' },
      { name: 'Voiceovers', url: '/services/ai/voiceovers' }
    ]
  },
];

const Services = ({ initialServicesToShow = null, showViewAllButton = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(allServices.map(service => service.category))];
  
  // Filter services by category
  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);
  
  // For homepage, show only first X services
  const displayedServices = initialServicesToShow 
    ? filteredServices.slice(0, initialServicesToShow) 
    : filteredServices;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {initialServicesToShow ? 'Our Best Services' : 'Our All Services'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {initialServicesToShow 
            ? 'Discover our core services designed to help your business grow in the digital age'
            : 'Explore our complete range of professional services designed to help your business thrive'
          }
        </p>
      </motion.div>

      {/* Category Filter - only show on full services page */}
      {!initialServicesToShow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedServices.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={service.image} 
                alt={`${service.title} service illustration`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {service.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-3">
                {service.description}
              </p>
              
              {/* Sub-links */}
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {service.subLinks.map((subLink, index) => (
                    <Link
                      key={index}
                      to={subLink.url}
                      className="text-sm bg-gray-100 hover:bg-secondary hover:text-white px-3 py-1 rounded-full transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <Link 
                  to={service.link}
                  aria-label={`Learn more about ${service.title}`}
                  className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg transform hover:scale-105 inline-block text-sm font-semibold"
                >
                  View Details
                </Link>
                
                {/* Quick Action Icons */}
                <div className="flex space-x-2">
                  <button 
                    aria-label="Share service"
                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Services Button - only show on homepage */}
      {showViewAllButton && initialServicesToShow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all hover:shadow-xl transform hover:scale-105 inline-block font-semibold"
          >
            View All Services
          </Link>
        </motion.div>
      )}

      {/* No Results Message */}
      {displayedServices.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No services found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 text-primary hover:underline"
          >
            View all services
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Services;