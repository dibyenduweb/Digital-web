import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Debug: Check if env variables are loaded
  console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 5) + '...');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Get form data for debugging
    const formData = new FormData(formRef.current);
    console.log('Form Data:', {
      name: formData.get('name'),
      email: formData.get('email'),
      project: formData.get('project'),
      message: formData.get('message')
    });

    // Check if env variables exist
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS credentials');
      setSubmitStatus('error');
      setStatusMessage('Configuration error. Please check console.');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
    .then((result) => {
      console.log('✅ Email sent successfully:', result.text);
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('❌ Email error:', error);
      console.error('Error details:', error.text || error.message);
      
      // Handle specific errors
      if (error.text?.includes('service ID not found')) {
        setStatusMessage('Service ID not found. Please check EmailJS configuration.');
      } else if (error.text?.includes('template')) {
        setStatusMessage('Template ID not found. Please check EmailJS configuration.');
      } else {
        setStatusMessage('Failed to send message. Please try again later.');
      }
      
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h5 className="text-secondary font-semibold mb-2">Get In Touch</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Contact for any query
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Send us a message and we'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {[
          { icon: FaMapMarkerAlt, title: 'Address', info: 'Kolkata', link: 'https://goo.gl/maps/Zd4BCynmTb98ivUJ6' },
          { icon: FaPhone, title: 'Call Us', info: '+91 93396 43434', link: 'tel:+919339643434' },
          { icon: FaEnvelope, title: 'Email Us', info: 'digiprimelab@gmail.com', link: 'mailto:digiprimelab@gmail.com' },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <item.icon className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="text-primary font-bold">{item.title}</h4>
              <p className="text-gray-600">{item.info}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.044938844535!2d88.42938857507832!3d22.5726389795105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c2d%3A0xe7ceb8b5d5b5c5b5!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kolkata location"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-50 rounded-lg p-8 shadow-lg"
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="project"
                placeholder="Project"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
              ></textarea>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg animate-pulse">
                ✓ {statusMessage}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                ✗ {statusMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;