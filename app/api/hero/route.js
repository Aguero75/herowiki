import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const heroName = searchParams.get("name"); // 👈 read from query param

  const token = process.env.SUPERHERO_API_TOKEN;

  const res = await fetch(
    `https://superheroapi.com/api/${token}/search/${encodeURIComponent(heroName)}`,
  );
  const data = await res.json();

  return NextResponse.json(data); // return hero data, NOT the token
}
