import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-[#0a0a0a] to-[#000000] text-white py-12 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3),transparent_80%)] animate-pulse pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main CTA */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          variants={itemVariants}
        >
          Let’s Build, Innovate & Ship Impactful Products
        </motion.h3>

        {/* Subtext */}
        <motion.p
          className="text-gray-400 text-base mb-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
         From concept to deployment — I collaborate to build user-focused, scalable solutions.
        </motion.p>

        {/* Action Button */}
        <motion.a
          href="mailto:rounakm5886@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.a>

        {/* Divider */}
        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"
          variants={itemVariants}
        />

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-sm"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Rounak Mishra. Crafted with passion.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
