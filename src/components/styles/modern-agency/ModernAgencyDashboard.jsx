import { useState } from 'react';
import { motion } from 'framer-motion';

const ModernAgencyDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const projects = [
    {
      id: 1,
      title: 'Refonte E-commerce',
      status: 'En cours',
      progress: 75,
      client: 'TechCorp',
      deadline: '15 déc 2024'
    },
    {
      id: 2,
      title: 'Application Mobile',
      status: 'En cours',
      progress: 45,
      client: 'StartupXYZ',
      deadline: '28 déc 2024'
    },
    {
      id: 3,
      title: 'Site Vitrine',
      status: 'Terminé',
      progress: 100,
      client: 'EntrepriseABC',
      deadline: '10 déc 2024'
    }
  ];

  const metrics = [
    { label: 'Projets actifs', value: '12', change: '+2' },
    { label: 'Revenus', value: '€240K', change: '+15%' },
    { label: 'Satisfaction client', value: '94%', change: '+3%' },
    { label: 'Équipe', value: '8', change: 'Stable' }
  ];

  return (
    <div className="modern-agency-container">
      <motion.div
        className="agency-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Modern Agency</h1>
        <p>Interface entièrement modale - Tout flotte dans l'espace ✨</p>
      </motion.div>

      {/* Navigation */}
      <div className="agency-navigation">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
          { id: 'projects', label: 'Projets', icon: '🚀' },
          { id: 'metrics', label: 'Métriques', icon: '📈' },
          { id: 'team', label: 'Équipe', icon: '👥' },
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
      <div className="agency-content">
        {activeSection === 'overview' && (
          <motion.div
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overview-grid">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-change positive">{metric.change}</div>
                </motion.div>
              ))}
            </div>

            <div className="quick-actions">
              <motion.button
                className="action-button primary"
                onClick={() => setActiveSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les projets
              </motion.button>
              <motion.button
                className="action-button secondary"
                onClick={() => setActiveSection('forms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nouveau projet
              </motion.button>
            </div>
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div
            className="projects-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Projets Actifs</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="project-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="progress-text">{project.progress}%</span>
                  </div>
                  <div className="project-meta">
                    <span>Client: {project.client}</span>
                    <span>Échéance: {project.deadline}</span>
                  </div>
                </motion.div>
              ))}
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
            <h2>Tableau de Bord Métriques</h2>
            <div className="metrics-dashboard">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-widget"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="widget-value">{metric.value}</div>
                  <div className="widget-label">{metric.label}</div>
                  <div className="widget-change">{metric.change}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'team' && (
          <motion.div
            className="team-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Équipe Créative</h2>
            <div className="team-grid">
              {[
                { name: 'Alice Design', role: 'Directrice Créa', avatar: '🎨' },
                { name: 'Bob Dev', role: 'Lead Developer', avatar: '💻' },
                { name: 'Charlie Strat', role: 'Chef de Projet', avatar: '🎯' },
                { name: 'Diana UX', role: 'UX Designer', avatar: '✨' }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  className="team-member"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
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
            <h2>Nouveau Projet</h2>
            <form className="project-form">
              <div className="form-group">
                <label>Titre du projet</label>
                <input type="text" placeholder="Entrez le titre du projet" />
              </div>
              <div className="form-group">
                <label>Client</label>
                <select>
                  <option>Sélectionner un client</option>
                  <option>TechCorp</option>
                  <option>StartupXYZ</option>
                  <option>EntrepriseABC</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Décrivez le projet..." rows="4"></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary">Annuler</button>
                <button type="submit" className="btn-primary">Créer le projet</button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModernAgencyDashboard;
