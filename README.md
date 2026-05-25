# Cal Sailing Website

A React + TypeScript website template for the Cal Sailing student club at UC Berkeley.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview locally.

## Customize content

Edit **`src/data/siteContent.ts`** to update:

- Club name, tagline, and description
- Navigation links
- About section and highlights
- Event dates, titles, and locations
- Join steps and contact links

## Project structure

```
src/
  components/     # Header, Hero, About, Events, Join, Footer
  data/           # Site copy (edit this first)
  App.tsx         # Page layout
  index.css       # Cal blue & gold theme
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Deploy

Build static files with `npm run build`, then deploy the `dist/` folder to GitHub Pages, Netlify, Vercel, or any static host.
