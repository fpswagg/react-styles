import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TechStartupGrid = ({ metrics, onMetricClick }) => {
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [glitchEffects, setGlitchEffects] = useState({});

  // Effet glitch aléatoire
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMetric = Math.floor(Math.random() * metrics.length);
      setGlitchEffects(prev => ({
        ...prev,
        [randomMetric]: true
      }));

      setTimeout(() => {
        setGlitchEffects(prev => ({
          ...prev,
          [randomMetric]: false
        }));
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [metrics.length]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getGlowColor = (metric) => {
    if (metric.key.includes('users')) return '#00FF88';
    if (metric.key.includes('revenue')) return '#FFD700';
    if (metric.key.includes('churn')) return '#FF4444';
    return '#00D4FF';
  };

  return (
    <div className="tech-grid">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.key}
          className={`metric-cell ${glitchEffects[index] ? 'glitch' : ''}`}
          onClick={() => onMetricClick && onMetricClick(metric)}
          onHoverStart={() => setHoveredMetric(index)}
          onHoverEnd={() => setHoveredMetric(null)}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 30px ${getGlowColor(metric)}40`
          }}
          animate={{
            boxShadow: hoveredMetric === index
              ? `0 0 40px ${getGlowColor(metric)}60, 0 0 80px ${getGlowColor(metric)}20`
              : `0 0 20px ${getGlowColor(metric)}20`
          }}
        >
          {/* Bordure animée */}
          <div
            className="cell-border"
            style={{ borderColor: getGlowColor(metric) }}
          >
            <div className="border-corner top-left"></div>
            <div className="border-corner top-right"></div>
            <div className="border-corner bottom-left"></div>
            <div className="border-corner bottom-right"></div>
          </div>

          {/* Contenu de la cellule */}
          <div className="cell-content">
            <motion.div
              className="metric-value"
              style={{ color: getGlowColor(metric) }}
              animate={glitchEffects[index] ? {
                x: [0, -2, 2, -1, 1, 0],
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(0.8)', 'brightness(1)']
              } : {}}
            >
              {typeof metric.value === 'number' ? formatNumber(metric.value) : metric.value}
            </motion.div>

            <div className="metric-label">{metric.label}</div>

            {metric.change && (
              <motion.div
                className={`metric-change ${metric.change.startsWith('+') ? 'positive' : metric.change.startsWith('-') ? 'negative' : 'neutral'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {metric.change}
              </motion.div>
            )}
          </div>

          {/* Effets de particules */}
          {hoveredMetric === index && (
            <div className="particle-effects">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="data-particle"
                  style={{
                    background: getGlowColor(metric),
                    left: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                />
              ))}
            </div>
          )}

          {/* Lignes de grille animées */}
          <div className="grid-lines">
            <div className="horizontal-line" style={{ borderColor: getGlowColor(metric) + '20' }}></div>
            <div className="vertical-line" style={{ borderColor: getGlowColor(metric) + '20' }}></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStartupGrid;
