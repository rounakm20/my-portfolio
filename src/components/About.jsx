import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "motion/react";


const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

function BlurText({
  text = "",
  delay = 200,
  className = "",
  style = {},
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: 0, padding: 0, ...style }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };
        return (
          <motion.span
            key={index}
            style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
}


const TECH_STACK = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#E34F26" />
        <text x="16" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="sans-serif">HTML</text>
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#1572B6" />
        <text x="16" y="23" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">CSS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#F7DF1E" />
        <text x="21" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#222" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#06B6D4" />
        <text x="16" y="23" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">TW</text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#339933" />
        <text x="16" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#303030" />
        <text x="16" y="22" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="sans-serif">EXP</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <circle cx="16" cy="16" r="10" stroke="#47A248" strokeWidth="1.8" fill="none" />
        <path d="M16 10 C18 12 20 14 20 16 C20 18 18 20 16 22 C14 20 12 18 12 16 C12 14 14 12 16 10Z" fill="#47A248" opacity="0.5" />
        <circle cx="16" cy="16" r="3" fill="#47A248" />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#336791" />
        <text x="16" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="sans-serif">SQL</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#4169E1" />
        <text x="16" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="sans-serif">PG</text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#3776AB" />
        <text x="16" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFD43B" fontFamily="sans-serif">Py</text>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#EA2D2E" />
        <text x="16" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="sans-serif">Java</text>
      </svg>
    ),
  },
];


function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}


function TechItem({ tech }) {
  return (
    <div className="tech-item">
      <span className="tech-icon">{tech.icon}</span>
      <span className="tech-label">{tech.name}</span>
    </div>
  );
}

export default function About() {
  const { ref: labelRef, visible: labelVisible } = useScrollReveal(0.3);
  const { ref: bodyRef,  visible: bodyVisible  } = useScrollReveal(0.1);
  const { ref: stackRef, visible: stackVisible } = useScrollReveal(0.1);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0f0f0f",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at 18% 10%, rgba(255,255,255,0.025) 0%, transparent 65%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(60px, 10vw, 110px) clamp(24px, 6vw, 80px) 80px",
        }}
      >

        {/* ── ABOUT ME label ── */}
        <div
          ref={labelRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "clamp(48px, 7vw, 80px)",
            opacity: labelVisible ? 1 : 0,
            transform: labelVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <span style={{ flexShrink: 0, width: "64px", height: "1px", background: "#2a2622" }} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontWeight: 400,
              fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
              letterSpacing: "0.38em",
              color: "#4e4a46",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            About Me
          </span>
          <span style={{ flexShrink: 0, width: "64px", height: "1px", background: "#2a2622" }} />
        </div>

        {/* ── HERO HEADING — BlurText ── */}
        <BlurText
          text="Building things that"
          delay={110}
          animateBy="words"
          direction="top"
          stepDuration={0.55}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        />
        <BlurText
          text="actually matter."
          delay={110}
          animateBy="words"
          direction="top"
          stepDuration={0.55}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(28px, 4vw, 52px)",
          }}
        />

        {/* ── Body copy ── */}
        <div
          ref={bodyRef}
          style={{
            opacity: bodyVisible ? 1 : 0,
            transform: bodyVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            maxWidth: "680px",
            margin: "0 auto clamp(40px, 6vw, 72px)",
            textAlign: "center",
          }}
        >
          {[
            <>
              I'm a{" "}
              <strong style={{ color: "#e0dcd6", fontWeight: 500 }}>
                Computer Science undergraduate
              </strong>{" "}
              driven by one thing — turning ideas into products that solve real problems. I care
              deeply about usability, performance, and clean design; not just code that works, but
              code that feels right.
            </>,
            <>
              Through my projects I've built hands-on experience in{" "}
              <strong style={{ color: "#e0dcd6", fontWeight: 500 }}>
                modern web applications
              </strong>
              , real-time data systems, and solutions that address genuine, everyday challenges. I
              approach every problem with a curious, engineering mindset and a drive to keep
              improving.
            </>,
            <>
              Right now I'm particularly excited about{" "}
              <strong style={{ color: "#e0dcd6", fontWeight: 500 }}>scalable systems</strong>{" "}
              and technology that creates real-world impact. As a fresher, I'm actively looking for
              opportunities to apply my skills, grow fast, and ship things that matter.
            </>,
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
                color: "#6a6662",
                lineHeight: 1.9,
                marginBottom: i < 2 ? "1.5em" : 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* ── Shimmer divider ── */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "1px",
              background: "#1c1916",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "50%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                animation: "shimmer 3.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* ── TECH STACK label ── */}
        <div
          ref={stackRef}
          style={{
            marginBottom: "32px",
            opacity: stackVisible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              color: "#ffffff",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            What I Learned Along the Way
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
              color: "#524e4a",
              margin: "6px 0 0 0",
              letterSpacing: "0.04em",
            }}
          >
            My tech stack — tools I've picked up and put to work
          </p>
        </div>

        {/* ── Marquee ── */}
        <div
          style={{
            overflow: "hidden",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "60px",
              width: "max-content",
              animation: "marquee 28s linear infinite",
            }}
          >
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <TechItem key={i} tech={tech} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0%   { left: -55%; }
          100% { left: 115%; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .tech-item  { display: flex; align-items: center; gap: 12px; cursor: default; flex-shrink: 0; }
        .tech-icon  { opacity: 0.28; transition: opacity 0.35s ease, transform 0.35s ease; }
        .tech-label {
          font-family: 'DM Mono', monospace;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: #524e4a;
          transition: color 0.35s ease;
        }
        .tech-item:hover .tech-icon  { opacity: 1; transform: translateY(-3px); }
        .tech-item:hover .tech-label { color: #d8d0c4; }
      `}</style>
    </section>
  );
}