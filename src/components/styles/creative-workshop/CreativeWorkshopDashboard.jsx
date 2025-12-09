import { useState } from 'react';
import { motion } from 'framer-motion';

const CreativeWorkshopDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const projects = [
    {
      id: 1,
      title: 'Rêverie Automnale',
      mood: 'Énergique',
      progress: 85,
      inspiration: ['automne', 'feuilles', 'couleurs chaudes'],
      lastEdit: '08/12/2024'
    },
    {
      id: 2,
      title: 'Lumières Citadines',
      mood: 'Calme',
      progress: 60,
      inspiration: ['ville', 'néons', 'nuit'],
      lastEdit: '07/12/2024'
    },
    {
      id: 3,
      title: 'Nature Organique',
      mood: 'Naturel',
      progress: 30,
      inspiration: ['plantes', 'courbes', 'croissance'],
      lastEdit: '06/12/2024'
    }
  ];

  const moods = [
    { name: 'Énergique', emoji: '⚡', count: 3, color: '#FF6B6B' },
    { name: 'Calme', emoji: '🌸', count: 2, color: '#4ECDC4' },
    { name: 'Naturel', emoji: '🌿', count: 4, color: '#6BCF7F' },
    { name: 'Ludique', emoji: '🎪', count: 1, color: '#FFD93D' }
  ];

  const inspirationWords = [
    'automne', 'feuilles', 'couleurs', 'mouvement', 'ville', 'néons',
    'nuit', 'géométrie', 'plantes', 'courbes', 'croissance', 'lumière'
  ];

  return (
    <div className="creative-workshop-container">
      <motion.div
        className="workshop-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Creative Workshop</h1>
        <p>Atelier créatif organique - Canvas interactifs et inspiration naturelle</p>
      </motion.div>

      {/* Navigation */}
      <div className="workshop-navigation">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: '🎨' },
          { id: 'projects', label: 'Projets', icon: '📁' },
          { id: 'moods', label: 'Humeurs', icon: '😊' },
          { id: 'inspiration', label: 'Inspiration', icon: '✨' },
          { id: 'forms', label: 'Créer', icon: '➕' }
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
      <div className="workshop-content">
        {activeSection === 'overview' && (
          <motion.div
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Projets actifs</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{moods.length}</div>
                <div className="stat-label">Humeurs explorées</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{inspirationWords.length}</div>
                <div className="stat-label">Mots d'inspiration</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">85%</div>
                <div className="stat-label">Créativité moyenne</div>
              </div>
            </div>

            <div className="quick-actions">
              <motion.button
                className="action-button primary"
                onClick={() => setActiveSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorer les projets
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
            <h2>Mes Projets Créatifs</h2>
            <div className="projects-gallery">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="project-thumbnail">
                    <div className="thumbnail-placeholder">
                      <span className="mood-emoji">
                        {moods.find(m => m.name === project.mood)?.emoji || '🎨'}
                      </span>
                      <div className="organic-shapes">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="shape"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="mood-tag">{project.mood}</span>
                      <span className="progress">{project.progress}%</span>
                    </div>
                    <div className="inspiration-tags">
                      {project.inspiration.slice(0, 2).map((tag, i) => (
                        <span key={i} className="tag">#{tag}</span>
                      ))}
                    </div>
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'moods' && (
          <motion.div
            className="moods-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Humeurs Créatives</h2>
            <div className="moods-grid">
              {moods.map((mood, index) => (
                <motion.div
                  key={mood.name}
                  className="mood-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ borderColor: mood.color }}
                >
                  <div className="mood-emoji" style={{ color: mood.color }}>
                    {mood.emoji}
                  </div>
                  <div className="mood-info">
                    <h3 style={{ color: mood.color }}>{mood.name}</h3>
                    <p>{mood.count} projet{mood.count > 1 ? 's' : ''}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'inspiration' && (
          <motion.div
            className="inspiration-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Galerie d'Inspiration</h2>
            <div className="inspiration-cloud">
              {inspirationWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="inspiration-word"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.2,
                    color: '#D2691E'
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="inspiration-actions">
              <motion.button
                className="generate-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎲 Générer de nouvelles idées
              </motion.button>
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
            <h2>Créer un Nouveau Projet</h2>
            <form className="project-form">
              <div className="form-group">
                <label>Titre du projet</label>
                <input type="text" placeholder="Ex: Rêverie Automnale" />
              </div>
              <div className="form-group">
                <label>Humeur créative</label>
                <div className="mood-selector">
                  {moods.map((mood) => (
                    <motion.button
                      key={mood.name}
                      type="button"
                      className="mood-option"
                      style={{ borderColor: mood.color }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mood-emoji">{mood.emoji}</span>
                      <span className="mood-name">{mood.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Mots d'inspiration</label>
                <div className="inspiration-input">
                  <input type="text" placeholder="Ajouter un mot..." />
                  <button type="button" className="add-word-btn">+</button>
                </div>
                <div className="inspiration-tags">
                  {['automne', 'couleurs'].map((tag, i) => (
                    <span key={i} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary">Annuler</button>
                <button type="submit" className="btn-primary">Créer le projet</button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      {/* Éléments organiques flottants */}
      <div className="background-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="organic-element"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.5}s`
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity
            }}
          >
            {['🌿', '🍃', '🌸', '🦋', '✨'][i % 5]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativeWorkshopDashboard;
