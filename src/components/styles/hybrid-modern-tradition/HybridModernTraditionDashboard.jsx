import { useState } from 'react';
import { motion } from 'framer-motion';
import './HybridModernTradition.css';

const HybridModernTraditionDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [userRole, setUserRole] = useState('student'); // student, teacher, admin

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

  return (
    <div className="hybrid-container">
      {/* Header */}
      <motion.header
        className="hybrid-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-brand">
          <h1>ESSACA</h1>
          <span className="header-subtitle">Plateforme Collaborative</span>
        </div>
        <div className="header-actions">
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
      </motion.header>

      {/* Sidebar Navigation */}
      <nav className="hybrid-sidebar">
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
                    <div className="widget-actions">
                      <button className="widget-menu">⋯</button>
                    </div>
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
                Voir les Évaluations
              </motion.button>
              <motion.button
                className="action-btn tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Publier un Article
              </motion.button>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
              <h3>Activité Récente</h3>
              <div className="activity-feed">
                {[
                  { type: 'project', message: 'Nouveau projet soumis par Ahmed', time: '2h' },
                  { type: 'review', message: 'Évaluation terminée pour "Campus Durable"', time: '4h' },
                  { type: 'publication', message: 'Article publié : "Urbanisme Durable"', time: '1j' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    className="activity-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="activity-icon">
                      {activity.type === 'project' ? '📁' :
                       activity.type === 'review' ? '✅' : '📝'}
                    </div>
                    <div className="activity-content">
                      <p>{activity.message}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            className="projects-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header">
              <h2>Gestion des Projets</h2>
              <button className="create-btn">+ Nouveau Projet</button>
            </div>

            <div className="projects-list">
              {[
                {
                  id: 1,
                  title: 'Campus Durable ESSACA',
                  status: 'En révision',
                  author: 'Ahmed Bennani',
                  progress: 75,
                  lastUpdate: '2 jours'
                },
                {
                  id: 2,
                  title: 'Riad Traditionnel Marrakech',
                  status: 'Approuvé',
                  author: 'Fatima Alaoui',
                  progress: 100,
                  lastUpdate: '1 semaine'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span>Par {project.author}</span>
                      <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
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
                  <div className="project-actions">
                    <button className="action-btn">Modifier</button>
                    <button className="action-btn secondary">Évaluer</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'team' && (
          <motion.section
            className="team-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Équipe & Réseau</h2>
            <div className="team-grid">
              {[
                {
                  name: 'Pr. Ahmed Bennani',
                  role: 'Directeur des Études',
                  department: 'Architecture',
                  projects: 15,
                  publications: 23
                },
                {
                  name: 'Dr. Fatima Alaoui',
                  role: 'Chercheuse',
                  department: 'Urbanisme',
                  projects: 8,
                  publications: 12
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="team-member-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="member-avatar">
                    <img src={`/api/placeholder/80/80`} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-dept">{member.department}</p>
                    <div className="member-stats">
                      <span>{member.projects} projets</span>
                      <span>{member.publications} publications</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'research' && (
          <motion.section
            className="research-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Hub de Recherche</h2>
            <div className="research-content">
              <div className="publications-list">
                <h3>Publications Récentes</h3>
                {[
                  {
                    title: 'Architecture Bioclimatique au Maghreb',
                    authors: ['Alaoui F.', 'Bennani A.'],
                    journal: 'Revue Architecture Durable',
                    year: 2024,
                    citations: 12
                  }
                ].map((pub, index) => (
                  <motion.div
                    key={index}
                    className="publication-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4>{pub.title}</h4>
                    <div className="pub-meta">
                      <span>{pub.authors.join(', ')}</span>
                      <span>{pub.journal}, {pub.year}</span>
                      <span>{pub.citations} citations</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'events' && (
          <motion.section
            className="events-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Événements & Calendrier</h2>
            <div className="events-calendar">
              <div className="calendar-header">
                <h3>Événements à venir</h3>
                <button className="create-event-btn">+ Nouvel Événement</button>
              </div>
              <div className="events-list">
                {[
                  {
                    title: 'Colloque International d\'Architecture',
                    date: '15-16 Janvier 2025',
                    type: 'Conférence',
                    participants: 150
                  },
                  {
                    title: 'Workshop Design Thinking',
                    date: '22 Janvier 2025',
                    type: 'Atelier',
                    participants: 25
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="event-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <div className="event-meta">
                        <span className="event-date">{event.date}</span>
                        <span className="event-type">{event.type}</span>
                        <span className="event-participants">{event.participants} participants</span>
                      </div>
                    </div>
                    <div className="event-actions">
                      <button className="register-btn">S'inscrire</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'admin' && userRole === 'admin' && (
          <motion.section
            className="admin-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Administration</h2>
            <div className="admin-dashboard">
              <div className="admin-stats">
                <div className="stat-card">
                  <h3>Utilisateurs Actifs</h3>
                  <div className="stat-value">1,247</div>
                </div>
                <div className="stat-card">
                  <h3>Projets en Cours</h3>
                  <div className="stat-value">34</div>
                </div>
                <div className="stat-card">
                  <h3>Évaluations</h3>
                  <div className="stat-value">89</div>
                </div>
              </div>

              <div className="admin-actions">
                <button className="admin-btn">Gérer Utilisateurs</button>
                <button className="admin-btn">Configuration Système</button>
                <button className="admin-btn">Rapports Analytics</button>
              </div>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default HybridModernTraditionDashboard;
