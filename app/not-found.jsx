import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-primary-50 px-6 text-center">
      {/* 404 */}
      <div className="relative select-none">
        <span
          className="text-[9rem] font-bold leading-none text-primary-100"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          404
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center text-lg font-semibold tracking-widest text-primary-400 uppercase"
          style={{ fontFamily: "var(--font-nunito-sans)" }}
        >
          Page not found
        </span>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-xs">
        <div className="flex-1 h-px bg-primary-200" />
        <span
          className="text-[0.6rem] uppercase tracking-[0.14em] text-primary-400"
          style={{ fontFamily: "var(--font-nunito-sans)" }}
        >
          Lost in the multiverse
        </span>
        <div className="flex-1 h-px bg-primary-200" />
      </div>

      {/* Message */}
      <p
        className="text-sm leading-relaxed text-[#4a6a85] max-w-sm"
        style={{ fontFamily: "var(--font-nunito-sans)" }}
      >
        Even the greatest heroes lose their way sometimes. The page you're
        looking for doesn't exist or has been moved.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-primary-500 border border-primary-500 transition-all duration-200 hover:bg-primary-600 hover:border-primary-600 hover:shadow-lg hover:shadow-primary-200"
        style={{ fontFamily: "var(--font-nunito-sans)" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M5 12l7-7M5 12l7 7" />
        </svg>
        Back to HeroWiki
      </Link>
    </div>
  );
}
