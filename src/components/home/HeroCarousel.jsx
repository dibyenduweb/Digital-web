import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'DigiPrimeLab',
    subtitle: 'We Build Powerful Digital Experiences',
    description:
      'We design high-performance websites, scalable web applications, and result-driven digital marketing strategies to grow your business online.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    title: 'Creative IT Agency',
    subtitle: 'Smart Solutions for Modern Businesses',
    description:
      'From branding to development and digital growth, we deliver innovative IT solutions that transform ideas into measurable success.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          {/* Centered Content */}
          <div className="relative h-full flex items-center justify-center text-center container mx-auto px-4">
            <div className="text-white max-w-3xl mx-auto">

              <motion.h6
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-secondary text-lg md:text-xl mb-3 font-semibold"
              >
                {slides[currentIndex].title}
              </motion.h6>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                {slides[currentIndex].subtitle}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base md:text-lg text-gray-200 mb-8"
              >
                {slides[currentIndex].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/services"
                  className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Our Services
                </Link>

                <Link
                  to="/contact"
                  className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Book Free Consult
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-md transition-all"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-md transition-all"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};

export default HeroCarousel;