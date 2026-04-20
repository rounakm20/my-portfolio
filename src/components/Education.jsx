import { useEffect, useRef } from "react";

/* ─── data ─────────────────────────────────────────────── */
const educationData = [
  {
    id: "01",
    side: "L",
    year: "2020 — 2021",
    degree: "10th — Secondary Education",
    institute: "St. Columbus Inter College",
    description:
      "Completed secondary schooling with a focus on Science and Mathematics. Developed early curiosity for computers and logical thinking.",
    stats: [{ label: "Score", value: "79.9%" }],
    tags: ["Science", "Maths", "English"],
    bracket: "[ ]",
    live: false,
  },
  {
    id: "02",
    side: "R",
    year: "2022 — 2023",
    degree: "12th — Science (PCM)",
    institute: "St. Columbus Inter College",
    description:
      "Completed Higher Secondary with Physics, Chemistry & Mathematics. Secured solid academics while building early interest in programming.",
    stats: [{ label: "Score", value: "71.9%" }],
    tags: ["Physics", "Chemistry", "Maths"],
    bracket: "{ }",
    live: false,
  },
  {
    id: "03",
    side: "L",
    year: "2023 — Present",
    degree: "B.Tech — Computer Science & Engineering",
    institute: "Shri Ramswaroop Memorial University",
    description:
      "Currently pursuing B.Tech CSE — building strong foundations in algorithms, data structures, web development and software engineering principles.",
    stats: [{ label: "CGPA", value: "7.3" }],
    tags: ["DSA", "Web Dev", "Java", "DBMS"],
    bracket: "< >",
    live: true,
  },
];

/* ─── inject global styles once ────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  .tl-item {
    opacity: 0;
    transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                transform 0.7s cubic-bezier(0.22,1,0.36,1);
  }
  .tl-item.tl-left  { transform: translateX(-64px) translateY(28px); }
  .tl-item.tl-right { transform: translateX(64px) translateY(28px); }
  .tl-item.tl-visible {
    opacity: 1 !important;
    transform: translateX(0) translateY(0) !important;
  }

  .tl-card {
    transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                border-color 0.35s ease,
                background 0.35s ease,
                box-shadow 0.35s ease;
  }
  .tl-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255,255,255,0.14) !important;
    background: #161616 !important;
    box-shadow: 0 20px 50px rgba(0,0,0,0.65);
  }
  .tl-card:hover .tl-shine    { opacity: 1; }
  .tl-card:hover .tl-yr       { color: #888 !important; border-color: rgba(255,255,255,0.16) !important; background: rgba(255,255,255,0.07) !important; }
  .tl-card:hover .tl-inst     { color: #777 !important; }
  .tl-card:hover .tl-desc     { color: #5f5f5f !important; }
  .tl-card:hover .tl-sp       { border-color: rgba(255,255,255,0.12) !important; background: rgba(255,255,255,0.06) !important; }
  .tl-card:hover .tl-sp-val   { color: #b0b0b0 !important; }
  .tl-card:hover .tl-tag      { color: #727272 !important; border-color: rgba(255,255,255,0.12) !important; background: rgba(255,255,255,0.05) !important; }

  .tl-node {
    transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
                border-color 0.3s, color 0.3s, background 0.3s;
  }
  .tl-item:hover .tl-node {
    transform: scale(1.22) rotate(10deg) !important;
    border-color: rgba(255,255,255,0.28) !important;
    color: #aaa !important;
    background: rgba(255,255,255,0.06) !important;
  }

  .tl-ldot { animation: tl-lp 1.8s ease-in-out infinite; }
  @keyframes tl-lp {
    0%,100% { opacity:1; transform:scale(1); }
    50%     { opacity:.3; transform:scale(.6); }
  }

  @media (max-width: 640px) {
    .tl-line-el { left: 22px !important; transform: none !important; }
    .tl-item    { width: calc(100% - 54px) !important; left: 54px !important; }
    .tl-node    { right: auto !important; left: -48px !important; }
    .tl-conn    { left: -20px !important; right: auto !important; width: 20px !important; }
  }
`;

/* ─── LiveBadge ─────────────────────────────────────────── */
function LiveBadge() {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
        color: "#5a8f5a", background: "rgba(90,143,90,0.08)",
        border: "1px solid rgba(90,143,90,0.2)",
        padding: "2px 8px 2px 6px", borderRadius: 20,
        marginLeft: 7, verticalAlign: "middle", position: "relative", top: -1,
      }}
    >
      <span
        className="tl-ldot"
        style={{ width: 6, height: 6, background: "#5a8f5a", borderRadius: "50%", display: "block" }}
      />
      ongoing
    </span>
  );
}

