// Minimal style definitions - content is now handled by dynamic components

export const styleDefinitions = {
  'studio-grid': {
    name: 'Studio Grid',
    description: 'Design modulaire, inspiration atelier d\'architecture',
    colors: {
      primary: '#2B2F33',      // gris ardoise
      secondary: '#F5F6F7',    // béton clair
      accent: '#E6A41E',        // accent ocre
      background: '#F5F6F7',
      backgroundGradient: 'linear-gradient(180deg, #F5F6F7 0%, #E8EAED 100%)',
      text: '#2B2F33',
      textLight: '#666',
      border: '#2B2F33',
      cardBg: '#FFFFFF'
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      headingFont: 'IBM Plex Sans, Inter, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '8px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 12px rgba(0, 0, 0, 0.15)'
    },
    backgrounds: {
      main: 'linear-gradient(180deg, #F5F6F7 0%, #E8EAED 100%)',
      pattern: 'radial-gradient(circle, rgba(43, 47, 51, 0.03) 1px, transparent 1px)',
      patternSize: '24px 24px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.005\'/%3E%3C/svg%3E")',
      cardTexture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.005\'/%3E%3C/svg%3E")'
    },
    animations: {
      cardHover: 'translateY(-4px)',
      cardHoverDuration: '0.3s',
      cardHoverEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      buttonClick: 'scale(0.98)',
      buttonSpring: 'spring',
      inputFocus: 'border-width 0.3s ease',
      pageTransition: 'fade 0.4s ease-out, slide 0.4s ease-out',
      modalTransition: 'scale 0.25s cubic-bezier(0.4, 0, 0.2, 1), fade 0.25s',
      staggerDelay: '0.1s'
    },
    ambiance: 'atelier-architecture'
  },
  'portfolio-flow': {
    name: 'Portfolio Flow',
    description: 'Design centré sur les visuels — portfolio étudiant',
    colors: {
      primary: '#000000',      // noir profond
      secondary: '#F5F5F0',    // blanc cassé
      accent: '#40E0D0',        // turquoise
      background: '#F5F5F0',
      backgroundGradient: 'linear-gradient(180deg, #F5F5F0 0%, #FFFFFF 100%)',
      text: '#000000',
      textLight: '#333',
      border: '#E0E0E0',
      cardBg: '#FFFFFF'
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Playfair Display, serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '12px',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      shadowHover: '0 8px 24px rgba(0, 0, 0, 0.12)'
    },
    backgrounds: {
      main: '#F5F5F0',
      pattern: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'linen\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23F5F5F0\'/%3E%3Cpath d=\'M0 0h100v1H0zm0 2h100v1H0zm0 2h100v1H0z\' fill=\'%23FFFFFF\' opacity=\'0.02\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23linen)\'/%3E%3C/svg%3E")',
      patternSize: '100px 100px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23grain)\' opacity=\'0.003\'/%3E%3C/svg%3E")',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'scale(1.05)',
      cardHoverDuration: '0.4s',
      cardHoverEasing: 'ease-out',
      buttonClick: 'scale(0.95)',
      buttonSpring: 'elastic',
      inputFocus: 'pulse 0.3s ease',
      pageTransition: 'fade 0.5s ease-in-out',
      modalTransition: 'zoom 0.3s ease-out, fade 0.3s',
      staggerDelay: '0.08s',
      imageZoom: 'scale(1.1)',
      parallaxSpeed: '0.5'
    },
    ambiance: 'art-gallery'
  },
  'critique-lab': {
    name: 'Critique Lab',
    description: 'Focus feedback & annotation',
    colors: {
      primary: '#2C2C2C',      // graphite
      secondary: '#FFFFFF',     // paper-white
      accent: '#DC3545',        // rouge accent
      background: '#FFFFFF',
      backgroundGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
      text: '#2C2C2C',
      textLight: '#666',
      border: '#E0E0E0',
      cardBg: '#FAFAFA'
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      headingFont: 'Roboto, sans-serif',
      monospace: 'monospace',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '6px',
      shadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 10px rgba(0, 0, 0, 0.15)'
    },
    backgrounds: {
      main: '#FFFFFF',
      pattern: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(44, 44, 44, 0.03) 27px, rgba(44, 44, 44, 0.03) 28px)',
      patternSize: '28px 28px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23paper)\' opacity=\'0.015\'/%3E%3C/svg%3E")',
      cardTexture: 'none',
      viewerArea: '#FAFAFA'
    },
    animations: {
      cardHover: 'translateY(-2px)',
      cardHoverDuration: '0.3s',
      cardHoverEasing: 'ease',
      buttonClick: 'scale(0.95)',
      buttonSpring: 'bounce',
      inputFocus: 'border-color 0.3s ease',
      pageTransition: 'fade 0.2s',
      modalTransition: 'scale 0.2s ease, fade 0.2s',
      staggerDelay: '0.05s',
      annotationStamp: 'scale(0) to scale(1) with bounce',
      drawingTrail: 'trail effect'
    },
    ambiance: 'academic-critique'
  },
  'admin-studio': {
    name: 'Admin Studio',
    description: 'Gestion avancée + rapports',
    colors: {
      primary: '#4A5568',      // bleu gris
      secondary: '#F7FAFC',    // gris très clair
      accent: '#D69E2E',        // jaune foncé
      background: '#F7FAFC',
      backgroundGradient: 'linear-gradient(180deg, #F7FAFC 0%, #EDF2F7 100%)',
      text: '#2D3748',
      textLight: '#718096',
      border: '#E2E8F0',
      cardBg: '#FFFFFF'
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Inter, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.25rem',
      formPadding: '1.5rem',
      borderRadius: '4px',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 2px 6px rgba(0, 0, 0, 0.12)'
    },
    backgrounds: {
      main: '#F7FAFC',
      pattern: 'repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(74, 85, 104, 0.01) 7px, rgba(74, 85, 104, 0.01) 8px), repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(74, 85, 104, 0.01) 7px, rgba(74, 85, 104, 0.01) 8px)',
      patternSize: '8px 8px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'tech\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23tech)\' opacity=\'0.01\'/%3E%3C/svg%3E")',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'none',
      cardHoverDuration: '0s',
      cardHoverEasing: 'ease',
      buttonClick: 'scale(0.97)',
      buttonSpring: 'none',
      inputFocus: 'border-width 0.5s ease',
      pageTransition: 'fade 0.15s',
      modalTransition: 'scale 0.2s ease, fade 0.2s',
      staggerDelay: '0.05s',
      tableRowHover: 'background-color 0.1s ease'
    },
    ambiance: 'enterprise-dashboard'
  },
  'studio-collab': {
    name: 'Studio Collab',
    description: 'Collaboration synchrone + simple',
    colors: {
      primary: '#2C3E50',      // anthracite
      secondary: '#FFFFFF',    // blanc
      accent: '#1ABC9C',        // turquoise
      background: '#FFFFFF',
      backgroundGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)',
      text: '#2C3E50',
      textLight: '#7F8C8D',
      border: '#1ABC9C',
      cardBg: '#F8F9FA'
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Inter, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '8px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 12px rgba(26, 188, 156, 0.15)'
    },
    backgrounds: {
      main: '#FFFFFF',
      pattern: 'radial-gradient(circle at 2px 2px, rgba(26, 188, 156, 0.02) 1px, transparent 0)',
      patternSize: '40px 40px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'digital\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23digital)\' opacity=\'0.01\'/%3E%3C/svg%3E")',
      cardTexture: 'none',
      chatArea: '#F8F9FA'
    },
    animations: {
      cardHover: 'translateY(-2px)',
      cardHoverDuration: '0.3s',
      cardHoverEasing: 'ease-out',
      buttonClick: 'scale(0.95)',
      buttonSpring: 'elastic',
      inputFocus: 'border-color 0.3s ease',
      pageTransition: 'fade 0.3s ease-out, slide 0.3s ease-out',
      modalTransition: 'scale 0.25s ease, fade 0.25s',
      staggerDelay: '0.05s',
      messageSlide: 'slide-in from right 0.3s ease',
      presencePulse: 'pulse 2s infinite',
      realtimeGlow: 'glow 1.5s infinite'
    },
    ambiance: 'collaborative-workspace'
  },
  'modern-agency': {
    name: 'Modern Agency',
    description: 'Design agence digitale moderne — tech & créatif',
    colors: {
      primary: '#6366F1',      // indigo moderne
      secondary: '#F8FAFC',    // gris très clair
      accent: '#8B5CF6',        // violet accent
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      backgroundGradient: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      text: '#1E293B',
      textLight: '#64748B',
      border: '#CBD5E1',
      cardBg: '#FFFFFF'
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      headingFont: 'Inter, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '2rem',
      formPadding: '2.5rem',
      borderRadius: '16px',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      shadowHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    backgrounds: {
      main: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      pattern: 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
      patternSize: '60px 60px',
      texture: 'none',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'translateY(-8px) scale(1.02)',
      cardHoverDuration: '0.4s',
      cardHoverEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      buttonClick: 'scale(0.96)',
      buttonSpring: 'spring',
      inputFocus: 'border-color 0.3s ease, box-shadow 0.3s ease',
      pageTransition: 'fade 0.3s ease-out, slide 0.3s ease-out',
      modalTransition: 'scale 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), fade 0.2s',
      staggerDelay: '0.1s'
    },
    ambiance: 'modern-agency'
  },
  'corporate-classic': {
    name: 'Corporate Classic',
    description: 'Design corporate traditionnel — formel & professionnel',
    colors: {
      primary: '#1A365D',      // navy profond
      secondary: '#FFFFFF',    // blanc pur
      accent: '#2D3748',        // gris foncé
      background: '#FFFFFF',
      backgroundGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)',
      text: '#1A365D',
      textLight: '#4A5568',
      border: '#CBD5E1',
      cardBg: '#FFFFFF'
    },
    typography: {
      fontFamily: 'Georgia, serif',
      headingFont: 'Georgia, serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '4px',
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      shadowHover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    backgrounds: {
      main: '#FFFFFF',
      pattern: 'none',
      patternSize: 'none',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'paper\' x=\'0\' y=\'0\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Crect x=\'0\' y=\'0\' width=\'20\' height=\'20\' fill=\'%23FFFFFF\'/%3E%3Cpath d=\'M0 0 L20 0 L20 20 L0 20 Z\' stroke=\'%23F1F5F9\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23paper)\'/%3E%3C/svg%3E")',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'translateY(-2px)',
      cardHoverDuration: '0.2s',
      cardHoverEasing: 'ease',
      buttonClick: 'translateY(1px)',
      buttonSpring: 'none',
      inputFocus: 'border-color 0.2s ease',
      pageTransition: 'fade 0.2s ease',
      modalTransition: 'fade 0.2s ease',
      staggerDelay: '0.05s'
    },
    ambiance: 'corporate-classic'
  },
  'creative-workshop': {
    name: 'Creative Workshop',
    description: 'Design workshop créatif — artisanal & organique',
    colors: {
      primary: '#8B4513',      // marron artisanal
      secondary: '#FEFEFE',    // blanc cassé
      accent: '#D2691E',        // orange artisanal
      background: '#FEFEFE',
      backgroundGradient: 'linear-gradient(135deg, #FEFEFE 0%, #F5F5F0 100%)',
      text: '#3D2817',
      textLight: '#8B7355',
      border: '#D4C4A8',
      cardBg: '#FEFEFE'
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      headingFont: 'system-ui, -apple-system, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '2rem',
      formPadding: '2.5rem',
      borderRadius: '12px',
      shadow: '0 4px 8px rgba(139, 69, 19, 0.1)',
      shadowHover: '0 8px 16px rgba(139, 69, 19, 0.15)'
    },
    backgrounds: {
      main: '#FEFEFE',
      pattern: 'radial-gradient(circle at 30% 30%, rgba(210, 105, 30, 0.05) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(139, 69, 19, 0.03) 0%, transparent 40%)',
      patternSize: '80px 80px',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'wood\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.02\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23wood)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      cardTexture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23paper)\' opacity=\'0.02\'/%3E%3C/svg%3E")'
    },
    animations: {
      cardHover: 'translateY(-6px) rotate(1deg)',
      cardHoverDuration: '0.5s',
      cardHoverEasing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      buttonClick: 'scale(0.95) rotate(-1deg)',
      buttonSpring: 'bounce',
      inputFocus: 'border-color 0.4s ease, box-shadow 0.4s ease',
      pageTransition: 'fade 0.5s ease-out, rotate 0.5s ease-out',
      modalTransition: 'scale 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55), fade 0.3s',
      staggerDelay: '0.15s'
    },
    ambiance: 'creative-workshop'
  },
  'tech-startup': {
    name: 'Tech Startup',
    description: 'Design startup tech — futuriste & innovant',
    colors: {
      primary: '#00FF88',      // néon vert
      secondary: '#0F0F23',    // noir profond
      accent: '#00D4FF',        // cyan néon
      background: '#0F0F23',
      backgroundGradient: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)',
      text: '#FFFFFF',
      textLight: '#B8C5D6',
      border: '#2A2A4E',
      cardBg: '#1A1A2E'
    },
    typography: {
      fontFamily: 'JetBrains Mono, monospace',
      headingFont: 'JetBrains Mono, monospace',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      formPadding: '2rem',
      borderRadius: '8px',
      shadow: '0 0 20px rgba(0, 255, 136, 0.1)',
      shadowHover: '0 0 30px rgba(0, 255, 136, 0.2), 0 0 60px rgba(0, 212, 255, 0.1)'
    },
    backgrounds: {
      main: '#0F0F23',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.03) 0%, transparent 50%)',
      patternSize: '100px 100px',
      texture: 'none',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'translateY(-4px)',
      cardHoverDuration: '0.3s',
      cardHoverEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      buttonClick: 'scale(0.98)',
      buttonSpring: 'none',
      inputFocus: 'border-color 0.2s ease, box-shadow 0.2s ease',
      pageTransition: 'fade 0.2s ease, slide 0.2s ease',
      modalTransition: 'scale 0.2s ease, fade 0.2s',
      staggerDelay: '0.08s'
    },
    ambiance: 'tech-startup'
  },
  'academic-library': {
    name: 'Academic Library',
    description: 'Design bibliothèque académique — érudit & intemporel',
    colors: {
      primary: '#8B4513',      // marron bibliothèque
      secondary: '#F5F5DC',    // beige ancien
      accent: '#DAA520',        // doré académique
      background: '#F5F5DC',
      backgroundGradient: 'linear-gradient(135deg, #F5F5DC 0%, #FAF0E6 100%)',
      text: '#3D2817',
      textLight: '#8B7355',
      border: '#D2B48C',
      cardBg: '#FAF0E6'
    },
    typography: {
      fontFamily: 'Crimson Text, serif',
      headingFont: 'Crimson Text, serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
    spacing: {
      cardPadding: '2rem',
      formPadding: '2.5rem',
      borderRadius: '8px',
      shadow: '0 4px 8px rgba(139, 69, 19, 0.08)',
      shadowHover: '0 8px 16px rgba(139, 69, 19, 0.12)'
    },
    backgrounds: {
      main: '#F5F5DC',
      pattern: 'none',
      patternSize: 'none',
      texture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'parchment\' x=\'0\' y=\'0\' width=\'200\' height=\'200\' patternUnits=\'userSpaceOnUse\'%3E%3Crect x=\'0\' y=\'0\' width=\'200\' height=\'200\' fill=\'%23F5F5DC\'/%3E%3Cpath d=\'M0 0 Q50 10 100 0 T200 0 L200 200 L0 200 Z\' fill=\'%23FAF0E6\' opacity=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%\' height=\'100%\' fill=\'url(%23parchment)\'/%3E%3C/svg%3E")',
      cardTexture: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'aged\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23aged)\' opacity=\'0.02\'/%3E%3C/svg%3E")'
    },
    animations: {
      cardHover: 'translateY(-4px) scale(1.01)',
      cardHoverDuration: '0.4s',
      cardHoverEasing: 'ease-out',
      buttonClick: 'scale(0.97)',
      buttonSpring: 'none',
      inputFocus: 'border-color 0.3s ease, box-shadow 0.3s ease',
      pageTransition: 'fade 0.4s ease-out',
      modalTransition: 'scale 0.3s ease-out, fade 0.3s',
      staggerDelay: '0.12s'
    },
    ambiance: 'academic-library'
  }
}
