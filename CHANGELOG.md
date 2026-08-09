# Changelog

## August 9, 2026

### Added
- **Project detail pages** (`/projects/:slug`) — each project now has its own dedicated page with hero image, about section, key highlights, and a sticky sidebar showing role, year, engine, status, platform links, tags, and a "View Project" CTA
- **Fantasy Mall 2 project** added to portfolio data with description, highlights, platforms, and itch.io link
- **Image support for all projects** — every project card now shows a screenshot (or a placeholder if none set), managed via the `image` field in `portfolio.ts`
- **Professional Game Dev identity card** on the landing page (desktop) — shows name, title, engine skill bars (Unity 90%, Roblox 80%, Unreal 55%), languages, target platforms, and "Open to opportunities" status indicator
- **Global mouse-following glow** — a subtle teal radial gradient follows the cursor across every page
- **Custom gaming-themed cursor** — a teal dot with an outer ring that expands on interactive elements; smooth lerp animation on the dot, snappy ring
- **Icons for all skills** — every skill in the Skills page and Index Quick Skills now has a matching lucide-react icon
- **LaTeX resume** (`public/RishabhDevNayak_Resume.tex`) — single-page resume with Fantasy Mall 2 included
- **Project screenshots** added to `public/`: SpaciousPlaces.png, GodsGang_Playstore.png, ShogunHeist.png, FantasyMall2_Image.gif

### Changed
- **Landing page hero redesigned** — removed the old `loadout.json` card and email/location inline; replaced with a clean headline, stats row (5+ Projects Shipped, 3 Game Engines, 4 Platforms), and CTAs
- **Project cards** now link internally to `/projects/:slug` instead of opening external links directly
- **Project images** use `object-contain` (not `object-cover`) to show the full image without cropping
- **Skills data structure** changed from string arrays to `{ name, icon }` objects for icon support
- **Fantasy Mall 2 description/highlights** updated to match the latest resume: Game Optimization, interaction mechanics, Save System, Android compatibility, economy balancing

### Technical
- **Layout.tsx** — added `useRef`/`useEffect` for mouse tracking, `requestAnimationFrame` for smooth cursor animation, and interactive element hover detection
- **index.css** — added `cursor: none` on body and all interactive elements to hide the system cursor
- **App.tsx** — added route `/projects/:slug` → `ProjectDetail`
- **New file:** `src/pages/ProjectDetail.tsx`
- **New file:** `public/RishabhDevNayak_Resume.tex`
- **Build:** all changes pass `bun run build` cleanly
