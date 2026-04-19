import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import TextPressure from "./TextPressure";

const springConfig = { damping: 30, stiffness: 100, mass: 2 };

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const cardRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);
  const tipOpacity = useSpring(0, { stiffness: 200, damping: 20 });
  const tipX = useMotionValue(0);
  const tipY = useMotionValue(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fullText =
      "— A developer who turns ideas into products people actually enjoy using. I care about the details — clean code, fast interfaces, and experiences that feel effortless.";
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const ox = e.clientX - rect.left - rect.width / 2;
    const oy = e.clientY - rect.top - rect.height / 2;
    rotateX.set((oy / (rect.height / 2)) * -16);
    rotateY.set((ox / (rect.width / 2)) * 16);
    tipX.set(e.clientX - rect.left + 14);
    tipY.set(e.clientY - rect.top - 10);
  }

  function handleMouseEnter() {
    scale.set(1.05);
    tipOpacity.set(1);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    tipOpacity.set(0);
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white px-4 sm:px-6 py-16 sm:py-0"
      style={{ background: "#080808" }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-[0.09]
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]
        pointer-events-none animate-pulse"
      />

      {/* TextPressure — desktop only background */}
      <div className="hidden md:flex absolute inset-0 items-start justify-center z-0 opacity-25 blur-[2px]">
        <div style={{ width: "100%", height: "280px", position: "relative", top: "20%" }}>
          <TextPressure text="ROUNAK" flex={true} scale={true} minFontSize={80} />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-4xl w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center flex-shrink-0 mx-auto md:mx-0">

          {/* Tilted Card */}
          <div
            ref={cardRef}
            style={{
              position: "relative",
              perspective: "900px",
              width: "clamp(160px, 45vw, 210px)",
              height: "clamp(210px, 60vw, 280px)",
              cursor: "pointer",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                rotateX, rotateY, scale,
                transformStyle: "preserve-3d",
                borderRadius: 18,
                background: "#111318",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Photo area */}
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img
                  src="/WhatsApp Image 2026-04-19 at 02.52.04.jpeg"
                  alt="Rounak Mishra"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top",
                    display: "block",
                  }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                  background: "linear-gradient(to top, #111318, transparent)",
                }} />
              </div>

              {/* Card bottom tag */}
              <div style={{ padding: "14px 16px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 6, padding: "5px 10px",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#facc15", flexShrink: 0 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                   
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif", letterSpacing: "0.8px", textTransform: "uppercase" }}>
                      Ready for Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hover tooltip */}
            <motion.div
              style={{
                position: "absolute", top: 0, left: 0,
                x: tipX, y: tipY, opacity: tipOpacity,
                background: "#fff", color: "#111",
                fontSize: 11, fontWeight: 500,
                padding: "5px 12px", borderRadius: 6,
                pointerEvents: "none", zIndex: 20,
                whiteSpace: "nowrap", fontFamily: "Inter, sans-serif",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#facc15" }} />
              Rounak Mishra
            </motion.div>
          </div>

          {/* TextPressure mobile — hidden */}
          <div className="hidden">
            <div style={{ width: "100%", height: "50px" }}>
              <TextPressure text="ROUNAK" flex={true} scale={true} minFontSize={32} />
            </div>
          </div>

        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left max-w-xl w-full">
          <p style={{
            fontSize: 12, color: "rgba(255,255,255,0.3)",
            letterSpacing: "2.5px", textTransform: "uppercase",
            fontFamily: "Inter, sans-serif", marginBottom: 10,
          }}>
            Portfolio · 2025
          </p>

          <h2
            className="mb-3 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 7vw, 52px)",
              lineHeight: 1.1,
            }}
          >
            Hi, I'm<br />Rounak.
          </h2>

          <div style={{ width: 32, height: 1.5, background: "rgba(255,255,255,0.18)", borderRadius: 2, margin: "16px auto" }} className="md:mx-0" />

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(14px, 3.5vw, 20px)",
              lineHeight: 1.7,
            }}
          >
            {typedText}
            {!isTypingComplete && (
              <span style={{
                display: "inline-block", width: 1.5, height: "0.85em",
                background: "rgba(255,255,255,0.4)", marginLeft: 2,
                verticalAlign: "middle", animation: "blink 1s step-end infinite",
              }} />
            )}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;