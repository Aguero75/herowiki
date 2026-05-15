"use client";

import { useState } from "react";
import HeroSection from "./Herosection";
import HeroCard from "./HeroCard";

export default function HeroSearchWrapper() {
  const [searchedHero, setSearchedHero] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (heroName) => {
    setIsLoading(true);
    setSearchedHero(heroName);
    // Fetch logic will be inside HeroCard or here
    // For now just pass the name down
    setIsLoading(false);
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} isLoading={isLoading} />
      {searchedHero && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <HeroCard heroName={searchedHero} />
        </div>
      )}
    </>
  );
}
