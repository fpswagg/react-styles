import { useState } from 'react';
import { motion } from 'framer-motion';

const CorporateDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const reports = [
    {
      id: 1,
      title: 'Rapport Exécutif',
      type: 'Executif',
      status: 'En cours',
      progress: 75,
      lastUpdate: '08/12/2024'
    },
    {
      id: 2,
      title: 'États Financiers',
      type: 'Finance',
      status: 'Validé',
      progress: 100,
      lastUpdate: '07/12/2024'
    },
    {
      id: 3,
      title: 'Performance Opérationnelle',
      type: 'Operations',
      status: 'En révision',
      progress: 60,
      lastUpdate: '06/12/2024'
    }
  ];

  const kpis = [
    { label: 'Chiffre d\'affaires', value: '€2.45M', change: '+8.2%' },
    { label: 'Résultat net', value: '€485K', change: '+12.1%' },
    { label: 'Trésorerie', value: '€1.25M', change: 'Stable' },
    { label: 'Satisfaction client', value: '94%', change: '+2.1%' }
  ];

  return (
    <div className="corporate-container">
      <motion.div
        className="corporate-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Rapport Annuel 2024</h1>
        <p className="corporate-subtitle">Entreprise S.A. au 31 décembre 2024</p>
      </motion.div>

      {/* Navigation */}
      <div className="corporate-navigation">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
          { id: 'reports', label: 'Rapports', icon: '📋' },
          { id: 'kpis', label: 'KPIs', icon: '📈' },
          { id: 'operations', label: 'Opérations', icon: '🏭' },
          { id: 'forms', label: 'Formulaires', icon: '📝' }
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
      <div className="corporate-content">
        {activeSection === 'overview' && (
          <motion.div
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overview-cards">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  className="kpi-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="kpi-value">{kpi.value}</div>
                  <div className="kpi-label">{kpi.label}</div>
                  <div className={`kpi-change ${kpi.change.startsWith('+') ? 'positive' : kpi.change === 'Stable' ? 'neutral' : 'negative'}`}>
                    {kpi.change}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="quick-actions">
              <motion.button
                className="action-button primary"
                onClick={() => setActiveSection('reports')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consulter les rapports
              </motion.button>
              <motion.button
                className="action-button secondary"
                onClick={() => setActiveSection('forms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Accéder aux formulaires
              </motion.button>
            </div>
          </motion.div>
        )}

        {activeSection === 'reports' && (
          <motion.div
            className="reports-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Rapports et Documents</h2>
            <div className="reports-grid">
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  className="report-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="report-header">
                    <h3>{report.title}</h3>
                    <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="report-meta">
                    <span>Type: {report.type}</span>
                    <span>Dernière MAJ: {report.lastUpdate}</span>
                  </div>
                  <div className="report-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${report.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="progress-text">{report.progress}%</span>
                  </div>
                  <button className="view-report-btn">Consulter</button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'kpis' && (
          <motion.div
            className="kpis-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Indicateurs Clés de Performance</h2>
            <div className="kpis-dashboard">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  className="kpi-widget"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="widget-value">{kpi.value}</div>
                  <div className="widget-label">{kpi.label}</div>
                  <div className="widget-change">{kpi.change}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'operations' && (
          <motion.div
            className="operations-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Performance Opérationnelle</h2>
            <div className="operations-grid">
              {[
                { department: 'Production', efficiency: '87%', status: 'Excellent' },
                { department: 'Qualité', score: '4.2/5', status: 'Très bon' },
                { department: 'Logistique', ontime: '93%', status: 'Bon' },
                { department: 'RH', satisfaction: '88%', status: 'Bon' }
              ].map((op, index) => (
                <motion.div
                  key={op.department}
                  className="operation-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4>{op.department}</h4>
                  <div className="operation-metrics">
                    {Object.entries(op).filter(([key]) => key !== 'department' && key !== 'status').map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-label">{key}:</span>
                        <span className="metric-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  <span className={`status-badge ${op.status.toLowerCase()}`}>
                    {op.status}
                  </span>
                </motion.div>
              ))}
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
            <h2>Formulaires RH</h2>
            <div className="forms-grid">
              <div className="form-card">
                <h3>Demande de Congés</h3>
                <form className="corporate-form">
                  <div className="form-group">
                    <label>Type de congé</label>
                    <select>
                      <option>Congés payés</option>
                      <option>RTT</option>
                      <option>Maladie</option>
                      <option>Exceptionnel</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date de début</label>
                      <input type="date" />
                    </div>
                    <div className="form-group">
                      <label>Date de fin</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Motif</label>
                    <textarea placeholder="Décrivez le motif de votre demande..." rows="3"></textarea>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Annuler</button>
                    <button type="submit" className="btn-primary">Soumettre</button>
                  </div>
                </form>
              </div>

              <div className="form-card">
                <h3>Note de Frais</h3>
                <form className="corporate-form">
                  <div className="form-group">
                    <label>Type de dépense</label>
                    <select>
                      <option>Déplacement</option>
                      <option>Repas</option>
                      <option>Hébergement</option>
                      <option>Fournitures</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Montant (€)</label>
                      <input type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea placeholder="Décrivez la dépense..." rows="2"></textarea>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Annuler</button>
                    <button type="submit" className="btn-primary">Soumettre</button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CorporateDashboard;
