"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCard({ heroName }) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function Spinner({ size = "md" }) {
    const sizes = {
      sm: "w-4 h-4 border-2",
      md: "w-6 h-6 border-2",
      lg: "w-9 h-9 border-[3px]",
    };

    return (
      <div
        className={`${sizes[size]} rounded-full border-gray-200 border-t-gray-500 animate-spin`}
      />
    );
  }

  useEffect(() => {
    if (!heroName) return;

    async function fetchHero() {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/hero?name=${encodeURIComponent(heroName)}`);
      const data = await res.json();

      // API returns { response: "success", results: [...] }
      // or          { response: "error", error: "..." }
      if (data.response === "success") {
        setHeroes(data.results); // ✅ array of heroes
      } else {
        setError(data.error || "Hero not found");
        setHeroes([]);
      }

      setLoading(false);
    }

    fetchHero();
  }, [heroName]);

  if (loading)
    return (
      <div className="flex flex-col items-center gap-3 py-16">
        <Spinner size="lg" />
        <p className="text-sm text-gray-500">Loading hero details...</p>
      </div>
    );
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {heroes.map((hero) => (
        <div
          key={hero.id}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
        >
          <Image
            src={hero.image.url}
            alt={hero.name}
            className="w-full rounded-xl mb-4"
            width={600}
            height={400}
          />
          <h2 className="text-2xl font-bold mb-2">{hero.name}</h2>
          <p className="text-gray-500">{hero.biography["full-name"]}</p>
          <code className="text-gray-500 block">
            <b>Gender:</b> {hero.appearance["gender"]}
          </code>
          <code className="text-gray-500 block">
            <b>Race:</b> {hero.appearance["race"]}
          </code>
          <code className="text-gray-500 block">
            <b>Base:</b> {hero.work["base"]}
          </code>
          <code className="text-gray-500 block">
            <b>Occupation:</b> {hero.work["occupation"]}
          </code>
          <code className="text-gray-500 block">
            <b>Birth-place:</b> {hero.biography["place-of-birth"]}
          </code>
          <code className="text-gray-500 block">
            <b>Publisher:</b> {hero.biography["publisher"]}
          </code>
        </div>
      ))}
    </div>
  );
}
