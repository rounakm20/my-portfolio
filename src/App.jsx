import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <div className="bg-black text-white font-sans">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
