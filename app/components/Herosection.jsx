"use client";

import { useState } from "react";

export default function HeroSection({ onSearch, isLoading = false }) {
  const [heroName, setHeroName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (heroName.trim() === "") return;
    onSearch(heroName.trim());
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-primary-50/30 to-primary-100/20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            Discover Legends
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-gray-900 via-primary-800 to-primary-600 bg-clip-text text-transparent">
              Explore the World of
            </span>
            <br />
            <span className="bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Heroes & Mythology
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Enter any hero name — from ancient myths to modern legends — and
            uncover their stories, powers, and origins.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  placeholder="e.g., Zeus, Hercules, Batman, Goku..."
                  className="w-full px-5 py-4 text-base rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !heroName.trim()}
                className="px-6 py-4 bg-linear-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-primary-600 disabled:hover:to-primary-700 flex items-center justify-center gap-2 min-w-[120px]"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Searching
                  </>
                ) : (
                  "Search Hero →"
                )}
              </button>
            </div>
          </form>

          {/* Example suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span className="text-gray-400">Try:</span>
            {["Batman", "Superman", "Daredevil", "Thor"].map((example) => (
              <button
                key={example}
                onClick={() => {
                  setHeroName(example);
                  onSearch(example);
                }}
                className="px-2 py-1 rounded-md bg-gray-100 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                disabled={isLoading}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
