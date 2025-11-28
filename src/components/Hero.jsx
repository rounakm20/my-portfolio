import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // Typing Effect
  useEffect(() => {
    if (textLoaded) {
      const fullText =
        " — A Developer who loves turning ideas into working products. I craft efficient, scalable & intuitive digital experiences.";

      let index = 0;
      const speed = 90;

      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [textLoaded]);

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Enhanced Name Animation: Fade in with more blur and glow
  const nameVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9, filter: "blur(15px)" },
    visible: {
      opacity: 0.2, // Kept slightly faded
      y: 0,
      scale: 1,
      filter: "blur(3px)", // Added slight blur for more blurred effect
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-16
      bg-gradient-to-br from-[#070707] via-[#0d0d0d] to-[#101010] text-white px-6"
    >
      {/* Enhanced Background Pattern with subtle animation */}
      <div className="absolute inset-0 opacity-[0.09] 
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]
      pointer-events-none animate-pulse" />

      {/* Big Faded Name with More Blur and Glow Animation */}
      <motion.h1
        className="absolute text-[5.5rem] md:text-[9.5rem] font-extrabold tracking-widest text-white select-none pointer-events-none drop-shadow-[0_0_30px_rgba(147,51,234,0.4)]" // Stronger purple glow
        style={{ top: "16%" }}
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        ROUNAK
      </motion.h1>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-center gap-6 max-w-5xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image Left */}
        <motion.img
          src="\WhatsApp Image 2025-10-10 at 00.45.18_4909704b.jpg"
          alt="Profile"
          className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300"
          variants={profileVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setTextLoaded(true)}
        />

        {/* Text Right */}
        {textLoaded && (
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Hey, I'm <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Rounak</span> 
            </h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200">
              {typedText}
              {!isTypingComplete && <span className="animate-pulse text-purple-400">|</span>}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
