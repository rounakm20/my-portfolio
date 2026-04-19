import React from "react";
import ScrollStack, { ScrollStackItem } from "./Scrollstack";

const projects = [
  {
    number: "01",
    name: "Portfolio Website",
    desc: "A personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a premium cinematic scrolling experience with Apple-inspired stacking effects.",
    image: "/portfolioIMAGE.png",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    accent: "#c8a96e",
  },
  {
    number: "02",
    name: "Lazarev Web ",
    desc: "A clone of the highly acclaimed Lazarev agency site. Recreated using modern web technologies focusing on advanced animations, interactive UI, and premium user experience.",
    image: "/image.png",
    tech: ["HTML", "CSS", "JS", "GSAP"],
    liveLink: "#",
    githubLink: "https://github.com/rounakm20/lazarev.git",
    accent: "#7eb8c9",
  },
  {
    number: "03",
    name: "Pharmacy Management System",
    desc: "A complete pharmacy management web app handling inventory, billing, external suppliers, and customer records. Clean and responsive UI for robust operations.",
    image: "/PharmaCareIMage.png",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    liveLink: "#",
    githubLink: "https://github.com/rounakm20/pharmacy-management.git",
    accent: "#9fca8e",
  },
  {
    number: "04",
    name: "Arogya — Health Management System",
    desc: "A full-stack personal health web app with AI symptom checker, medication tracker, mood logger, health reports, QR health passport, and blood donor registry. Built with React + Vite + Tailwind CSS, powered by Supabase auth and Gemini AI.",
    image: "/ArogyaImage.jpeg",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Gemini AI"],
    liveLink: "https://arogya-sable.vercel.app/",
    githubLink: "https://github.com/rounakm20/Arogya-.git",
    accent: "#4ade80",
  },
];

const FALLBACK =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

const ArrowIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-[1.5rem] border border-white/[0.08]"
      style={{ background: "#414141", height: "290px" }}
    >
      {/* LEFT: Content */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20 flex flex-col justify-between px-7 py-6 bg-black/90 backdrop-blur-lg border-r border-white/[0.08]"
        style={{ width: "40%" }}
      >
        <div>
          {/* Number + accent bar */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[1.8rem] font-black leading-none text-white/[0.12] group-hover:text-white/[0.22] transition-colors duration-500 select-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {project.number}
            </span>
            <div
              className="w-6 h-[2px] rounded-full"
              style={{ background: project.accent }}
            />
          </div>

          {/* Title */}
          <h3
            className="text-[1.15rem] md:text-[1.4rem] font-bold text-white leading-tight tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {project.name}
          </h3>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full text-[0.58rem] font-semibold uppercase tracking-wider border border-white/[0.2] bg-black/50 text-white/55 group-hover:border-white/35 group-hover:text-white/75 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/45 text-[0.74rem] leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300 line-clamp-3">
            {project.desc}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.7rem] font-semibold tracking-wide text-black hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            style={{ background: project.accent }}
          >
            Live Demo
            <ArrowIcon />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[0.7rem] font-semibold tracking-wide text-white/75 border border-white/[0.18] bg-white/[0.06] hover:bg-white/[0.14] hover:text-white hover:border-white/35 transition-all duration-300 active:scale-95"
          >
            <GithubIcon />
            Code
          </a>
        </div>
      </div>

      {/* RIGHT: Image preview — full image visible */}
      <div
        className="absolute top-0 bottom-0 right-0 z-10 flex flex-col"
        style={{ width: "60%" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111] border-b border-white/[0.07] flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-2 h-3.5 rounded bg-white/[0.06] flex items-center px-2">
            <span className="text-white/25 text-[0.5rem] tracking-wide truncate">
              localhost:3000
            </span>
          </div>
        </div>

        {/* Image — object-contain so full screenshot is visible */}
        <div className="flex-1 bg-[#0d0d0d] flex items-center justify-center overflow-hidden p-2">
          <img
            src={project.image}
            onError={(e) => { e.target.src = FALLBACK; }}
            alt={project.name}
            className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700 ease-out rounded-sm"
            style={{
              objectFit: "contain",
              objectPosition: "top center",
            }}
          />
        </div>
      </div>

      {/* Vertical divider */}
      <div
        className="absolute top-6 bottom-6 z-30 w-px"
        style={{
          left: "40%",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Playfair+Display:wght@600;700;900&display=swap');
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Section header */}
      <div className="relative w-full px-4 pt-28 pb-16 flex flex-col items-center text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #fff, transparent)" }}
        />
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-white/25" />
          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-white/35 font-medium">
            Selected Work
          </span>
          <div className="w-6 h-px bg-white/25" />
        </div>
        <h2
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-[1.8rem] md:text-[2.8rem] font-bold text-white leading-[1.02] tracking-tight mb-2"
        >
          Featured
        </h2>
        <h2
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-[1.8rem] md:text-[2.8rem] font-bold leading-[1.02] tracking-tight mb-6"
        >
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
              color: "transparent",
            }}
          >
            Projects
          </span>
        </h2>
        <p className="text-white/35 font-light max-w-[320px] text-sm leading-relaxed">
         Crafting cinematic web journeys backed by powerful full-stack engineering.
        </p>
        <div className="mt-10 flex items-center gap-3">
          <div
            className="w-12 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2))" }}
          />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/35" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div
            className="w-12 h-px"
            style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.2))" }}
          />
        </div>
      </div>
      

      {/* Scroll Stack */}
      <ScrollStack
        itemDistance={48}
        itemScale={0.03}
        itemStackDistance={12}
        stackPosition="12%"
        baseScale={0.9}
        blurAmount={0.5}
        className="bg-black"
      >
        {projects.map((project, i) => (
          <ScrollStackItem key={i} itemClassName="rounded-[1.5rem]">
            <ProjectCard project={project} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Projects;