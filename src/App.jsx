import { useState } from 'react'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import { ModernAgencyDashboard } from './components/styles/modern-agency'
import { CorporateDashboard } from './components/styles/corporate-classic'
import { CreativeWorkshopDashboard } from './components/styles/creative-workshop'
import { TechStartupDashboard } from './components/styles/tech-startup'
import { AcademicLibraryDashboard } from './components/styles/academic-library'
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
    switch (currentStyle) {
      case STYLES.MODERN_AGENCY:
        return <ModernAgencyDashboard />
      case STYLES.CORPORATE_CLASSIC:
        return <CorporateDashboard />
      case STYLES.CREATIVE_WORKSHOP:
        return <CreativeWorkshopDashboard />
      case STYLES.TECH_STARTUP:
        return <TechStartupDashboard />
      case STYLES.ACADEMIC_LIBRARY:
        return <AcademicLibraryDashboard />
      default:
        return <Dashboard />
    }
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
          {/* Masquer le bouton Form pour les nouveaux styles spéciaux */}
          {!Object.values([STYLES.MODERN_AGENCY, STYLES.CORPORATE_CLASSIC, STYLES.CREATIVE_WORKSHOP, STYLES.TECH_STARTUP, STYLES.ACADEMIC_LIBRARY]).includes(currentStyle) && (
            <button
              className={currentView === 'form' ? 'active' : ''}
              onClick={() => setCurrentView('form')}
            >
              Form
            </button>
          )}
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

