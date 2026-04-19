import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { AppContext } from "../context/AppContext";

const NAV_ITEMS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact",  href: "#contact"  },
];

const EASE    = "power3.easeOut";
const PILL_BG = "#060010";
const BASE    = "#ffffff";
const NAV_H   = 48;

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);
  const [isMobile, setIsMobile]       = useState(window.innerWidth < 768);
  const [hidden, setHidden]           = useState(false);
  const lastScrollY                   = useRef(0);

  const circleRefs      = useRef([]);
  const tlRefs          = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef      = useRef(null);
  const logoTweenRef    = useRef(null);
  const mobileMenuRef   = useRef(null);
  const hamburgerRef    = useRef(null);

  // ── responsive ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── hide on scroll down, show on scroll up ───────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── GSAP pill layout ─────────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return;
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const { width: w, height: h } = pill.getBoundingClientRect();
        if (!w || !h) return;

        const R       = ((w * w) / 4 + h * h) / (2 * h);
        const D       = Math.ceil(2 * R) + 2;
        const delta   = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width  = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector(".pill-label");
        const hover = pill.querySelector(".pill-label-hover");
        if (label) gsap.set(label, { y: 0 });
        if (hover) gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 });

        tlRefs.current[i]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: EASE, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease: EASE, overwrite: "auto" }, 0);
        if (hover)  tl.to(hover, { y: 0, opacity: 1, duration: 2, ease: EASE, overwrite: "auto" }, 0);
        tlRefs.current[i] = tl;
      });
    };

    const t = setTimeout(layout, 50);
    window.addEventListener("resize", layout);
    document.fonts?.ready?.then(layout).catch(() => {});
    return () => { clearTimeout(t); window.removeEventListener("resize", layout); };
  }, [isMobile]);

  // ── mobile menu init ─────────────────────────────────────────────────────
  useEffect(() => {
    if (mobileMenuRef.current)
      gsap.set(mobileMenuRef.current, { visibility: "hidden", opacity: 0, y: 10 });
  }, [isMobile]);

  // ── pill hover handlers ──────────────────────────────────────────────────
  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease: EASE, overwrite: "auto" });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease: EASE, overwrite: "auto" });
  };

  const handleLogoEnter = () => {
    if (!logoImgRef.current) return;
    logoTweenRef.current?.kill();
    gsap.set(logoImgRef.current, { rotate: 0 });
    logoTweenRef.current = gsap.to(logoImgRef.current, { rotate: 360, duration: 0.4, ease: EASE, overwrite: "auto" });
  };

  // ── mobile toggle ────────────────────────────────────────────────────────
  const toggleMobileMenu = () => {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    const lines = hamburgerRef.current?.querySelectorAll(".ham-line");
    if (lines?.length) {
      gsap.to(lines[0], { rotation: next ? 45  : 0, y: next ?  3 : 0, duration: 0.3, ease: EASE });
      gsap.to(lines[1], { rotation: next ? -45 : 0, y: next ? -3 : 0, duration: 0.3, ease: EASE });
    }
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (next) {
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: EASE });
    } else {
      gsap.to(menu, { opacity: 0, y: 10, duration: 0.2, ease: EASE,
        onComplete: () => gsap.set(menu, { visibility: "hidden" }) });
    }
  };

  // ── pill style (individual dark pills) ───────────────────────────────────
  const pillStyle = {
    position:       "relative",
    overflow:       "hidden",
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    height:         `${NAV_H - 8}px`,
    background:     PILL_BG,
    color:          BASE,
    paddingLeft:    "20px",
    paddingRight:   "20px",
    borderRadius:   "999px",
    fontWeight:     700,
    fontSize:       "13px",
    lineHeight:     0,
    textTransform:  "uppercase",
    letterSpacing:  "0.8px",
    whiteSpace:     "nowrap",
    cursor:         "pointer",
    textDecoration: "none",
    border:         `1.5px solid rgba(255,255,255,0.15)`,
  };

  // ────────────────────────────────────────────────────────────────────────
  return (
    <motion.div
      style={{
        position:       "fixed",
        top:            "16px",
        left:           0,
        width:          "100%",
        zIndex:         1000,
        display:        "flex",
        justifyContent: "center",
        alignItems:     "flex-start",
        pointerEvents:  "none",
        background:     "transparent",
      }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >

      {/* ── DESKTOP ─────────────────────────────────────────────────── */}
      {!isMobile && (
        <motion.div
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            height:         `${NAV_H}px`,
            // ↓ dark bg + white border — the look from the screenshot
            background:     PILL_BG,
            border:         `1.5px solid rgba(255,255,255,0.25)`,
            borderRadius:   "999px",
            padding:        "4px",
            gap:            "4px",
            pointerEvents:  "auto",
          }}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <a
            href="#home"
            onMouseEnter={handleLogoEnter}
            style={{
              width:          `${NAV_H - 10}px`,
              height:         `${NAV_H - 10}px`,
              borderRadius:   "50%",
              overflow:       "hidden",
              flexShrink:     0,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              background:     PILL_BG,
              border:         "1.5px solid rgba(255,255,255,0.2)",
            }}
          >
            <img
            ref={logoImgRef}
            src="/logo.png"
            alt="Logo"
            style={{ 
              width: "80%", 
              height: "80%", 
              objectFit: "cover", 
              objectPosition: "center centre",  
              borderRadius: "65%",
              display: "block",
              transform: "scale(1.8)"  
            }}
           />
          </a>
          {/* Nav pills */}
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={pillStyle}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              {/* bubble — white fill rising on hover */}
              <span
                ref={(el) => { circleRefs.current[i] = el; }}
                aria-hidden="true"
                style={{
                  position:      "absolute",
                  left:          "50%",
                  bottom:        0,
                  borderRadius:  "50%",
                  zIndex:        1,
                  display:       "block",
                  pointerEvents: "none",
                  background:    BASE,
                  willChange:    "transform",
                }}
              />
              {/* label stack */}
              <span style={{ position: "relative", display: "inline-block", lineHeight: 1, zIndex: 2 }}>
                <span
                  className="pill-label"
                  style={{ position: "relative", zIndex: 2, display: "inline-block", lineHeight: 1, willChange: "transform" }}
                >
                  {item.label}
                </span>
                <span
                  className="pill-label-hover"
                  aria-hidden="true"
                  style={{ position: "absolute", left: 0, top: 0, zIndex: 3, display: "inline-block", color: PILL_BG, willChange: "transform, opacity" }}
                >
                  {item.label}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      )}

      {/* ── MOBILE ──────────────────────────────────────────────────── */}
      {isMobile && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 16px", pointerEvents: "auto" }}>
          {/* Logo */}
          <motion.a
            href="#home"
            onMouseEnter={handleLogoEnter}
            style={{
              width: `${NAV_H}px`, height: `${NAV_H}px`,
              borderRadius: "50%", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: PILL_BG, border: "1.5px solid rgba(255,255,255,0.25)",
            }}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img ref={logoImgRef} src="/logo.png" alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }} />
          </motion.a>

          {/* Hamburger */}
          <motion.button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            style={{
              width: `${NAV_H}px`, height: `${NAV_H}px`,
              borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.25)",
              background: PILL_BG, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "5px", cursor: "pointer", padding: 0,
            }}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="ham-line" style={{ display: "block", width: "16px", height: "2px", borderRadius: "2px", background: BASE, transformOrigin: "center" }} />
            <span className="ham-line" style={{ display: "block", width: "16px", height: "2px", borderRadius: "2px", background: BASE, transformOrigin: "center" }} />
          </motion.button>
        </div>
      )}

      {/* ── MOBILE dropdown ─────────────────────────────────────────── */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          style={{
            position: "absolute", top: `${NAV_H + 12}px`,
            left: "16px", right: "16px",
            background: PILL_BG,
            border: "1.5px solid rgba(255,255,255,0.2)",
            borderRadius: "27px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 998, pointerEvents: "auto",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "4px", display: "flex", flexDirection: "column", gap: "3px" }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    display: "block", padding: "12px 16px",
                    fontSize: "13px", fontWeight: 700,
                    borderRadius: "50px", textTransform: "uppercase",
                    letterSpacing: "0.8px", textDecoration: "none",
                    background: "transparent", color: BASE,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;