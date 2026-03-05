import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaCookie, FaUserShield, 
  FaGlobe, FaLock, FaHandshake, FaFileContract,
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaShieldAlt className="text-4xl text-secondary" />,
      title: "🔍 DigiPrime Lab Data Collection",
      content: "DigiPrime Lab collects: contact info (name, email, phone), business details, financial data for accounting services, website usage analytics, digital marketing campaign performance. Data collected via forms, emails, service contracts, Google Analytics, payment gateways.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaUserShield className="text-4xl text-secondary" />,
      title: "🛡️ DigiPrime Lab Data Usage",
      content: "DigiPrime Lab uses data for: service delivery (website development, SEO services), campaign optimization, accounting services processing, client communication, performance reporting. We never sell/rent personal data to third parties.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaLock className="text-4xl text-secondary" />,
      title: "🔒 DigiPrime Lab Data Security",
      content: "DigiPrime Lab employs 256-bit SSL encryption, enterprise firewalls, secure servers for all accounting services financial data. Regular security audits, employee NDAs, access controls protect your information from unauthorized access.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaGlobe className="text-4xl text-secondary" />,
      title: "🌐 DigiPrime Lab Third Parties",
      content: "DigiPrime Lab shares data only with: payment processors, hosting providers, Google Analytics (anonymized), legal authorities (if required). All partners bound by strict confidentiality agreements.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaCookie className="text-4xl text-secondary" />,
      title: "📧 DigiPrime Lab Cookies",
      content: "DigiPrime Lab uses functional cookies for website development performance, marketing cookies for SEO services tracking, analytics cookies for user behavior. Manage preferences via browser settings.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaHandshake className="text-4xl text-secondary" />,
      title: "📋 DigiPrime Lab Client Rights",
      content: "Access, correct, delete your data anytime. DigiPrime Lab responds within 30 days. Accounting services financial records retained 7 years per statutory requirements. GDPR-compliant for international clients.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaFileContract className="text-4xl text-secondary" />,
      title: "🌍 DigiPrime Lab International Transfers",
      content: "DigiPrime Lab stores data on secure Indian servers. International clients consent to data transfer under standard contractual clauses ensuring equivalent protection levels.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

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
            Privacy Policy
          </h1>
          <p className="text-secondary font-semibold mb-2">
            Last Updated: March 5, 2026
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            DigiPrimeLab respects your privacy. This policy explains how we collect, use, and protect data 
            when you use our digital marketing services, website development, SEO services, IT solutions, 
            and accounting services.
          </p>
        </motion.div>

        {/* Quick Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 mb-12 shadow-xl"
        >
          <div className="flex items-start space-x-4">
            <FaShieldAlt className="text-5xl text-secondary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-200">
                At DigiPrimeLab, we take your privacy seriously. We are committed to protecting your personal 
                information and being transparent about how we use it. This policy outlines our practices 
                regarding data collection, usage, and protection across all our services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
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

        {/* Detailed Information Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Detailed Information</h2>
          
          <div className="space-y-6">
            {/* Data Collection Details */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-2">What We Collect</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Contact Information: Name, email address, phone number</li>
                <li>Business Details: Company name, GST number, business type</li>
                <li>Financial Data: Bank details, transaction records (for accounting services)</li>
                <li>Technical Data: IP address, browser type, device information</li>
                <li>Usage Data: Website interactions, campaign performance metrics</li>
              </ul>
            </div>

            {/* How We Use Data */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-2">How We Use Your Data</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Service Delivery: Website development, SEO optimization, digital marketing</li>
                <li>Accounting: GST filing, ITR preparation, financial reporting</li>
                <li>Communication: Project updates, newsletters, service notifications</li>
                <li>Improvement: Analytics to enhance our services and user experience</li>
              </ul>
            </div>

            {/* Data Protection Measures */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-secondary mb-2">Security Measures</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Enterprise-grade firewalls and intrusion detection systems</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee confidentiality agreements and access controls</li>
                <li>Secure data centers with 24/7 monitoring</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Your Rights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request data deletion (subject to legal retention)</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-primary rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Questions About Your Privacy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:digiprimelab@gmail.com" className="text-gray-300 hover:text-secondary transition">
                digiprimelab@gmail.com
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
              For privacy-related inquiries, please contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@digiprimelab.com" className="text-secondary hover:underline">
        digiprimelab@gmail.com              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} DigiPrimeLab. All rights reserved.</p>
          <p className="mt-2">
            This privacy policy was last updated on March 5, 2026. We may update this policy periodically.
            Please check back for any changes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;