# DJ Portfolio - Build Context

## STATUS: Ready to build. Just say "Start".

## What This Is
DJ landing page for Egert_V. Minimal, dark-friendly, fromourminds.com aesthetic.

## Tech Stack (already installed)
- Next.js 16, React 19, Tailwind CSS 4, next-themes

## Files Ready
- `PRD.md` - Full spec
- `data/content.json` - All content (editable, swap playlists here)
- `public/images/` - Hero + gear images

## Build Tasks
1. Update `app/layout.tsx` metadata for DJ site
2. Build components in `components/`:
   - `Hero.tsx` - Full-width image with name overlay
   - `Intro.tsx` - Update with DJ bio (already exists, just update)
   - `SoundInfluences.tsx` - Genres + influences
   - `Events.tsx` - Event types
   - `Gear.tsx` - Equipment list + Tooonal.png image
   - `Listen.tsx` - Spotify iframe embeds
   - `Book.tsx` - Contact section
3. Update `Header.tsx` - Change name to Egert_V, add Spotify icon link
4. Update `Footer.tsx` - Simple footer
5. Assemble in `app/page.tsx`
6. Add subtle scroll fade-in animations (CSS or intersection observer)
7. Run dev server, test

## Content Summary (from content.json)
- **Name:** Egert_V
- **Bio:** "Playing tracks you didn't know you needed. Always digging for fresh sounds, mixing genres, keeping it unpredictable."
- **Genres:** House, Disco, Funk, Soul, Hip-Hop, Beats, Electronic
- **Influences:** Daft Punk, Jamie XX, Kaytranada, Folamour, Mochakk
- **Events:** Bar & Lounge, Corporate, Private parties
- **Gear:** Denon SC Live 4, EV ZLX-15P G2, JBL EON618S
- **Contact:** egertv@gmail.com, +372 56633351
- **Spotify:** https://open.spotify.com/user/1xnhqtyznwbvh6q48087hzcmv
- **Hero image:** /images/snapedit_1727537146983_Yoooo-Photoroom.jpg
- **Gear image:** /images/Tooonal.png

## Design Notes
- Minimal, lots of whitespace
- Dark/light theme toggle (keep from template)
- Hero image subtle, not overpowering
- Spotify embeds use iframe with dark theme
- Reference: fromourminds.com

## Cleanup
- Delete `data/projects.json` (not needed)
- Remove/replace ProjectCard.tsx, ProjectGrid.tsx (not needed)

## GitHub
- Repo: https://github.com/keeltekool/dj-portfolio
- Deploy to Vercel after build

## Development
```bash
cd C:\Users\Kasutaja\Claude_Projects\dj-portfolio
npm run dev     # Start dev server at localhost:3000
```
