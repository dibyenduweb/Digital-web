import React from "react";
import {
  FaPen,
  FaVideo,
  FaBullhorn,
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
  FaRupeeSign,
  FaBrain,
  FaMagic,
  FaLanguage,
  FaEnvelope,
  FaImage,
  FaFileAudio,
  FaShieldAlt,
  FaTags,
  FaRobot,
  FaRegEye,
} from "react-icons/fa";

const AiService = () => {
  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Data Annotation Services' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'process', label: 'Our Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    {
      icon: <FaImage className="text-3xl text-purple-600" />,
      title: "Image Annotation",
      description:
        "High-quality image labeling for computer vision models including bounding boxes, segmentation, and landmark detection.",
      features: [
        "Bounding Box Annotation",
        "Semantic Segmentation",
        "Polygon & Polyline Annotation",
        "Landmark & Keypoint Detection",
        "3D Point Cloud Labeling",
      ],
      projectScale: "50,000+ images annotated",
      accuracy: "99.5% accuracy guaranteed",
    },
    {
      icon: <FaPen className="text-3xl text-purple-600" />,
      title: "Text Annotation",
      description:
        "Comprehensive text labeling for NLP models including entity recognition, sentiment analysis, and text classification.",
      features: [
        "Named Entity Recognition (NER)",
        "Sentiment Annotation",
        "Text Classification",
        "Part-of-Speech Tagging",
        "Intent Detection",
      ],
      projectScale: "10M+ text entries processed",
      accuracy: "98% inter-annotator agreement",
    },
    {
      icon: <FaFileAudio className="text-3xl text-purple-600" />,
      title: "Audio Transcription",
      description:
        "Accurate audio and speech transcription services for multiple languages and dialects.",
      features: [
        "Speech-to-Text Transcription",
        "Speaker Diarization",
        "Multi-Language Support (10+ languages)",
        "Timestamp & Labeling",
        "Accent & Dialect Recognition",
      ],
      projectScale: "25,000+ hours transcribed",
      accuracy: "99% word accuracy rate",
    },
    {
      icon: <FaVideo className="text-3xl text-purple-600" />,
      title: "Video Annotation",
      description:
        "Frame-by-frame video labeling for object tracking, action recognition, and autonomous systems.",
      features: [
        "Object Tracking (2D & 3D)",
        "Action & Gesture Recognition",
        "Scene Understanding",
        "Temporal Segmentation",
        "Multi-Frame Annotation",
      ],
      projectScale: "100,000+ video hours",
      accuracy: "95% frame accuracy",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: "Content Moderation",
      description:
        "AI-assisted and human-in-the-loop content filtering for harmful, inappropriate, or policy-violating content.",
      features: [
        "Image & Video Moderation",
        "Text & Comment Filtering",
        "NSFW Detection",
        "Hate Speech Identification",
        "Policy Compliance Review",
      ],
      projectScale: "50M+ items moderated",
      responseTime: "< 2 hours turnaround",
    },
    {
      icon: <FaTags className="text-3xl text-purple-600" />,
      title: "Data Categorization & Tagging",
      description:
        "Organized data structuring with custom taxonomies, metadata tagging, and hierarchical classification.",
      features: [
        "Custom Taxonomy Creation",
        "Metadata Tagging",
        "Hierarchical Classification",
        "Multi-label Categorization",
        "Quality Validation Checks",
      ],
      projectScale: "Custom datasets up to 1TB",
      delivery: "Flexible output formats (JSON, CSV, XML)",
    },
  ];

  const annotationProjects = [
    {
      projectName: "Autonomous Vehicle Vision",
      type: "Image & Video",
      volume: "2.5M frames",
      useCase: "Self-driving car perception models",
    },
    {
      projectName: "Multilingual Chatbot Training",
      type: "Text & Audio",
      volume: "5M utterances",
      useCase: "Conversational AI for customer support",
    },
    {
      projectName: "Social Media Safety",
      type: "Content Moderation",
      volume: "10M posts/hour",
      useCase: "Real-time harmful content filtering",
    },
    {
      projectName: "Medical Imaging AI",
      type: "Image Annotation",
      volume: "500K scans",
      useCase: "Disease detection from X-rays & MRIs",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: "Scalable Workforce",
      description: "500+ trained annotators available on-demand",
    },
    {
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Domain Experts",
      description: "Medical, legal, automotive, e-commerce specialists",
    },
    {
      icon: <FaRobot className="text-2xl text-white" />,
      title: "AI + Human Review",
      description: "Hybrid approach for maximum accuracy",
    },
    {
      icon: <FaChartBar className="text-2xl text-white" />,
      title: "ISO Certified",
      description: "GDPR & SOC 2 compliant data security",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Project Discovery",
      description:
        "Define annotation requirements, taxonomies, and quality metrics with our experts.",
    },
    {
      number: "02",
      title: "Pilot & Calibration",
      description:
        "Small batch annotation to align guidelines and achieve target accuracy.",
    },
    {
      number: "03",
      title: "Full-Scale Execution",
      description:
        "Managed workforce delivers high-volume annotation with continuous QA.",
    },
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      business: "AI Product Manager, Autonomous Tech Co.",
      comment:
        "DigiPrime Lab annotated 2M+ video frames for our self-driving project with 98.5% accuracy. Exceptional quality and turnaround!",
      rating: 5,
    },
    {
      name: "Priya Nair",
      business: "ML Engineer, Healthcare AI Startup",
      comment:
        "Their medical image annotation team understood complex anatomical structures perfectly. Saved us months of in-house effort.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      business: "Head of Trust & Safety, Social Platform",
      comment:
        "24/7 content moderation with under 2-hour SLA. Scaled from 100 to 50K items/day seamlessly.",
      rating: 5,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Data Annotation Services –{" "}
                <span className="text-pink-400">Power Your AI Models</span>{" "}
                with High-Quality Training Data
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Image, video, text & audio annotation | Content moderation | 
                Enterprise-scale data labeling
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="bg-pink-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-300 transition flex items-center"
                >
                  Request Sample Dataset <FaArrowRight className="ml-2" />
                </a>

                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition"
                >
                  View Annotation Types
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Quality Data Annotation?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>Garbage in = Garbage out — Quality data drives AI success</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>100M+ data points annotated across 500+ projects</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3" />
                    <span>99%+ accuracy with human-in-the-loop validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-purple-600 font-medium whitespace-nowrap transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* What is Data Annotation Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is{" "}
                <span className="text-purple-600">Data Annotation?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Data annotation is the process of labeling raw data — images, videos, 
                text, and audio — to train machine learning and AI models. 
                High-quality annotated data is essential for computer vision, NLP, 
                autonomous systems, and content moderation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                DigiPrime Lab delivers enterprise-grade annotation services with 
                hybrid AI + human review, ISO-certified security, and domain-specific 
                expertise across automotive, healthcare, e-commerce, and social media.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Annotation Capabilities
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Image Annotation</span>
                  <span className="text-purple-600 font-bold">2M+ images/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Video Annotation</span>
                  <span className="text-purple-600 font-bold">100K+ hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Text Annotation</span>
                  <span className="text-purple-600 font-bold">50M+ records</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Audio Transcription</span>
                  <span className="text-purple-600 font-bold">25K+ hours</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                <p className="text-gray-700 italic">
                  "We've successfully delivered annotation projects for Fortune 500 
                  companies, AI startups, and research institutions worldwide."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Annotation Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-purple-600">Data Annotation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade annotation for all data types and AI applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <FaCheckCircle className="text-green-500 mr-2 text-sm flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-purple-600">{service.projectScale}</span>
                    <span className="text-gray-500">{service.accuracy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Annotation Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent <span className="text-purple-600">Annotation Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Delivering high-quality training data for cutting-edge AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {annotationProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaTags className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{project.projectName}</h3>
                <p className="text-sm text-purple-600 font-medium mb-2">{project.type}</p>
                <p className="text-2xl font-bold text-gray-800 mb-2">{project.volume}</p>
                <p className="text-sm text-gray-500">{project.useCase}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600">
              Custom annotation projects available — <span className="font-bold text-purple-600">Free pilot on 1,000 units</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose DigiPrime Lab?
            </h2>
            <p className="text-xl text-purple-100">
              Trusted annotation partner for AI teams worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to <span className="text-purple-600">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step annotation project workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-purple-600 text-white text-4xl font-bold w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-24 w-full h-0.5 bg-purple-200">
                    <FaArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Ready to annotate your training data?{" "}
              <span className="font-bold text-purple-600">
                Contact DigiPrime Lab for a free consultation!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-purple-600">Clients Say</span>
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
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Request Free Pilot Annotation
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Upload 1,000 samples for free annotation. Experience our quality before committing.
                </p>

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
                    <span className="text-lg">WhatsApp for project discussion</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-4 text-2xl" />
                    <span className="text-lg">Mon-Sat: 10:00 AM - 7:00 PM</span>
                  </div>
                </div>

                <button>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); }}
                    className="mt-8 inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition w-full md:w-auto text-center"
                  >
                    Request Free Pilot
                  </a>
                </button>
              </div>

              <div className="bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Request Annotation Quote
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option>Select Annotation Type</option>
                    <option>Image Annotation</option>
                    <option>Video Annotation</option>
                    <option>Text Annotation</option>
                    <option>Audio Transcription</option>
                    <option>Content Moderation</option>
                    <option>Data Categorization</option>
                    <option>Custom / Multiple Types</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Approximate Volume (e.g., 50,000 images / 100 hours)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <textarea
                    placeholder="Project description or specific requirements..."
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  ></textarea>
                  <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                    Submit Request
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll respond within 24 hours with sample pricing and pilot details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiService;