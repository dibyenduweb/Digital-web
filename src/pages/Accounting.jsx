import React from 'react';
import { 
  FaBook, 
  FaFileInvoice, 
  FaHandHoldingHeart, 
  FaClipboardCheck, 
  FaFileAlt, 
  FaUsers,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaRupeeSign,
  FaArrowRight,
  FaChartLine,
  FaBuilding,
  FaUserTie,
  FaBalanceScale,
  FaShieldAlt,
  FaCalculator,
  FaFileSignature,
  FaHandshake,
  FaRocket,
  FaStar
} from 'react-icons/fa';

const Accounting = () => {
  const services = [
    {
      icon: <FaFileInvoice className="text-4xl text-blue-600" />,
      title: "GST Filing & Compliance",
      description: "Complete monthly GST management with timely submissions and maximum Input Tax Credit optimization.",
      features: [
        "GSTR-1 & GSTR-3B timely submissions",
        "GSTR-2A/2B reconciliation",
        "Input Tax Credit maximization",
        "E-way bill generation",
        "Quarterly GSTR-9 preparation"
      ],
      result: "Saved clients ₹25K+ in penalties",
      price: "Starting ₹2,999/month"
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-blue-600" />,
      title: "NGO/Trust/Society Registration",
      description: "Fast West Bengal approvals with complete documentation and compliance assistance.",
      features: [
        "Trust registration documentation",
        "Society registration – MoA/AoA preparation",
        "12A + 80G certificates – Tax exemptions",
        "FCRA licensing – Foreign funding",
        "NGO compliance audits"
      ],
      result: "50+ NGOs registered",
      price: "Starting ₹4,999"
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-blue-600" />,
      title: "Audit Preparation",
      description: "Comprehensive audit readiness for all types of statutory and compliance requirements.",
      features: [
        "Tax Audit (Section 44AB)",
        "NGO compliance audits",
        "Statutory audits",
        "Internal process reviews",
        "Audit report preparation"
      ],
      result: "100% compliance guaranteed",
      price: "Starting ₹3,999"
    },
    {
      icon: <FaFileAlt className="text-4xl text-blue-600" />,
      title: "ITR Filing",
      description: "Maximum tax savings with professional ITR filing for individuals and businesses.",
      features: [
        "Salaried – HRA, 80C deductions",
        "Freelancers – Business expenses",
        "Business owners – P&L optimization",
        "Capital gains calculation",
        "Income from other sources"
      ],
      result: "Maximum tax savings",
      price: "Starting ₹999"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Payroll Processing",
      description: "Hassle-free salary management with full statutory compliance.",
      features: [
        "WB professional tax",
        "PF/ESIC compliance",
        "Payslip generation",
        "Bank coordination",
        "Yearly Form 16 preparation"
      ],
      result: "Zero compliance errors",
      price: "Starting ₹1,999/month"
    },
    {
      icon: <FaBalanceScale className="text-4xl text-blue-600" />,
      title: "Financial Accounting",
      description: "Complete bookkeeping and financial statement preparation for informed decisions.",
      features: [
        "Balance sheet preparation",
        "P&L statements",
        "Cash flow tracking",
        "Ledger maintenance",
        "Financial ratio analysis"
      ],
      result: "Clear financial picture",
      price: "Starting ₹2,499/month"
    }
  ];

  const accountingTypes = [
    {
      type: "Financial Accounting",
      purpose: "External reporting",
      examples: "Balance sheets, P&L statements"
    },
    {
      type: "Tax Accounting",
      purpose: "Compliance",
      examples: "GST filing, ITR preparation"
    },
    {
      type: "Management Accounting",
      purpose: "Internal decisions",
      examples: "Cost analysis, budgeting"
    },
    {
      type: "Audit Accounting",
      purpose: "Verification",
      examples: "Tax audit, statutory audit"
    },
    {
      type: "Non-Profit Accounting",
      purpose: "NGO compliance",
      examples: "12A/80G reporting"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaBuilding className="text-3xl text-white" />,
      title: "Kolkata Experts",
      description: "Local regulation masters with deep understanding of West Bengal compliance"
    },
    {
      icon: <FaHandshake className="text-3xl text-white" />,
      title: "50+ NGOs Registered",
      description: "Proven track record with trust and society registrations"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "100% Compliance",
      description: "Zero penalties guaranteed with our expert oversight"
    },
    {
      icon: <FaUserTie className="text-3xl text-white" />,
      title: "Free Consultation",
      description: "GST/NGO health check at no cost"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Free Assessment",
      description: "We review your financial records and identify compliance requirements"
    },
    {
      step: "02",
      title: "Custom Plan",
      description: "Tailored compliance strategy based on your business needs"
    },
    {
      step: "03",
      title: "Expert Execution",
      description: "Timely filings, reports, and documentation with precision"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Monthly guidance and proactive compliance monitoring"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Local Retailer, Kolkata",
      comment: "Saved ₹30K GST penalties with DigiPrime Lab's expert GST filing service. Highly professional team!",
      rating: 5,
      icon: <FaStar className="text-yellow-400" />
    },
    {
      name: "Anjali Sharma",
      business: "Anjali Trust",
      comment: "Got our 12A/80G certificates in just 32 days! Fastest NGO registration in West Bengal.",
      rating: 5,
      icon: <FaStar className="text-yellow-400" />
    },
    {
      name: "Priyanka Das",
      business: "Freelancer, Howrah",
      comment: "ITR filing was smooth and they found deductions I didn't know existed. Maximum refund!",
      rating: 5,
      icon: <FaStar className="text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Accounting Services – <span className="text-yellow-400">DigiPrime Lab</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Professional accounting, GST filing, NGO registration & tax compliance in Kolkata
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">
                  Free Consultation <FaArrowRight className="ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-900 transition">
                  Get GST Checklist
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <FaCalculator className="text-4xl text-yellow-400 mr-4" />
                  <h3 className="text-2xl font-bold">What is Accounting?</h3>
                </div>
                <p className="text-lg mb-4">
                  Accounting is the systematic process of recording, analyzing, and reporting financial transactions. It tracks income, expenses, assets, liabilities, and cash flow to ensure business compliance, tax optimization, and informed decision-making.
                </p>
                <p className="text-emerald-200">
                  For Kolkata businesses, NGOs, and professionals, proper accounting prevents penalties and simplifies audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Accounting Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of <span className="text-emerald-600">Accounting Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every financial need
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Purpose</th>
                  <th className="px-6 py-4 text-left font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {accountingTypes.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.type}</td>
                    <td className="px-6 py-4 text-gray-600">{item.purpose}</td>
                    <td className="px-6 py-4 text-gray-600">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              DigiPrime Lab specializes in <span className="font-bold text-emerald-600">accounting services in Kolkata</span> covering GST filing, NGO registration, audit preparation, ITR filing, and payroll processing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-600">5 Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional accounting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <div className="group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <FaCheckCircle className="text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-emerald-600 text-sm font-medium">+{service.features.length - 3} more</li>
                    )}
                  </ul>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {service.result}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-800 flex items-center">
                        <FaRupeeSign className="text-emerald-600" />
                        {service.price}
                      </span>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center">
                        Learn More <FaArrowRight className="ml-1 text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DigiPrime Lab */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why DigiPrime Lab?</h2>
            <p className="text-xl text-emerald-100">Your trusted accounting partner in Kolkata</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition">
                <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-emerald-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600">Simple 4-step approach to financial compliance</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-emerald-600 text-white text-2xl font-bold w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-gray-600 text-center md:text-left">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-20 w-full h-0.5 bg-emerald-200">
                    <FaArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client <span className="text-emerald-600">Success Stories</span>
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
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <FaUserTie className="text-emerald-600 text-xl" />
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get Compliant Now!
                </h2>
                <p className="text-xl text-emerald-100 max-w-2xl">
                  Accounting services in Kolkata – FREE consultation today!
                </p>
                <div className="mt-6 space-y-3 text-emerald-100">
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
                    <span className="text-lg">WhatsApp: Free GST checklist</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 min-w-[250px]">
                <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                  Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-700 transition">
                  Get GST Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Accounting;