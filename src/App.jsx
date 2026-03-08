import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Preloader from './components/common/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Topbar from './components/layout/Topbar';
import BackToTop from './components/common/BackToTop';
import FAQ from './pages/FAQ ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import VisionMission from './pages/VisionMission';
import Tool from './pages/Tool';
import DigitalMarketing from './pages/DigitalMarketing';
import Accounting from './pages/Accounting';
import WebDevelopmentApp from './pages/WebDevelopmentApp';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Team = lazy(() => import('./pages/Team'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Topbar />
          <Navbar />
          
          {/* Main Content with Suspense for lazy loading */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/faqs" element={<FAQ/>} />
                <Route path="/privacy" element={<PrivacyPolicy/>} />
                <Route path="/terms" element={<TermsConditions/>} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/tools" element={<Tool />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
                <Route path="/services/accounting-services" element={<Accounting/>} />
                <Route path="/services/web-development-app" element={<WebDevelopmentApp/>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <BackToTop />
        </div>
      )}
    </Router>
  );
}

export default App;

