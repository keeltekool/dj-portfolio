# DJ Portfolio - PRD

## Project Overview
A minimal, static landing page for DJ Egert_V to showcase style, build credibility, and get booked for gigs.

## Goal
Get gigs. Put yourself out there, make booking easy.

## Tech Stack
- Next.js 16
- React 19
- Tailwind CSS 4
- next-themes (dark/light mode)
- Static deployment (Vercel)

---

## Page Structure & Content

### 1. Hero
- **Image:** `/images/snapedit_1727537146983_Yoooo-Photoroom.jpg`
- **Style:** Full-width or large banner, subtle/artistic (duotone scanline effect)
- **Name overlay:** Egert_V

### 2. Intro
> Playing tracks you didn't know you needed. Always digging for fresh sounds, mixing genres, keeping it unpredictable.

### 3. Sound & Influences
**Genres:**
- House
- Disco
- Funk
- Soul
- Hip-Hop
- Beats
- Electronic

**Inspired by:**
- Daft Punk
- Jamie XX
- Kaytranada
- Folamour
- Mochakk

### 4. Events
**Available for:**
- Bar & Lounge sets
- Corporate events
- Private parties

### 5. Gear
**Image:** `/images/Tooonal.png` (smaller format, ~50% width or styled)

**Equipment:**
- **Console:** Denon SC Live 4
- **Speakers:** Electro Voice ZLX-15P G2
- **Sub:** JBL EON618S

**Tagline:** Full mobile setup - ready for any venue.

### 6. Listen
**Spotify Embeds:** Use Spotify iframe widgets (dark theme, compact view)

- 1-2 playlist embeds (URLs stored in data file for easy swapping)
- Responsive width, ~80-152px height for compact player

### 7. Book
**Headline:** Let's make it happen.

**Contact:**
- Email: egertv@gmail.com
- Phone: +372 56633351

---

## Social Links
- **Spotify:** https://open.spotify.com/user/1xnhqtyznwbvh6q48087hzcmv?si=97504cb2bf324252

(In header or footer)

---

## Design Direction
- Minimal, clean (nordic-portfolio base)
- Dark/light theme toggle
- Hero image subtle, not overpowering
- Typography-focused, lots of whitespace
- Mobile-first responsive
- Subtle fade-in animations on scroll
- Reference: fromourminds.com aesthetic

## Assets
**Images (in `/public/images/`):**
- `snapedit_1727537146983_Yoooo-Photoroom.jpg` - Hero
- `Tooonal.png` - Gear section

**Content reference:**
- `/content/Sõstar.docx` - Event promo (for tone/vibe reference only)

---

## TODO
- [ ] Build page sections
- [ ] Add Spotify playlist links
- [ ] Deploy to Vercel
- [ ] Connect custom domain (optional)
