import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const facts = [
  { number: 99, text: 'Success in getting happy customer' },
  { number: 25, text: 'Thousands of successful business' },
  { number: 120, text: 'Total clients who love Digi PrimeLab' },
  { number: 5, text: 'Stars reviews given by satisfied clients' },
];

const Facts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="text-5xl font-bold text-primary">
                {isInView && <CountUp end={fact.number} duration={2} />}
              </div>
              <p className="text-white text-lg">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;