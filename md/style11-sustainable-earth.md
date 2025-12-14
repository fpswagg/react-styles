# ESSACA App - Sustainable Earth Style

## Overview

The Sustainable Earth style embodies environmental consciousness and ecological responsibility, drawing inspiration from natural materials, sustainable building practices, and the harmony between architecture and the planet. This style features earthy tones, natural textures, and design elements that reflect sustainable architectural principles. The design philosophy centers on regeneration, resource efficiency, and the creation of spaces that nurture both people and the environment.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Layout & Spacing](#layout--spacing)
4. [Component Styling](#component-styling)
5. [Custom CSS Classes](#custom-css-classes)
6. [Responsive Design](#responsive-design)
7. [Utility Functions](#utility-functions)
8. [Design Patterns](#design-patterns)

---

## Color System

### Brand Colors

The application uses an earthy, sustainable color palette inspired by natural materials and environmental elements:

#### Primary Colors
- **Page Background (Sage)**: `#E8F5E9` - `--color-page` / `bg-page`
- **Main Text (Forest)**: `#1B4332` - `--color-main` / `text-main`
- **Clay Brown (Primary)**: `#8D6E63` - `--color-clay` / `bg-clay` / `text-clay`
- **Bamboo Green (Secondary)**: `#4CAF50` - `--color-bamboo` / `bg-bamboo` / `text-bamboo`
- **Card Background (Natural Linen)**: `#FAFAF0` - `--color-linen` / `bg-linen`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(120, 25, 93)` - Maps to sage
- **Foreground**: `hsl(160, 40, 20)` - Maps to forest
- **Primary**: `hsl(20, 25, 50)` - Maps to clay brown
- **Secondary**: `hsl(122, 39, 49)` - Maps to bamboo green
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(60, 20, 96)` - Subtle backgrounds
- **Border**: `hsl(60, 15, 92)` - Light linen borders
- **Input**: `hsl(60, 15, 92)` - Input borders
- **Ring**: `hsl(122, 39, 49)` - Focus rings (bamboo green)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (sage)
className="bg-linen"       // Card/container background (natural linen)
className="bg-clay"        // Primary accent background
className="bg-bamboo"      // Secondary accent background

// Text colors
className="text-main"           // Primary text (forest)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-clay"           // Accent text
className="text-bamboo"         // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-bamboo"        // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that emphasize natural harmony and sustainability:

1. **Display Font**: Libre Baskerville (serif) or Georgia (fallback)
   - Weights: 400 (regular), 700 (bold)
   - Styles: normal, italic
   - Used for: Headings, earth-inspired display text, sustainable elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 88px)` - Grounded, natural display text
  - Line height: 1.1
  - Font weight: 700 (bold)
  - Font family: Display font
  - Letter spacing: -0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 700, display font family, letter spacing -0.01em
- **Display Emphasis**: Italic, weight 400
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.7 (for general text), 1.8 (for sustainable content)
- Letter spacing: 0.01em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 16px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-linen)`
  - `border: 2px solid rgba(76, 175, 80, 0.2)`
  - `box-shadow: 0 4px 16px rgba(76, 175, 80, 0.1)`

### Spacing
- Natural spacing inspired by organic growth patterns
- Generous white space for environmental breathing room
- Sustainable proportions based on natural ratios

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 12px`
  - `font-size: 15px`
  - `font-weight: 600`
  - `letter-spacing: 0.01em`
  - `text-transform: none`
  - `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background: linear-gradient(135deg, var(--color-bamboo), var(--color-clay))`
  - `color: var(--color-linen)`
  - `border: none`
  - Hover: `transform: translateY(-3px)`, `box-shadow: 0 8px 16px rgba(76, 175, 80, 0.3)`
  - Active: `transform: translateY(-1px)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-bamboo)`
  - `border: 2px solid var(--color-bamboo)`
  - Hover: `background-color: var(--color-bamboo)`, `color: var(--color-linen)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-bamboo)`, `transform: translateY(-2px)`
  - Active: `transform: translateY(0)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-linen)`
  - `border: 1px solid rgba(76, 175, 80, 0.15)`
  - `border-radius: 16px`
  - `padding: 2.5rem`
  - `position: relative`
  - `box-shadow: 0 2px 8px rgba(76, 175, 80, 0.08)`
  - Hover: `transform: translateY(-6px)`, `box-shadow: 0 12px 24px rgba(76, 175, 80, 0.15)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 2rem`
  - `padding-bottom: 1.5rem`
  - `border-bottom: 2px solid var(--color-bamboo)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 700`
  - `font-size: 1.75rem` (desktop: `2rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(27, 67, 50, 0.75)`
  - `font-size: 0.9rem` (desktop: `1rem`)
  - `line-height: 1.8`
  - `letter-spacing: 0.01em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.75rem`
  - `border-radius: 12px`
  - `border: 2px solid rgba(76, 175, 80, 0.2)`
  - `background-color: var(--color-linen)`
  - `color: var(--color-main)`
  - `padding: 0.625rem 1rem`
  - Focus: `outline: none`, `border-color: var(--color-bamboo)`, `border-width: 3px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.earth-header`**: Sustainable header with natural elements
- **`.renewable-section`**: Eco-friendly content sections
- **`.natural-textures`**: Organic material textures
- **`.sustainable-layout`**: Environmentally conscious arrangements

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Natural layouts that adapt organically to different devices
- Touch interactions inspired by natural movements

---

## Utility Functions

- Standard Tailwind utility classes for sustainable layouts
- Custom utility classes for earth colors (`bg-clay`, `text-bamboo`, `border-forest`, etc.)
- Natural animation and transition utilities

---

## Design Patterns

- **Natural Harmony**: Balance between design and environment
- **Sustainable Materials**: Earth-friendly color palettes
- **Organic Flow**: Natural growth and movement patterns
- **Resource Efficiency**: Minimal, purposeful design
- **Regenerative Design**: Healing and nurturing aesthetics
- **Earth Connection**: Grounded, natural design principles

---

## Implementation Example

```tsx
// Sustainable Earth Hero Section
<div className="hero-section bg-page relative overflow-hidden">
  <div className="natural-textures absolute inset-0 opacity-20"></div>
  <div className="hero-content-wrapper">
    <motion.h1
      className="text-display text-main mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Architecture <span className="text-display-emphasis">Durable</span>
    </motion.h1>
    <motion.p
      className="text-main-70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      Construire un avenir durable pour notre planète
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <button className="btn-cta">Matériaux durables</button>
      <button className="btn-secondary">Éco-conception</button>
    </motion.div>
  </div>
  <div className="earth-elements">
    <div className="sustainable-shapes bg-bamboo opacity-10"></div>
    <div className="renewable-patterns border-clay opacity-20"></div>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with natural animations
- Progressive enhancement for older browsers
- Optimized for sustainable, eco-friendly experiences

---

## Performance Considerations

- Efficient natural pattern rendering
- Optimized sustainable layouts
- Fast loading of earth-friendly elements
- Minimal environmental impact on performance

---

## Accessibility Features

- Natural color schemes for visual comfort
- Clear sustainable navigation
- Screen reader friendly eco-content
- Focus indicators with earth-tone colors

---

## Customization Options

- Material themes (bamboo, clay, stone, recycled)
- Seasonal environmental adaptations
- Sustainability intensity controls
- Regional eco-design variations

---

## Future Enhancements

- Interactive sustainability visualizations
- Carbon footprint displays
- Material lifecycle animations
- Environmental impact integrations
