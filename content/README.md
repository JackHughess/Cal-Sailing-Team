# Website content

**Edit `site.json` in this folder to change almost everything on the site.** You do not need to touch code in `src/`.

After saving changes, refresh the site in your browser (or restart `npm run dev` if something does not update).

## Quick reference

| What you want to change | Where in `site.json` |
|-------------------------|----------------------|
| Site name in header/footer | `site` |
| Navigation labels | `nav` |
| Browser tab titles | `pageTitles` |
| Home page text | `home.about` |
| Home upcoming events list | `home.upcomingEvents` |
| Home photo carousel | `gallery` (see below) |
| Instagram / TikTok links | `socialLinks` |
| Roster intro line | `roster` |
| Team members | `rosterMembers` |
| News page newsletter intro | `news.introBefore`, `news.newsletterLinkText`, `news.newsletterUrl` |
| News articles | `news.articles` |
| About page | `pages.about` |
| Recruitment page | `pages.recruitment` |
| Donations, Contact, Merch | `pages.donations`, `pages.contact`, `pages.merch` |

## Images

### About & Recruitment page banners

- About: save as `public/about/hero.png`
- Recruitment: save as `public/recruitment/hero.jpg`

Paths are set in `pages.about.heroImage` and `pages.recruitment.heroImage`.

To re-download from the team website, run:

```bash
npm run download:heroes
```

### Home carousel

In `gallery`, each slide has:

- `image` — path like `/gallery/my-photo.jpg` (file goes in `public/gallery/`)
- `alt` — short description for accessibility (not shown on screen)

Leave `image` as `""` until you add a file; a placeholder will show.

### Roster headshots

Put photos in `public/roster/` and set each member’s `photo` to `/roster/their-id.jpg` (or `.png`). Leave `photo` as `""` for a placeholder.

### News article images

Set `image` on each article in `news.articles` to a path under `public/news/` (e.g. `/news/cascadia-cup.jpg`) or a full URL.

## News articles

Each item in `news.articles` needs:

- `slug` — URL path (letters, numbers, hyphens only), e.g. `big-sail-2024` → `/news/big-sail-2024`
- `heading` — title
- `excerpt` — short preview on the News page
- `image` and `imageAlt` — card and post header image
- `paragraphs` — full post text (one string per paragraph)

## Roster members

Each entry in `rosterMembers`:

- `id` — lowercase with hyphens (used for photo filename)
- `name`, `role`, `major`, `hometown`, `graduatingClass` (year, e.g. 2028)
- `officerPosition` — leave `""` if none
- `photo` — path under `public/roster/` or `""` for placeholder

Members are grouped and sorted by `graduatingClass` on the Roster page.

## Page sections (About, Recruitment, etc.)

Under `pages.<pageName>.sections`, each section has a `heading` and one of:

- `paragraphs` — array of paragraph strings
- `body` — single paragraph
- `bullets` — FAQ-style list
