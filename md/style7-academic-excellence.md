# ESSACA App - Academic Excellence Style

## Overview

The Academic Excellence style embodies the scholarly and educational mission of ESSACA as Morocco's premier architecture school. This style features clean, professional aesthetics with academic typography, structured layouts, and elements that convey trust, knowledge, and institutional authority. The design philosophy emphasizes clarity, hierarchy, and the pursuit of architectural excellence through education.

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

The application uses a sophisticated, professional color palette suitable for an academic institution:

#### Primary Colors
- **Page Background (Ivory)**: `#FEFEFE` - `--color-page` / `bg-page`
- **Main Text (Charcoal)**: `#2D3748` - `--color-main` / `text-main`
- **Navy Blue (Primary)**: `#2B6CB0` - `--color-navy` / `bg-navy` / `text-navy`
- **Forest Green (Secondary)**: `#2F855A` - `--color-forest` / `bg-forest` / `text-forest`
- **Card Background (White)**: `#FFFFFF` - `--color-card` / `bg-card`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(0, 0, 99.5)` - Maps to ivory
- **Foreground**: `hsl(215, 25, 27)` - Maps to charcoal
- **Primary**: `hsl(213, 70, 45)` - Maps to navy blue
- **Secondary**: `hsl(155, 70, 40)` - Maps to forest green
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(210, 20, 98)` - Subtle backgrounds
- **Border**: `hsl(214, 15, 91)` - Light gray borders
- **Input**: `hsl(214, 15, 91)` - Input borders
- **Ring**: `hsl(213, 70, 45)` - Focus rings (navy)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (ivory)
className="bg-card"        // Card/container background (white)
className="bg-navy"        // Primary accent background
className="bg-forest"      // Secondary accent background

// Text colors
className="text-main"           // Primary text (charcoal)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-navy"           // Accent text
className="text-forest"         // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-navy"          // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families emphasizing academic and professional credibility:

1. **Display Font**: Crimson Text (serif) or Georgia (fallback)
   - Weights: 400 (regular), 600 (semibold)
   - Styles: normal, italic
   - Used for: Headings, academic titles, formal text
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 84px)` - Formal display text
  - Line height: 1.1
  - Font weight: 600 (semibold)
  - Font family: Display font
  - Letter spacing: -0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 600, display font family, letter spacing -0.01em
- **Display Emphasis**: Italic, weight 400
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.6 (for general text), 1.7 (for academic content)
- Letter spacing: 0.005em for improved readability

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 4px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-card)`
  - `border: 1px solid rgba(45, 55, 72, 0.1)`
  - `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`

### Spacing
- Academic-inspired spacing with clear hierarchy
- Generous margins for readability
- Structured grid system for organized content

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 4px`
  - `font-size: 14px`
  - `font-weight: 600`
  - `letter-spacing: 0.025em`
  - `text-transform: none`
  - `transition: all 0.2s ease`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background-color: var(--color-navy)`
  - `color: var(--color-card)`
  - `border: 2px solid var(--color-navy)`
  - Hover: `background-color: var(--color-forest)`, `border-color: var(--color-forest)`
  - Active: `transform: translateY(0)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-navy)`
  - `border: 2px solid var(--color-navy)`
  - Hover: `background-color: var(--color-navy)`, `color: var(--color-card)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-navy)`, `background-color: rgba(43, 108, 176, 0.05)`
  - Active: `transform: translateY(1px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-card)`
  - `border: 1px solid rgba(45, 55, 72, 0.1)`
  - `border-radius: 8px`
  - `padding: 2rem`
  - `position: relative`
  - `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`
  - Hover: `transform: translateY(-2px)`, `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 1.5rem`
  - `padding-bottom: 1rem`
  - `border-bottom: 2px solid var(--color-navy)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 600`
  - `font-size: 1.5rem` (desktop: `1.75rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.01em`

- **Card Description (`.card-description`)**:
  - `color: rgba(45, 55, 72, 0.7)`
  - `font-size: 0.875rem` (desktop: `1rem`)
  - `line-height: 1.7`
  - `letter-spacing: 0.005em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.5rem`
  - `border-radius: 4px`
  - `border: 2px solid rgba(45, 55, 72, 0.2)`
  - `background-color: var(--color-card)`
  - `color: var(--color-main)`
  - `padding: 0.5rem 0.75rem`
  - Focus: `outline: none`, `border-color: var(--color-navy)`, `border-width: 2px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 2px`

---

## Custom CSS Classes

- **`.academic-header`**: Scholarly header with institutional styling
- **`.course-section`**: Educational content sections
- **`.testimonial-card`**: Student/alumni testimonial styling
- **`.program-grid`**: Structured program display layout

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Academic content remains readable across all devices
- Hierarchical information structure maintained

---

## Utility Functions

- Standard Tailwind utility classes for academic layouts
- Custom utility classes for institutional colors (`bg-navy`, `text-forest`, `border-charcoal`, etc.)
- Typography utilities for academic content

---

## Design Patterns

- **Academic Hierarchy**: Clear information architecture
- **Professional Credibility**: Clean, trustworthy design
- **Educational Focus**: Content-first approach
- **Institutional Authority**: Formal, established presence
- **Knowledge Sharing**: Accessible, clear communication
- **Scholarly Tradition**: Serif typography and structured layouts

---

## Implementation Example

```tsx
// Academic Excellence Hero Section
<div className="hero-section bg-page">
  <div className="hero-content-wrapper max-w-4xl mx-auto text-center">
    <h1 className="text-display text-main mb-6">
      Excellence <span className="text-display-emphasis">Académique</span>
    </h1>
    <p className="text-main-70 text-lg mb-8 leading-relaxed">
      Former les architectes de demain depuis 1985
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="btn-cta">Nos programmes</button>
      <button className="btn-secondary">Admissions</button>
    </div>
  </div>
  <div className="academic-banner bg-navy text-card py-4 mt-8">
    <p className="text-center font-semibold">Plus de 1,250 architectes formés • 23 prix d'excellence • Partenaires dans 15 pays</p>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with advanced CSS support
- Progressive enhancement for older browsers
- Optimized for academic content consumption

---

## Performance Considerations

- Efficient typography rendering
- Optimized for large amounts of academic content
- Fast loading of educational materials
- Responsive performance across devices

---

## Accessibility Features

- Excellent contrast ratios for academic content
- Screen reader friendly for educational materials
- Keyboard navigation for institutional websites
- Clear focus indicators

---

## Customization Options

- Curriculum-specific color schemes
- Department-specific styling variations
- Research vs teaching focus adjustments
- International program adaptations

---

## Future Enhancements

- Interactive curriculum displays
- Student progress visualizations
- Research publication integrations
- Alumni network features
