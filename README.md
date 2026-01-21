# OpenCode Skills Directory

A personal documentation hub for AI coding skills used with OpenCode. This directory catalogs 110+ skills across 10 categories, serving as a quick reference for prompts, capabilities, and related techniques I use in my development workflow.

**Live:** [muhanad2004.github.io/ToolSet](https://muhanad2004.github.io/ToolSet/)

## Purpose

When working with OpenCode, I frequently use various skills for different tasks—security testing, frontend development, API design, AI agents, and more. This directory:

- **Documents every skill** I've used or plan to use
- **Stores example prompts** that I can copy and reuse
- **Maps relationships** between related skills
- **Organizes by category** for quick discovery
- **Provides a searchable interface** to find the right skill fast

Instead of remembering exact prompt syntax or digging through chat history, I open this directory, search for what I need, and copy the prompt directly.

## How I Use It

1. **Quick Reference** — Search for a skill by name or keyword to see what it does and how to invoke it
2. **Prompt Templates** — Each skill has example prompts I can copy with one click
3. **Discovery** — Browse categories to find skills I might not know about
4. **Documentation** — Full descriptions explain when and why to use each skill
5. **Relationships** — Related skills help me find complementary techniques

## Features

| Feature | Description |
|---------|-------------|
| **110+ Skills** | Comprehensive catalog across security, frontend, backend, AI, DevOps, marketing, and more |
| **Instant Search** | Fuzzy search across names, descriptions, tags, and prompts |
| **Category Filter** | Single-click filtering by category |
| **Expandable Cards** | Click to reveal full details, prompts, and related skills |
| **Copy to Clipboard** | One-click copy of any example prompt |
| **Dark/Light Theme** | Toggle with persistence |
| **Keyboard Shortcuts** | `/` to search, `Esc` to clear |
| **Blazing Fast** | Pure CSS animations, no heavy dependencies |

## Tech Stack

- **React 19** — Modern hooks-based components
- **Vite 7** — Sub-second hot reload
- **Vanilla CSS** — Custom properties for theming, CSS animations
- **Lucide React** — Lightweight icons (only imports what's needed)
- **GitHub Pages** — Automatic deployment on push

## Performance

Optimized for instant loading:

| Metric | Value |
|--------|-------|
| Main JS Bundle | 272 kB |
| CSS | 6 kB |
| Initial Load | < 500ms |
| Card Rendering | Instant |

No heavy animation libraries. Pure CSS transitions for smooth interactions without the overhead.

## Local Development

```bash
# Clone
git clone https://github.com/Muhanad2004/ToolSet.git
cd ToolSet

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── Header.jsx       # Title, search bar, theme toggle
│   ├── CategoryFilter.jsx
│   ├── SkillGrid.jsx
│   ├── SkillCard.jsx    # Expandable card with prompts
│   └── ...
├── data/
│   ├── skills.js        # All 110+ skills
│   └── categories.js    # 10 category definitions
├── hooks/
│   ├── useTheme.js      # Dark/light persistence
│   └── useKeyboardNav.js
├── utils/
│   └── search.js        # Weighted fuzzy search
├── App.jsx
└── index.css            # CSS custom properties + animations
```

## Adding Skills

Edit `src/data/skills.js`:

```javascript
{
  id: 'skill-id',
  name: 'Skill Name',
  shortDescription: 'Brief overview',
  fullDescription: 'Detailed explanation of when and how to use this skill',
  category: 'Category Name',  // Must match a category in categories.js
  tags: ['tag1', 'tag2'],
  examplePrompts: [
    'First example prompt to copy',
    'Second example prompt'
  ],
  relatedSkills: ['other-skill-id'],
  keywords: ['search', 'terms']
}
```

## Categories

| Category | Skills | Focus |
|----------|--------|-------|
| Security & Pentesting | 30 | SQL injection, XSS, Metasploit, Burp Suite |
| Frontend Development | 25 | React, Next.js, Tailwind, UI/UX patterns |
| Backend & APIs | 20 | Node.js, GraphQL, Prisma, authentication |
| AI & Agents | 22 | LangGraph, RAG, CrewAI, prompt engineering |
| DevOps & Cloud | 15 | AWS, Docker, CI/CD, deployment |
| Marketing & Growth | 18 | SEO, CRO, copywriting, analytics |
| Database & Data | 10 | PostgreSQL, schema design, migrations |
| Mobile Development | 8 | React Native, mobile patterns |
| Productivity & Planning | 12 | TDD, planning, documentation |
| Game Development | 10 | 2D/3D games, game design |

## Search Algorithm

Weighted scoring across multiple fields:

- **Name** (10x) — Highest priority
- **Tags** (7x) — Key descriptors
- **Keywords** (6x) — Related terms
- **Description** (5x) — Overview text
- **Category** (4x) — Category name
- **Prompts** (3x) — Example text

Supports fuzzy matching, partial matches, and multi-word queries.

## Deployment

Pushes to `main` trigger automatic deployment via GitHub Actions:

1. Builds with Vite
2. Deploys `dist/` to GitHub Pages
3. Live at [muhanad2004.github.io/ToolSet](https://muhanad2004.github.io/ToolSet/)

## License

MIT

---

Built to make working with OpenCode faster and more effective.
