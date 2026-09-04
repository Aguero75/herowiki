# 🦸 HeroWiki

[![Tests](https://github.com/Aguero75/herowiki/actions/workflows/tests.yml/badge.svg)](https://github.com/Aguero75/herowiki/actions/workflows/tests.yml)

**A free Hero Wiki search to get info on your favorite superheroes.**

Search for any superhero and pull up their stats, powers, biography, and more — powered by a free superhero API.

🔗 **Live demo:** [herowiki-liart.vercel.app](https://herowiki-liart.vercel.app)

---

## ✨ Features

- 🔍 Search for superheroes by name
- 📊 View detailed hero info — powerstats, biography, appearance, and more
- 🎨 Clean, responsive UI styled with Tailwind CSS
- ⚡ Fast, server-rendered pages via the Next.js App Router
- 📱 Works great on mobile, tablet, and desktop

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) — React framework (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [superhero API](https://superheroapi.com/) — free hero data source
- [ESLint](https://eslint.org/) for code linting
- Deployed on [Vercel](https://vercel.com/)

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Aguero75/herowiki.git
cd herowiki
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
herowiki/
├── app/                  # App Router pages, layouts, and components
├── public/               # Static assets (images, icons, etc.)
├── eslint.config.mjs
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

## 📦 Deployment

The easiest way to deploy this app is via the [Vercel Platform](https://vercel.com/new), from the creators of Next.js.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## 📄 License

This project is open source. Feel free to use it as a starting point for your own hero search app.

---

Built with 🦸 and [Next.js](https://nextjs.org).
