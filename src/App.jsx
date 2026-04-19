import React from "react";
import { ReactLenis } from "lenis/react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";  
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <ReactLenis root>
        <div className="bg-black text-white font-sans overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Footer />
        </div>
      </ReactLenis>
    </AppProvider>
  );
}

export default App;