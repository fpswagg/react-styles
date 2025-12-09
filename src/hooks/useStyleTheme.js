import { useStyle } from '../contexts/StyleContext'
import { styleDefinitions } from '../styles/styleDefinitions'

export const useStyleTheme = () => {
  const { currentStyle } = useStyle()
  const theme = styleDefinitions[currentStyle] || styleDefinitions['modern-heritage']
  
  // Generate CSS variables object
  const cssVars = {
    // Colors
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent,
    '--color-background': theme.colors.background,
    '--color-background-gradient': theme.colors.backgroundGradient || theme.colors.background,
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
    '--spacing-form-padding': theme.spacing.formPadding || theme.spacing.cardPadding,
    '--border-radius': theme.spacing.borderRadius,
    '--shadow': theme.spacing.shadow,
    '--shadow-hover': theme.spacing.shadowHover || theme.spacing.shadow,
    
    // Backgrounds
    '--bg-main': theme.backgrounds.main,
    '--bg-pattern': theme.backgrounds.pattern || 'none',
    '--bg-pattern-size': theme.backgrounds.patternSize || 'auto',
    '--bg-texture': theme.backgrounds.texture || 'none',
    '--bg-card-texture': theme.backgrounds.cardTexture || 'none',
    '--bg-viewer-area': theme.backgrounds.viewerArea || theme.colors.background,
    '--bg-chat-area': theme.backgrounds.chatArea || theme.colors.background,
    
    // Animations
    '--anim-card-hover': theme.animations.cardHover,
    '--anim-card-hover-duration': theme.animations.cardHoverDuration || theme.animations.duration || '0.3s',
    '--anim-card-hover-easing': theme.animations.cardHoverEasing || 'ease',
    '--anim-button-click': theme.animations.buttonClick || 'scale(0.98)',
    '--anim-stagger-delay': theme.animations.staggerDelay || '0.1s',
    
    // Ambiance class for style-specific features
    '--ambiance': theme.ambiance
  }

  return {
    theme,
    cssVars,
    styleName: currentStyle
  }
}
