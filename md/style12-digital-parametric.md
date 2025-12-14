# ESSACA App - Digital Parametric Style

## Overview

The Digital Parametric style represents the intersection of architecture and computational design, drawing inspiration from parametric modeling, algorithmic patterns, and digital fabrication techniques. This style features dynamic grids, computational geometries, and data-driven design elements that reflect the digital tools shaping modern architecture. The design philosophy embraces precision, adaptability, and the beauty of mathematical relationships in architectural form.

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

The application uses a modern, digital color palette inspired by computational interfaces and parametric design:

#### Primary Colors
- **Page Background (Digital Gray)**: `#F8F9FA` - `--color-page` / `bg-page`
- **Main Text (Tech Black)**: `#212529` - `--color-main` / `text-main`
- **Neon Blue (Primary)**: `#00BCD4` - `--color-neon` / `bg-neon` / `text-neon`
- **Data Green (Secondary)**: `#4CAF50` - `--color-data` / `bg-data` / `text-data`
- **Card Background (Interface White)**: `#FFFFFF` - `--color-interface` / `bg-interface`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(210, 15, 97)` - Maps to digital gray
- **Foreground**: `hsl(210, 15, 15)` - Maps to tech black
- **Primary**: `hsl(180, 100, 50)` - Maps to neon blue
- **Secondary**: `hsl(122, 39, 49)` - Maps to data green
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(210, 15, 95)` - Subtle backgrounds
- **Border**: `hsl(214, 15, 91)` - Light gray borders
- **Input**: `hsl(214, 15, 91)` - Input borders
- **Ring**: `hsl(180, 100, 50)` - Focus rings (neon blue)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (digital gray)
className="bg-interface"   // Card/container background (interface white)
className="bg-neon"        // Primary accent background
className="bg-data"        // Secondary accent background

// Text colors
className="text-main"           // Primary text (tech black)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-neon"           // Accent text
className="text-data"           // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-neon"          // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that balance technical precision with modern aesthetics:

1. **Display Font**: JetBrains Mono (monospace) or Consolas (fallback)
   - Weights: 400 (regular), 600 (semibold)
   - Styles: normal
   - Used for: Headings, parametric display text, technical elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 92px)` - Precise, algorithmic display text
  - Line height: 1
  - Font weight: 600 (semibold)
  - Font family: Display font
  - Letter spacing: 0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, letter spacing 0.01em
- **Display Emphasis**: Font weight 400, letter spacing 0.03em
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.6 (for general text), 1.7 (for technical content)
- Letter spacing: 0.02em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 8px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-interface)`
  - `border: 1px solid rgba(0, 188, 212, 0.2)`
  - `box-shadow: 0 4px 16px rgba(0, 188, 212, 0.08)`

### Spacing
- Algorithmic spacing based on mathematical relationships
- Grid systems inspired by parametric design
- Modular spacing units for computational precision

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 6px`
  - `font-size: 14px`
  - `font-weight: 600`
  - `letter-spacing: 0.02em`
  - `text-transform: none`
  - `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background: linear-gradient(135deg, var(--color-neon), var(--color-data))`
  - `color: var(--color-interface)`
  - `border: none`
  - Hover: `transform: translateY(-2px)`, `box-shadow: 0 8px 16px rgba(0, 188, 212, 0.3)`
  - Active: `transform: translateY(0)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-neon)`
  - `border: 2px solid var(--color-neon)`
  - Hover: `background-color: var(--color-neon)`, `color: var(--color-interface)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-data)`, `transform: translateX(4px)`
  - Active: `transform: translateX(2px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-interface)`
  - `border: 1px solid rgba(0, 188, 212, 0.15)`
  - `border-radius: 8px`
  - `padding: 2rem`
  - `position: relative`
  - `box-shadow: 0 2px 8px rgba(0, 188, 212, 0.06)`
  - Hover: `transform: translateY(-4px)`, `box-shadow: 0 12px 24px rgba(0, 188, 212, 0.15)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 1.5rem`
  - `padding-bottom: 1rem`
  - `border-bottom: 2px solid var(--color-neon)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 600`
  - `font-size: 1.5rem` (desktop: `1.75rem`)
  - `color: var(--color-main)`
  - `letter-spacing: 0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(33, 37, 41, 0.7)`
  - `font-size: 0.875rem` (desktop: `1rem`)
  - `line-height: 1.7`
  - `letter-spacing: 0.02em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.5rem`
  - `border-radius: 6px`
  - `border: 2px solid rgba(0, 188, 212, 0.2)`
  - `background-color: var(--color-interface)`
  - `color: var(--color-main)`
  - `padding: 0.5rem 0.75rem`
  - Focus: `outline: none`, `border-color: var(--color-neon)`, `border-width: 3px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 2px`

---

## Custom CSS Classes

- **`.parametric-header`**: Algorithmic header with digital elements
- **`.grid-section`**: Computational grid-based sections
- **`.data-patterns`**: Parametric pattern overlays
- **`.algorithmic-layout`**: Data-driven design arrangements

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Parametric layouts that adapt algorithmically
- Touch interactions optimized for digital precision

---

## Utility Functions

- Standard Tailwind utility classes for computational layouts
- Custom utility classes for digital colors (`bg-neon`, `text-data`, `border-tech`, etc.)
- Parametric animation and transition utilities

---

## Design Patterns

- **Algorithmic Precision**: Mathematical relationships in design
- **Parametric Adaptation**: Flexible, data-driven layouts
- **Computational Grids**: Digital grid systems and patterns
- **Data Visualization**: Information-driven design elements
- **Modular Systems**: Replicable, scalable components
- **Digital Aesthetics**: Modern interface design principles

---

## Implementation Example

```tsx
// Digital Parametric Hero Section
<div className="hero-section bg-page relative">
  <div className="data-patterns absolute inset-0 opacity-10"></div>
  <div className="hero-content-wrapper">
    <h1 className="text-display text-main mb-6">
      Design <span className="text-display-emphasis">Paramétrique</span>
    </h1>
    <p className="text-main-70 text-lg max-w-3xl mb-8 leading-relaxed">
      L'architecture générée par les algorithmes du futur
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="btn-cta">Modélisation 3D</button>
      <button className="btn-secondary">IA Design</button>
    </div>
  </div>
  <div className="parametric-grid absolute bottom-0 left-0 right-0 h-32 opacity-20">
    <div className="grid-lines bg-neon"></div>
    <div className="data-points bg-data"></div>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with computational CSS support
- Progressive enhancement for older browsers
- Optimized for digital, parametric experiences

---

## Performance Considerations

- Efficient algorithmic pattern rendering
- Optimized computational layouts
- Fast loading of digital elements
- Minimal computational overhead

---

## Accessibility Features

- High contrast for digital interfaces
- Clear parametric navigation
- Screen reader friendly technical content
- Focus indicators with computational colors

---

## Customization Options

- Algorithm intensity controls
- Data visualization themes
- Parametric complexity levels
- Computational color schemes

---

## Future Enhancements

- Interactive parametric animations
- Real-time data integrations
- AI-powered design adaptations
- Computational form generators
