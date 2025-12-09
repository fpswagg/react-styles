import { useState } from 'react'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import { ModernHeritageDashboard } from './components/styles/modern-heritage'
import { UrbanCanvasDashboard } from './components/styles/urban-canvas'
import { GalleryPortfolioDashboard } from './components/styles/gallery-portfolio'
import { TropicalVernacularDashboard } from './components/styles/tropical-vernacular'
import { HybridModernTraditionDashboard } from './components/styles/hybrid-modern-tradition'
import { useStyle, STYLES } from './contexts/StyleContext'
import { useStyleTheme } from './hooks/useStyleTheme'
import { styleDefinitions } from './styles/styleDefinitions'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const { currentStyle, setCurrentStyle } = useStyle()
  const { cssVars, theme } = useStyleTheme()

  // Rendu dynamique selon le style sélectionné
  const renderDashboard = () => {
    try {
      switch (currentStyle) {
        case STYLES.MODERN_HERITAGE:
          return <ModernHeritageDashboard />
        case STYLES.URBAN_CANVAS:
          return <UrbanCanvasDashboard />
        case STYLES.GALLERY_PORTFOLIO:
          return <GalleryPortfolioDashboard />
        case STYLES.TROPICAL_VERNACULAR:
          return <TropicalVernacularDashboard />
        case STYLES.HYBRID_MODERN_TRADITION:
          return <HybridModernTraditionDashboard />
        default:
          return <Dashboard />
      }
    } catch (error) {
      console.error('Error rendering dashboard:', error)
      return (
        <div style={{ padding: '2rem', color: 'red' }}>
          <h2>Error loading dashboard</h2>
          <p>{error.message}</p>
          <p>Current style: {currentStyle}</p>
        </div>
      )
    }
  }

  if (!theme || !cssVars) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="app" style={cssVars} data-ambiance={theme.ambiance}>
      <nav className="app-nav">
        <div className="app-nav-left">
          <button
            className={currentView === 'dashboard' ? 'active' : ''}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={currentView === 'form' ? 'active' : ''}
            onClick={() => setCurrentView('form')}
          >
            Form
          </button>
        </div>
        <div className="app-nav-right">
          <label htmlFor="style-selector" className="style-label">
            Style:
          </label>
          <select
            id="style-selector"
            className="style-selector"
            value={currentStyle}
            onChange={(e) => setCurrentStyle(e.target.value)}
          >
            {Object.entries(STYLES).map(([key, value]) => (
              <option key={key} value={value}>
                {styleDefinitions[value].name}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <main className="app-main">
        {currentView === 'dashboard' ? renderDashboard() : <Form />}
      </main>
    </div>
  )
}

export default App

