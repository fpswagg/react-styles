import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CorporateAccordion = ({ title, children, isOpen, onToggle, level = 1 }) => {
  return (
    <div className={`corporate-accordion level-${level}`}>
      <motion.button
        className="accordion-header"
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(26, 54, 93, 0.05)" }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="header-content">
          <motion.div
            className="accordion-icon"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            ▶
          </motion.div>
          <h3 className="accordion-title">{title}</h3>
          <div className="accordion-badge">{level}</div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="content-inner">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CorporateAccordion;
