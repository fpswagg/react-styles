import { createContext, useContext, useState } from 'react'

const StyleContext = createContext()

export const useStyle = () => {
  const context = useContext(StyleContext)
  if (!context) {
    throw new Error('useStyle must be used within StyleProvider')
  }
  return context
}

export const STYLES = {
  MODERN_HERITAGE: 'modern-heritage',
  URBAN_CANVAS: 'urban-canvas',
  GALLERY_PORTFOLIO: 'gallery-portfolio',
  TROPICAL_VERNACULAR: 'tropical-vernacular',
  HYBRID_MODERN_TRADITION: 'hybrid-modern-tradition'
}

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState(STYLES.MODERN_HERITAGE)

  return (
    <StyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
      {children}
    </StyleContext.Provider>
  )
}

