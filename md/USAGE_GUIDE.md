# Style Usage Guide - Modern Heritage

This guide explains how to use, customize, and extend the **Modern Heritage** style in the ESSACA Style System.

## Overview

The Modern Heritage style is an elegant, minimalist, and heritage-focused design that emphasizes:
- Black & white hero photography
- Earth tones (terracotta, ocre) for material references
- Institutional storytelling
- Showcasing emblematic projects

## Quick Start

### 1. Selecting the Style

In `App.jsx`, the style is selected via a dropdown:

```jsx
import { useStyle, STYLES } from './contexts/StyleContext'

function App() {
  const { currentStyle, setCurrentStyle } = useStyle()
  
  // Set Modern Heritage as default
  const [currentStyle, setCurrentStyle] = useState(STYLES.MODERN_HERITAGE)
  
  // Or let user select
  <select value={currentStyle} onChange={(e) => setCurrentStyle(e.target.value)}>
    <option value={STYLES.MODERN_HERITAGE}>Modern Heritage</option>
    {/* other options */}
  </select>
}
```

### 2. Using the Dashboard Component

The Modern Heritage dashboard is automatically rendered when the style is selected:

```jsx
import { ModernHeritageDashboard } from './components/styles/modern-heritage'

// In App.jsx renderDashboard()
case STYLES.MODERN_HERITAGE:
  return <ModernHeritageDashboard />
```

## Style Configuration

### Color Palette

Colors are defined in `src/styles/styleDefinitions.js`:

```javascript
'modern-heritage': {
  colors: {
    primary: '#B65A2A',        // Terracotta
    secondary: '#F5F2EA',     // Crème
    accent: '#E6A41E',         // Ocre
    background: '#F5F2EA',    // Crème
    text: '#22242A',          // Anthracite
    textLight: '#666666',     // Gris moyen
    border: '#DDD',           // Bordures légères
    cardBg: '#FFFFFF'         // Blanc pur
  }
}
```

### Typography

```javascript
typography: {
  fontFamily: 'Inter, IBM Plex Sans, sans-serif',
  headingFont: 'Playfair Display, Merriweather, serif',
  fontSize: {
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem'
  }
}
```

**Font Loading**: Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## Component Structure

### Main Sections

The Modern Heritage dashboard includes:

1. **Header** (`heritage-header`)
   - Logo and school name
   - Mobile menu toggle

2. **Navigation** (`heritage-navigation`)
   - Home, About, Programs, Projects, News, Contact

3. **Hero Section** (`hero-section`)
   - Full-width N&B image
   - Centered title with italic slogan
   - CTA button

4. **Mission Section** (`mission-section`)
   - School philosophy and values

5. **Stats Section** (`stats-section`)
   - Key metrics in cards

6. **Featured Projects** (`projects-preview`)
   - Large project cards with images
   - Hover overlays

7. **Timeline** (`timeline-section`)
   - Interactive school history

8. **Footer** (`heritage-footer`)
   - Links and social media

## Customizing Content

### Adding Projects

Edit the `featuredProjects` array in `ModernHeritageDashboard.jsx`:

```jsx
const featuredProjects = [
  {
    id: '1',
    title: 'Your Project Title',
    slug: 'project-slug',
    cover: '/path/to/image.jpg',
    summary: 'Project description',
    year: 2024,
    type: 'Construction',
    location: 'City Name',
    materials: ['Material 1', 'Material 2'],
    authors: ['Author Name']
  }
]
```

### Adding News Items

```jsx
const news = [
  {
    id: '1',
    title: 'News Title',
    excerpt: 'Short description',
    publishedAt: '2024-12-01',
    category: 'Événements',
    cover: '/path/to/image.jpg',
    tags: ['tag1', 'tag2'],
    author: 'Author Name'
  }
]
```

### Updating Stats

```jsx
const stats = [
  { label: 'Label', value: '123', trend: '+5%' },
  // Add more stats
]
```

## Styling Customization

### Modifying Colors

