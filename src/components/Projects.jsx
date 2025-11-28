import React, { useState } from "react"; // Removed useContext since we're not using it
import { motion, AnimatePresence } from "framer-motion";

// import { AppContext } from "../context/AppContext"; // Commented out

const Projects = () => {
  // const { projects } = useContext(AppContext); // Commented out
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Example projects data (only Portfolio and Lazarev Clone)
  const exampleProjects = [
    {
      name: "Portfolio Website",
      desc: "A personal portfolio website built with HTML, CSS, and JavaScript. Features responsive design and smooth animations.",
      image: "\Screenshot 2025-11-28 185459.png", // Replace with actual image path
      tech: ["react", "Framer Motion", "css"],
      liveLink: "#", // Add actual link
      githubLink: "#", // Add actual link
      details: "This portfolio showcases my skills and projects with a clean, modern design. It includes sections for about, projects, and contact, all optimized for mobile and desktop."
    },
    {
      name: "Lazarev Web Clone",
      desc: "A clone of the Lazarev website, recreated using modern web technologies. Includes interactive elements and custom animations.",
      image: "/image.png",
       // Replace with actual image path
      tech: ["HTML", "CSS", "Js & GSAP"],
      liveLink: "#", // Add actual link
      githubLink: "https://github.com/rounakm20/lazarev.git",
      details: "Recreated the iconic Lazarev agency site with advanced animations, interactive UI elements, and a focus on user experience. Built to demonstrate proficiency in modern web development."
    },
    {
      name: "Pharmacy Management System",
     desc: "A complete pharmacy management web app built using HTML, CSS, JavaScript, Node.js, and MySQL. Handles medicine inventory, billing, suppliers, and customer records with a clean and responsive UI.",
     image: "\Screenshot 2025-11-27 185348.png",
     tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
     liveLink: "#", // Add live link if hosted
     githubLink: "https://github.com/rounakm20/pharmacy-management.git", // Replace with your repo
     details:"This system manages the entire workflow of a medical store including adding medicines, updating stock, generating bills, managing customers, and storing supplier details. Backend is built with Node.js + Express, and MySQL is used for secure data storage. The interface is fully responsive and smooth, making pharmacy operations faster and reliable."
    },
   
   ]

  

  // Always use example projects (no context override)
  const displayProjects = exampleProjects;

  // Rest of the component remains the same...
  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-[#070707] via-[#0d0d0d] to-[#101010] text-white overflow-hidden"
    >
      {/* Subtle Background Glow - Green Theme */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)] pointer-events-none" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] underline decoration-green-400 decoration-4 underline-offset-8"
          variants={cardVariants}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8" // Two columns for two projects
          variants={containerVariants}
        >
          {displayProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-lg hover:shadow-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.jpg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Click Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-green-300 text-sm font-medium">Click to View</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-300 group-hover:text-green-200 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-green-500 text-green-300 hover:bg-green-500 hover:text-white rounded-lg font-medium transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-green-500/30 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-green-300">{selectedProject.name}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedProject.image || "/placeholder.jpg"}
                alt={selectedProject.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">{selectedProject.details || selectedProject.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="//github.com/rounakm20/lazarev.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 border border-green-500 text-green-300 hover:bg-green-500 hover:text-white rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
