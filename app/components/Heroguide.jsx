"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Type a hero name",
    description:
      "Enter any hero into the search box — from Superman to Achilles, ancient myths to modern legends.",
  },
  {
    number: "02",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Wait a moment",
    description:
      "HeroWiki scans thousands of heroes instantly and assembles a full profile just for you.",
  },
  {
    number: "03",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Explore the results",
    description:
      "Browse powers, biography, stats, and appearance details for every hero match returned.",
  },
];

const suggestions = [
  "Batman",
  "Thor",
  "Wonder Woman",
  "Hercules",
  "Black Panther",
];

function StepCard({ step, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.13}s, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.13}s, border-color 0.2s, box-shadow 0.2s`,
        background: "#fff",
        border: `1px solid ${hovered ? "var(--color-primary-300)" : "var(--color-primary-100)"}`,
        borderRadius: "18px",
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? "0 8px 32px -8px rgba(14,165,233,0.15)" : "none",
      }}
    >
      {/* Ghost number */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          fontFamily: "var(--font-cinzel, serif)",
          fontSize: "5rem",
          fontWeight: 700,
          lineHeight: 1,
          color: "var(--color-primary-50)",
          userSelect: "none",
          pointerEvents: "none",
          transform: "translate(8px, -8px)",
        }}
      >
        {step.number}
      </div>

      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "var(--color-primary-50)",
          border: "1px solid var(--color-primary-100)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-primary-600)",
        }}
      >
        {step.icon}
      </div>

      {/* Label + Title */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <span
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-primary-400)",
          }}
        >
          Step {step.number}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-cinzel, serif)",
            fontSize: "1rem",
            fontWeight: 600,
            margin: 0,
            color: "var(--color-primary-900)",
            letterSpacing: "0.01em",
          }}
        >
          {step.title}
        </h3>
      </div>

      <p
        style={{
          fontFamily: "var(--font-nunito-sans, sans-serif)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          margin: 0,
          color: "#4a6a85",
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

export default function HeroGuide() {
  const [visible, setVisible] = useState(false);
  const [chipHover, setChipHover] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 880,
        margin: "0 auto",
        padding: "5rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3.5rem",
      }}
    >
      {/* Header block */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          maxWidth: 580,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            color: "var(--color-primary-600)",
            background: "var(--color-primary-50)",
            border: "1px solid var(--color-primary-200)",
            padding: "5px 16px",
            borderRadius: 100,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-primary-500)",
              animation: "hwpulse 2s ease infinite",
              display: "inline-block",
            }}
          />
          How it works
        </div>

        <h2
          style={{
            fontFamily: "var(--font-cinzel, serif)",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            color: "var(--color-primary-900)",
            letterSpacing: "-0.01em",
          }}
        >
          Discover any hero,{" "}
          <span style={{ color: "var(--color-primary-500)" }}>instantly.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "1rem",
            lineHeight: 1.8,
            margin: 0,
            color: "#4a6a85",
            maxWidth: 460,
          }}
        >
          All it takes is a name. HeroWiki does the rest — surfacing the full
          story, powers, and stats behind every hero you search.
        </p>
      </div>

      {/* Step cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
          width: "100%",
        }}
      >
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      >
        <div
          style={{ flex: 1, height: 1, background: "var(--color-primary-100)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "0.7rem",
            color: "var(--color-primary-400)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Popular searches
        </span>
        <div
          style={{ flex: 1, height: 1, background: "var(--color-primary-100)" }}
        />
      </div>

      {/* Suggestion chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.65rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease 0.65s, transform 0.5s ease 0.65s",
        }}
      >
        {suggestions.map((name) => (
          <button
            key={name}
            onMouseEnter={() => setChipHover(name)}
            onMouseLeave={() => setChipHover(null)}
            style={{
              fontFamily: "var(--font-nunito-sans, sans-serif)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: chipHover === name ? "#fff" : "var(--color-primary-700)",
              background:
                chipHover === name
                  ? "var(--color-primary-500)"
                  : "var(--color-primary-50)",
              border: `1px solid ${chipHover === name ? "var(--color-primary-500)" : "var(--color-primary-200)"}`,
              borderRadius: 100,
              padding: "7px 18px",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes hwpulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}
