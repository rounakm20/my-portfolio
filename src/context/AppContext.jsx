import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { name: "Portfolio Website", desc: "Built with React & TailwindCSS." },
    { name: "AI Recommender", desc: "Custom AI recommendation system." },
    { name: "Crowd Counting AI", desc: "Real-time crowd counting using YOLOv8." },
  ];

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen, projects }}>
      {children}
    </AppContext.Provider>
  );
};
