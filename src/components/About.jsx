import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for the section
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Skills data with icons (using emojis for simplicity; replace with actual icons if needed)
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Anime Enthusiast", icon: "🎌" },
  ];

  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-[#070707] via-[#0d0d0d] to-[#101010] text-white overflow-hidden text-center"
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] underline decoration-cyan-400 decoration-4 underline-offset-8" // Added underline with cyan color and styling
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8"
          variants={itemVariants}
        >
          {/* Animated Icon or Visual Element */}
          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
              <span className="text-4xl md:text-5xl">👨‍💻</span> {/* Developer emoji, can replace with custom icon */}
            </div>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Hey! I'm <span className="text-cyan-400 font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Rounak Mishra</span>, a passionate developer and anime/Bleach style enthusiast.
            I love creating interactive websites with modern designs and smooth animations. 
            Whether it's crafting pixel-perfect UIs or diving into the latest tech trends, I'm always excited to bring ideas to life. 
            When I'm not coding, you'll find me exploring anime worlds or experimenting with creative projects!
          </motion.p>
        </motion.div>

        {/* Skills Cards Grid - Equal Cards */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
          variants={itemVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer min-h-[120px] flex flex-col justify-center" // Added min-height and flex for equal card heights
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow Effect on Hover - Cyan */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <p className="text-cyan-300 font-semibold text-lg">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
