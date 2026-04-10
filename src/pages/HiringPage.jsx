import React from "react";
import { motion } from "framer-motion";

const HiringPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-primary text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team 🚀
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We are looking for passionate developers, marketers & designers.
            Build your career with us and work on exciting real-world projects.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Join Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunity",
                desc: "Work on real projects and grow your skills fast."
              },
              {
                title: "Friendly Team",
                desc: "Collaborative and supportive work environment."
              },
              {
                title: "Flexible Work",
                desc: "Remote-friendly and flexible working hours."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= OPEN ROLES =================
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Digital Marketing Expert",
              "Frontend Developer (React)",
              "Backend Developer (Node.js)",
              "UI/UX Designer (Figma)"
            ].map((role, i) => (
              <div
                key={i}
                className="border rounded-lg p-5 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {role}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Apply now to join our growing team.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= GOOGLE FORM ================= */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Apply Now
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <iframe
              src="https://forms.gle/W91q2xtqtMfHks5e9"
              width="100%"
              height="800"
              className="rounded-lg"
              title="Hiring Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HiringPage;