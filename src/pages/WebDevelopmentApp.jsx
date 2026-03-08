












import React from 'react';
import { 
  FaCode, 
  FaShoppingCart, 
  FaWordpress, 
  FaPalette, 
  FaTachometerAlt, 
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaCog,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaRupeeSign,
  FaArrowRight,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaStar,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaLock,
  FaBolt,
  FaPen,
  FaRegGem,
  FaShoppingBag,
  FaNewspaper,
  FaGraduationCap,
  FaComments,
  FaLandmark,
  FaBriefcase
} from 'react-icons/fa';
const WebDevelopmentApp = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-purple-600" />,
      title: "Custom Website Design",
      description: "Responsive designs tailored to your brand identity with modern UI/UX principles.",
      features: [
        "Mobile-responsive design",
        "Custom layouts & branding",
        "User-friendly navigation",
        "Interactive elements",
        "Cross-browser compatibility"
      ],
      price: "Starting ₹5,000",
      popular: false
    },
    {
      icon: <FaShoppingBag className="text-4xl text-purple-600" />,
      title: "E-commerce Website",
      description: "Complete online store with product management, cart, and secure payment integration.",
      features: [
        "Razorpay/UPI payments",
        "Product catalog management",
        "Shopping cart system",
        "Order tracking",
        "Inventory management"
      ],
      price: "Starting ₹25,000",
      popular: true
    },
    {
      icon: <FaWordpress className="text-4xl text-purple-600" />,
      title: "Dynamic Website",
      description: "Database-driven websites with content management systems for easy updates.",
      features: [
        "PHP/WordPress development",
        "Database integration",
        "Admin panel",
        "Content management",
        "Scalable architecture"
      ],
      price: "Starting ₹15,000",
      popular: false
    },
    {
      icon: <FaRegGem className="text-4xl text-purple-600" />,
      title: "Static Website",
      description: "Fast-loading, cost-effective websites for small businesses and landing pages.",
      features: [
        "HTML/CSS development",
        "Fast loading speed",
        "Simple & clean design",
        "Basic SEO setup",
        "Low maintenance"
      ],
      price: "Starting ₹5,000",
      popular: false
    },
    {
      icon: <FaBriefcase className="text-4xl text-purple-600" />,
      title: "Portfolio Website",
      description: "Showcase your work, projects, and skills with stunning portfolio layouts.",
      features: [
        "Gallery/portfolio sections",
        "Project showcases",
        "Testimonials",
        "Contact forms",
        "Social media integration"
      ],
      price: "Starting ₹8,000",
      popular: false
    },
    {
      icon: <FaCog className="text-4xl text-purple-600" />,
      title: "Website Maintenance",
      description: "Ongoing support, security updates, hosting, and performance optimization.",
      features: [
        "Regular backups",
        "Security updates",
        "Performance monitoring",
        "Content updates",
        "Technical support"
      ],
      price: "₹2,000/month",
      popular: false
    }
  ];

  const websiteTypes = [
    {
      category: "Main 2 Types by Structure",
      types: [
        {
          title: "Static Website",
          description: "Pre-coded content that rarely changes. Loads fast and cost-effective.",
          examples: "Simple company profiles, landing pages",
          tech: "HTML/CSS"
        },
        {
          title: "Dynamic Website",
          description: "Uses databases and server-side code for automatic content updates.",
          examples: "E-commerce, blogs, social sites",
          tech: "PHP/WordPress"
        }
      ]
    },
    {
      category: "Common Types by Usage",
      types: [
        { title: "Business website", icon: <FaBriefcase />, description: "Company or service introduction" },
        { title: "E-commerce website", icon: <FaShoppingCart />, description: "Online product sales" },
        { title: "Blog website", icon: <FaPen />, description: "Regular articles/posts" },
        { title: "Portfolio website", icon: <FaRegGem />, description: "Showcase work & projects" },
        { title: "Educational website", icon: <FaGraduationCap />, description: "Online courses, notes" },
        { title: "News/Magazine website", icon: <FaNewspaper />, description: "News and media content" },
        { title: "Forum/Community website", icon: <FaComments />, description: "User discussions & Q&A" },
        { title: "Government/Nonprofit", icon: <FaLandmark />, description: "Information and services" }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket className="text-3xl text-white" />,
      title: "5+ Years Experience",
      description: "200+ websites delivered across West Bengal"
    },
    {
      icon: <FaMobileAlt className="text-3xl text-white" />,
      title: "100% Responsive",
      description: "Perfect on all devices - mobile, tablet, desktop"
    },
    {
      icon: <FaSearch className="text-3xl text-white" />,
      title: "SEO Optimized",
      description: "Built with SEO best practices for Google ranking"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "Security First",
      description: "SSL certificates & regular security updates"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We listen to your needs - business, portfolio, or e-commerce?"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Ready in 7-15 days with mockups and revisions"
    },
    {
      step: "03",
      title: "Live & Maintain",
      description: "SEO setup, hosting, and ongoing support"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Gupta",
      business: "Local Business, Kolkata",
      comment: "DigiPrime Lab built our company website. Got 50+ inquiries in first month! Great SEO work.",
      rating: 5
    },
    {
      name: "Priya Singh",
      business: "Fashion Store, Howrah",
      comment: "My e-commerce site is beautiful and payments work smoothly. Sales increased 200%!",
      rating: 5
    },
    {
      name: "Amit Sharma",
      business: "Photographer, Kolkata",
      comment: "Portfolio website showcases my work perfectly. Clients love the design.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Website Services – <span className="text-yellow-400">Build Your Online Presence</span> with DigiPrime Lab
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Professional website development in Kolkata | 5+ years experience | 200+ websites delivered
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">
                  Free Consultation <FaArrowRight className="ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <FaGlobe className="text-4xl text-yellow-400 mr-4" />
                  <h3 className="text-2xl font-bold">What is a Website?</h3>
                </div>
                <p className="text-lg mb-4">
                  A website is a collection of HTML documents stored on a web server and accessed via browsers using HTTP/HTTPS protocols. It's a complete internet platform featuring static or dynamic content.
                </p>
                <p className="text-purple-200">
                  In today's digital age, knowing how to build a website is essential, or your business will lag behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Need Website */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Do You Need a Website? <span className="text-purple-600">Easy Way to Grow Your Business</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Simply put, it's your online shop or digital business card. To grow your business, attract clients, and maintain a 24/7 presence, a website is indispensable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">24/7 online presence – your business never sleeps</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Connect directly with clients and showcase your work</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Generate leads and increase sales 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Example Success</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 italic mb-4">
                  "A business website helps small businesses connect directly with clients. For digital agencies like DigiPrime Lab, it's the best medium to showcase portfolios."
                </p>
                <div className="flex items-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <FaUsers className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">RanjitDigitalNest</p>
                    <p className="text-sm text-gray-500">Project Showcase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of <span className="text-purple-600">Websites</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose based on your needs – Knowing website types makes selection easier
            </p>
          </div>

          {/* Main 2 Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {websiteTypes[0].types.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-purple-600 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><span className="font-bold">Examples:</span> {type.examples}</p>
                  <p className="text-sm text-gray-700 mt-2"><span className="font-bold">Technology:</span> {type.tech}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Common Types Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Common Types by Usage</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {websiteTypes[1].types.map((type, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center">
                    {type.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">{type.title}</h4>
                  <p className="text-xs text-gray-500">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Looking for <span className="font-bold text-purple-600">website service in Kolkata or West Bengal?</span> DigiPrime Lab guides you step-by-step on how to build a website, plus offers maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              DigiPrime Lab's <span className="text-purple-600">Website Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              West Bengal's top website service provider with 5 years in digital content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative ${
                  service.popular ? 'ring-2 ring-purple-500 transform scale-105 md:scale-100' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                    service.popular ? 'bg-purple-600' : 'bg-purple-50'
                  }`}>
                    <div className={service.popular ? 'text-white' : 'text-purple-600'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-purple-600 text-sm font-medium">+{service.features.length - 3} more</li>
                    )}
                  </ul>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-800 flex items-center">
                        <FaRupeeSign className="text-purple-600" />
                        {service.price}
                      </span>
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                        Learn More <FaArrowRight className="ml-1 text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Free domain (.in) checks, mockups, and 7-day revisions. Static websites start at ₹5000, dynamic websites from ₹15000.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DigiPrime Lab?</h2>
            <p className="text-xl text-purple-100">Your trusted website development partner in Kolkata</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to <span className="text-purple-600">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600">Simple 3 Steps to Your New Website</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-purple-600 text-white text-3xl font-bold w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-2/3 w-full h-0.5 bg-purple-200">
                    <FaArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Don't learn how to build a website yourself – <span className="font-bold text-purple-600">order from DigiPrime Lab</span> to save time and get professional results!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client <span className="text-purple-600">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <FaUsers className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Start Your Website Today!
                </h2>
                <p className="text-xl text-purple-100 max-w-2xl">
                  Professional website services in Kolkata – Free consultation & quote
                </p>
                <div className="mt-6 space-y-3 text-purple-100">
                  <div className="flex items-center justify-center md:justify-start">
                    <FaPhone className="mr-3" />
                    <span className="text-lg">+91 9339643434</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <FaEnvelope className="mr-3" />
                    <span className="text-lg">digiprimelab@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <FaWhatsapp className="mr-3 text-green-300" />
                    <span className="text-lg">WhatsApp: Free quote</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 min-w-[250px]">
                <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                  Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-700 transition">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WebDevelopmentApp;