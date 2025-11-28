import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Social media links with inline SVG icons
  const socials = [
    {
      name: "Email",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"> {/* Increased size */}
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      link: "mailto:rounakm5886@gmail.com",
      color: "from-red-500 to-orange-500",
      hoverColor: "group-hover:text-orange-400"
    },
    {
      name: "GitHub",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"> {/* Increased size */}
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "https://github.com/rounakm20", // Replace with actual GitHub
      color: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"> {/* Increased size */}
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: "http://www.linkedin.com/in/rounak-mishra-31ab30277", // Replace with actual LinkedIn
      color: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      name: "Twitter",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"> {/* Increased size */}
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      link: "https://twitter.com/yourusername", // Replace with actual Twitter
      color: "from-sky-400 to-blue-500",
      hoverColor: "group-hover:text-sky-300"
    },
    {
      name: "Instagram",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"> {/* Increased size */}
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: "https://www.instagram.com/_rounak.m?igsh=MWRkeXZvYngzYWk2NA==", // Replace with actual Instagram
      color: "from-purple-500 via-pink-500 to-orange-500",
      hoverColor: "group-hover:text-pink-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-32 bg-gradient-to-br from-[#070707] via-[#0d0d0d] to-[#101010] text-white overflow-hidden" // Increased py-20 to py-32 for more height
    >
      {/* Subtle Background Glow - Cyan Theme */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_70%)] pointer-events-none" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] underline decoration-cyan-400 decoration-4 underline-offset-8" // Increased size and margin
          variants={cardVariants}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-xl mb-20 max-w-3xl mx-auto" // Increased text size and margin
          variants={cardVariants}
        >
          Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities!
        </motion.p>

        {/* Social Media Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-24" // Increased gap and margin
          variants={containerVariants}
        >
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative bg-gradient-to-br ${social.color} p-10 rounded-xl shadow-lg hover:shadow-cyan-500/30 overflow-hidden transition-all duration-300 border border-white/10 flex items-center justify-center`}> {/* Increased padding */}
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className={`relative z-10 transition-colors ${social.hoverColor}`}>
                  {social.svg}
                </div>
              </div>
              <p className="text-center text-base mt-4 text-gray-400 group-hover:text-cyan-300 transition-colors font-medium"> {/* Increased text size and margin */}
                {social.name}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          className="text-center mt-24" // Increased margin
          variants={cardVariants}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
