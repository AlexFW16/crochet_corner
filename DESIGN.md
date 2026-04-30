# Pingus Crochet Corner — Design Document

## 1. Overview

A showcase site for craft projects (crochet, knitting, etc.). The primary audience is friends and family, with a secondary audience of potential customers or collaborators.

**Goals:**
- Showcase finished and in-progress craft projects with photos and descriptions
- Link to video tutorials, patterns, and other sources
- Organize projects by status (Currently Working On, Completed, Patterns/Tutorials)
- Simple to maintain (likely static site via GitHub Pages)

---

## 2. Site Structure

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Home / Gallery overview |
| `/projects` | Full project gallery (all projects) |
| `/projects/:slug` | Individual project detail page |
| `/currently-working-on` | Filtered view: in-progress items |
| `/tutorials` | Collection of pattern/video links used |
| `/about` | About section (who is Pingus?) |

### Navigation
- Sticky header with: Home, Gallery, WIP, Tutorials, About
- Consistent across all pages

---

## 3. Data Model

Projects are stored as markdown/JSON files (or frontmatter in MDX) for easy editing.

```ts
interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  coverImage: string;
  images: string[];
  status: 'wip' | 'completed';
  tags: string[]; // e.g., ['amigurumi', 'cozy', 'seasonal']
  sources: Source[];
  createdAt: string;
  updatedAt: string;
}

interface Source {
  type: 'youtube' | 'blog' | 'etsy' | 'pattern' | 'other';
  title: string;
  url: string;
  notes?: string;
}
```

### Status Categories
- **Currently Working On (WIP)** — Items in progress
- **Completed** — Finished projects
- **Patterns/Tutorials** — Resources used (may not be personal projects)

---

## 4. Visual Design

### Aesthetic Direction
Warm, cozy, handmade feel — think yarn textures, soft colors, craft aesthetic. Not too corporate; should feel personal and inviting.

### Color Palette (TBD)
- Primary:
- Secondary:
- Accent:
- Background:
- Text:

### Typography (TBD)
- Headings:
- Body:

### Layout
- Image-first gallery with responsive grid
- Cards showing: cover image, title, status badge
- Detail page: hero image, description, source links, gallery

---

## 5. Technical Stack

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Framework | Astro | Static output, MDX support, fast, easy to deploy to GitHub Pages |
| Styling | Tailwind CSS | Utility-first, responsive, maintainable |
| Content | MDX / Content Collections | Markdown + components for project data |
| Hosting | GitHub Pages | Free, simple, existing GitHub workflow |
| Images | Static assets + Cloudinary/Imgix for optimization | Avoids bloating the repo |
| Domain | Custom domain (optional) | `pinguscrochetcorner.com` or similar |

### Deployment Flow
1. Push to `main` branch
2. GitHub Actions builds Astro site
3. Deploys to GitHub Pages

---

## 6. Key Features

### Must Have
- [ ] Project gallery with filter by status
- [ ] Individual project pages with images, description, sources
- [ ] Responsive mobile design
- [ ] Easy to add new projects (markdown files)
- [ ] Basic SEO (meta tags, sitemap)

### Nice to Have
- [ ] Lightbox for image gallery
- [ ] "Favorite" or "Featured" projects
- [ ] Contact form (e.g., via Formspree)
- [ ] Dark mode toggle
- [ ] Tags/categories for projects
- [ ] Simple CMS UI (Keystatic or Decap CMS) for non-technical editing

---

## 7. Content Workflow

1. Create new `.mdx` file in `src/content/projects/`
2. Fill frontmatter with project data
3. Add images to `src/assets/projects/`
4. Push to GitHub — site auto-updates

---

## 8. Out of Scope (for now)

- Online shop / Stripe integration
- User accounts / commenting
- Blog / news articles
- Newsletter signup

---

## 9. Next Steps

1. **Confirm stack choice** — Astro + Tailwind + GitHub Pages works well for this use case
2. **Set up repo** with Astro scaffolding
3. **Create first 2-3 sample projects** to validate the content model
4. **Build gallery page** with status filter
5. **Design system** — pick fonts, colors, refine aesthetic
6. **Deploy to GitHub Pages** and verify

---

## Open Questions

- [ ] What platform for images? (Cloudinary, Imgix, or just commit to repo?)
- [ ] Custom domain or `.github.io` subdomain?
- [ ] Does she want a CMS, or is editing markdown files acceptable?
- [ ] Any social links to include (Instagram, etc.)?
- [ ] Do you want comments/contact on individual projects?
