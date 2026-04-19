import React from "react";
import { motion } from "framer-motion";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/rounakm9636",  Icon: LinkedInIcon },
  { name: "GitHub",    href: "https://github.com/rounakm20",      Icon: GitHubIcon },
  { name: "Instagram", href: "https://www.instagram.com/_rounak.m",   Icon: InstagramIcon },
  { name: "Twitter",   href: "https://twitter.com/shashh_broo0___",     Icon: TwitterIcon },
];

const Footer = () => (
  <footer 
  id="contact"
  className="bg-black text-white border-t border-white/10">
    <motion.div
      className="max-w-[1400px] mx-auto px-16 py-14 flex items-center justify-between flex-wrap gap-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >

      {/* Brand */}
      <div className="flex items-baseline leading-none select-none">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900, letterSpacing: "-2px" }}>
          LET&apos;S&nbsp;
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 58px)", fontStyle: "italic", fontWeight: 700, letterSpacing: "-1.5px" }}>
          TALK
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900 }}>
          .
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-4">

        {/* Top row */}
        <div className="flex items-center gap-6 flex-wrap">

          {/* ✅ EMAIL FIX */}
          <a
            href="mailto:rounakm5886@gmail.com"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none", letterSpacing: "0.2px", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
          >
            rounakm5886@gmail.com
          </a>

          <span style={{ width: "0.5px", height: "15px", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />

          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, Icon }) => (
              
              /* ✅ SOCIAL LINKS FIX */
              <a
                key={name}
                href={href}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center gap-4">
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
            crafted with obsession &amp; coffee
          </span>
          <span style={{ width: "0.5px", height: "13px", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.3px" }}>
            &copy; {new Date().getFullYear()} Rounak Mishra. All rights reserved.
          </span>
        </div>

      </div>
    </motion.div>
  </footer>
);

export default Footer;