# 🌟 OpenCode Skills Directory

A beautiful, interactive catalog of 100+ AI coding skills with smooth animations, intelligent search, category filtering, and a delightful user experience.

[![Deploy to GitHub Pages](https://github.com/Muhanad2004/ToolSet/actions/workflows/deploy.yml/badge.svg)](https://github.com/Muhanad2004/ToolSet/actions/workflows/deploy.yml)

## ✨ Features

- **100+ Skills** - Comprehensive catalog of AI coding capabilities across 10 categories
- **Smart Search** - Fuzzy search across names, descriptions, tags, and example prompts
- **Category Filtering** - Multi-select category filters with skill counts
- **Expandable Cards** - Click to reveal full descriptions, example prompts, and related skills
- **Copy Prompts** - One-click copy of example prompts to clipboard
- **Dark/Light Theme** - Toggle between themes with localStorage persistence
- **Keyboard Shortcuts** - `/` to focus search, `Esc` to clear
- **Smooth Animations** - Delightful Framer Motion animations throughout
- **Responsive Design** - Works beautifully on all screen sizes
- **Related Skills** - Discover connected skills easily

## 🎨 Design

Built with the **Electric Violet** theme featuring:
- Deep space backgrounds
- Violet and cyan accent colors
- Category-specific color coding
- Glassmorphism effects
- Smooth transitions and micro-interactions

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 4** - CSS-first utility framework
- **Framer Motion 12** - Production-ready animation library
- **Lucide React** - Beautiful icon library
- **GitHub Pages** - Automatic deployment

## 🏃 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Muhanad2004/ToolSet.git

# Navigate to the project directory
cd ToolSet

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Building for Production

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

The built files will be in the `dist` directory.

## 🌐 Deployment

This project is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The dist folder is ready to be deployed
```

## 📁 Project Structure

```
ToolSet/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with search
│   │   ├── ThemeToggle.jsx     # Dark/light toggle
│   │   ├── SearchBar.jsx       # Debounced search input
│   │   ├── CategoryFilter.jsx  # Category filter pills
│   │   ├── StatsBar.jsx        # Stats display
│   │   ├── SkillGrid.jsx       # Grid with animations
│   │   ├── SkillCard.jsx       # Expandable skill card
│   │   ├── CopyButton.jsx      # Copy with feedback
│   │   ├── RelatedSkills.jsx   # Related skill badges
│   │   ├── EmptyState.jsx      # No results message
│   │   └── Footer.jsx          # Footer component
│   ├── data/
│   │   ├── skills.js           # All skills data
│   │   └── categories.js       # Category metadata
│   ├── hooks/
│   │   ├── useTheme.js         # Theme hook
│   │   └── useKeyboardNav.js   # Keyboard shortcuts
│   ├── utils/
│   │   ├── search.js           # Search algorithm
│   │   └── animations.js       # Animation variants
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js              # Vite configuration
└── package.json
```

## 🎯 Skills Categories

1. **🔐 Security & Pentesting** (30 skills) - SQL Injection, XSS, Metasploit, etc.
2. **⚛️ Frontend Development** (25 skills) - React, Next.js, Tailwind, UI/UX, etc.
3. **⚙️ Backend & APIs** (20 skills) - Node.js, GraphQL, Prisma, etc.
4. **🤖 AI & Agents** (22 skills) - LangGraph, RAG, CrewAI, etc.
5. **☁️ DevOps & Cloud** (15 skills) - AWS, Docker, GitHub Actions, etc.
6. **📈 Marketing & Growth** (18 skills) - SEO, CRO, Copywriting, etc.
7. **💾 Database & Data** (10 skills) - Prisma, PostgreSQL, etc.
8. **📱 Mobile Development** (8 skills) - React Native, Mobile Design, etc.
9. **📋 Productivity & Planning** (12 skills) - TDD, Planning, etc.
10. **🎮 Game Development** (10 skills) - 2D/3D games, etc.

## 🔍 Search Features

The search algorithm uses weighted scoring:
- **Name matching** (weight: 10) - Highest priority
- **Tags** (weight: 7) - Important keywords
- **Keywords** (weight: 6) - Related terms
- **Short description** (weight: 5) - Overview text
- **Category** (weight: 4) - Category names
- **Example prompts** (weight: 3) - Usage examples

Search supports:
- **Fuzzy matching** - Typo tolerance
- **Multi-word queries** - All terms must match
- **Partial matching** - "sql" matches "SQLMap", "MySQL"
- **Real-time filtering** - Instant results as you type

## ⌨️ Keyboard Shortcuts

- `/` - Focus search input
- `Esc` - Clear search and unfocus
- `Tab` - Navigate between interactive elements

## 🎨 Adding New Skills

To add a new skill, edit `src/data/skills.js`:

```javascript
{
  id: 'my-new-skill',
  name: 'My New Skill',
  shortDescription: 'Brief description (50-80 chars)',
  fullDescription: 'Detailed description (200-300 chars)',
  category: 'Frontend Development', // Must match category name
  tags: ['tag1', 'tag2', 'tag3'],
  examplePrompts: [
    'Example prompt 1',
    'Example prompt 2',
    'Example prompt 3'
  ],
  relatedSkills: ['skill-id-1', 'skill-id-2'],
  keywords: ['keyword1', 'keyword2']
}
```

## 🛠️ Configuration

### Changing the GitHub Pages Base Path

Edit `vite.config.js`:

```javascript
export default defineConfig({
  // ... other config
  base: '/your-repo-name/', // Change this to your repository name
});
```

### Customizing Colors

Edit `src/index.css` to modify the theme colors:

```css
@theme {
  --color-accent-primary: #8b5cf6;  /* Electric violet */
  --color-accent-secondary: #06b6d4; /* Cyan */
  /* ... other colors */
}
```

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🙏 Acknowledgments

- Built with ❤️ by OpenCode
- Design inspired by modern web aesthetics
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Contact

- GitHub: [@Muhanad2004](https://github.com/Muhanad2004)
- Repository: [ToolSet](https://github.com/Muhanad2004/ToolSet)

---

**Enjoy exploring the OpenCode Skills Directory!** 🚀✨
