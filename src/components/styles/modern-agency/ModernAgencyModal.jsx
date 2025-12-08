import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernAgencyModal = ({ isOpen, onClose, title, children, variant = 'primary' }) => {
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const modalVariants = {
    primary: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(139, 92, 246, 0.95))',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
    },
    secondary: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    accent: {
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(168, 85, 247, 0.95))',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modern-agency-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modern-agency-modal"
          style={modalVariants[variant]}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          onClick={(e) => e.stopPropagation()}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <motion.button
              className="modal-close"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </div>

          <div className="modal-content">
            {children}
          </div>

          {/* Particules flottantes */}
          <div className="modal-particles">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{
                  left: `${20 + i * 15}%`,
                  background: variant === 'primary' ? '#6366F1' : variant === 'accent' ? '#8B5CF6' : '#CBD5E1'
                }}
                animate={{
                  y: [-20, -60, -20],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModernAgencyModal;
