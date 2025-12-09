import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TechStartupDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [realTimeData, setRealTimeData] = useState({
    users: 1234567,
    revenue: 240000,
    experiments: 12,
    uptime: 99.9
  });

  // Simulation de données temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        users: prev.users + Math.floor(Math.random() * 100),
        revenue: prev.revenue + Math.floor(Math.random() * 500),
        experiments: prev.experiments + (Math.random() > 0.9 ? 1 : 0),
        uptime: 99.9 + (Math.random() - 0.5) * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      label: 'Utilisateurs actifs',
      value: realTimeData.users.toLocaleString(),
      change: '+127%',
      icon: '👥',
      color: '#00FF88'
    },
    {
      label: 'Revenue mensuel',
      value: `€${(realTimeData.revenue / 1000).toFixed(0)}K`,
      change: '+$15K',
      icon: '💰',
      color: '#00D4FF'
    },
    {
      label: 'Tests A/B actifs',
      value: realTimeData.experiments,
      change: '+3',
      icon: '🧪',
      color: '#FF0080'
    },
    {
      label: 'Uptime système',
      value: `${realTimeData.uptime.toFixed(1)}%`,
      change: 'Stable',
      icon: '⚡',
      color: '#FFD93D'
    }
  ];

  const experiments = [
    {
      id: 1,
      name: 'Pricing Page Redesign',
      status: 'Running',
      progress: 75,
      lift: '+12%',
      confidence: '95%'
    },
    {
      id: 2,
      name: 'Onboarding Flow',
      status: 'Running',
      progress: 60,
      lift: '+8%',
      confidence: '87%'
    },
    {
      id: 3,
      name: 'Feature Toggle',
      status: 'Completed',
      progress: 100,
      lift: '+15%',
      confidence: '99%'
    }
  ];

  return (
    <div className="tech-startup-container">
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
      <div className="startup-navigation">
        {[
          { id: 'overview', label: 'VUE D\'ENSEMBLE', icon: '📊' },
          { id: 'metrics', label: 'MÉTRIQUES', icon: '📈' },
          { id: 'experiments', label: 'EXPÉRIMENTATIONS', icon: '🧪' },
          { id: 'alerts', label: 'ALERTES', icon: '🚨' },
          { id: 'forms', label: 'FORMULAIRES', icon: '📝' }
        ].map((section) => (
          <motion.button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-label">{section.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="startup-content">
        {activeSection === 'overview' && (
          <motion.div
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="real-time-banner">
              <motion.div
                className="pulse-indicator"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span>DONNÉES TEMPS RÉEL</span>
            </div>

            <div className="overview-metrics">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="metric-icon" style={{ color: metric.color }}>
                    {metric.icon}
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'neutral'}`}>
                      {metric.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="quick-actions">
              <motion.button
                className="action-button primary"
                onClick={() => setActiveSection('metrics')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ANALYSER LES DONNÉES
              </motion.button>
              <motion.button
                className="action-button secondary"
                onClick={() => setActiveSection('forms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                NOUVEAU TEST A/B
              </motion.button>
            </div>
          </motion.div>
        )}

        {activeSection === 'metrics' && (
          <motion.div
            className="metrics-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>TABLEAU DE BORD MÉTRIQUES</h2>
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-widget"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="widget-icon">{metric.icon}</div>
                  <div className="widget-value">{metric.value}</div>
                  <div className="widget-label">{metric.label}</div>
                  <div className="widget-sparkline">
                    <motion.div
                      className="sparkline-bar"
                      initial={{ height: 0 }}
                      animate={{ height: `${20 + Math.random() * 30}px` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                    <motion.div
                      className="sparkline-bar"
                      initial={{ height: 0 }}
                      animate={{ height: `${20 + Math.random() * 30}px` }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.1 }}
                    />
                    <motion.div
                      className="sparkline-bar"
                      initial={{ height: 0 }}
                      animate={{ height: `${20 + Math.random() * 30}px` }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'experiments' && (
          <motion.div
            className="experiments-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>LABORATOIRE EXPÉRIMENTAL</h2>
            <div className="experiments-grid">
              {experiments.map((experiment, index) => (
                <motion.div
                  key={experiment.id}
                  className="experiment-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="experiment-header">
                    <h3>{experiment.name}</h3>
                    <span className={`status-badge ${experiment.status.toLowerCase()}`}>
                      {experiment.status}
                    </span>
                  </div>
                  <div className="experiment-metrics">
                    <div className="metric">
                      <span className="metric-label">Progression</span>
                      <span className="metric-value">{experiment.progress}%</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Amélioration</span>
                      <span className="metric-value positive">{experiment.lift}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Confiance</span>
                      <span className="metric-value">{experiment.confidence}</span>
                    </div>
                  </div>
                  <div className="experiment-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${experiment.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'alerts' && (
          <motion.div
            className="alerts-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>CENTRE DE SURVEILLANCE</h2>
            <div className="alerts-dashboard">
              <div className="alerts-stats">
                <div className="stat-item critical">
                  <span className="stat-number">3</span>
                  <span className="stat-label">CRITIQUES</span>
                </div>
                <div className="stat-item warning">
                  <span className="stat-number">7</span>
                  <span className="stat-label">AVERTISSEMENTS</span>
                </div>
                <div className="stat-item info">
                  <span className="stat-number">12</span>
                  <span className="stat-label">INFORMATIONS</span>
                </div>
              </div>

              <div className="alerts-list">
                {[
                  { type: 'critical', title: 'Serveur API surchargé', message: 'Latence > 500ms', time: '2 min' },
                  { type: 'warning', title: 'Test A/B terminé', message: 'Résultats disponibles', time: '15 min' },
                  { type: 'info', title: 'Mise à jour déployée', message: 'Version 2.4.1 live', time: '1h' }
                ].map((alert, index) => (
                  <motion.div
                    key={index}
                    className={`alert-item ${alert.type}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="alert-icon">
                      {alert.type === 'critical' ? '🚨' : alert.type === 'warning' ? '⚠️' : 'ℹ️'}
                    </div>
                    <div className="alert-content">
                      <h4>{alert.title}</h4>
                      <p>{alert.message}</p>
                      <span className="alert-time">{alert.time}</span>
                    </div>
                    <button className="alert-dismiss">×</button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'forms' && (
          <motion.div
            className="forms-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>NOUVEAU TEST A/B</h2>
            <form className="experiment-form">
              <div className="form-group">
                <label>Nom du test</label>
                <input type="text" placeholder="Ex: Pricing Page Redesign" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Métrique cible</label>
                  <select>
                    <option>Conversion</option>
                    <option>Revenue</option>
                    <option>Engagement</option>
                    <option>Retention</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Durée estimée (jours)</label>
                  <input type="number" placeholder="14" />
                </div>
              </div>
              <div className="form-group">
                <label>Hypothèse</label>
                <textarea
                  placeholder="Décrivez l'hypothèse à tester..."
                  rows="3"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary">ANNULER</button>
                <button type="submit" className="btn-primary">LANCER LE TEST</button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      {/* Effets cyberpunk */}
      <div className="cyberpunk-effects">
        <div className="grid-overlay">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="grid-line"
              style={{ top: `${i * 12.5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
        </div>

        <div className="data-streams">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              animate={{
                y: [-20, window.innerHeight + 20],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {[...Array(6)].map((_, j) => (
                <span key={j} className="stream-char">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStartupDashboard;
