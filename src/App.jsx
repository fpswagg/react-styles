import { useState } from 'react';
import { StyleProvider, useStyle, STYLES } from './contexts/StyleContext';
import BasicStyleDashboard from './components/styles/BasicStyle/BasicStyleDashboard';
import UrbanConcreteDashboard from './components/styles/UrbanConcrete/UrbanConcreteDashboard';
import BiophilicNatureDashboard from './components/styles/BiophilicNature/BiophilicNatureDashboard';
import DigitalTechDashboard from './components/styles/DigitalTech/DigitalTechDashboard';
import ClassicalSymmetryDashboard from './components/styles/ClassicalSymmetry/ClassicalSymmetryDashboard';
import ContemporaryGeometricDashboard from './components/styles/ContemporaryGeometric/ContemporaryGeometricDashboard';
import MoroccanHeritageDashboard from './components/styles/MoroccanHeritage/MoroccanHeritageDashboard';
import AcademicExcellenceDashboard from './components/styles/AcademicExcellence/AcademicExcellenceDashboard';
import InnovativeDesignDashboard from './components/styles/InnovativeDesign/InnovativeDesignDashboard';
import MediterraneanBlueDashboard from './components/styles/MediterraneanBlue/MediterraneanBlueDashboard';
import NomadicPatternsDashboard from './components/styles/NomadicPatterns/NomadicPatternsDashboard';
import SustainableEarthDashboard from './components/styles/SustainableEarth/SustainableEarthDashboard';
import DigitalParametricDashboard from './components/styles/DigitalParametric/DigitalParametricDashboard';

const styleNames = {
  [STYLES.BASIC_STYLE]: 'Basic Style',
  [STYLES.URBAN_CONCRETE]: 'Urban Concrete',
  [STYLES.BIOPHILIC_NATURE]: 'Biophilic Nature',
  [STYLES.DIGITAL_TECH]: 'Digital Tech',
  [STYLES.CLASSICAL_SYMMETRY]: 'Classical Symmetry',
  [STYLES.CONTEMPORARY_GEOMETRIC]: 'Contemporary Geometric',
  [STYLES.MOROCCAN_HERITAGE]: 'Moroccan Heritage',
  [STYLES.ACADEMIC_EXCELLENCE]: 'Academic Excellence',
  [STYLES.INNOVATIVE_DESIGN]: 'Innovative Design',
  [STYLES.MEDITERRANEAN_BLUE]: 'Mediterranean Blue',
  [STYLES.NOMADIC_PATTERNS]: 'Nomadic Patterns',
  [STYLES.SUSTAINABLE_EARTH]: 'Sustainable Earth',
  [STYLES.DIGITAL_PARAMETRIC]: 'Digital Parametric',
};

const AppContent = () => {
  const { currentStyle, setCurrentStyle } = useStyle();
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const renderDashboard = () => {
    switch (currentStyle) {
      case STYLES.BASIC_STYLE:
        return <BasicStyleDashboard />;
      case STYLES.URBAN_CONCRETE:
        return <UrbanConcreteDashboard />;
      case STYLES.BIOPHILIC_NATURE:
        return <BiophilicNatureDashboard />;
      case STYLES.DIGITAL_TECH:
        return <DigitalTechDashboard />;
      case STYLES.CLASSICAL_SYMMETRY:
        return <ClassicalSymmetryDashboard />;
      case STYLES.CONTEMPORARY_GEOMETRIC:
        return <ContemporaryGeometricDashboard />;
      case STYLES.MOROCCAN_HERITAGE:
        return <MoroccanHeritageDashboard />;
      case STYLES.ACADEMIC_EXCELLENCE:
        return <AcademicExcellenceDashboard />;
      case STYLES.INNOVATIVE_DESIGN:
        return <InnovativeDesignDashboard />;
      case STYLES.MEDITERRANEAN_BLUE:
        return <MediterraneanBlueDashboard />;
      case STYLES.NOMADIC_PATTERNS:
        return <NomadicPatternsDashboard />;
      case STYLES.SUSTAINABLE_EARTH:
        return <SustainableEarthDashboard />;
      case STYLES.DIGITAL_PARAMETRIC:
        return <DigitalParametricDashboard />;
      default:
        return <BasicStyleDashboard />;
    }
  };

  return (
    <div className="app-wrapper">
      <div className={`style-selector-container ${isSelectorOpen ? 'open' : 'collapsed'}`}>
        <button
          className="style-toggle-btn"
          onClick={() => setIsSelectorOpen(!isSelectorOpen)}
          aria-label="Toggle style selector"
          title={isSelectorOpen ? 'Collapse style selector' : 'Expand style selector'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isSelectorOpen ? 'rotated' : ''}
          >
            <path d="M6 9l4 4 4-4" />
          </svg>
        </button>
        <div className="style-selector-content">
          <label htmlFor="style-select" className="style-label">
            Select Style:
          </label>
          <select
            id="style-select"
            value={currentStyle}
            onChange={(e) => setCurrentStyle(e.target.value)}
            className="style-select"
          >
            {Object.entries(styleNames).map(([value, name]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {renderDashboard()}
    </div>
  );
};

function App() {
  return (
    <StyleProvider>
      <AppContent />
    </StyleProvider>
  );
}

export default App;
