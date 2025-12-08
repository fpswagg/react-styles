import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicTabs = ({ tabs, activeTab, onTabChange }) => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className="academic-tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            onHoverStart={() => setHoveredTab(tab.id)}
            onHoverEnd={() => setHoveredTab(null)}
            whileHover={{
              scale: 1.05,
              backgroundColor: activeTab === tab.id ? '#DAA520' : '#F5DEB3'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="tab-content">
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-title">{tab.title}</span>
              <motion.div
                className="tab-ink"
                initial={{ width: 0 }}
                animate={{
                  width: activeTab === tab.id ? '100%' :
                         hoveredTab === tab.id ? '60%' : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Ornement de séparation */}
      <div className="tabs-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-flourish left"></div>
        <div className="decoration-flourish right"></div>
      </div>
    </div>
  );
};

export default AcademicTabs;
