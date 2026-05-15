export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-primary-50">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-[3px] border-primary-100" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary-500 animate-spin" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span
          className="text-xl font-semibold tracking-widest text-primary-900"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          HEROWIKI
        </span>
        <span
          className="text-xs tracking-[0.15em] uppercase text-primary-400"
          style={{ fontFamily: "var(--font-nunito-sans)" }}
        >
          Loading...
        </span>
      </div>
    </div>
  );
}
