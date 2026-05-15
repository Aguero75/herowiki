/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.superherodb.com", // actual image host for superheroapi
      },
    ],
  },
};

export default nextConfig;
