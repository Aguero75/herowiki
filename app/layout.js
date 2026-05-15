import { Cinzel, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata = {
  title: "HeroWiki - Explore the World of Heroes & Mythology",
  description:
    "Discover the stories, powers, and origins of heroes from ancient myths to modern legends. Search for your favorite hero and uncover their legendary tales.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:var(--font-cinzel))">
        {children}
      </body>
    </html>
  );
}
