# Cal Sailing Team Website

React + TypeScript template styled after [sailing.studentorg.berkeley.edu](https://sailing.studentorg.berkeley.edu/).

## Quick start

```bash
npm.cmd install
npm.cmd run dev
```

## Navigation tabs

| Tab | Purpose |
| --- | ------- |
| **Home** (click title) | Photo gallery, team about, upcoming events |
| **Roster** | Team member template |
| **About** | Extended history & facility info |
| **News** | Results and announcements |
| **Recruitment** | Tryouts and joining info |
| **Donations** | Giving and sponsors |
| **Contact** | Emails and location |
| **Merch** | Apparel and orders |

## Customize content

**Edit [`content/site.json`](content/site.json)** for almost all site text (home page, roster, news, About, Recruitment, and other tabs). See **[`content/README.md`](content/README.md)** for a field-by-field guide.

Add carousel photos to **`public/gallery/`** and set each slide’s `image` path in `site.json` → `gallery`.

Re-download About / Recruitment banners: `npm run download:heroes`

## Project structure

```
src/
  components/
    Header.tsx       # Title + tab navigation
    HomePage.tsx     # Landing (gallery, about, events)
    TemplatePage.tsx # Shared layout for tab pages
    PhotoGallery.tsx
    Footer.tsx
content/site.json   # ← main content file (edit this)
  data/siteContent.ts  # loads site.json (do not edit for copy)
  types.ts
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm.cmd run dev` | Development server |
| `npm.cmd run build` | Production build |
| `npm.cmd run preview` | Preview production build |
| `npm.cmd run download:heroes` | Fetch About & Recruitment banner images |