/* ─── TimelineItem ──────────────────────────────────────── */
function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isLeft = item.side === "L";

  /* IntersectionObserver reveal */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("tl-visible"); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tl-item ${isLeft ? "tl-left" : "tl-right"}`}
      style={{
        position: "relative",
        width: "43%",
        marginBottom: 60,
        left: isLeft ? 0 : "57%",
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {/* Connector */}
      <div
        className="tl-conn"
        style={{
          position: "absolute", top: 43, height: 1, width: 30,
          background: "rgba(255,255,255,0.08)",
          ...(isLeft ? { right: -38 } : { left: -38 }),
        }}
      />

      {/* Bracket node */}
      <div
        className="tl-node"
        style={{
          position: "absolute", top: 22,
          width: 38, height: 38,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 8, zIndex: 10,
          fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 500,
          background: "#141414", border: "1px solid rgba(255,255,255,0.1)", color: "#555",
          ...(isLeft ? { right: -66 } : { left: -66 }),
        }}
      >
        {item.bracket}
      </div>

      {/* Number badge */}
      <div
        style={{
          position: "absolute", top: -9,
          width: 19, height: 19, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.07)",
          color: "#555", fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 600,
          ...(isLeft ? { right: 8 } : { left: 8 }),
        }}
      >
        {item.id}
      </div>

      {/* Card */}
      <div
        className="tl-card"
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, padding: 22,
          position: "relative", overflow: "hidden", cursor: "default",
        }}
      >
        {/* Shine overlay */}
        <div
          className="tl-shine"
          style={{
            position: "absolute", inset: 0, borderRadius: 14,
            background: "linear-gradient(135deg,rgba(255,255,255,0.03),transparent 55%)",
            opacity: 0, transition: "opacity .35s", pointerEvents: "none",
          }}
        />

        {/* Year */}
        <div
          className="tl-yr"
          style={{
            display: "inline-block",
            fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
            color: "#505050", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "3px 11px", borderRadius: 20, marginBottom: 12, letterSpacing: ".8px",
            transition: "color .3s,border-color .3s,background .3s",
          }}
        >
          {item.year}
          {item.live && <LiveBadge />}
        </div>

        {/* Degree */}
        <div style={{ fontSize: 15, fontWeight: 600, color: "#d5d5d5", marginBottom: 5, lineHeight: 1.4 }}>
          {item.degree}
        </div>

        {/* Institute */}
        <div
          className="tl-inst"
          style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
            color: "#484848", marginBottom: 13,
            transition: "color .3s",
          }}
        >
          {item.institute}
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 12 }} />

        {/* Description */}
        <p
          className="tl-desc"
          style={{ fontSize: 12.5, color: "#424242", lineHeight: 1.78, fontWeight: 300, transition: "color .3s" }}
        >
          {item.description}
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
          {item.stats.map((s) => (
            <div
              key={s.label}
              className="tl-sp"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                padding: "5px 12px", borderRadius: 6,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                color: "#404040",
                transition: "color .3s,border-color .3s,background .3s",
              }}
            >
              <span>{s.label}</span>
              <span
                className="tl-sp-val"
                style={{ fontWeight: 600, fontSize: 13, color: "#7a7a7a", transition: "color .3s" }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 13 }}>
          {item.tags.map((t) => (
            <span
              key={t}
              className="tl-tag"
              style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                padding: "3px 9px", borderRadius: 4,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                color: "#3a3a3a",
                transition: "color .3s,border-color .3s,background .3s",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── main component ────────────────────────────────────── */
export default function Education() {
  const wrapRef = useRef(null);
  const fillRef = useRef(null);

  /* inject global CSS */
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  /* scroll → timeline fill */
  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    function update() {
      const wr = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = window.scrollY + vh * 0.62;
      const wTop = wr.top + window.scrollY;
      const wBot = wTop + wr.height;
      const p = Math.min(1, Math.max(0, (scrolled - wTop) / (wBot - wTop)));
      fill.style.height = p * 100 + "%";
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="education"
      style={{
        background: "#080808",
        minHeight: "100vh",
        fontFamily: "'Space Grotesk',sans-serif",
        color: "#c9c9c9",
        padding: "64px 24px 100px",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 68 }}>
        <div
          style={{
            display: "inline-block",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase",
            color: "#555", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "4px 16px", borderRadius: 20, marginBottom: 18,
          }}
        >
          // education.json
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,5vw,44px)", fontWeight: 700,
            color: "#e0e0e0", lineHeight: 1.15,
          }}
        >
          Academic{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#777,#bbb,#888)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </h2>
        <p style={{ marginTop: 10, color: "#3a3a3a", fontSize: 13, fontWeight: 300 }}>
          Building foundations, one degree at a time
        </p>
      </div>

      {/* Timeline */}
      <div ref={wrapRef} style={{ position: "relative", maxWidth: 880, margin: "0 auto", paddingBottom: 60 }}>
        {/* Vertical line */}
        <div
          className="tl-line-el"
          style={{
            position: "absolute", left: "50%", top: 0,
            transform: "translateX(-50%)",
            width: 1, height: "100%",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            ref={fillRef}
            style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "0%",
              background: "linear-gradient(180deg,#484848,#888,#555)",
              borderRadius: 1,
              transition: "height 0.08s linear",
            }}
          />
        </div>

        {/* Items */}
        {educationData.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}