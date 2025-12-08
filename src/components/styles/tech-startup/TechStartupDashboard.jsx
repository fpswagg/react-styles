import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechStartupGrid from './TechStartupGrid';

const TechStartupDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [realTimeData, setRealTimeData] = useState({
    users: 1234567,
    revenue: 240000,
    churn: 2.1,
    experiments: 12
  });

  // Simulation de données temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        users: prev.users + Math.floor(Math.random() * 100),
        revenue: prev.revenue + Math.floor(Math.random() * 500),
        churn: Math.max(0.1, prev.churn + (Math.random() - 0.5) * 0.1),
        experiments: prev.experiments + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const mainMetrics = [
    {
      key: 'users',
      label: 'Utilisateurs Actifs',
      value: realTimeData.users,
      change: '+127%'
    },
    {
      key: 'revenue',
      label: 'Revenue Mensuel',
      value: realTimeData.revenue,
      change: '+$15K'
    },
    {
      key: 'churn',
      label: 'Taux Churn',
      value: `${realTimeData.churn.toFixed(1)}%`,
      change: '↓0.3%'
    },
    {
      key: 'experiments',
      label: 'Tests A/B',
      value: realTimeData.experiments,
      change: '+3'
    }
  ];

  const detailedViews = {
    users: {
      title: 'Analyse Utilisateurs',
      data: [
        { segment: 'Mobile', count: 780000, growth: '+15%' },
        { segment: 'Desktop', count: 345000, growth: '+8%' },
        { segment: 'Tablet', count: 110000, growth: '+12%' }
      ],
      insights: [
        'Pic d\'activité 14h-16h',
        'Conversion mobile: 23%',
        'Retention 30j: 68%'
      ]
    },
    revenue: {
      title: 'Métriques Revenue',
      data: [
        { source: 'SaaS', amount: 180000, growth: '+22%' },
        { source: 'API', amount: 45000, growth: '+35%' },
        { source: 'Consulting', amount: 15000, growth: '+8%' }
      ],
      insights: [
        'MRR: €240K (+18%)',
        'LTV/CAC: 3.2',
        'Churn négatif Q4'
      ]
    },
    churn: {
      title: 'Analyse Churn',
      data: [
        { reason: 'Prix', percentage: 35, count: 8500 },
        { reason: 'Concurrent', percentage: 28, count: 6800 },
        { reason: 'Usage', percentage: 22, count: 5300 },
        { reason: 'Autre', percentage: 15, count: 3600 }
      ],
      insights: [
        'Churn prédit: 1.8%',
        'Sauvés ce mois: 1240',
        'Win-back rate: 23%'
      ]
    },
    experiments: {
      title: 'Tests A/B Actifs',
      data: [
        { test: 'Pricing Page', status: 'Running', lift: '+12%', confidence: '95%' },
        { test: 'Onboarding', status: 'Running', lift: '+8%', confidence: '87%' },
        { test: 'Feature Flag', status: 'Completed', lift: '+15%', confidence: '99%' }
      ],
      insights: [
        'Tests actifs: 12',
        'Revenue impact: +$45K',
        'Time to significance: 12j avg'
      ]
    }
  };

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
    setCurrentView('detail');
  };

  const renderDataVisualization = (data) => {
    return (
      <div className="data-viz">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="data-bar"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bar-container">
              <motion.div
                className="bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage || (item.amount / 200000) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              />
              <div className="bar-label">
                <span className="bar-name">{item.segment || item.source || item.reason || item.test}</span>
                <span className="bar-value">
                  {item.count ? `${item.count.toLocaleString()}` :
                   item.amount ? `€${item.amount.toLocaleString()}` :
                   item.percentage ? `${item.percentage}%` :
                   item.lift ? item.lift : item.status}
                </span>
              </div>
            </div>
            {item.growth && (
              <span className={`bar-growth ${item.growth.startsWith('+') ? 'positive' : 'negative'}`}>
                {item.growth}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="tech-startup-container">
      {/* Header avec effets néon */}
      <motion.div
        className="startup-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-glow"></div>
        <h1 className="startup-title">
          <span className="title-text">TECH STARTUP</span>
          <span className="title-glow"></span>
        </h1>
        <div className="status-indicator">
          <motion.div
            className="status-dot"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>SYSTÈME ACTIF</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="startup-nav">
        <motion.button
          className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => {
            setCurrentView('dashboard');
            setSelectedMetric(null);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DASHBOARD
        </motion.button>
        <motion.button
          className={`nav-btn ${currentView === 'analytics' ? 'active' : ''}`}
          onClick={() => setCurrentView('analytics')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ANALYTICS
        </motion.button>
        <motion.button
          className={`nav-btn ${currentView === 'experiments' ? 'active' : ''}`}
          onClick={() => setCurrentView('experiments')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EXPERIMENTS
        </motion.button>
      </div>

      {/* Contenu principal */}
      <AnimatePresence mode="wait">
        {currentView === 'dashboard' && (
          <motion.div
            key="dashboard"
            className="dashboard-view"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="view-header">
              <h2>MÉTRIQUES TEMPS RÉEL</h2>
              <div className="real-time-indicator">
                <motion.div
                  className="pulse-dot"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span>DONNÉES LIVE</span>
              </div>
            </div>

            <TechStartupGrid
              metrics={mainMetrics}
              onMetricClick={handleMetricClick}
            />

            {/* Section insights rapides */}
            <motion.div
              className="insights-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>INSIGHTS RAPIDES</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">📈</div>
                  <div className="insight-content">
                    <h4>Croissance</h4>
                    <p>+127% utilisateurs ce mois</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">💰</div>
                  <div className="insight-content">
                    <h4>Revenue</h4>
                    <p>€240K MRR atteint</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">🎯</div>
                  <div className="insight-content">
                    <h4>Optimisation</h4>
                    <p>12 tests A/B actifs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {currentView === 'detail' && selectedMetric && (
          <motion.div
            key="detail"
            className="detail-view"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="detail-header">
              <motion.button
                className="back-btn"
                onClick={() => {
                  setCurrentView('dashboard');
                  setSelectedMetric(null);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ← RETOUR
              </motion.button>
              <h2>{detailedViews[selectedMetric.key].title}</h2>
            </div>

            <div className="detail-content">
              <div className="data-section">
                <h3>DONNÉES DÉTAILLÉES</h3>
                {renderDataVisualization(detailedViews[selectedMetric.key].data)}
              </div>

              <div className="insights-section">
                <h3>INSIGHTS</h3>
                <div className="insights-list">
                  {detailedViews[selectedMetric.key].insights.map((insight, index) => (
                    <motion.div
                      key={index}
                      className="insight-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="insight-bullet"></div>
                      <span>{insight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'analytics' && (
          <motion.div
            key="analytics"
            className="analytics-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <h2>ANALYTIQUES AVANCÉES</h2>
            <div className="analytics-placeholder">
              <div className="hologram-effect">
                <span>ANALYTIQUES QUANTUM</span>
                <span>EN DÉVELOPPEMENT</span>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'experiments' && (
          <motion.div
            key="experiments"
            className="experiments-view"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
          >
            <h2>LABORATOIRE EXPÉRIMENTAL</h2>
            <div className="experiments-placeholder">
              <div className="matrix-effect">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="matrix-char"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                    animate={{
                      y: [0, 100],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  >
                    {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                  </motion.div>
                ))}
                <span>TESTS QUANTUM ACTIFS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Effets cyberpunk en arrière-plan */}
      <div className="cyberpunk-effects">
        {/* Lignes de grille animées */}
        <div className="grid-overlay">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-line"
              style={{ top: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </div>

        {/* Particules de données */}
        <div className="data-streams">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
              animate={{
                y: [-20, window.innerHeight + 20],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {[...Array(8)].map((_, j) => (
                <span key={j} className="stream-char">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Glow effects */}
        <div className="glow-effects">
          <motion.div
            className="glow-orb"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechStartupDashboard;
