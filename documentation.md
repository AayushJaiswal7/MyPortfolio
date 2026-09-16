# Developer Documentation

Personal portfolio for **Aayush Kumar** — a single-page React app with hash-based section navigation, scroll-aware navbar, and content driven mostly from `src/constants/`.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Getting started](#getting-started)
3. [Architecture](#architecture)
4. [Project structure](#project-structure)
5. [Folder reference](#folder-reference)
6. [File reference](#file-reference)
7. [Design system](#design-system)
8. [Common tasks](#common-tasks)
9. [Notes](#notes)

---

## Tech stack

| Layer | Tools |
|-------|-------|
| UI | React 19, TypeScript 6 |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| UI utilities | Radix Slot, CVA, clsx, tailwind-merge |
| Lint | Oxlint |

Path alias: `@/` → `src/` (set in `vite.config.ts` and `tsconfig.app.json`).

---

## Getting started

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # type-check + production build → dist/
npm run preview   # preview production build
npm run lint      # run Oxlint
```

Before deploying, add `public/resume.pdf` if you rely on the resume download link (`siteConfig.resumeUrl`).

---

## Architecture

### How the app is wired

```
index.html
    └── main.tsx
            ├── index.css          (global theme + utilities)
            └── App.tsx
                    ├── Navbar     (fixed, scroll spy)
                    ├── Hero
                    ├── About
                    ├── Skills
                    ├── Projects
                    ├── Experience
                    ├── Contact
                    └── Footer
```

### Data flow

```
src/types/          → shared TypeScript shapes
src/constants/      → copy, links, lists (most editable content)
src/components/     → UI that reads constants and renders sections
src/hooks/          → scroll behavior shared by layout
```

There is **no router**. Links use hash anchors (`#about`). Smooth scrolling comes from CSS in `index.css`.

### Section IDs and navigation

Every scrollable section uses `<Section id="...">`. Those IDs must match `navLinks` in `src/constants/nav.ts`:

| Section | DOM `id` | Nav label |
|---------|----------|-----------|
| Hero | `hero` | Home |
| About | `about` | About |
| Skills | `skills` | Skills |
| Projects | `projects` | Projects |
| Experience | `experience` | Experience |
| Contact | `contact` | Contact |

`useActiveSection` watches these IDs and highlights the matching nav link.

---

## Project structure

```
portfolio/
├── index.html                 # SEO, fonts, JSON-LD, app mount point
├── documentation.md           # This file
├── README.md                  # Short intro + link here
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .oxlintrc.json
│
├── public/                    # Static files served at site root
│   └── favicon.svg
│
└── src/
    ├── main.tsx               # React entry
    ├── App.tsx                # Page shell + section order
    ├── index.css              # Theme tokens and global styles
    │
    ├── types/                 # Shared interfaces
    ├── constants/             # Site content and configuration
    ├── hooks/                 # Reusable React hooks
    ├── lib/                   # Helpers
    │
    └── components/
        ├── layout/            # Navbar, Footer
        ├── sections/          # Page sections (Hero → Contact)
        └── ui/                # Reusable UI primitives
```

Each component folder includes an `index.ts` barrel file so imports stay short:

```ts
import Button from "@/components/ui/Button";
import Hero from "@/components/sections/Hero";
```

---

## Folder reference

### `public/`

**Purpose:** Files copied unchanged into the build output.

**Contains:**
- `favicon.svg` — browser tab icon
- *(recommended)* `resume.pdf` — linked from Footer and CTAs via `siteConfig.resumeUrl`

---

### `src/types/`

**Purpose:** Single source of truth for data shapes used by constants and components.

**Contains:**

| File | Exports |
|------|---------|
| `index.ts` | `NavLink`, `SocialLink`, `Skill`, `SkillCategory`, `Project`, `ContactInfo`, `ServiceItem` |

---

### `src/constants/`

**Purpose:** Editable content layer. Change copy and data here before touching JSX.

**Contains:**

| File | What it holds | Consumed by |
|------|---------------|-------------|
| `site.ts` | `siteConfig` (name, email, phone, location, resume URL) and `socialLinks` | Contact, Footer, SocialLinks, contact.ts |
| `nav.ts` | `navLinks`, `sectionIds` | Navbar, Footer, useActiveSection |
| `about.ts` | About section title, bio, three info cards | About |
| `skills.ts` | Section headings + `skills[]` array | Skills |
| `projects.ts` | Section headings + `projects[]` array | Projects |
| `contact.ts` | Form labels, success messages, `getContactInfo()` | Contact |
| `footer.ts` | Footer copy, quick links, services list | Footer |

---

### `src/hooks/`

**Purpose:** Shared client-side behavior.

**Contains:**

| File | Behavior | Used by |
|------|----------|---------|
| `useActiveSection.ts` | Tracks which section is in view via `IntersectionObserver` | Navbar |
| `useScrolled.ts` | Returns `true` after scrolling past a threshold (default 80px) | Navbar |

---

### `src/lib/`

**Purpose:** Small non-React utilities.

**Contains:**

| File | Exports | Used by |
|------|---------|---------|
| `utils.ts` | `cn()` — merges Tailwind classes safely | Most components |

---

### `src/components/layout/`

**Purpose:** Persistent page chrome outside the main content sections.

**Contains:**

| Folder | Role |
|--------|------|
| `Navbar/` | Fixed header, desktop + mobile menu, active link state, "Let's Talk" CTA |
| `Footer/` | Resume banner, quick links, services, social links, back-to-top |

---

### `src/components/sections/`

**Purpose:** One folder per visible page section. Each exports a default component rendered in `App.tsx`.

**Contains:**

| Folder | Section ID | Files |
|--------|------------|-------|
| `Hero/` | `hero` | Hero, HeroContent, HeroCard, CTAButtons, SocialLinks |
| `About/` | `about` | About |
| `Skills/` | `skills` | Skills, SkillCard |
| `Projects/` | `projects` | Projects, ProjectCard |
| `Experience/` | `experience` | Experience, Timeline, TimelineCard, TimelineNode, TimelineCTA, timelineData |
| `Contact/` | `contact` | Contact |

Experience timeline data lives in `timelineData.ts` inside this folder (not in `constants/`).

---

### `src/components/ui/`

**Purpose:** Reusable building blocks. Sections and layout should compose these instead of duplicating markup.

**Contains:**

| Folder | Role |
|--------|------|
| `Button/` | Styled button with CVA variants (`primary`, `secondary`, `outline`, `ghost`) and Radix `asChild` |
| `Container/` | Centered max-width wrapper (`max-w-7xl`) |
| `Section/` | Semantic `<section>` with default vertical padding |
| `SectionTitle/` | Animated section header (badge + title + subtitle) |
| `Badge/` | Small pill label |
| `SocialLinks/` | Row of social icon links |

---

## File reference

For each file: **what it does** and **what it imports / uses**.

> Barrel files (`index.ts`) only re-export the folder default. They are not listed separately.

### Entry

#### `src/main.tsx`
- **Does:** Mounts the React app into `#root`.
- **Uses:** `StrictMode`, `App`, `index.css`.

#### `src/App.tsx`
- **Does:** Composes the full page — skip link, background glows, navbar, all sections, footer.
- **Uses:** `Navbar`, `Footer`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`.

---

### Layout

#### `layout/Navbar/Navbar.tsx`
- **Does:** Fixed nav with scroll-based glass background, active section highlight, mobile drawer.
- **Uses:** `Button`, `navLinks`, `useActiveSection`, `useScrolled`, `cn`, Lucide (`Menu`, `X`).

#### `layout/Footer/Footer.tsx`
- **Does:** Resume download CTA, four-column footer grid, copyright, back-to-top.
- **Uses:** `Container`, `Button`, `SocialLinks`, `footerData`, `footerQuickLinks`, `footerServices`, `siteConfig`, `socialLinks`, `cn`, Lucide icons.

---

### Hero

#### `sections/Hero/Hero.tsx`
- **Does:** Full-height hero wrapper with background effects.
- **Uses:** `Section`, `Container`, `HeroContent`, `HeroCard`.

#### `sections/Hero/HeroContent.tsx`
- **Does:** Left column — greeting, name, role, description, CTAs, social links.
- **Uses:** `CTAButtons`, `SocialLinks` (hero wrapper), Framer Motion.
- **Note:** Copy is hardcoded here, not in `constants/`.

#### `sections/Hero/HeroCard.tsx`
- **Does:** Right column — avatar initials, availability badge, stats grid.
- **Uses:** Lucide icons, Framer Motion. Stats array is local.

#### `sections/Hero/CTAButtons.tsx`
- **Does:** "Download Resume" and "Contact Me" buttons.
- **Uses:** `Button` (`primary` + `secondary`, size `lg`).

#### `sections/Hero/SocialLinks.tsx`
- **Does:** Filters `socialLinks` to GitHub, LinkedIn, email only; passes to UI component.
- **Uses:** `socialLinks` from `site.ts`, UI `SocialLinks`.

---

### About

#### `sections/About/About.tsx`
- **Does:** Bio text + three themed cards (Education, Focus, Interests).
- **Uses:** `Section`, `Container`, `Badge`, `aboutData`, `cn`, Lucide icons, Framer Motion.

---

### Skills

#### `sections/Skills/Skills.tsx`
- **Does:** Section header + responsive skill grid + footer badge.
- **Uses:** `Section`, `Container`, `SectionTitle`, `Badge`, `SkillCard`, `skills`, `skillsData`, Lucide `Code2`.

#### `sections/Skills/SkillCard.tsx`
- **Does:** Single skill tile with icon, name, and category.
- **Uses:** `Skill` type, `cn`, `react-icons/si`, Framer Motion.

---

### Projects

#### `sections/Projects/Projects.tsx`
- **Does:** Section header + project card grid.
- **Uses:** `Section`, `Container`, `SectionTitle`, `ProjectCard`, `projects`, `projectsData`, Lucide `Code2`.

#### `sections/Projects/ProjectCard.tsx`
- **Does:** Hoverable project card with icon, tags, GitHub/live links.
- **Uses:** `Project` type, `cn`, Lucide icons, Framer Motion.

---

### Experience

#### `sections/Experience/Experience.tsx`
- **Does:** Section header + timeline + bottom CTA.
- **Uses:** `Section`, `Container`, `Badge`, `Timeline`, `TimelineCTA`, `experienceHeader`, Lucide `Briefcase`, Framer Motion.

#### `sections/Experience/Timeline.tsx`
- **Does:** Animated vertical timeline (mobile stack, desktop alternating layout).
- **Uses:** `timelineItems`, `TimelineCard`, `TimelineNode`, `cn`, Framer Motion, inline SVG path.

#### `sections/Experience/TimelineCard.tsx`
- **Does:** Content card for one timeline entry.
- **Uses:** `TimelineItem` type, `timelineColorStyles`, `cn`, Lucide icons, Framer Motion.

#### `sections/Experience/TimelineNode.tsx`
- **Does:** Step number + icon node on the timeline spine.
- **Uses:** `TimelineItem` type, `timelineColorStyles`, `cn`, Lucide icons, Framer Motion.

#### `sections/Experience/TimelineCTA.tsx`
- **Does:** Closing call-to-action below the timeline.
- **Uses:** `Button`, `timelineCTA`, Lucide, Framer Motion.

#### `sections/Experience/timelineData.ts`
- **Does:** Timeline content — header copy, CTA text, `timelineItems[]`, color/style maps.
- **Uses:** No React. Pure data and types (`TimelineItem`, `TimelineColor`, `TimelineIcon`).

---

### Contact

#### `sections/Contact/Contact.tsx`
- **Does:** Contact info cards, social links, validated form that opens a `mailto:` link.
- **Uses:** `Section`, `Container`, `SectionTitle`, `Button`, `SocialLinks`, `contactData`, `getContactInfo`, `siteConfig`, `cn`, Lucide icons, Framer Motion (`AnimatePresence`).

---

### UI primitives

#### `ui/Button/Button.tsx`
- **Uses:** Radix `Slot`, `buttonVariants`, `cn`.

#### `ui/Button/buttonVariants.ts`
- **Uses:** CVA. Variants: `primary | secondary | outline | ghost`. Sizes: `sm | md | lg`.

#### `ui/Container/Container.tsx`
- **Uses:** `cn`.

#### `ui/Section/Section.tsx`
- **Uses:** `cn`. Renders `<section className="py-24">` with optional `id`.

#### `ui/SectionTitle/SectionTitle.tsx`
- **Uses:** `Badge`, `cn`, Framer Motion.

#### `ui/Badge/Badge.tsx`
- **Uses:** `cn`.

#### `ui/SocialLinks/SocialLinks.tsx`
- **Uses:** `SocialLink` type, default `socialLinks`, `cn`, `react-icons/fa6`, `react-icons/si`, Lucide `Mail`.

---

### Hooks and lib

#### `hooks/useActiveSection.ts`
- **Uses:** `sectionIds` from `nav.ts`, browser `IntersectionObserver`.

#### `hooks/useScrolled.ts`
- **Uses:** `window` scroll events.

#### `lib/utils.ts`
- **Uses:** `clsx`, `tailwind-merge`.

---

## Design system

Defined in `src/index.css` via Tailwind v4 `@theme`.

### Colors

| Token | Class examples | Usage |
|-------|----------------|-------|
| `--color-bg` | `bg-bg` | Page background |
| `--color-card` | `bg-card` | Card surfaces |
| `--color-primary` | `text-primary`, `bg-primary` | Links, buttons, accents |
| `--color-text` | `text-text` | Primary text |
| `--color-text-secondary` | `text-text-secondary` | Muted text |
| `--color-success` / `--color-error` | `text-success`, `border-error` | Form feedback |

### Radii

| Token | Class |
|-------|-------|
| `--radius-input` | `rounded-input` |
| `--radius-button` | `rounded-button` |
| `--radius-card` | `rounded-card` |
| `--radius-container` | `rounded-container` |

### Utility classes

| Class | Purpose |
|-------|---------|
| `.glass-card` | Frosted card with border and blur |
| `.section-glow` | Decorative background wrapper |
| `.text-gradient-primary` | Blue gradient heading text |
| `.dot-grid` | Dot pattern background |
| `.text-h1`, `.text-h2`, `.text-body-lg`, `.text-caption` | Typography scale |

Accessibility: `prefers-reduced-motion` disables animations and smooth scroll.

---

## Common tasks

### Update personal info

1. Edit `src/constants/site.ts` — email, phone, social URLs, resume path.
2. Mirror SEO fields in `index.html` (title, meta, JSON-LD).

### Add a project

1. Add an entry to `projects[]` in `src/constants/projects.ts`.
2. Match the `Project` interface in `src/types/index.ts`.
3. Pick an existing `icon`: `"graduation" | "home" | "shield" | "plane"`.
4. To add a new icon, extend `iconMap` in `ProjectCard.tsx`.

### Add a skill

1. Append to `skills[]` in `src/constants/skills.ts`.
2. Ensure `icon` key exists in `iconMap` inside `SkillCard.tsx`.

### Add a new page section

1. Add `{ label, href: "#your-id" }` to `navLinks` in `nav.ts`.
2. Create `src/components/sections/YourSection/` with `<Section id="your-id">`.
3. Import and place the section in `App.tsx` (order matters for scroll flow).

### Change hero text or stats

Hero content is **not** in `constants/` yet:
- Headline and bio → `HeroContent.tsx`
- Stats (Projects, Certifications, etc.) → `HeroCard.tsx`

---

## Notes

- **Contact form:** Client-side validation only. Submit opens the user's email client via `mailto:` — no backend.
- **Resume:** Footer and hero CTA expect `/resume.pdf` in `public/`.
- **Hero CTAs:** `CTAButtons.tsx` buttons are not wired to `siteConfig.resumeUrl` or `#contact` yet — add `asChild` + `<a>` if needed.
- **Experience data:** Lives in `timelineData.ts`, separate from `constants/`, because it includes layout-specific fields (`side`, `color`, `step`).
- **Social icons:** Supported types are `github`, `linkedin`, `leetcode`, `email`. Add new icons in `SocialLinks.tsx` `iconMap` and update the `SocialLink` type.
