import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaWhatsapp, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});

  const categories = [
    { id: 'all', name: 'All Services', icon: '🔍' },
    { id: 'seo', name: 'SEO', icon: '📈' },
    { id: 'ads', name: 'Meta & Google Ads', icon: '📱' },
    { id: 'web', name: 'Web Development', icon: '💻' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'account', name: 'Accounts & GST', icon: '💰' },
    { id: 'itr', name: 'ITR & Tax', icon: '📊' },
    { id: 'fund', name: 'Fund Registration', icon: '🏦' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'seo',
      question: 'What SEO services does DigiPrime Lab offer?',
      answer: 'DigiPrime Lab SEO services comprehensive keyword research diye shuru – high volume, low competition terms khuje ber kori. On-page e title tags, meta descriptions, H1-H2, internal linking perfect kori. Technical SEO te Core Web Vitals, schema markup, hreflang implement kori. Off-page e guest posts, HARO, resource pages diye quality backlinks build kori. Local SEO te Google Business Profile, citations, reviews optimize kori. Monthly ranking reports, organic traffic growth, conversion tracking dekhanu hoy. DigiPrime Lab algorithm updates er jonno always prepared thake visible results 3-6 months e.'
    },
    {
      id: 2,
      category: 'ads',
      question: 'How do Meta Ads work with DigiPrime Lab?',
      answer: 'DigiPrime Lab Meta Ads Facebook Pixel install kore custom/lookalike audiences banay. Carousel, video, collection ads A/B test kore best creatives scale kori. TOFU-MOFU-BOFU funnel follow kore budget 70% conversion, 30% awareness e rakhi. Cart abandonment, website visitors ke retarget kori. iOS14+ tracking er jonno Aggregated Event Measurement optimize kori. ROAS 4x+ achieve korle budget gradually increase kori. Weekly performance review calls client input niye. DigiPrime Lab conversion value, cost per result improve kore scaling strategy banay.'
    },
    {
      id: 3,
      category: 'ads',
      question: 'What Google Ads expertise does DigiPrime Lab have?',
      answer: 'DigiPrime Lab Google Ads Search e exact/phrase match, RSLA, Smart Bidding use kore. Display e affinity/custom intent audiences target kori. Shopping Ads e Merchant Center feed optimize kore GTIN, product title fix kori. Performance Max e asset group testing korte pari. Negative keywords weekly audit, Quality Score 8+ maintain kori. Offline conversion import, enhanced conversions setup kori. Landing page experience improve kore CTR boost kori. DigiPrime Lab Google Partner certified experts 30% better ROAS deliver guarantee kore.'
    },
    {
      id: 4,
      category: 'web',
      question: 'What is included in Custom Website Development?',
      answer: 'DigiPrime Lab Custom website responsive HTML/CSS/JS frontend, PHP/Laravel/Node.js backend diye banay. MySQL/MongoDB database integration, REST API development korte pare. E-commerce er jonno Razorpay/PayPal gateway, inventory system build kori. Admin panel e user roles, analytics dashboard, CRUD operations add kori. SEO friendly URLs, schema markup, PageSpeed 95+ ensure kori. Security e SQL injection, XSS, CSRF protection implement kori. AWS/DigitalOcean cloud hosting 99.9% uptime diye. DigiPrime Lab complete source code handover ar 30 days free support dite pare.'
    },
    {
      id: 5,
      category: 'web',
      question: 'Do you create WordPress websites?',
      answer: 'DigiPrime Lab WordPress website Elementor/Pro customize kore pixel-perfect design banay. WP Rocket caching, Cloudflare CDN, Smush WebP optimization diye speed boost kori. Wordfence security, daily malware scan, 2FA login setup kori. Yoast SEO complete configuration, sitemap, robots.txt banay. Custom post types, ACF fields diye unique functionality add kori. Child theme use kore updates safe rakhi. PageSpeed Insights 95+ score guarantee kori. DigiPrime Lab 12 months free theme/plugin updates, security monitoring, monthly backup service dite chai.'
    },
    {
      id: 6,
      category: 'security',
      question: 'What Web Security services do you provide?',
      answer: 'DigiPrime Lab Web Security Let\'s Encrypt SSL, HTTP/2 enable kore. Sucuri/Malcare diye malware scan ar removal korte pare. Cloudflare WAF, DDoS protection, brute force block setup kori. Security headers CSP, HSTS, X-Frame-Options implement kori. WPScan/Nessus vulnerability scanning regular korte hoi. Database strong passwords, limited privileges rakhi. File permissions 644/755 set, .htaccess harden kori. UpdraftPlus daily backup automation schedule kori. DigiPrime Lab security breach er khetre 24-hour emergency response guarantee kore.'
    },
    {
      id: 7,
      category: 'account',
      question: 'What Account services does DigiPrime Lab offer?',
      answer: 'DigiPrime Lab Account services daily bookkeeping, bank reconciliation, expense categorization shuru kore. Tally/QuickBooks e GST voucher entry, inventory valuation, ageing analysis banay. Monthly Trial Balance, P&L, Balance Sheet generate kore. Cash flow, ratio analysis, working capital reports prepare kori. Statutory audit preparation er jonno ledgers organize rakhi. MIS dashboard Google Sheets/Excel e real-time share kori. DigiPrime Lab 100% accurate financial reporting, tax planning, budget variance analysis complete support dite pare management decisions er jonno.'
    },
    {
      id: 8,
      category: 'account',
      question: 'Are your GST services compliant?',
      answer: 'DigiPrime Lab GST GSTR-1, GSTR-3B, GSTR-9C annual return complete filing kore. GSTR-2A/2B vs purchase register ITC reconciliation monthly check kori. E-way bill >50k transactions er jonno generate kore. Composition scheme, quarterly return compliance handle kori. Export LUT filing, IGST refund claim process korte pare. Anti-profiteering, ITC reversal calculations accurate rakhi. DigiPrime Lab GST notices, scrutiny, assessment response, departmental audit preparation complete support dite pare statutory records maintain kore.'
    },
    {
      id: 9,
      category: 'itr',
      question: 'Do you handle ITR filing?',
      answer: 'DigiPrime Lab ITR filing Form 16, AIS, TIS analysis diye shuru kore. ITR-1 salaried, ITR-2 capital gains, ITR-3 business, ITR-4 presumptive cover kori. 80C-80U deductions maximize, exemptions claim kore. LTCG/STCG computation, Schedule CG, foreign assets FA disclose kori. TDS mismatch resolution, belated returns handle kori. Aadhaar OTP/DSC e-verification complete kore. DigiPrime Lab refund tracking, advance tax calculation, next year planning support dite pare complete tax compliance ensure kore.'
    },
    {
      id: 10,
      category: 'fund',
      question: 'What fund registration services are available?',
      answer: 'DigiPrime Lab fund registration SEBI Category I/II/III AIF, PMS Category II complete process handle kore. MOA/AOA, trustee appointment, net worth certificate prepare kori. Sponsor contribution 10cr+ arrange korte help kori. Compliance officer, investor grievance mechanism setup kori. PFRDA/IRDA/RBI schemes er jonno product approval documentation banay. DigiPrime Lab AMFI membership, mutual fund registration, portfolio manager license complete guide dite pare regulatory compliance ensure kore.'
    },
    {
      id: 11,
      category: 'seo',
      question: 'How much do SEO services cost?',
      answer: 'DigiPrime Lab SEO services packages industry-wise vary kore – local business ₹15k-25k/month, e-commerce ₹30k-60k, enterprise ₹1L+. Keyword research, competitor analysis, technical audit included. First 3 months foundation building e focus – indexing, content gaps, backlink profile. Month 4+ ranking momentum dekha jay. ROI track korte Google Analytics 4, Search Console integrate kori. DigiPrime Lab 6 months contract recommend kore – 3x organic traffic growth realistic target industry benchmark er against.'
    },
    {
      id: 12,
      category: 'ads',
      question: 'Can you manage both Meta Ads and Google Ads?',
      answer: 'DigiPrime Lab integrated Meta Ads + Google Ads strategy banay – upper funnel Meta awareness, lower funnel Google conversion focus. Cross-platform retargeting pixel sync kore. Budget allocation 60% Google direct response, 40% Meta branding rakhi. Weekly incrementality tests chalay unified ROAS track kori. Creative refresh cycles, landing page consistency maintain kori. DigiPrime Lab multi-channel attribution modeling diye true incrementality measure kore blended campaign performance optimize kori maximum business impact er jonno.'
    },
    {
      id: 13,
      category: 'web',
      question: 'How long for Custom Website completion?',
      answer: 'DigiPrime Lab Custom website timeline complexity-wise vary kore – brochure site 3-4 weeks, e-commerce 6-8 weeks, enterprise 12+ weeks. Week 1: wireframes ar design approval. Week 2-3: frontend development. Week 4: backend integration testing. Client feedback loops 48 hours e resolve korte hoi. Final QA, security audit, SEO setup Week 5 complete kore. DigiPrime Lab parallel development + staging environment diye 20% faster delivery ensure kori industry standard er against.'
    },
    {
      id: 14,
      category: 'web',
      question: 'Is WordPress better than custom websites?',
      answer: 'DigiPrime Lab WordPress website faster launch (2-3 weeks), lower cost (50% less), easier content management er jonno perfect small-medium business er jonno. Custom website unique functionality, high scale, complex integrations (ERP, CRM) er jonno enterprise er jonno best. WordPress 43% market share, unlimited plugins, huge community support pai. Custom solution 100% code ownership, better performance, security control dite pare. DigiPrime Lab business goals, budget, technical requirements analysis kore right technology recommend kore.'
    },
    {
      id: 15,
      category: 'security',
      question: 'How do you ensure Web Security?',
      answer: 'DigiPrime Lab Web Security multi-layer approach – SSL/TLS 1.3, HSTS preload, CSP headers implement kori. Cloudflare WAF rules customize kore OWASP Top 10 block kori. Daily Sucuri scans, weekly vulnerability patches apply kori. Database encryption at rest, strong access controls rakhi. File upload validation, rate limiting, CAPTCHA implement kori. Security audit quarterly penetration testing include kore. DigiPrime Lab zero-trust architecture, employee training, incident response plan diye 99.99% uptime guarantee kore.'
    },
    {
      id: 16,
      category: 'account',
      question: 'What GST registration process do you follow?',
      answer: 'DigiPrime Lab GST registration PAN, Aadhaar, bank statement, address proof diye online portal e apply kore. Provisional ID generate kore, PAN link korte hoi. DSC upload, business details verify kore. ARN generate 3 days e, GSTIN 7 working days e issue hoy. HSN codes, place of supply configure kori. DigiPrime Lab threshold limit monitoring, voluntary registration advisory, multi-state registration complete process handle kore compliance ensure kore business growth er jonno.'
    },
    {
      id: 17,
      category: 'itr',
      question: 'Which ITR forms do you file?',
      answer: 'DigiPrime Lab ITR filing ITR-1 salaried (50L<), ITR-2 HUF/capital gains, ITR-3 business/professionals, ITR-4 presumptive 50L<, ITR-5 firms/LLP, ITR-6 companies, ITR-7 trusts cover kori. Schedule BP business profit, AL capital gains, FA foreign assets complete fill up kori. Presumptive schemes 44AD/44ADA/44AE calculations accurate rakhi. DigiPrime Lab belated returns, revised returns, TDS mismatch resolution, refund tracking complete support dite pare.'
    },
    {
      id: 18,
      category: 'fund',
      question: 'What documents needed for fund registration?',
      answer: 'DigiPrime Lab fund registration er jonno MOA/AOA, board resolution, net worth certificate, sponsor agreement, risk management policy, investor grievance charter lage. KRA-KYC, PPM, fee structure, custodian agreement prepare korte hoi. SEBI Category I/II/III er jonno minimum corpus, sponsor contribution proof submit kori. Compliance officer CV, auditor appointment letter attach korte hoi. DigiPrime Lab complete documentation checklist, filing process, approval tracking handle kore regulatory compliance ensure kore.'
    },
    {
      id: 19,
      category: 'all',
      question: 'Do you offer bundled services?',
      answer: 'DigiPrime Lab bundles SEO services + Google Ads + WordPress website 25% discount e dite pare. GST + ITR filing + Account services combo annual subscription savings. Web Security + Custom website enterprise package complete digital transformation cover kore. Cross-selling er jonno Meta Ads + SEO local business growth package banay. DigiPrime Lab service synergy leverage kore maximum ROI ensure kori single point contact diye hassle-free execution deliver kore.'
    },
    {
      id: 20,
      category: 'all',
      question: 'How to start with DigiPrime Lab services?',
      answer: 'DigiPrime Lab shuru korte digiprimelab@gmail.com e "Free Audit" subject e email koro ba WhatsApp +91 9339643434 e message. 24 hours e free website/SEO/GST audit report pabe. 30-minute strategy call book kore business goals discuss koro. Custom proposal 48 hours e receive korbe. DigiPrime Lab 40% advance payment er por same day project kickoff shuru kore. Weekly progress updates, monthly performance reports guarantee kori. DigiPrime Lab risk-free 15-day satisfaction guarantee dite pare.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
          <h5 className="text-secondary font-semibold mb-2">FAQ</h5>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-secondary shadow-lg"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              <motion.div
                key={activeCategory + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-primary pr-8">{faq.question}</span>
                      {openItems[faq.id] ? (
                        <FaChevronUp className="text-secondary flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-secondary flex-shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openItems[faq.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:digiprimelab@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <FaEnvelope />
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/919339643434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'FAQs', value: faqs.length },
            { label: 'Services', value: '8+' },
            { label: 'Happy Clients', value: '100+' },
            { label: 'Response Time', value: '< 24h' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;