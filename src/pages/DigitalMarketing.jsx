import React from 'react';
import { 
  FaSearch, 
  FaFacebookF, 
  FaGoogle, 
  FaPen, 
  FaEnvelope, 
  FaChartLine,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaCog,
  FaChartBar,
  FaArrowRight,
  FaStar,
  FaRupeeSign
} from 'react-icons/fa';


const DigitalMarketing = () => {
  const services = [
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: "SEO Optimization",
      description: "Boost organic Google ranking with long-tail keywords like 'digital marketing agency in Kolkata' to drive quality traffic.",
      price: "₹5,000/month",
      features: ["Local/Organic Ranking", "Keyword Research", "On-page SEO", "Link Building"]
    },
    {
      icon: <FaFacebookF className="text-3xl text-blue-600" />,
      title: "Social Media Management",
      description: "Grow engagement on Facebook, Instagram, YouTube with compelling content and influencer partnerships.",
      price: "₹7,000/month",
      features: ["Content Creation", "Influencer Marketing", "Community Management", "Ad Campaigns"]
    },
    {
      icon: <FaGoogle className="text-3xl text-blue-600" />,
      title: "Google Ads/PPC",
      description: "Targeted ads with 200% ROI guarantee. Instant leads via Google Ads and social media platforms.",
      price: "₹8,000/month",
      features: ["Keyword Targeting", "Ad Copy Writing", "Conversion Tracking", "A/B Testing"]
    },
    {
      icon: <FaPen className="text-3xl text-blue-600" />,
      title: "Content Writing",
      description: "Build trust with engaging blogs, video scripts, and website content that converts visitors to customers.",
      price: "₹4,000/month",
      features: ["Blog Posts", "Video Scripts", "Web Content", "SEO Articles"]
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-600" />,
      title: "Email Marketing",
      description: "Customer retention through personalized email campaigns and newsletters that drive repeat business.",
      price: "₹3,000/month",
      features: ["Newsletter Design", "Automated Sequences", "List Segmentation", "Analytics"]
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Analytics & Reporting",
      description: "Google Analytics tracking with monthly performance reports to measure ROI and optimize strategies.",
      price: "₹2,000/month",
      features: ["Traffic Analysis", "Conversion Tracking", "Custom Reports", "Insights"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: "5+ Years Experience",
      description: "Trusted by 200+ businesses across West Bengal"
    },
    {
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Expert Team",
      description: "Certified professionals in SEO, SMM, and PPC"
    },
    {
      icon: <FaCog className="text-2xl text-white" />,
      title: "Data-Driven",
      description: "300% ROI guarantee with proven strategies"
    },
    {
      icon: <FaChartBar className="text-2xl text-white" />,
      title: "Free Audit",
      description: "Comprehensive website and social media analysis"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Free Audit",
      description: "We analyze your website, social media, and competitors to identify opportunities."
    },
    {
      number: "02",
      title: "Strategy Plan",
      description: "Custom campaign creation tailored to your business goals and target audience."
    },
    {
      number: "03",
      title: "Implement & Optimize",
      description: "Real-time results tracking with continuous optimization for maximum ROI."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      business: "Local Retail Store, Kolkata",
      comment: "DigiPrime Lab increased our leads by 500% in just 3 months. Best digital marketing agency in Kolkata!",
      rating: 5
    },
    {
      name: "Priya Singh",
      business: "Real Estate, Howrah",
      comment: "Their SEO services got us to Google #1. Generated 200+ qualified leads in first month.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      business: "E-commerce, West Bengal",
      comment: "Professional team, transparent reporting. Our sales doubled with their PPC campaigns.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Digital Marketing Services – <span className="text-yellow-400">Grow Your Brand</span> with DigiPrime Lab
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                5+ years of experience | 200+ happy clients | 300% ROI guarantee
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">
                  Get Free Audit <FaArrowRight className="ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Why Digital Marketing?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>90% customers search online before buying</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>Turn local brand to global presence</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>500+ leads/month for local businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Digital Marketing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is <span className="text-blue-600">Digital Marketing?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Digital marketing is internet-based strategies using SEO, social media, PPC, content, and email to attract customers. It's cheaper and ROI-focused than traditional marketing. For small-large businesses in Kolkata or West Bengal, digital marketing services in Kolkata are essential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                DigiPrime Lab, with 5 years of experience, gets your brand to Google #1 and generates leads.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Need Digital Marketing?</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-bold text-blue-600">Double Your Business</span> – In 2026, 90% of customers search online before buying. It turns your brand local (Kolkata/Howrah) to global, boosts sales.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-gray-700 italic">
                  "A local shop gets 500+ leads/month with SEO services. We deliver data-driven strategies with 300% ROI guarantee."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Digital Marketing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of <span className="text-blue-600">Digital Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose what you need – Digital marketing types vary by category and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Types */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b">1. Main Types</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">SEO (Search Engine Optimization)</h4>
                  <p className="text-gray-600">Boosts organic Google ranking with long-tail keywords like "digital marketing agency in Kolkata" to drive traffic.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">SMM (Social Media Marketing)</h4>
                  <p className="text-gray-600">Grows engagement on Facebook, Instagram, YouTube.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">PPC (Pay-Per-Click)</h4>
                  <p className="text-gray-600">Instant leads via Google Ads.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Content Marketing</h4>
                  <p className="text-gray-600">Builds trust with blogs/videos.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Email Marketing</h4>
                  <p className="text-gray-600">Customer retention.</p>
                </div>
              </div>
            </div>

            {/* Common Types */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b">2. Common Types by Usage</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Local SEO</h4>
                  <p className="text-gray-600">Google My Business for Kolkata/West Bengal businesses.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">E-commerce Marketing</h4>
                  <p className="text-gray-600">Boost product sales.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Lead Generation</h4>
                  <p className="text-gray-600">For real estate/services.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Branding</h4>
                  <p className="text-gray-600">Social campaigns.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Performance Marketing</h4>
                  <p className="text-gray-600">ROI-focused ads.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Searching for <span className="font-bold text-blue-600">digital marketing agency in Kolkata?</span> DigiPrime Lab guides how to get digital marketing services step-by-step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              DigiPrime Lab's <span className="text-blue-600">Digital Marketing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What You Get – West Bengal's top digital marketing company with 5 years in digital content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600 flex items-center">
                    <FaRupeeSign className="text-xl" />
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Free audit, 15-day trial, monthly reports. SEO services from ₹5,000/month, full package ₹25,000.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DigiPrime Lab?</h2>
            <p className="text-xl text-blue-100">Your growth partner with proven results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to <span className="text-blue-600">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600">Simple 3 Steps to Digital Success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-600 text-white text-4xl font-bold w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-24 w-full h-0.5 bg-blue-200">
                    <FaArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Don't wonder how to get digital marketing services – <span className="font-bold text-blue-600">contact DigiPrime Lab!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us – Book Today!</h2>
                <p className="text-xl text-blue-100 mb-8">DigiPrime Lab is your growth partner. Start your digital marketing journey now!</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaPhone className="mr-4 text-2xl" />
                    <span className="text-lg">+91 9339643434</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-4 text-2xl" />
                    <span className="text-lg">digiprimelab@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="mr-4 text-2xl text-green-400" />
                    <span className="text-lg">WhatsApp for free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-4 text-2xl" />
                    <span className="text-lg">Mon-Sat: 10:00 AM - 7:00 PM</span>
                  </div>
                </div>

                <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition w-full md:w-auto">
                  Get Free Consultation
                </button>
              </div>

              <div className="bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Service</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>Google Ads/PPC</option>
                    <option>Content Writing</option>
                    <option>Full Package</option>
                  </select>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default DigitalMarketing;