import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaMoneyBillWave, FaCopyright, 
  FaLaptopCode, FaChartLine, FaCalculator,
  FaLock, FaFileContract, FaCheckCircle,
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState('all');

  const sections = [
    {
      id: 'services',
      icon: <FaShieldAlt className="text-3xl text-secondary" />,
      title: "✨ DigiPrime Lab Services",
      content: "DigiPrime Lab delivers premium digital marketing services, custom website development, strategic SEO services, reliable IT solutions, and accurate accounting services for startups/SMEs. We guarantee excellence through data-driven strategies but cannot assure specific Google rankings, traffic volume, or financial outcomes due to algorithm changes, market competition, and external factors beyond DigiPrime Lab control. Monthly performance tracking ensures transparency.",
      color: "from-blue-500 to-blue-600",
      category: "general"
    },
    {
      id: 'payments',
      icon: <FaMoneyBillWave className="text-3xl text-secondary" />,
      title: "💳 DigiPrime Lab Payments",
      content: "DigiPrime Lab follows flexible structure: 40% advance for project confirmation, 40% at work starting when development begins, 20% on delivery for final handover/launch. Enjoy 15-day grace period; 2% monthly late fee applies thereafter. Custom website development and accounting services become non-refundable once service delivery starts, ensuring commitment to quality results.",
      color: "from-green-500 to-green-600",
      category: "financial"
    },
    {
      id: 'ip-rights',
      icon: <FaCopyright className="text-3xl text-secondary" />,
      title: "🛡️ DigiPrime Lab IP Rights",
      content: "Clients retain full ownership of pre-existing content, logos, and materials. DigiPrime Lab deliverables including website development code, digital marketing strategies, and designs transfer to you upon final 20% payment clearance. DigiPrime Lab reserves non-exclusive rights to showcase projects in portfolio for credibility.",
      color: "from-purple-500 to-purple-600",
      category: "legal"
    },
    {
      id: 'development',
      icon: <FaLaptopCode className="text-3xl text-secondary" />,
      title: "🎨 DigiPrime Lab Development",
      content: "DigiPrime Lab provides 2 rounds of revisions for website development; additional changes billed hourly. Project timelines extend proportionally for client feedback/content delays. Complete handoff includes training, documentation, and support to ensure smooth launch and ongoing success with your new digital asset.",
      color: "from-orange-500 to-orange-600",
      category: "services"
    },
    {
      id: 'marketing',
      icon: <FaChartLine className="text-3xl text-secondary" />,
      title: "📈 DigiPrime Lab Marketing",
      content: "DigiPrime Lab delivers monthly SEO services and digital marketing performance reports with key metrics. All strategies comply with Google Webmaster Guidelines. Client-provided content must meet quality standards; no guarantees for exact rankings due to search engine volatility.",
      color: "from-yellow-500 to-yellow-600",
      category: "services"
    },
    {
      id: 'accounting',
      icon: <FaCalculator className="text-3xl text-secondary" />,
      title: "⚖️ DigiPrime Lab Accounting",
      content: "DigiPrime Lab accounting services rely on accurate client financial data, adhering to Indian GAAP, GST regulations. We ensure enterprise-grade security and confidentiality but cannot verify outcomes from erroneous inputs. Comprehensive bookkeeping, tax compliance, and reporting included.",
      color: "from-red-500 to-red-600",
      category: "services"
    },
    {
      id: 'confidentiality',
      icon: <FaLock className="text-3xl text-secondary" />,
      title: "🔒 DigiPrime Lab Confidentiality",
      content: "DigiPrime Lab upholds strict NDA protocols, protecting all client business strategies, accounting services data, campaign details, and sensitive information with bank-level encryption and secure servers.",
      color: "from-indigo-500 to-indigo-600",
      category: "legal"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Terms', icon: '📋' },
    { id: 'general', name: 'General', icon: '✨' },
    { id: 'services', name: 'Services', icon: '🛠️' },
    { id: 'financial', name: 'Financial', icon: '💰' },
    { id: 'legal', name: 'Legal', icon: '⚖️' }
  ];

  const filteredSections = activeTab === 'all' 
    ? sections 
    : sections.filter(section => section.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Terms & Conditions
          </h1>
          <p className="text-secondary font-semibold mb-2">
            Updated: March 5, 2026
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using DigiPrime Lab services. 
            By engaging our services, you agree to be bound by these terms and conditions.
          </p>
        </motion.div>

        {/* Quick Acceptance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-6 mb-8 shadow-xl"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <FaFileContract className="text-4xl text-secondary" />
              <div>
                <h2 className="text-xl font-bold">Agreement to Terms</h2>
                <p className="text-gray-200 text-sm">
                  By accessing or using DigiPrime Lab services, you confirm your acceptance of these terms.
                </p>
              </div>
            </div>
            <button className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              I Accept
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeTab === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${section.color} p-4`}>
                <div className="flex items-center space-x-3">
                  {section.icon}
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Terms Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Detailed Terms & Conditions</h2>
          
          <div className="space-y-6">
            {/* Service Agreement */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">1. Service Agreement</h3>
              <p className="text-gray-700 mb-2">
                By engaging DigiPrime Lab for any services including but not limited to digital marketing, 
                website development, SEO services, IT solutions, and accounting services, you enter into a 
                legally binding agreement subject to these terms.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>Service scope defined in project proposal/contract</li>
                <li>Changes to scope require written amendment</li>
                <li>Client cooperation necessary for timely delivery</li>
                <li>DigiPrime Lab reserves right to refuse service</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">2. Payment Terms</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-primary">40%</span>
                  <span className="text-sm text-gray-600">Project Confirmation</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-primary">40%</span>
                  <span className="text-sm text-gray-600">Work Starting</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-primary">20%</span>
                  <span className="text-sm text-gray-600">Final Delivery</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>15-day grace period after invoice</li>
                <li>2% monthly late fee applies thereafter</li>
                <li>Services non-refundable after commencement</li>
                <li>Payment plans available for long-term projects</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">3. Intellectual Property Rights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Client Retains</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Pre-existing content & materials</li>
                    <li>Brand assets (logos, trademarks)</li>
                    <li>Business data & strategies</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">DigiPrime Lab Transfers</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Website code upon final payment</li>
                    <li>Marketing strategies & designs</li>
                    <li>Deliverables as specified</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                * DigiPrime Lab reserves portfolio rights for project showcase
              </p>
            </div>

            {/* Client Responsibilities */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">4. Client Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide accurate and timely information</li>
                <li>Review and feedback within agreed timelines</li>
                <li>Ensure content quality standards</li>
                <li>Maintain confidentiality of access credentials</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-3">5. Limitation of Liability</h3>
              <p className="text-gray-700 mb-2">
                DigiPrime Lab shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Third-party claims</li>
                <li>Search engine ranking changes</li>
                <li>Service interruptions beyond our control</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                Maximum liability limited to amount paid for services
              </p>
            </div>

            {/* Termination */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-3">6. Termination</h3>
              <p className="text-gray-700 mb-2">
                Either party may terminate agreement:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>With 30 days written notice</li>
                <li>Immediately for material breach</li>
                <li>Upon mutual written consent</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                Termination doesn't affect accrued rights or payment obligations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaCheckCircle className="text-yellow-600" />
              <h3 className="font-semibold text-yellow-800">No Guarantees</h3>
            </div>
            <p className="text-sm text-yellow-700">
              Rankings, traffic, and outcomes vary due to market factors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaCheckCircle className="text-blue-600" />
              <h3 className="font-semibold text-blue-800">Data Security</h3>
            </div>
            <p className="text-sm text-blue-700">
              Bank-level encryption for all sensitive data
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaCheckCircle className="text-green-600" />
              <h3 className="font-semibold text-green-800">Transparency</h3>
            </div>
            <p className="text-sm text-green-700">
              Monthly performance tracking and reporting
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="bg-primary rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Questions About Our Terms?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:legal@digiprimelab.com" className="text-gray-300 hover:text-secondary transition">
                legal@digiprimelab.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-2xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+919339643434" className="text-gray-300 hover:text-secondary transition">
                +91 93396 43434
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Kolkata, West Bengal, India</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-300">
              For legal inquiries, please contact our Legal Department at{' '}
              <a href="mailto:legal@digiprimelab.com" className="text-secondary hover:underline">
                legal@digiprimelab.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} DigiPrimeLab. All rights reserved.</p>
          <p className="mt-2">
            These terms were last updated on March 5, 2026. By continuing to use our services, 
            you acknowledge that you have read and understood these terms.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;