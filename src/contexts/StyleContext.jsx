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
  STUDIO_GRID: 'studio-grid',
  PORTFOLIO_FLOW: 'portfolio-flow',
  CRITIQUE_LAB: 'critique-lab',
  ADMIN_STUDIO: 'admin-studio',
  STUDIO_COLLAB: 'studio-collab',
  MODERN_AGENCY: 'modern-agency',
  CORPORATE_CLASSIC: 'corporate-classic',
  CREATIVE_WORKSHOP: 'creative-workshop',
  TECH_STARTUP: 'tech-startup',
  ACADEMIC_LIBRARY: 'academic-library'
}

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState(STYLES.STUDIO_GRID)

  return (
    <StyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
      {children}
    </StyleContext.Provider>
  )
}

