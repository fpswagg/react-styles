# ESSACA App - Nomadic Patterns Style

## Overview

The Nomadic Patterns style celebrates Morocco's rich textile and carpet weaving traditions, drawing inspiration from Berber carpets, nomadic tent designs, and intricate geometric patterns. This style features vibrant color combinations, layered patterns, and a sense of cultural storytelling through design. The design philosophy embraces the nomadic spirit of movement and adaptation, with patterns that flow and interconnect like traditional Moroccan textiles.

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

The application uses a vibrant, traditional Moroccan color palette inspired by natural dyes and textiles:

#### Primary Colors
- **Page Background (Sand Beige)**: `#E6D7C3` - `--color-page` / `bg-page`
- **Main Text (Deep Indigo)**: `#2C3E50` - `--color-main` / `text-main`
- **Crimson Red (Primary)**: `#DC143C` - `--color-crimson` / `bg-crimson` / `text-crimson`
- **Royal Blue (Secondary)**: `#4169E1` - `--color-royal` / `bg-royal` / `text-royal`
- **Card Background (Ivory)**: `#FFFFF0` - `--color-ivory` / `bg-ivory`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(45, 30, 82)` - Maps to sand beige
- **Foreground**: `hsl(210, 35, 27)` - Maps to deep indigo
- **Primary**: `hsl(348, 83, 47)` - Maps to crimson red
- **Secondary**: `hsl(225, 73, 57)` - Maps to royal blue
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(45, 20, 95)` - Subtle backgrounds
- **Border**: `hsl(45, 15, 88)` - Light sand borders
- **Input**: `hsl(45, 15, 88)` - Input borders
- **Ring**: `hsl(348, 83, 47)` - Focus rings (crimson red)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (sand beige)
className="bg-ivory"       // Card/container background (ivory)
className="bg-crimson"     // Primary accent background
className="bg-royal"       // Secondary accent background

// Text colors
className="text-main"           // Primary text (deep indigo)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-crimson"        // Accent text
className="text-royal"          // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-crimson"       // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that blend traditional and contemporary Moroccan design:

