# ESSACA Style System - Regeneration Prompt

## Project Overview

This is a React-based style system for ESSACA (École Supérieure des Sciences de l'Architecture) that provides 5 distinct visual themes, each with its own dashboard component, styling, and design philosophy. The system allows users to switch between different styles dynamically, showcasing various approaches to architectural website design.

## Tech Stack

- **Framework**: React 18.2.0 with Vite 5.0.8
- **Styling**: CSS Modules with CSS Variables
- **Animations**: Framer Motion 12.23.25
- **Build Tool**: Vite with React plugin
- **Language**: JavaScript (JSX)

## Project Structure

```
essaca-style/
├── md/                                    # Style definitions (markdown specifications)
│   ├── style1-modern-heritage.md          # Style 1: Elegant, minimalist, heritage-focused
│   ├── style2-urban-canvas.md             # Style 2: Urban, dynamic, research-oriented
│   ├── style3-gallery-portfolio.md        # Style 3: Visual-first, gallery/portfolio
│   ├── style4-tropical-vernacular.md      # Style 4: Local materials, vernacular architecture
│   └── style5-hybrid-modern-tradition.md  # Style 5: Complete platform, collaborative
│
├── src/
│   ├── components/
│   │   ├── styles/                        # Style-specific dashboard components
│   │   │   ├── modern-heritage/
│   │   │   │   ├── ModernHeritageDashboard.jsx
│   │   │   │   ├── ModernHeritage.css
│   │   │   │   └── index.js
│   │   │   ├── urban-canvas/
│   │   │   ├── gallery-portfolio/
│   │   │   ├── tropical-vernacular/
│   │   │   └── hybrid-modern-tradition/
│   │   ├── Form.jsx                       # Generic form component
│   │   ├── Dashboard.jsx                  # Generic dashboard component
│   │   └── Card.jsx                       # Generic card component
│   │
│   ├── contexts/
│   │   └── StyleContext.jsx              # React context for style management
│   │
│   ├── hooks/
│   │   └── useStyleTheme.js              # Hook to get current style theme
│   │
│   ├── styles/
│   │   └── styleDefinitions.js           # Central style definitions object
│   │
│   ├── App.jsx                            # Main app with style switcher
│   ├── App.css                            # App-level styles
│   ├── main.jsx                           # Entry point
│   └── index.css                          # Global styles
│
├── index.html                             # HTML template
├── package.json                           # Dependencies and scripts
├── vite.config.js                         # Vite configuration
└── README.md                              # Project documentation
```

## Core Architecture

### 1. Style System

The style system is built on three layers:

**Layer 1: Markdown Definitions** (`/md/*.md`)
- Each style has a comprehensive markdown file describing:
  - Concept and objectives
  - Color palette (CSS variables)
  - Typography specifications
  - Layout and wireframe
  - Component specifications
  - Data schemas
  - Technical stack recommendations

**Layer 2: Style Definitions** (`src/styles/styleDefinitions.js`)
- JavaScript object containing all style configurations
- Each style has:
  - `name`: Display name
  - `description`: Brief description
  - `colors`: Color palette object
  - `typography`: Font families and sizes
  - `spacing`: Padding, border radius, shadows
  - `backgrounds`: Background patterns and textures
  - `animations`: Animation specifications
  - `ambiance`: Style identifier

**Layer 3: Style Components** (`src/components/styles/*/`)
- Each style has its own dashboard component
- Includes:
  - Dashboard component (JSX)
  - Style-specific CSS file
  - Index file for exports

### 2. Style Context System

**StyleContext.jsx**:
- Provides `StyleProvider` component
- Manages current style state
- Exports `STYLES` constant with style identifiers
- Exports `useStyle()` hook for accessing current style

**useStyleTheme.js**:
- Custom hook that reads current style from context
- Generates CSS variables object from style definition
- Returns `theme`, `cssVars`, and `styleName`

### 3. Component Structure

**App.jsx**:
- Main application component
- Contains style selector dropdown
- Renders appropriate dashboard based on selected style
- Uses `useStyleTheme` to apply CSS variables

**Dashboard Components**:
- Each style has a dedicated dashboard component
- Implements sections defined in markdown:
  - Hero sections
  - Navigation
  - Content sections (projects, news, about, etc.)
  - Footer
- Uses Framer Motion for animations
- Follows data schemas from markdown

## Style Specifications

### Style 1: Modern Heritage
- **Colors**: Crème (#F5F2EA), Terracotta (#B65A2A), Ocre (#E6A41E)
- **Typography**: Playfair Display (headings), Inter (body)
- **Focus**: Institutional elegance, heritage projects, N&B hero images
- **Key Features**: Timeline, project cards, mission section

### Style 2: Urban Canvas
- **Colors**: Dark (#0F1113), Turquoise (#00D4FF), Red (#FF6B6B)
- **Typography**: Montserrat (headings), Inter (body)
- **Focus**: Research hub, articles, events, dynamic content
- **Key Features**: Sidebar, article grid, event calendar, search

### Style 3: Gallery Portfolio
- **Colors**: White (#FFFFFF), Blue (#007AFF), Orange (#FF9500)
- **Typography**: SF Pro Display (headings), Inter (body)
- **Focus**: Visual-first, masonry layout, lightbox
- **Key Features**: Image gallery, filters, fullscreen lightbox

### Style 4: Tropical Vernacular
- **Colors**: Sand (#F0E6DA), Terracotta (#D2691E), Brown (#8B4513)
- **Typography**: Source Serif Pro (headings), Inter (body)
- **Focus**: Local materials, vernacular architecture, workshops
- **Key Features**: Material cards, case studies, before/after

### Style 5: Hybrid Modern-Tradition
- **Colors**: Off-white (#F7F4EF), Orange (#C8612E), Beige (#8B7355)
- **Typography**: Merriweather (headings), Inter (body)
- **Focus**: Complete platform, collaboration, admin features
- **Key Features**: Dashboard widgets, project timeline, team section

## Data Structures

Each style uses consistent data structures based on markdown schemas:

**Projects**:
```javascript
{
  id: "uuid",
  title: "Project Title",
  slug: "project-slug",
  cover: "image-url",
  summary: "Short description",
  year: 2024,
  type: "Construction",
  location: "City",
  materials: ["Material 1", "Material 2"],
  authors: ["Author Name"]
}
```

**Articles/News**:
```javascript
{
  id: "uuid",
  title: "Article Title",
  excerpt: "Short excerpt",
  category: "Category",
  author: "Author Name",
  publishedAt: "2024-12-01",
  tags: ["tag1", "tag2"],
  cover: "image-url"
}
```

## Implementation Requirements

### 1. Create Style Definition
- Add style object to `src/styles/styleDefinitions.js`
- Include all color, typography, spacing, and animation properties
- Set unique `ambiance` identifier

### 2. Create Dashboard Component
- Create folder in `src/components/styles/[style-name]/`
- Implement `[StyleName]Dashboard.jsx` component
- Create `[StyleName].css` with all styles
- Create `index.js` for exports
- Follow markdown specifications for layout and sections

### 3. Update App.jsx
- Import new dashboard component
- Add case to `renderDashboard()` switch statement
- Add style option to selector dropdown

### 4. Update StyleContext
- Add style constant to `STYLES` object
- Ensure style identifier matches definition key

## Key Features

1. **Dynamic Style Switching**: Users can switch between styles without page reload
2. **CSS Variables**: All styles use CSS variables for easy theming
3. **Responsive Design**: All components are mobile-responsive
4. **Animations**: Framer Motion provides smooth transitions
5. **Modular Architecture**: Each style is self-contained
6. **Type Safety**: Consistent data structures across styles

## Development Workflow

1. **Read Markdown**: Start with markdown file in `/md/` folder
2. **Define Style**: Add style definition to `styleDefinitions.js`
3. **Create Component**: Build dashboard component following markdown specs
4. **Style CSS**: Create CSS file matching color palette and typography
5. **Integrate**: Add to App.jsx and StyleContext
6. **Test**: Verify style switching and responsiveness

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.23.25",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Design Principles

1. **Consistency**: All styles follow same component structure
2. **Accessibility**: WCAG 2.1 AA compliance
3. **Performance**: Lazy loading, optimized images
4. **Maintainability**: Clear separation of concerns
5. **Extensibility**: Easy to add new styles

## Notes

- All styles are based on markdown specifications in `/md/` folder
- CSS variables are generated dynamically from style definitions
- Components use Framer Motion for consistent animations
- Data is currently hardcoded but structured for API integration
- Each style maintains its own identity while sharing core functionality

---

**Regeneration Instructions**: Use this prompt to regenerate the entire project structure, ensuring all 5 styles are implemented according to their markdown specifications, with proper React components, CSS styling, and context management.
