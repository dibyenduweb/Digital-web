import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaEye, FaBullseye, FaRocket, FaGlobe, 
  FaChartLine, FaUsers, FaLightbulb, FaHandshake 
} from 'react-icons/fa';

const VisionMission = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Vision & Mission
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what drives DigiPrime Lab – our commitment to excellence, 
            innovation, and your success.
          </p>
        </motion.div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FaEye className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                  <p className="text-blue-100">Looking ahead, creating tomorrow</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At DigiPrime Lab, our vision is to empower every business with cutting-edge 
                digital marketing services, innovative IT solutions, and reliable accounting 
                services. We envision startups and small enterprises thriving online through 
                seamless website development, powerful SEO services, targeted keywords, 
                explosive traffic growth, and precise financial accounting.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: FaGlobe, text: "Global Success" },
                  { icon: FaRocket, text: "Digital Growth" },
                  { icon: FaChartLine, text: "Top Rankings" },
                  { icon: FaUsers, text: "Empower Business" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <item.icon className="text-secondary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 italic">
                  "Leveraging data-driven digital marketing strategies, creative branding, and expert bookkeeping, 
                  we transform local dreams into global successes."
                </p>
              </div>
              
              <p className="text-gray-700 mt-4">
                With affordable pricing, we ensure sustainable digital transformation and fiscal clarity for all. 
                DigiPrime Lab aims to be the premier digital agency, driving unparalleled online growth, top Google 
                rankings, SEO services, website development, IT solutions, and accounting excellence everywhere.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                  <p className="text-green-100">Delivering excellence every day</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                DigiPrime Lab's mission is to deliver exceptional digital marketing, expert website development, 
                strategic SEO services, result-driven IT solutions, and comprehensive accounting services for 
                startups and SMEs. We boost content visibility, enhance keyword performance, skyrocket organic 
                traffic, and streamline financial accounting with smart, affordable packages.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: FaChartLine, text: "Boost Visibility" },
                  { icon: FaRocket, text: "Skyrocket Traffic" },
                  { icon: FaLightbulb, text: "Smart Solutions" },
                  { icon: FaHandshake, text: "Client Success" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <item.icon className="text-secondary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 italic">
                  "Our data-driven strategies, creative branding, and precise bookkeeping ensure measurable growth, 
                  customer engagement, and fiscal accuracy."
                </p>
              </div>
              
              <p className="text-gray-700 mt-4">
                Committed to excellence, we provide reliable IT support, innovative web solutions, personalized 
                digital marketing campaigns, and tailored accounting tailored to your needs. We guide you through 
                the digital and financial landscape, achieving higher Google rankings, increased leads, and 
                long-term success via ethical SEO services and practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaRocket className="text-3xl text-secondary" />,
                title: "Innovation",
                desc: "Cutting-edge solutions for modern challenges"
              },
              {
                icon: <FaHandshake className="text-3xl text-secondary" />,
                title: "Integrity",
                desc: "Ethical practices, transparent communication"
              },
              {
                icon: <FaUsers className="text-3xl text-secondary" />,
                title: "Client-Centric",
                desc: "Your success is our priority"
              },
              {
                icon: <FaChartLine className="text-3xl text-secondary" />,
                title: "Excellence",
                desc: "Delivering quality beyond expectations"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What Drives Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: "🚀",
              title: "Digital Growth",
              desc: "We help businesses scale online with proven strategies"
            },
            {
              icon: "💡",
              title: "Innovation First",
              desc: "Always adopting new technologies and approaches"
            },
            {
              icon: "🤝",
              title: "Partnership",
              desc: "Building lasting relationships with our clients"
            }
          ].map((item, index) => (
            <div key={index} className="bg-primary text-white rounded-xl p-6 text-center">
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's work together to transform your business with our digital marketing, 
            IT solutions, and accounting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;