1. **Display Font**: Tajawal (Arabic-inspired) or Arial (fallback)
   - Weights: 400 (regular), 700 (bold)
   - Styles: normal
   - Used for: Headings, pattern-inspired display text, cultural elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(52px, 6vw, 96px)` - Bold, patterned display text
  - Line height: 1
  - Font weight: 700 (bold)
  - Font family: Display font
  - Letter spacing: 0.02em
  - Utility class: `text-display`

- **H2-H6**: Font weight 700, display font family, letter spacing 0.01em
- **Display Emphasis**: Font weight 400, letter spacing 0.03em
  - Utility class: `text-display-emphasis` or `.display-emphasis`

#### Body Text
- Base font size: 16px
- Line height: 1.6 (for general text), 1.7 (for cultural content)
- Letter spacing: 0.02em

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 0`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-ivory)`
  - `border: 3px solid var(--color-crimson)`
  - `position: relative`

### Spacing
- Pattern-inspired spacing with layered elements
- Generous margins for cultural storytelling
- Asymmetrical arrangements reminiscent of nomadic designs

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 0`
  - `font-size: 14px`
  - `font-weight: 700`
  - `letter-spacing: 0.03em`
  - `text-transform: uppercase`
  - `transition: all 0.2s ease`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background-color: var(--color-crimson)`
  - `color: var(--color-ivory)`
  - `border: 3px solid var(--color-crimson)`
  - Hover: `background-color: var(--color-royal)`, `border-color: var(--color-royal)`
  - Active: `transform: translate(2px, 2px)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: var(--color-ivory)`
  - `border: 3px solid var(--color-crimson)`
  - `color: var(--color-crimson)`
  - Hover: `background-color: var(--color-crimson)`, `color: var(--color-ivory)`
  - Active: `transform: translate(2px, 2px)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - `border-bottom: 2px solid var(--color-crimson)`
  - Hover: `border-bottom-width: 3px`, `transform: translateY(2px)`
  - Active: `transform: translateY(4px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-ivory)`
  - `border: 3px solid var(--color-crimson)`
  - `border-radius: 0`
  - `padding: 2rem`
  - `position: relative`
  - `box-shadow: 4px 4px 0 var(--color-royal)`
  - Hover: `transform: translate(-2px, -2px)`, `box-shadow: 6px 6px 0 var(--color-royal)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 1.5rem`
  - `padding-bottom: 1rem`
  - `border-bottom: 3px solid var(--color-royal)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 700`
  - `font-size: 1.5rem` (desktop: `1.75rem`)
  - `color: var(--color-main)`
  - `letter-spacing: 0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(44, 62, 80, 0.7)`
  - `font-size: 0.875rem` (desktop: `1rem`)
  - `line-height: 1.7`
  - `letter-spacing: 0.02em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.5rem`
  - `border-radius: 0`
  - `border: 3px solid var(--color-crimson)`
  - `background-color: var(--color-ivory)`
  - `color: var(--color-main)`
  - `padding: 0.5rem 0.75rem`
  - Focus: `outline: none`, `border-color: var(--color-royal)`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.nomadic-header`**: Patterned header with cultural elements
- **`.carpet-section`**: Textile-inspired content sections
- **`.geometric-patterns`**: Traditional Moroccan geometric patterns
- **`.layered-layout`**: Stacked, nomadic design arrangements

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Patterned layouts that adapt to different cultural contexts
- Touch interactions inspired by textile manipulation

---

## Utility Functions

- Standard Tailwind utility classes for patterned layouts
- Custom utility classes for nomadic colors (`bg-crimson`, `text-royal`, `border-indigo`, etc.)
- Pattern utility classes for traditional designs

---

## Design Patterns

- **Geometric Complexity**: Intricate star and interlocking patterns
- **Color Layering**: Multiple colored overlays and combinations
- **Cultural Storytelling**: Patterns that tell nomadic stories
- **Textile Inspiration**: Carpet and weaving design principles
- **Nomadic Movement**: Flowing, adaptable layouts
- **Traditional Authenticity**: Genuine Moroccan cultural elements

---

## Implementation Example

```tsx
// Nomadic Patterns Hero Section
<div className="hero-section bg-page relative">
  <div className="geometric-patterns absolute inset-0 opacity-15"></div>
  <div className="hero-content-wrapper">
    <h1 className="text-display text-main mb-6">
      Architecture <span className="text-display-emphasis">Nomade</span>
    </h1>
    <p className="text-main-70 text-lg max-w-3xl mb-8 leading-relaxed">
      Les motifs ancestraux au service de l'architecture moderne
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="btn-cta">Découvrir les motifs</button>
      <button className="btn-secondary">Notre héritage</button>
    </div>
  </div>
  <div className="nomadic-borders">
    <div className="border-top bg-crimson h-2 absolute top-0 left-0 right-0"></div>
    <div className="border-bottom bg-royal h-2 absolute bottom-0 left-0 right-0"></div>
  </div>
</div>
```

---

## Browser Support

- Modern browsers with CSS patterns and layering
- Progressive enhancement for older browsers
- Optimized for cultural, patterned experiences

---

## Performance Considerations

- Efficient geometric pattern rendering
- Optimized layered layouts
- Fast loading of cultural elements
- Minimal pattern complexity for performance

---

## Accessibility Features

- High contrast for intricate patterns
- Clear navigation through complex designs
- Screen reader friendly cultural elements
- Focus indicators with traditional color schemes

---

## Customization Options

- Regional pattern variations (Atlas, Sahara, Coastal)
- Color intensity controls
- Pattern complexity levels
- Cultural theme adaptations

---

## Future Enhancements

- Interactive pattern animations
- Cultural storytelling overlays
- Regional design adaptations
- Traditional craft integrations
