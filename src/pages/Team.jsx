import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import teams4 from "../assets/images/4.png";
import teams3 from "../assets/images/3.png";
import teams2 from "../assets/images/2.png";
import teams5 from "../assets/images/5.jpg";

/* ================= TEAM (FOUNDERS) ================= */
const team = [
  { 
    id: 1, 
    name: 'Mr. Ranjit Haldar', 
    designation: 'Founder & CEO & Chief Marketing Officer',
    image: teams4
  },
  { 
    id: 2, 
    name: 'Mr. Debayan Majhi', 
    designation: 'Co-Founder & Chief Operating Officer', 
    image: teams3
  },
  { 
    id: 3, 
    name: 'Mr. Dibyendu Pramanik', 
    designation: 'Full Stack Developer',
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFwkOl1CMF3CA/profile-displayphoto-scale_400_400/B4DZuyi6AWJcAg-/0/1768227058091?e=1777507200&v=beta&t=V5r14WcHbv5Sob5Pz1FvmTekfXOOqaQzfr-UofM8kv8" 
  },
  { 
    id: 4, 
    name: 'Mr. Pulak Pramanik', 
    designation: 'Chief Security Officer (CSO)', 
    image: teams5
  },
];

/* ================= EMPLOYEES ================= */
const employees = [
  {
    id: 1,
    name: 'Ankita Verma',
    role: 'Digital Marketing Expert',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
    linkedin: '#',
    desc: 'SEO, Google Ads & lead generation specialist with 5+ years experience.'
  },
  {
    id: 2,
    name: 'Sayan Day',
    role: 'Digital Marketing Expert',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    linkedin: '#',
    desc: 'Social media strategist focused on Facebook & Instagram growth campaigns.'
  },
  {
    id: 3,
    name: 'Rahima Sheikh',
    role: 'Digital Marketing Expert',
    image: 'https://img.freepik.com/premium-vector/vector-muslim-woman-avatar-female-vector-arab-people-icon-saudi-character-minimalistic-simple-flat_615232-2336.jpg',
    linkedin: '#',
    desc: 'Performance marketer specializing in conversion optimization & analytics.'
  },
  {
    id: 4,
    name: 'Riya Das',
    role: 'Frontend Developer',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/004/899/833/small/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg',
    linkedin: '#',
    desc: 'React & UI developer creating modern, responsive interfaces.'
  },
  {
    id: 5,
    name: 'Neha Roy',
    role: 'Backend Developer',
    image: 'data:image/jpeg;base64,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',
    linkedin: '#',
    desc: 'Node.js & database expert building scalable backend systems.'
  },
  {
    id: 6,
    name: 'Riya Sen',
    role: 'UI/UX Designer (Figma)',
    image: 'https://img.freepik.com/free-vector/smiling-woman-with-glasses_1308-177859.jpg?semt=ais_hybrid&w=740&q=80',
    linkedin: '#',
    desc: 'Creative designer crafting user-friendly UI/UX using Figma.'
  }
];

const TeamPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h5 className="text-secondary font-semibold mb-2">Our Team</h5>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet our expert Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our leadership and expert team work together to deliver powerful digital solutions.
          </p>
        </motion.div>

        {/* ================= TEAM GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Social Icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-secondary">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= EMPLOYEES SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h5 className="text-secondary font-semibold mb-2">Our Employees</h5>
            <h2 className="text-4xl font-bold text-primary">
              Meet Our Dedicated Team Members
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((emp, index) => (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-secondary"
                />

                <h3 className="text-xl font-bold text-gray-800">{emp.name}</h3>
                <p className="text-secondary mb-2">{emp.role}</p>

                <p className="text-gray-600 text-sm mb-4">
                  {emp.desc}
                </p>

                <a
                  href={emp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-secondary"
                >
                  <FaLinkedinIn />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary rounded-xl p-8 text-white"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary">25+</div>
            <p>Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary">5+</div>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary">228+</div>
            <p>Projects Done</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary">24/7</div>
            <p>Support</p>
          </div>
        </motion.div>

        {/* ================= JOIN TEAM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center bg-white rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. If you're passionate about tech & marketing, join us.
          </p>
        <button
  onClick={() => window.open('https://forms.gle/tvvzkHHz1dcPpbU68', '_blank')}
  className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 font-semibold"
>
  We are Hiring
</button>
        </motion.div>

      </div>
    </div>
  );
};

export default TeamPage;