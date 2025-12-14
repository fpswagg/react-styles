# ESSACA App - Mediterranean Blue Style

## Overview

The Mediterranean Blue style captures the serene, coastal essence of Morocco's Mediterranean coastline and traditional Mediterranean architecture. This style features calming blue tones, natural textures, and organic forms inspired by the sea, sky, and traditional coastal architecture. The design philosophy emphasizes tranquility, natural beauty, and the harmonious relationship between architecture and the Mediterranean environment.

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

The application uses a soothing, coastal-inspired color palette reminiscent of the Mediterranean:

#### Primary Colors
- **Page Background (Light Blue)**: `#F0F8FF` - `--color-page` / `bg-page`
- **Main Text (Deep Teal)**: `#0F4C5C` - `--color-main` / `text-main`
- **Ocean Blue (Primary)**: `#1E88E5` - `--color-ocean` / `bg-ocean` / `text-ocean`
- **Sage Green (Secondary)**: `#4A90E2` - `--color-sage` / `bg-sage` / `text-sage`
- **Card Background (White)**: `#FFFFFF` - `--color-card` / `bg-card`

#### Semantic Colors (shadcn/ui compatibility)
- **Background**: `hsl(205, 100, 97)` - Maps to light blue
- **Foreground**: `hsl(190, 45, 30)` - Maps to deep teal
- **Primary**: `hsl(207, 90, 54)` - Maps to ocean blue
- **Secondary**: `hsl(212, 90, 60)` - Maps to sage blue
- **Destructive**: `hsl(0, 65, 55)` - Error states
- **Muted**: `hsl(205, 40, 96)` - Subtle backgrounds
- **Border**: `hsl(205, 25, 90)` - Light blue borders
- **Input**: `hsl(205, 25, 90)` - Input borders
- **Ring**: `hsl(207, 90, 54)` - Focus rings (ocean blue)

### Color Usage Patterns

```tsx
// Background colors
className="bg-page"        // Main page background (light blue)
className="bg-card"        // Card/container background (white)
className="bg-ocean"       // Primary accent background
className="bg-sage"        // Secondary accent background

// Text colors
className="text-main"           // Primary text (deep teal)
className="text-main/70"        // Muted text (70% opacity)
className="text-main/60"        // Subtle text (60% opacity)
className="text-ocean"          // Accent text
className="text-sage"           // Secondary accent text

// Border colors
className="border-main/10"      // Subtle borders
className="border-main/20"       // Standard borders
className="border-ocean"         // Accent borders
```

---

## Typography

### Font Families

The application uses two primary font families that evoke coastal serenity and clarity:

1. **Display Font**: Playfair Display (serif) or Georgia (fallback)
   - Weights: 400 (regular), 700 (bold)
   - Styles: normal, italic
   - Used for: Headings, elegant display text, coastal-inspired elements
   - CSS Variable: `--font-display`
   - Tailwind: `font-display`

2. **Body Font**: Inter
   - Used for: Body text, UI elements, buttons
   - CSS Variable: `--font-body`
   - Tailwind: `font-body` or `font-sans`

### Typography Scale

#### Headings
- **H1**: `clamp(48px, 5vw, 88px)` - Elegant, flowing display text
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
- Line height: 1.7 (for general text), 1.8 (for coastal descriptions)
- Letter spacing: 0.01em for improved readability

---

## Layout & Spacing

### Container System
- **Main Container**:
  - `max-width: calc(100% - 80px)` on desktop, `calc(100% - 40px)` on mobile
  - `margin: 0 auto` for centering
  - `border-radius: 16px`
  - `padding: 4rem 5rem` on desktop, `3rem 2.5rem` on mobile
  - `background-color: var(--color-card)`
  - `border: 1px solid rgba(30, 136, 229, 0.15)`
  - `box-shadow: 0 8px 32px rgba(30, 136, 229, 0.08)`

### Spacing
- Organic spacing inspired by natural coastal forms
- Generous, breathing room for serene content
- Flowing layouts reminiscent of water and waves

---

## Component Styling

