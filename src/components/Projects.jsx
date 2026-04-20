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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="pc-card group" style={{ '--accent': project.accent }}>
      {/* Image section */}
      <div className="pc-image-section">
        <div className="pc-browser-bar">
          <span className="pc-dot" style={{ background: "#ff5f57" }} />
          <span className="pc-dot" style={{ background: "#febc2e" }} />
          <span className="pc-dot" style={{ background: "#28c840" }} />
          <div className="pc-url-bar">
            <span className="pc-url-text">localhost:3000</span>
          </div>
        </div>
        <div className="pc-image-wrap">
          <img
            src={project.image}
            onError={(e) => { e.target.src = FALLBACK; }}
            alt={project.name}
            className="pc-img"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="pc-content">
        <div className="pc-top">
          <div className="pc-num-row">
            <span className="pc-num">{project.number}</span>
            <div className="pc-accent-bar" />
          </div>
          <h3 className="pc-title">{project.name}</h3>
          <div className="pc-tags">
            {project.tech.map((t, i) => (
              <span key={i} className="pc-tag">{t}</span>
            ))}
          </div>
          <p className="pc-desc">{project.desc}</p>
        </div>
        <div className="pc-buttons">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pc-btn-live">
            Live Demo <ArrowIcon />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pc-btn-code">
            <GithubIcon /> Code
          </a>
        </div>
      </div>

      {/* Desktop divider */}
      <div className="pc-divider" />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Playfair+Display:wght@600;700;900&display=swap');

        /* ── BASE (mobile) ── */
        .pc-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: #414141;
          display: flex;
          flex-direction: column;
        }
        .pc-image-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .pc-browser-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          background: #111;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pc-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .pc-url-bar {
          flex: 1;
          margin: 0 8px;
          height: 14px;
          border-radius: 4px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 6px;
        }
        .pc-url-text {
          color: rgba(255,255,255,0.25);
          font-size: 0.5rem;
          letter-spacing: 0.05em;
        }
        .pc-image-wrap {
          background: #0d0d0d;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8px;
        }
        .pc-img {
          width: 100%; height: 100%;
          object-fit: contain;
          object-position: top center;
          border-radius: 4px;
        }
        .pc-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px 20px 22px;
          background: rgba(0,0,0,0.92);
          gap: 14px;
        }
        .pc-top { display: flex; flex-direction: column; gap: 8px; }
        .pc-num-row { display: flex; align-items: center; gap: 8px; }
        .pc-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.8rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255,255,255,0.12);
          user-select: none;
        }
        .pc-accent-bar {
          width: 24px; height: 2px;
          border-radius: 2px;
          background: var(--accent);
        }
        .pc-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .pc-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .pc-tag {
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.58rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.5);
          color: rgba(255,255,255,0.55);
        }
        .pc-desc {
          color: rgba(255,255,255,0.5);
          font-size: 0.74rem;
          line-height: 1.65;
          font-weight: 300;
          margin: 0;
        }
        .pc-buttons {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .pc-btn-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          background: var(--accent);
          color: #000;
          text-decoration: none;
          white-space: nowrap;
        }
        .pc-btn-code {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          text-decoration: none;
          white-space: nowrap;
        }
        .pc-divider { display: none; }

        /* ── DESKTOP (768px+) ── */
        @media (min-width: 768px) {
          .pc-card {
            flex-direction: row;
            height: 290px;
          }
          /* Image goes to the RIGHT on desktop */
          .pc-image-section {
            position: absolute;
            top: 0; right: 0; bottom: 0;
            width: 60%;
            flex-direction: column;
            z-index: 10;
          }
          .pc-image-wrap {
            flex: 1;
            height: auto;
          }
          /* Content stays LEFT on desktop */
          .pc-content {
            position: absolute;
            top: 0; left: 0; bottom: 0;
            width: 40%;
            z-index: 20;
            padding: 24px 28px;
            gap: 0;
            border-right: 1px solid rgba(255,255,255,0.08);
          }
          .pc-top { gap: 8px; }
          .pc-desc {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .pc-buttons { margin-top: auto; padding-top: 12px; }
          .pc-divider {
            display: block;
            position: absolute;
            top: 24px; bottom: 24px;
            left: 40%;
            width: 1px;
            z-index: 30;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent);
          }
        }
      `}</style>
    </section>
  );
};

// Fix: ProjectCard needs to be inside Projects render, so restructure properly
const ProjectCardWrapper = ({ project }) => <ProjectCard project={project} />;

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Playfair+Display:wght@600;700;900&display=swap');

        .pc-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: #414141;
          display: flex;
          flex-direction: column;
        }
        .pc-image-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .pc-browser-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          background: #111;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pc-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .pc-url-bar {
          flex: 1; margin: 0 8px; height: 14px;
          border-radius: 4px;
          background: rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 6px;
        }
        .pc-url-text { color: rgba(255,255,255,0.25); font-size: 0.5rem; letter-spacing: 0.05em; }
        .pc-image-wrap {
          background: #0d0d0d;
          height: 170px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 8px;
        }
        .pc-img {
          width: 100%; height: 100%;
          object-fit: contain; object-position: top center; border-radius: 4px;
        }
        .pc-content {
          display: flex; flex-direction: column;
          justify-content: space-between;
          padding: 20px 20px 22px;
          background: rgba(0,0,0,0.92);
          gap: 14px;
        }
        .pc-top { display: flex; flex-direction: column; gap: 8px; }
        .pc-num-row { display: flex; align-items: center; gap: 8px; }
        .pc-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.8rem; font-weight: 900; line-height: 1;
          color: rgba(255,255,255,0.12); user-select: none;
        }
        .pc-accent-bar { width: 24px; height: 2px; border-radius: 2px; background: var(--accent); }
        .pc-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem; font-weight: 700; color: #fff;
          line-height: 1.2; letter-spacing: -0.02em; margin: 0;
        }
        .pc-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .pc-tag {
          padding: 2px 8px; border-radius: 999px;
          font-size: 0.58rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.5); color: rgba(255,255,255,0.55);
        }
        .pc-desc {
          color: rgba(255,255,255,0.5); font-size: 0.74rem;
          line-height: 1.65; font-weight: 300; margin: 0;
        }
        .pc-buttons { display: flex; gap: 8px; flex-shrink: 0; }
        .pc-btn-live {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 8px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em;
          background: var(--accent); color: #000;
          text-decoration: none; white-space: nowrap;
        }
        .pc-btn-code {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 8px;
          font-size: 0.7rem; font-weight: 600;
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          text-decoration: none; white-space: nowrap;
        }
        .pc-divider { display: none; }

        @media (min-width: 768px) {
          .pc-card { flex-direction: row; height: 290px; }
          .pc-image-section {
            position: absolute; top: 0; right: 0; bottom: 0;
            width: 60%; z-index: 10;
          }
          .pc-image-wrap { flex: 1; height: auto; }
          .pc-content {
            position: absolute; top: 0; left: 0; bottom: 0;
            width: 40%; z-index: 20;
            padding: 24px 28px; gap: 0;
            border-right: 1px solid rgba(255,255,255,0.08);
          }
          .pc-desc {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .pc-buttons { margin-top: auto; padding-top: 12px; }
          .pc-divider {
            display: block; position: absolute;
            top: 24px; bottom: 24px; left: 40%;
            width: 1px; z-index: 30;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent);
          }
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
          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-white/35 font-medium">Selected Work</span>
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
          <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.45)", color: "transparent" }}>
            Projects
          </span>
        </h2>
        <p className="text-white/35 font-light max-w-[320px] text-sm leading-relaxed">
          Crafting cinematic web journeys backed by powerful full-stack engineering.
        </p>
        <div className="mt-10 flex items-center gap-3">
          <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2))" }} />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/35" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.2))" }} />
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
            <div className="pc-card group" style={{ '--accent': project.accent }}>
              {/* Image section — top on mobile, right on desktop */}
              <div className="pc-image-section">
                <div className="pc-browser-bar">
                  <span className="pc-dot" style={{ background: "#ff5f57" }} />
                  <span className="pc-dot" style={{ background: "#febc2e" }} />
                  <span className="pc-dot" style={{ background: "#28c840" }} />
                  <div className="pc-url-bar">
                    <span className="pc-url-text">localhost:3000</span>
                  </div>
                </div>
                <div className="pc-image-wrap">
                  <img
                    src={project.image}
                    onError={(e) => { e.target.src = FALLBACK; }}
                    alt={project.name}
                    className="pc-img"
                  />
                </div>
              </div>

              {/* Content section — bottom on mobile, left on desktop */}
              <div className="pc-content">
                <div className="pc-top">
                  <div className="pc-num-row">
                    <span className="pc-num">{project.number}</span>
                    <div className="pc-accent-bar" />
                  </div>
                  <h3 className="pc-title">{project.name}</h3>
                  <div className="pc-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="pc-tag">{t}</span>
                    ))}
                  </div>
                  <p className="pc-desc">{project.desc}</p>
                </div>
                <div className="pc-buttons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pc-btn-live">
                    Live Demo&nbsp;
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pc-btn-code">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                    Code
                  </a>
                </div>
              </div>

              {/* Divider — desktop only via CSS */}
              <div className="pc-divider" />
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default ProjectsSection;