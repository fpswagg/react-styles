import { useStyle } from '../contexts/StyleContext'
import { styleDefinitions } from '../styles/styleDefinitions'

export const useStyleTheme = () => {
  const { currentStyle } = useStyle()
  const theme = styleDefinitions[currentStyle] || styleDefinitions['studio-grid']
  
  // Generate CSS variables object
  const cssVars = {
    // Colors
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent,
    '--color-background': theme.colors.background,
    '--color-background-gradient': theme.colors.backgroundGradient,
    '--color-text': theme.colors.text,
    '--color-text-light': theme.colors.textLight,
    '--color-border': theme.colors.border,
    '--color-card-bg': theme.colors.cardBg,
    
    // Typography
    '--font-family': theme.typography.fontFamily,
    '--font-heading': theme.typography.headingFont,
    '--font-monospace': theme.typography.monospace || 'monospace',
    
    // Spacing
    '--spacing-card-padding': theme.spacing.cardPadding,
    '--spacing-form-padding': theme.spacing.formPadding,
    '--border-radius': theme.spacing.borderRadius,
    '--shadow': theme.spacing.shadow,
    '--shadow-hover': theme.spacing.shadowHover,
    
    // Backgrounds
    '--bg-main': theme.backgrounds.main,
    '--bg-pattern': theme.backgrounds.pattern,
    '--bg-pattern-size': theme.backgrounds.patternSize,
    '--bg-texture': theme.backgrounds.texture,
    '--bg-card-texture': theme.backgrounds.cardTexture || 'none',
    '--bg-viewer-area': theme.backgrounds.viewerArea || theme.colors.background,
    '--bg-chat-area': theme.backgrounds.chatArea || theme.colors.background,
    
    // Animations
    '--anim-card-hover': theme.animations.cardHover,
    '--anim-card-hover-duration': theme.animations.cardHoverDuration,
    '--anim-card-hover-easing': theme.animations.cardHoverEasing,
    '--anim-button-click': theme.animations.buttonClick,
    '--anim-stagger-delay': theme.animations.staggerDelay,
    
    // Ambiance class for style-specific features
    '--ambiance': theme.ambiance
  }

  return {
    theme,
    cssVars,
    styleName: currentStyle
  }
}