### Buttons
- **General**:
  - `border-radius: 12px`
  - `font-size: 15px`
  - `font-weight: 500`
  - `letter-spacing: 0.02em`
  - `text-transform: none`
  - `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
  - `outline: 2px solid var(--color-ring)` on focus-visible

- **CTA Button (`.btn-cta`)**:
  - `background: linear-gradient(135deg, var(--color-ocean), var(--color-sage))`
  - `color: var(--color-card)`
  - `border: none`
  - Hover: `transform: translateY(-2px)`, `box-shadow: 0 12px 24px rgba(30, 136, 229, 0.3)`
  - Active: `transform: translateY(0)`

- **Secondary Button (`.btn-secondary`)**:
  - `background-color: transparent`
  - `color: var(--color-ocean)`
  - `border: 2px solid var(--color-ocean)`
  - Hover: `background-color: var(--color-ocean)`, `color: var(--color-card)`
  - Active: `transform: scale(0.98)`

- **Ghost Button (`.btn-ghost`)**:
  - `background-color: transparent`
  - `color: var(--color-main)`
  - `border: none`
  - Hover: `color: var(--color-ocean)`, `background-color: rgba(30, 136, 229, 0.05)`
  - Active: `transform: translateY(1px)`

### Cards
- **General (`.card`)**:
  - `background-color: var(--color-card)`
  - `border: 1px solid rgba(30, 136, 229, 0.12)`
  - `border-radius: 20px`
  - `padding: 2.5rem`
  - `position: relative`
  - `box-shadow: 0 4px 16px rgba(30, 136, 229, 0.06)`
  - Hover: `transform: translateY(-6px)`, `box-shadow: 0 16px 32px rgba(30, 136, 229, 0.12)`

- **Card Header (`.card-header`)**:
  - `margin-bottom: 2rem`
  - `padding-bottom: 1.5rem`
  - `border-bottom: 2px solid var(--color-ocean)`

- **Card Title (`.card-title`)**:
  - `font-family: var(--font-display)`
  - `font-weight: 700`
  - `font-size: 1.75rem` (desktop: `2rem`)
  - `color: var(--color-main)`
  - `letter-spacing: -0.02em`

- **Card Description (`.card-description`)**:
  - `color: rgba(15, 76, 92, 0.75)`
  - `font-size: 0.9rem` (desktop: `1rem`)
  - `line-height: 1.8`
  - `letter-spacing: 0.01em`

### Form Elements (Inputs)
- **General (`.input`)**:
  - `height: 2.75rem`
  - `border-radius: 12px`
  - `border: 2px solid rgba(30, 136, 229, 0.15)`
  - `background-color: var(--color-card)`
  - `color: var(--color-main)`
  - `padding: 0.625rem 1rem`
  - Focus: `outline: none`, `border-color: var(--color-ocean)`, `border-width: 3px`
  - Focus-visible: `outline: 2px solid var(--color-ring)`, `outline-offset: 3px`

---

## Custom CSS Classes

- **`.coastal-header`**: Serene header with Mediterranean styling
- **`.wave-section`**: Flowing content sections
- **`.ocean-element`**: Water-inspired design elements
- **`.horizon-line`**: Coastal horizon visual elements

---

## Responsive Design

- Mobile-first approach with Tailwind's breakpoints
- `clamp()` function for fluid typography
- Organic layouts that flow naturally across devices
- Touch-friendly coastal-inspired interactions

---

## Utility Functions

- Standard Tailwind utility classes for flowing layouts
- Custom utility classes for Mediterranean colors (`bg-ocean`, `text-sage`, `border-teal`, etc.)
- Wave and flow animation utilities

---

## Design Patterns

- **Organic Flow**: Natural, wave-like layouts
- **Coastal Serenity**: Calming color palettes and spacing
- **Mediterranean Harmony**: Balanced, peaceful compositions
- **Natural Forms**: Organic shapes and gentle curves
- **Horizon Lines**: Visual elements inspired by sea and sky
- **Serene Interactions**: Smooth, calming animations

---

## Implementation Example

```tsx
// Mediterranean Blue Hero Section
<div className="hero-section bg-page relative overflow-hidden">
  <div className="wave-pattern absolute bottom-0 left-0 right-0 h-32 opacity-20"></div>
  <div className="hero-content-wrapper">
    <motion.h1
      className="text-display text-main mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Architecture <span className="text-display-emphasis">Méditerranéenne</span>
    </motion.h1>
    <motion.p
      className="text-main-70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      Harmonie entre architecture et environnement côtier
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <button className="btn-cta">Découvrir le littoral</button>
      <button className="btn-secondary">Nos projets côtiers</button>
    </motion.div>
  </div>
  <div className="horizon-line bg-ocean opacity-10 absolute bottom-32 left-0 right-0 h-px"></div>
</div>
```

---

## Browser Support

- Modern browsers with CSS animations and transforms
- Progressive enhancement for older browsers
- Optimized for serene, contemplative experiences

---

## Performance Considerations

- Smooth, gentle animations for serene experience
- Efficient natural pattern rendering
- Optimized for coastal imagery and content
- Fast loading of tranquil design elements

---

## Accessibility Features

- Calming color schemes that reduce visual stress
- Clear, readable typography for academic content
- Keyboard navigation with gentle focus indicators
- High contrast maintained for accessibility

---

## Customization Options

- Coastal theme variations (Atlantic, Mediterranean, Gulf)
- Seasonal color adaptations
- Wave intensity controls
- Natural element density adjustments

---

## Future Enhancements

- Animated wave patterns
- Interactive coastal elements
- Weather-responsive themes
- Marine-inspired micro-interactions
