// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaEye, FaBullseye, FaRocket, FaGlobe, 
  FaChartLine, FaUsers, FaLightbulb, FaHandshake,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';

// Import team images
import teams4 from "../assets/images/4.png";
import teams3 from "../assets/images/3.png";
import teams2 from "../assets/images/2.png";
import teams5 from "../assets/images/5.jpg";

const About = () => {
  // Company Info
  const companyInfo = {
    name: 'Digi PrimeLab',
    founded: 2019,
    email: 'info@digiprimelab.com',
    phone: '+91 1234567890',
    address: 'Kolkata, West Bengal, India',
    socialLinks: {
      facebook: 'https://facebook.com/digiprimelab',
      twitter: 'https://twitter.com/digiprimelab',
      instagram: 'https://instagram.com/digiprimelab',
      linkedin: 'https://linkedin.com/company/digiprimelab'
    }
  };

  // Team Data
  const team = [
    { 
      id: 1, 
      name: 'Mr. Ranjit Haldar', 
      designation: 'Founder & CEO & Chief Marketing Officer',
      image: teams4,
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com'
      }
    },
    { 
      id: 2, 
      name: 'Mr. Debayan Majhi', 
      designation: 'Co-Founder & Chief Operating Officer', 
      image: teams3,
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com'
      }
    },
    { 
      id: 3, 
      name: 'Mr. Dibyendu Pramanik', 
      designation: 'Co-Founder & Chief Technology Officer', 
      image: teams2,
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com'
      }
    },
    { 
      id: 4, 
      name: 'Mr. Pulak Pramanik', 
      designation: 'Chief Security Officer (CSO)', 
      image: teams5,
      social: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com'
      }
    },
  ];

  // Core Values
  const coreValues = [
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
  ];

  // What Drives Us
  const drivesItems = [
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
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Empowering businesses with innovative IT solutions, digital marketing excellence, 
              and comprehensive accounting services since {companyInfo.founded}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="About Us"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg">
              <span className="text-4xl font-bold">5+</span>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h5 className="text-secondary font-semibold mb-2">About Us</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {companyInfo.name} And It's Innovative IT Solutions & Digital Marketing
            </h2>
            <p className="text-gray-600 mb-6">
              DigiPrime Lab empowers businesses with digital marketing, SEO services, website development, 
              IT solutions, and accounting services. We drive SEO services, boost traffic via digital marketing, 
              craft stunning website development, deliver IT solutions, and ensure precise accounting services. 
              Startups thrive with our affordable SEO services, expert digital marketing, reliable IT solutions, 
              seamless website development, and comprehensive accounting services for growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">200+</h3>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">200+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what drives DigiPrime Lab – our commitment to excellence, 
              innovation, and your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FaEye className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Our Vision</h3>
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
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FaBullseye className="text-4xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Our Mission</h3>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
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
          {drivesItems.map((item, index) => (
            <div key={index} className="bg-primary text-white rounded-xl p-6 text-center">
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h5 className="text-secondary font-semibold mb-2">Our Team</h5>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet our expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals works tirelessly to deliver exceptional results 
              and drive your business forward.
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
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-center group hover:shadow-2xl transition-all duration-300"
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
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
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
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl shadow-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Email Us</p>
                <a href={`mailto:${companyInfo.email}`} className="font-semibold hover:text-secondary transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Call Us</p>
                <a href={`tel:${companyInfo.phone}`} className="font-semibold hover:text-secondary transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Visit Us</p>
                <p className="font-semibold">{companyInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaGlobe className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Follow Us</p>
                <div className="flex space-x-3 mt-1">
                  <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    <FaTwitter />
                  </a>
                  <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    <FaInstagram />
                  </a>
                  <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center bg-white rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our expert team. 
            If you're passionate about technology and innovation, we'd love to hear from you.
          </p>
          <Link
            to="/careers"
            className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 font-semibold inline-block"
          >
            View Open Positions
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;