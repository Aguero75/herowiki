"use client";

import { useEffect, useRef, useState } from "react";

const contactItems = [
  {
    label: "Email",
    value: "tonychikezie75@gmail.com",
    href: "mailto:tonychikezie75@gmail.com",
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    value: "@iamtony75",
    href: "https://twitter.com/iamtony75",
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
        <path d="M4 4l16 16M4 20 20 4" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Aguero75",
    href: "https://github.com/Aguero75",
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Worldwide — remote & open",
    href: null,
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
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

function ContactCard({ item, index }) {
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

  const inner = (
    <div
      ref={ref}
      onMouseEnter={() => item.href && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.11}s, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.11}s, border-color 0.2s, box-shadow 0.2s`,
        background: "#fff",
        border: `1px solid ${hovered ? "var(--color-primary-300)" : "var(--color-primary-100)"}`,
        borderRadius: "18px",
        padding: "1.6rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1.1rem",
        position: "relative",
        overflow: "hidden",
        cursor: item.href ? "pointer" : "default",
        textDecoration: "none",
        boxShadow: hovered ? "0 8px 32px -8px rgba(14,165,233,0.15)" : "none",
      }}
    >
      {/* Hover glow accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          background: "var(--color-primary-400)",
          borderRadius: "18px 0 0 18px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Icon */}
      <div
        style={{
          flexShrink: 0,
          width: 48,
          height: 48,
          borderRadius: 13,
          background: hovered
            ? "var(--color-primary-500)"
            : "var(--color-primary-50)",
          border: `1px solid ${hovered ? "var(--color-primary-500)" : "var(--color-primary-100)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "#fff" : "var(--color-primary-600)",
          transition: "all 0.2s ease",
        }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "var(--color-primary-400)",
          }}
        >
          {item.label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-cinzel, serif)",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: hovered
              ? "var(--color-primary-600)"
              : "var(--color-primary-900)",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "color 0.2s ease",
          }}
        >
          {item.value}
        </span>
      </div>

      {/* Arrow */}
      {item.href && (
        <div
          style={{
            flexShrink: 0,
            color: "var(--color-primary-300)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-6px)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  return item.href ? (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 680,
        margin: "0 auto",
        padding: "5rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3.5rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          maxWidth: 500,
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
          Get in touch
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
          Let's talk{" "}
          <span style={{ color: "var(--color-primary-500)" }}>heroes.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "1rem",
            lineHeight: 1.8,
            margin: 0,
            color: "#4a6a85",
            maxWidth: 420,
          }}
        >
          Have a question, a suggestion, or just want to geek out about your
          favourite hero? Reach out — we're always happy to hear from you.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.3s",
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
          Contact details
        </span>
        <div
          style={{ flex: 1, height: 1, background: "var(--color-primary-100)" }}
        />
      </div>

      {/* Contact cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        {contactItems.map((item, i) => (
          <ContactCard key={item.label} item={item} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease 0.7s, transform 0.5s ease 0.7s",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "var(--color-primary-50)",
          border: "1px dashed var(--color-primary-200)",
          borderRadius: 100,
          padding: "10px 22px",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary-400)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-nunito-sans, sans-serif)",
            fontSize: "0.78rem",
            color: "var(--color-primary-600)",
          }}
        >
          We typically respond within{" "}
          <strong style={{ color: "var(--color-primary-700)" }}>
            24 hours
          </strong>
        </span>
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
