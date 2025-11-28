import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/80 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Name */}
        <motion.div className="flex items-center space-x-3">
          <motion.div
            className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/50 bg-black shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="\Gemini_Generated_Image_hho8x7hho8x7hho8.png"
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
          </motion.div>
          <span className="text-white font-bold text-3xl select-none">Rounak Mishra</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 relative group text-sm font-semibold tracking-wide hover:text-cyan-300 transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus:outline-none p-2 rounded-full hover:bg-cyan-500/20 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
              initial={false}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-cyan-500/20"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-200 px-6 py-4 text-center hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 border-b border-cyan-500/10 last:border-b-0"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
