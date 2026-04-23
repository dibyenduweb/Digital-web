// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   { id: 1, title: 'Web Design', category: 'Web Analysis', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
//   { id: 2, title: 'Cyber Security', category: 'Cyber Security Core', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
//   { id: 3, title: 'Mobile Info', category: 'Upcoming Phone', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
//   { id: 4, title: 'Web Development', category: 'Web Analysis', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80' },
//   { id: 5, title: 'Digital Marketing', category: 'Marketing Analysis', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80' },
//   { id: 6, title: 'Keyword Research', category: 'Keyword Analysis', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
// ];

// const Projects = () => {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h5 className="text-secondary font-semibold mb-2">Our Project</h5>
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Our Recently Completed Projects
//         </h1>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             className="relative group overflow-hidden rounded-lg shadow-lg"
//           >
//             <img 
//               src={project.image} 
//               alt={project.title}
//               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-primary bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <div className="text-center text-white">
//                 <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-secondary">{project.category}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;




import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "School Management",
    image: "https://i.ibb.co/pFpZKnN/Screenshot-2026-04-22-171445.png",
    url: "https://comforting-sorbet-7228c4.netlify.app"
  },
  {
    id: 2,
    title: "LocalBazar",
    image: "https://i.ibb.co/mCpmc6h1/Screenshot-2026-04-22-172454.png",
    url: "https://kachabazar-store-nine.vercel.app/"
  },
  {
    id: 2,
    title: "Ecommerce",
    image: "https://i.ibb.co/FkKSWzCR/Screenshot-2026-04-22-172852.png",
    url: "https://kapee.presslayouts.com/layout-basic/?layout=basic"
  },
  {
    id: 3,
    title: "Food Order",
    image: "https://i.ibb.co/KjrcPqGb/Screenshot-2026-04-22-174237.png",
    url: "https://demo-themewinter.com/gloreya/home-2/"
  },
  {
    id: 4,
    title: "AI site creator, Bio Links, URL Shortener & QR Codes (SAAS)",
    image: "https://weadown.com/wp-content/smush-webp/2025/09/66biolinks-59-0-extended-bio-links-url-shortener-qr-codes-web-tools-saas.jpg.webp",
    url: "https://66biolinks.com/demo/"
  },
  {
    id: 5,
    title: "Web Hosting",
    image: "https://weadown.com/wp-content/uploads/2024/10/hostingard-1-4-0-web-hosting-html-template-with-whmcs.png",
    url: "https://preview.themeforest.net/item/hostingard-web-hosting-html-template-with-whmcs/full_screen_preview/52556369"
  },
  {
    id: 6,
    title: "AI Agency WordPress",
    image: "https://weadown.com/wp-content/smush-webp/2026/01/aimax-1-1-2-ai-agency-wordpress-theme.jpg.webp",
    url: "https://aimax.wpenginepowered.com/home-2/"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Projects</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

            {/* ✅ Fixed Image Section */}
            <div className="bg-gray-100 h-56 flex items-center justify-center p-2">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-md transition duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x300";
                }}
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                See Demo 🌐
              </a>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Projects;