import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreativeCanvas from './CreativeCanvas';

const CreativeWorkshopDashboard = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Rêverie Automnale',
      mood: 'Énergique',
      inspiration: ['automne', 'feuilles', 'couleurs chaudes', 'mouvement'],
      created: new Date(),
      thumbnail: null
    },
    {
      id: 2,
      title: 'Lumières Citadines',
      mood: 'Calme',
      inspiration: ['ville', 'néons', 'nuit', 'géométrie'],
      created: new Date(Date.now() - 86400000),
      thumbnail: null
    },
    {
      id: 3,
      title: 'Nature Organique',
      mood: 'Naturel',
      inspiration: ['plantes', 'courbes', 'textures', 'croissance'],
      created: new Date(Date.now() - 172800000),
      thumbnail: null
    }
  ]);

  const [showProjectCreator, setShowProjectCreator] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [selectedMood, setSelectedMood] = useState('Énergique');

  const moods = [
    { name: 'Énergique', emoji: '⚡', color: '#FF6B6B' },
    { name: 'Calme', emoji: '🌸', color: '#4ECDC4' },
    { name: 'Ludique', emoji: '🎪', color: '#FFD93D' },
    { name: 'Naturel', emoji: '🌿', color: '#6BCF7F' },
    { name: 'Magique', emoji: '✨', color: '#A78BFA' }
  ];

  const createNewProject = () => {
    if (newProjectTitle.trim()) {
      const newProject = {
        id: Date.now(),
        title: newProjectTitle,
        mood: selectedMood,
        inspiration: [],
        created: new Date(),
        thumbnail: null
      };
      setProjects(prev => [newProject, ...prev]);
      setCurrentProject(newProject);
      setNewProjectTitle('');
      setShowProjectCreator(false);
    }
  };

  const saveProjectThumbnail = (projectId, thumbnail) => {
    setProjects(prev => prev.map(project =>
      project.id === projectId
        ? { ...project, thumbnail }
        : project
    ));
  };

  const deleteProject = (projectId) => {
    setProjects(prev => prev.filter(project => project.id !== projectId));
    if (currentProject && currentProject.id === projectId) {
      setCurrentProject(null);
    }
  };

  return (
    <div className="creative-workshop-container">
      <motion.div
        className="workshop-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-content">
          <h1>Creative Workshop</h1>
          <p className="workshop-subtitle">Atelier créatif organique - Canvas interactifs et inspiration naturelle</p>
          <div className="current-mood">
            <span className="mood-label">Humeur actuelle:</span>
            <motion.span
              className="mood-value"
              key={currentProject?.mood || 'Aucune'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentProject ? `${moods.find(m => m.name === currentProject.mood)?.emoji} ${currentProject.mood}` : '✨ En recherche'}
            </motion.span>
          </div>
        </div>

        <motion.button
          className="new-project-btn"
          onClick={() => setShowProjectCreator(true)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(139, 69, 19, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>+</span>
          Nouveau Projet
        </motion.button>
      </motion.div>

      {/* Créateur de projet */}
      <AnimatePresence>
        {showProjectCreator && (
          <motion.div
            className="project-creator-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProjectCreator(false)}
          >
            <motion.div
              className="project-creator"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Créer un Nouveau Projet</h3>

              <div className="creator-field">
                <label>Titre du projet</label>
                <input
                  type="text"
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                  placeholder="Ex: Rêverie Automnale"
                  onKeyPress={(e) => e.key === 'Enter' && createNewProject()}
                />
              </div>

              <div className="creator-field">
                <label>Humeur créative</label>
                <div className="mood-selector">
                  {moods.map((mood) => (
                    <motion.button
                      key={mood.name}
                      className={`mood-option ${selectedMood === mood.name ? 'selected' : ''}`}
                      onClick={() => setSelectedMood(mood.name)}
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

              <div className="creator-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowProjectCreator(false)}
                >
                  Annuler
                </button>
                <button
                  className="create-btn"
                  onClick={createNewProject}
                  disabled={!newProjectTitle.trim()}
                >
                  Créer le projet
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="workshop-content">
        {!currentProject ? (
          /* Galerie de projets */
          <motion.div
            className="projects-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Mes Projets Créatifs</h2>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(139, 69, 19, 0.2)"
                  }}
                  onClick={() => setCurrentProject(project)}
                >
                  <div className="project-thumbnail">
                    {project.thumbnail ? (
                      <img src={project.thumbnail} alt={project.title} />
                    ) : (
                      <div className="thumbnail-placeholder">
                        <span className="placeholder-emoji">
                          {moods.find(m => m.name === project.mood)?.emoji || '🎨'}
                        </span>
                        <div className="organic-shapes">
                          <div className="shape"></div>
                          <div className="shape"></div>
                          <div className="shape"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="mood-tag">
                        {moods.find(m => m.name === project.mood)?.emoji} {project.mood}
                      </span>
                      <span className="date">
                        {project.created.toLocaleDateString('fr-FR')}
                      </span>
                    </div>

                    {project.inspiration.length > 0 && (
                      <div className="inspiration-tags">
                        {project.inspiration.slice(0, 3).map((tag, i) => (
                          <span key={i} className="tag">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <motion.button
                    className="delete-project-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProject(project.id);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🗑️
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Canvas de création */
          <motion.div
            className="creation-workspace"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="workspace-header">
              <motion.button
                className="back-to-gallery"
                onClick={() => setCurrentProject(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Retour à la galerie
              </motion.button>

              <div className="project-status">
                <span className="status-indicator">●</span>
                Projet en cours
              </div>
            </div>

            <CreativeCanvas
              project={currentProject}
              onSave={(thumbnail) => saveProjectThumbnail(currentProject.id, thumbnail)}
            />

            {/* Inspiration panel flottant */}
            <motion.div
              className="inspiration-panel"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              drag
              dragConstraints={{ left: -200, right: 50, top: -100, bottom: 100 }}
            >
              <h4>Inspirations</h4>
              <div className="inspiration-words">
                {currentProject.inspiration.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inspiration-word"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      color: moods.find(m => m.name === currentProject.mood)?.color
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div className="inspiration-actions">
                <button className="add-word-btn">+ Mot</button>
                <button className="generate-btn">🎲 Générer</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Éléments organiques flottants en arrière-plan */}
      <div className="background-organic-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="organic-element"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${1 + Math.random() * 2}rem`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['🌿', '🍃', '🌸', '🦋', '✨', '🌱', '🌺', '🪶'][i % 8]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativeWorkshopDashboard;
