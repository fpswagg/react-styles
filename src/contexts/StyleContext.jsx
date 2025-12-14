import { createContext, useContext, useState } from 'react';

export const STYLES = {
  BASIC_STYLE: 'basic-style',
  URBAN_CONCRETE: 'urban-concrete',
  BIOPHILIC_NATURE: 'biophilic-nature',
  DIGITAL_TECH: 'digital-tech',
  CLASSICAL_SYMMETRY: 'classical-symmetry',
  CONTEMPORARY_GEOMETRIC: 'contemporary-geometric',
  MOROCCAN_HERITAGE: 'moroccan-heritage',
  ACADEMIC_EXCELLENCE: 'academic-excellence',
  INNOVATIVE_DESIGN: 'innovative-design',
  MEDITERRANEAN_BLUE: 'mediterranean-blue',
  NOMADIC_PATTERNS: 'nomadic-patterns',
  SUSTAINABLE_EARTH: 'sustainable-earth',
  DIGITAL_PARAMETRIC: 'digital-parametric',
};

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState(STYLES.BASIC_STYLE);

  return (
    <StyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};
