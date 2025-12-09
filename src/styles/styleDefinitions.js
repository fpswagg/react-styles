export const styleDefinitions = {
  'modern-heritage': {
    name: 'Modern Heritage',
    description: 'Une déclinaison élégante, minimaliste et patrimoniale. Hero photographique en N&B, touches de terre et d\'ocre pour rappeler les matériaux.',
    colors: {
      primary: '#B65A2A',        // Terracotta
      secondary: '#F5F2EA',       // Crème
      accent: '#E6A41E',          // Ocre subtile
      background: '#F5F2EA',      // Crème
      text: '#22242A',            // Anthracite
      textLight: '#666666',       // Gris moyen
      border: '#DDD',              // Bordures légères
      cardBg: '#FFFFFF'            // Blanc pur
    },
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
    },
    spacing: {
      cardPadding: '1.5rem',
      borderRadius: '8px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 16px rgba(0, 0, 0, 0.15)'
    },
    backgrounds: {
      main: '#F5F2EA',
      pattern: 'subtle grain texture',
      texture: 'paper texture light',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'translateY(-4px)',
      duration: '0.3s',
      easing: 'ease'
    },
    ambiance: 'modern-heritage'
  },
  'urban-canvas': {
    name: 'Urban Canvas',
    description: 'Design urbain/contemporain, dynamique, orienté vers actualités, événements, recherche et urbanisme.',
    colors: {
      primary: '#00D4FF',         // Turquoise cyber
      secondary: '#FFFFFF',       // Blanc contrasté
      accent: '#FF6B6B',           // Rouge urbain
      background: '#0F1113',      // Très sombre urbain
      text: '#FFFFFF',            // Blanc sur sombre
      textLight: '#C7CCD1',       // Gris clair
      border: '#333333',           // Bordures sombres
      cardBg: '#1A1D1F'            // Gris très foncé
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Montserrat, sans-serif',
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      borderRadius: '8px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
      shadowHover: '0 4px 16px rgba(0, 212, 255, 0.2)'
    },
    backgrounds: {
      main: '#0F1113',
      pattern: 'grid urbain',
      texture: 'digital noise',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'scale(1.02)',
      duration: '0.25s',
      easing: 'ease'
    },
    ambiance: 'urban-canvas'
  },
  'gallery-portfolio': {
    name: 'Gallery Portfolio',
    description: 'Priorité aux visuels — layout masonry ou grid pour montrer maquettes, photos, rendus. Interface immersive centrée sur la découverte visuelle.',
    colors: {
      primary: '#007AFF',         // Bleu iOS
      secondary: '#F8F9FA',        // Gris très clair
      accent: '#FF9500',           // Orange pour highlights
      background: '#FFFFFF',       // Blanc pur
      text: '#000000',             // Noir profond
      textLight: '#666666',        // Gris pour descriptions
      border: '#E5E5E5',            // Bordures subtiles
      cardBg: '#FFFFFF',            // Blanc pur
      overlay: 'rgba(0,0,0,0.7)'   // Overlay lightbox
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'SF Pro Display, Inter, sans-serif',
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem'
      }
    },
    spacing: {
      cardPadding: '1rem',
      borderRadius: '12px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 16px rgba(0, 0, 0, 0.15)'
    },
    backgrounds: {
      main: '#FFFFFF',
      pattern: 'minimal grid',
      texture: 'subtle noise',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'scale(1.02)',
      duration: '0.2s',
      easing: 'ease'
    },
    ambiance: 'gallery-portfolio'
  },
  'tropical-vernacular': {
    name: 'Tropical Vernacular',
    description: 'Mettre en avant le lien au territoire et aux matériaux africains. Approche immersive, texturée, didactique.',
    colors: {
      primary: '#D2691E',         // Terracotta
      secondary: '#F0E6DA',       // Crème sable
      accent: '#8B4513',          // Marron bois
      background: '#F0E6DA',      // Crème sable
      text: '#2C1810',            // Terre foncée
      textLight: '#8A5A3F',        // Bois foncé
      border: '#D2B48C',           // Beige
      cardBg: '#F5F5DC'            // Blanc cassé
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Source Serif Pro, serif',
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      borderRadius: '12px',
      shadow: '0 2px 8px rgba(139, 69, 19, 0.1)',
      shadowHover: '0 4px 16px rgba(139, 69, 19, 0.2)'
    },
    backgrounds: {
      main: '#F0E6DA',
      pattern: 'motifs africains géométriques',
      texture: 'grain bois, terre, végétal',
      cardTexture: 'texture naturelle'
    },
    animations: {
      cardHover: 'scale(1.02)',
      duration: '0.3s',
      easing: 'ease'
    },
    ambiance: 'tropical-vernacular'
  },
  'hybrid-modern-tradition': {
    name: 'Hybrid Modern-Tradition',
    description: 'Un site polyvalent et modulable — combine l\'institutionnel, la galerie, et la collaboration. Plateforme complète pour l\'écosystème ESSACA.',
    colors: {
      primary: '#C8612E',         // Orange terre cuite
      secondary: '#F7F4EF',       // Blanc cassé élégant
      accent: '#8B7355',           // Beige architectural
      background: '#F7F4EF',       // Blanc cassé élégant
      text: '#2C2A29',            // Noir charbonneux
      textLight: '#666666',        // Gris pour secondary
      border: '#E5E5E5',           // Bordures subtiles
      cardBg: '#FFFFFF',           // Blanc pur
      success: '#10B981',          // Vert validation
      warning: '#F59E0B',          // Orange avertissement
      error: '#EF4444'              // Rouge erreur
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Merriweather, serif',
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem'
      }
    },
    spacing: {
      cardPadding: '1.5rem',
      borderRadius: '8px',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      shadowHover: '0 4px 16px rgba(0, 0, 0, 0.15)'
    },
    backgrounds: {
      main: '#F7F4EF',
      pattern: 'subtle grid',
      texture: 'paper texture',
      cardTexture: 'none'
    },
    animations: {
      cardHover: 'translateY(-2px)',
      duration: '0.2s',
      easing: 'ease'
    },
    ambiance: 'hybrid-modern-tradition'
  }
}
