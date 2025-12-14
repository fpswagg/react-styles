# ESSACA App - Moroccan Heritage Style

## Overview

The Moroccan Heritage style celebrates the rich architectural heritage of Morocco, drawing inspiration from Islamic art, traditional zellij (mosaic) patterns, intricate calligraphy, and the country's architectural legacy. This style features geometric patterns, arabesque motifs, and a sophisticated color palette inspired by Moroccan architecture. The design philosophy emphasizes cultural authenticity while maintaining modern usability.

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

The application uses a carefully curated color palette inspired by Moroccan architecture and Islamic art:

#### Primary Colors
- **Page Background (Sand)**: `#F4E4BC` - `--color-page` / `bg-page`
- **Main Text (Deep Blue)**: `#1E3A5F` - `--color-main` / `text-main`
- **Terracotta (Primary)**: `#CD853F` - `--color-terracotta` / `bg-terracotta` / `text-terracotta`
- **Gold Accent (Secondary)**: `#D4AF37` - `--color-gold` / `bg-gold` / `text-gold`
- **Card Background (Cream)**: `#F5F2EC` - `--color-cream` / `bg-cream`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(45, 35, 88)` - Maps to sand
- **Foreground**: `hsl(210, 35, 30)` - Maps to deep blue
- **Primary**: `hsl(30, 55, 50)` - Maps to terracotta
- **Secondary**: `hsl(45, 65, 55)` - Maps to gold
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(45, 30, 92)` - Subtle backgrounds
- **Border**: `hsl(45, 25, 85)` - Light sand borders
- **Input**: `hsl(45, 25, 85)` - Input borders
- **Ring**: `hsl(30, 55, 50)` - Focus rings (terracotta)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (sand)
className="bg-cream"       // Card/container background (cream)
className="bg-terracotta"  // Primary accent background
className="bg-gold"        // Secondary accent background

// Text colors
className="text-main"           // Primary text (deep blue)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-terracotta"     // Accent text
className="text-gold"           // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-terracotta"    // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families with Moroccan cultural influences:

1. **Display Font**: Amiri (Arabic-inspired) or Cinzel (serif fallback)
   - Weights: 400 (regular), 700 (bold)
   - Styles: normal, italic
   - Used for: Headings, display text, Arabic-inspired elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(52px, 6vw, 88px)` - Large display text
  - Line height: 1.05
  - Font weight: 700 (bold)
  - Font family: Display font
  - Letter spacing: -0.03em
  - Utility class: `text-display`

- **H2-H6**: Font weight 700, display font family, letter spacing -0.02em
- **Display Emphasis**: Font weight 400, italic style
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.7 (for general text), 1.8 (for card descriptions)
- Letter spacing: 0.01em for card descriptions

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 0`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-cream)`
  - `border: 2px solid var(--color-terracotta)`
  - `box-shadow: 0 4px 16px rgba(205, 133, 63, 0.15)`

### Spacing
- Generous use of white space inspired by Islamic architecture
- Consistent padding and margins following traditional proportions
- Golden ratio-inspired spacing system

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 0`
  - `font-size: 15px`
  - `font-weight: 600`
  - `letter-spacing: 0.02em`
  - `text-transform: uppercase`
  - `transition: all 0.3s ease`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background: linear-gradient(135deg, var(--color-terracotta), var(--color-gold))`
  - `color: var(--color-main)`
  - `border: 2px solid var(--color-terracotta)`
  - Hover: `transform: translateY(-2px)`, `box-shadow: 0 8px 16px rgba(205, 133, 63, 0.3)`
  - Active: `transform: translateY(0)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-terracotta)`
  - `border: 2px solid var(--color-terracotta)`
  - Hover: `background-color: var(--color-terracotta)`, `color: var(--color-cream)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-gold)`
  - Active: `transform: translateY(1px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-cream)`
  - `border: 2px solid var(--color-terracotta)`
  - `border-radius: 0`
  - `padding: 2.5rem`
  - `position: relative`
  - `box-shadow: 0 4px 12px rgba(205, 133, 63, 0.12)`
  - Hover: `transform: translateY(-4px)`, `box-shadow: 0 12px 24px rgba(205, 133, 63, 0.2)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 2rem`
  - `padding-bottom: 1.5rem`
  - `border-bottom: 2px solid var(--color-gold)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 700`
  - `font-size: 1.75rem` (desktop: `2rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(30, 58, 95, 0.75)`
  - `font-size: 0.9rem` (desktop: `1rem`)
  - `line-height: 1.8`
  - `letter-spacing: 0.01em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 3rem`
  - `border-radius: 0`
  - `border: 2px solid var(--color-terracotta)`
  - `background-color: var(--color-cream)`
  - `color: var(--color-main)`
  - `padding: 0.75rem 1rem`
  - Focus: `outline: none`, `border-color: var(--color-gold)`, `border-width: 3px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.page-header`**: Moroccan-inspired header with geometric patterns
- **`.hero-section`**: Full-width hero with traditional Moroccan architectural elements
- **`.zellij-pattern`**: Geometric tile pattern background
- **`.arabesque-border`**: Decorative border with arabesque motifs

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Adjustments for padding, margins, and font sizes on smaller screens
- Traditional Moroccan proportions maintained across devices

---

## Utility Functions

- Standard Tailwind utility classes for flexbox, grid, spacing, and typography
- Custom utility classes for Moroccan-inspired colors (`bg-sand`, `text-terracotta`, `border-gold`, etc.)
- Pattern utilities for geometric backgrounds

---

## Design Patterns

- **Islamic Geometry**: Star patterns, interlocking geometric shapes
- **Zellij Inspiration**: Mosaic tile patterns in backgrounds and borders
- **Calligraphic Elements**: Arabic-inspired typography and decorative elements
- **Traditional Proportions**: Golden ratio-based spacing and layout
- **Cultural Authenticity**: Colors and motifs inspired by Moroccan heritage
- **Modern Sophistication**: Clean, contemporary application of traditional elements

---

## Implementation Example

```tsx
// Hero Section with Moroccan Heritage Styling
<div className="hero-section bg-page relative overflow-hidden">
  <div className="zellij-pattern absolute inset-0 opacity-10"></div>
  <div className="hero-content-wrapper relative z-10">
    <h1 className="text-display text-main mb-6">
      Architecture <span className="text-display-emphasis">Marocaine</span>
    </h1>
    <p className="text-main-70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
      Héritage architectural millénaire au service de l'excellence contemporaine
    </p>
    <button className="btn-cta">Découvrir notre histoire</button>
  </div>
  <div className="arabesque-border absolute bottom-0 left-0 right-0 h-16"></div>
</div>
```

---

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Progressive enhancement for older browsers
- Optimized for mobile devices and tablets

---

## Performance Considerations

- Optimized geometric patterns using CSS
- Efficient color transitions and animations
- Lightweight font loading strategy
- Responsive images with appropriate sizing

---

## Accessibility Features

- High contrast ratios for text readability
- Keyboard navigation support
- Screen reader friendly semantic markup
- Focus indicators with cultural color schemes

---

## Customization Options

- Color scheme variations (desert, coastal, mountain themes)
- Pattern density adjustments
- Typography scale modifications
- Spacing system adaptations

---

## Future Enhancements

- Animated geometric patterns
- Interactive zellij elements
- Arabic language support enhancements
- Cultural theme variations (Sahara, Atlas, Coastal)
