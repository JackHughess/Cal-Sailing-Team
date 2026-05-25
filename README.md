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

Edit **`src/data/siteContent.ts`** for copy, events, gallery metadata, and each tab’s template sections.

Add photos to **`public/gallery/`** and wire them up in the gallery component when ready.

## Project structure

```
src/
  components/
    Header.tsx       # Title + tab navigation
    HomePage.tsx     # Landing (gallery, about, events)
    TemplatePage.tsx # Shared layout for tab pages
    PhotoGallery.tsx
    Footer.tsx
  data/siteContent.ts
  types.ts
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm.cmd run dev` | Development server |
| `npm.cmd run build` | Production build |
| `npm.cmd run preview` | Preview production build |