1. **Update Style Definition** (`src/styles/styleDefinitions.js`):
```javascript
'modern-heritage': {
  colors: {
    primary: '#YOUR_COLOR',  // Change terracotta
    accent: '#YOUR_COLOR',   // Change ocre
    // etc.
  }
}
```

2. **CSS Variables** are automatically generated and applied via `useStyleTheme` hook.

### Custom CSS

Add custom styles to `src/components/styles/modern-heritage/ModernHeritage.css`:

```css
/* Custom section */
.custom-section {
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-card-padding);
  border-radius: var(--border-radius);
}

/* Use CSS variables for consistency */
.custom-button {
  background: var(--color-primary);
  color: white;
  box-shadow: var(--shadow);
  transition: transform var(--anim-card-hover-duration);
}

.custom-button:hover {
  transform: var(--anim-card-hover);
}
```

## Adding New Sections

### 1. Create Section Component

```jsx
// In ModernHeritageDashboard.jsx
{activeSection === 'new-section' && (
  <motion.section
    className="new-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>New Section Title</h2>
    {/* Your content */}
  </motion.section>
)}
```

### 2. Add Navigation Item

```jsx
// In navigation array
{ id: 'new-section', label: 'New Section', icon: '🔖' }
```

### 3. Style in CSS

```css
.new-section {
  padding: 3rem 0;
}

.new-section h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}
```

## Responsive Design

The style includes responsive breakpoints:

```css
/* Mobile: < 768px */
@media (max-width: 768px) {
  .header-title {
    font-size: 2.5rem;
  }
  
  .stats-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

### Mobile Menu

The mobile menu toggle is included but needs JavaScript implementation:

```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

<button 
  className="mobile-menu-toggle"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  <span></span><span></span><span></span>
</button>

{mobileMenuOpen && (
  <div className="mobile-menu">
    {/* Navigation items */}
  </div>
)}
```

## Animations

The style uses Framer Motion for animations:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

### Animation Patterns

- **Fade in**: `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}`
- **Slide up**: `initial={{ y: 20 }}` → `animate={{ y: 0 }}`
- **Stagger**: Use `transition={{ delay: index * 0.1 }}` in loops
- **Hover**: `whileHover={{ scale: 1.02 }}`

## Data Integration

### Connecting to API

Replace hardcoded data with API calls:

```jsx
import { useState, useEffect } from 'react'

function ModernHeritageDashboard() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
  }, [])
  
  if (loading) return <div>Loading...</div>
  
  return (
    // Render projects
  )
}
```

## Best Practices

1. **Use CSS Variables**: Always use CSS variables from style definition for colors, spacing, etc.

2. **Consistent Structure**: Follow the existing component structure for new sections.

3. **Accessibility**: 
   - Use semantic HTML
   - Add alt text to images
   - Ensure keyboard navigation
   - Maintain color contrast ratios

4. **Performance**:
   - Lazy load images
   - Use `loading="lazy"` for images below fold
   - Optimize images (WebP format)

5. **Code Organization**:
   - Keep component logic in JSX file
   - Keep styles in CSS file
   - Use consistent naming conventions

## Troubleshooting

### Style Not Applying

- Check that style is selected in `App.jsx`
- Verify `useStyleTheme` hook is being used
- Check browser console for CSS variable errors

### Images Not Loading

- Verify image paths are correct
- Check that images exist in `public/` folder
- Use placeholder service for development: `/api/placeholder/800/600`

### Animations Not Working

- Ensure Framer Motion is installed
- Check that `motion` components are imported
- Verify animation props are correct

## Next Steps

1. **Customize Content**: Replace placeholder data with real content
2. **Add Functionality**: Implement form submissions, search, filters
3. **Connect Backend**: Integrate with CMS or API
4. **Optimize**: Add image optimization, lazy loading
5. **Test**: Test on multiple devices and browsers

## Resources

- **Markdown Specification**: `md/style1-modern-heritage.md`
- **Component**: `src/components/styles/modern-heritage/ModernHeritageDashboard.jsx`
- **Styles**: `src/components/styles/modern-heritage/ModernHeritage.css`
- **Style Definition**: `src/styles/styleDefinitions.js`

---

For questions or issues, refer to the main project documentation or the markdown style specification.
