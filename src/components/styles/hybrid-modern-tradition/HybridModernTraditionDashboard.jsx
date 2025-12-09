import { useState } from 'react';
import { motion } from 'framer-motion';
import './HybridModernTradition.css';

const HybridModernTraditionDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [userRole, setUserRole] = useState('student');

  const dashboardWidgets = [
    {
      id: 'projects',
      title: 'Projets Actifs',
      value: '12',
      change: '+2',
      icon: '📁',
      color: 'blue'
    },
    {
      id: 'submissions',
      title: 'Soumissions',
      value: '8',
      change: '+3',
      icon: '📤',
      color: 'green'
    },
    {
      id: 'reviews',
      title: 'Évaluations',
      value: '15',
      change: '+5',
      icon: '✅',
      color: 'orange'
    },
    {
      id: 'publications',
      title: 'Publications',
      value: '6',
      change: '+1',
      icon: '📚',
      color: 'purple'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Campus Durable ESSACA',
      status: 'En révision',
      progress: 65,
      deadline: '2025-06-30'
    },
    {
      id: 2,
      title: 'Habitat Social Casablanca',
      status: 'Approuvé',
      progress: 100,
      deadline: '2024-12-15'
    }
  ];

  return (
    <div className="hybrid-container">
      {/* Sidebar Navigation with integrated header */}
      <nav className="hybrid-sidebar">
        <div className="sidebar-header">
          <h1>ESSACA</h1>
          <span className="sidebar-subtitle">Plateforme Collaborative</span>
        </div>
        <div className="sidebar-user-section">
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="role-selector"
          >
            <option value="student">Étudiant</option>
            <option value="teacher">Enseignant</option>
            <option value="admin">Administrateur</option>
          </select>
          <button className="profile-btn">👤</button>
        </div>
        <div className="sidebar-divider"></div>
        {[
          { id: 'dashboard', label: 'Tableau de bord', icon: '📊' },
          { id: 'projects', label: 'Projets', icon: '📁' },
          { id: 'team', label: 'Équipe', icon: '👥' },
          { id: 'research', label: 'Recherche', icon: '🔬' },
          { id: 'events', label: 'Événements', icon: '📅' },
          { id: 'admin', label: 'Administration', icon: '⚙️' }
        ].map((item) => (
          <motion.button
            key={item.id}
            className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="item-icon">{item.icon}</span>
            <span className="item-label">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="hybrid-main">
        {activeSection === 'dashboard' && (
          <motion.section
            className="dashboard-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="dashboard-header">
              <h2>Tableau de Bord</h2>
              <p>Bienvenue sur votre espace de travail collaboratif</p>
            </div>

            {/* Widgets Grid */}
            <div className="widgets-grid">
              {dashboardWidgets.map((widget, index) => (
                <motion.div
                  key={widget.id}
                  className={`widget-card ${widget.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="widget-header">
                    <span className="widget-icon">{widget.icon}</span>
                    <button className="widget-menu">⋯</button>
                  </div>
                  <div className="widget-content">
                    <div className="widget-value">{widget.value}</div>
                    <div className="widget-title">{widget.title}</div>
                    <div className={`widget-change ${widget.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {widget.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <motion.button
                className="action-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('projects')}
              >
                Nouveau Projet
              </motion.button>
              <motion.button
                className="action-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Soumettre
              </motion.button>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
              <h3>Activité Récente</h3>
              <div className="activity-feed">
                {[
                  { icon: '📝', text: 'Nouveau projet créé', time: 'Il y a 2h' },
                  { icon: '✅', text: 'Projet approuvé', time: 'Il y a 5h' },
                  { icon: '💬', text: 'Commentaire ajouté', time: 'Il y a 1 jour' }
                ].map((activity, index) => (
                  <div key={index} className="activity-item">
                    <span className="activity-icon">{activity.icon}</span>
                    <div className="activity-content">
                      <p>{activity.text}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            className="projects-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header">
              <h2>Mes Projets</h2>
              <button className="create-btn">+ Nouveau Projet</button>
            </div>
            <div className="projects-list">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                      <span>Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="project-progress">
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                      <span className="progress-text">{project.progress}%</span>
                    </div>
                  </div>
                  <div className="project-actions">
                    <button className="action-btn secondary">Voir</button>
                    <button className="action-btn primary">Éditer</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default HybridModernTraditionDashboard;
