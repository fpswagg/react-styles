import { useState } from 'react';
import { motion } from 'framer-motion';

const AcademicLibraryDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const researchData = {
    recent: [
      {
        title: 'La phénoménologie de Husserl',
        author: 'Edmund Husserl',
        progress: 65,
        citations: 23,
        lastRead: '08/12/2024'
      },
      {
        title: 'Être et temps',
        author: 'Martin Heidegger',
        progress: 30,
        citations: 45,
        lastRead: '07/12/2024'
      },
      {
        title: 'Critique de la raison pure',
        author: 'Emmanuel Kant',
        progress: 12,
        citations: 78,
        lastRead: '06/12/2024'
      }
    ],
    topics: [
      { name: 'Phénoménologie', count: 23, color: '#8B4513' },
      { name: 'Ontologie', count: 18, color: '#DAA520' },
      { name: 'Éthique', count: 15, color: '#CD853F' }
    ]
  };

  const citationsData = [
    {
      text: '"L\'être est ce qui se manifeste dans la compréhension"',
      author: 'Martin Heidegger',
      source: 'Être et temps',
      page: 143,
      category: 'Ontologie'
    },
    {
      text: '"Deux choses remplissent l\'âme d\'une admiration... toujours nouvelle"',
      author: 'Immanuel Kant',
      source: 'Critique de la raison pratique',
      page: 288,
      category: 'Éthique'
    }
  ];

  return (
    <div className="academic-library-container">
      <motion.div
        className="library-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="library-title">
          <span className="title-text">Bibliothèque Académique</span>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-flourish"></div>
          </div>
        </div>
        <div className="library-subtitle">
          Portail de recherche érudit — {new Date().toLocaleDateString('fr-FR')}
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="academic-navigation">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: '📚' },
          { id: 'research', label: 'Recherche', icon: '🔍' },
          { id: 'citations', label: 'Citations', icon: '📝' },
          { id: 'notes', label: 'Notes', icon: '📓' },
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
      <div className="academic-content">
        {activeSection === 'overview' && (
          <motion.div
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-number">{researchData.recent.length}</div>
                <div className="stat-label">Ouvrages en cours</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{citationsData.length}</div>
                <div className="stat-label">Citations collectées</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">47</div>
                <div className="stat-label">Pages lues ce mois</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">89%</div>
                <div className="stat-label">Objectif de lecture</div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Activité Récente</h3>
              <div className="activity-timeline">
                {researchData.recent.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="activity-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="activity-icon">📖</div>
                    <div className="activity-content">
                      <span className="activity-title">{item.title}</span>
                      <span className="activity-meta">
                        {item.progress}% • {item.citations} citations • Dernière lecture: {item.lastRead}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="quick-actions">
              <motion.button
                className="action-button primary"
                onClick={() => setActiveSection('research')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continuer la lecture
              </motion.button>
              <motion.button
                className="action-button secondary"
                onClick={() => setActiveSection('forms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nouvelle recherche
              </motion.button>
            </div>
          </motion.div>
        )}

        {activeSection === 'research' && (
          <motion.div
            className="research-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ouvrages de Recherche</h2>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Rechercher dans la bibliothèque..."
                className="manuscript-input"
              />
            </div>

            <div className="topics-section">
              <h3>Domaines de Recherche</h3>
              <div className="topics-cloud">
                {researchData.topics.map((topic, index) => (
                  <motion.div
                    key={topic.name}
                    className="topic-tag"
                    style={{
                      backgroundColor: topic.color + '20',
                      borderColor: topic.color
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 5px 15px ${topic.color}30`
                    }}
                  >
                    {topic.name} ({topic.count})
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="books-grid">
              {researchData.recent.map((book, index) => (
                <motion.div
                  key={book.title}
                  className="book-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="book-cover">
                    <div className="book-spine"></div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-author">{book.author}</div>
                  </div>
                  <div className="book-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${book.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="progress-text">{book.progress}%</span>
                  </div>
                  <div className="book-meta">
                    <span>{book.citations} citations</span>
                    <span>Dernière lecture: {book.lastRead}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'citations' && (
          <motion.div
            className="citations-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Citations et Notes</h2>
            <div className="citations-list">
              {citationsData.map((citation, index) => (
                <motion.div
                  key={index}
                  className="citation-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="citation-text">"{citation.text}"</div>
                  <div className="citation-source">
                    — {citation.author}, {citation.source}, p. {citation.page}
                  </div>
                  <div className="citation-category">{citation.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'notes' && (
          <motion.div
            className="notes-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Notes de Recherche</h2>
            <div className="notes-list">
              {[
                {
                  title: 'Réduction phénoménologique',
                  content: 'La réduction eidétique permet d\'accéder à l\'essence des phénomènes...',
                  tags: ['phénoménologie', 'méthode'],
                  date: '08/12/2024'
                },
                {
                  title: 'Différence ontologique',
                  content: 'Heidegger distingue l\'être de l\'étant...',
                  tags: ['ontologie', 'heidegger'],
                  date: '07/12/2024'
                }
              ].map((note, index) => (
                <motion.div
                  key={index}
                  className="note-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4>{note.title}</h4>
                  <p>{note.content}</p>
                  <div className="note-meta">
                    <div className="note-tags">
                      {note.tags.map((tag, i) => (
                        <span key={i} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <span className="note-date">{note.date}</span>
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
            <h2>Recherche Académique</h2>
            <div className="forms-grid">
              <div className="form-card">
                <h3>Nouvelle Recherche</h3>
                <form className="academic-form">
                  <div className="form-group">
                    <label>Sujet de recherche</label>
                    <input type="text" placeholder="Ex: Phénoménologie husserlienne" />
                  </div>
                  <div className="form-group">
                    <label>Domaine</label>
                    <select>
                      <option>Phénoménologie</option>
                      <option>Ontologie</option>
                      <option>Éthique</option>
                      <option>Métaphysique</option>
                      <option>Épistémologie</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Objectifs</label>
                    <textarea
                      placeholder="Décrivez les objectifs de votre recherche..."
                      rows="3"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Annuler</button>
                    <button type="submit" className="btn-primary">Commencer</button>
                  </div>
                </form>
              </div>

              <div className="form-card">
                <h3>Ajouter une Citation</h3>
                <form className="academic-form">
                  <div className="form-group">
                    <label>Citation</label>
                    <textarea
                      placeholder="Entrez le texte de la citation..."
                      rows="3"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Auteur</label>
                      <input type="text" placeholder="Nom de l'auteur" />
                    </div>
                    <div className="form-group">
                      <label>Source</label>
                      <input type="text" placeholder="Titre de l'ouvrage" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Page</label>
                      <input type="number" placeholder="123" />
                    </div>
                    <div className="form-group">
                      <label>Catégorie</label>
                      <select>
                        <option>Phénoménologie</option>
                        <option>Ontologie</option>
                        <option>Éthique</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary">Annuler</button>
                    <button type="submit" className="btn-primary">Ajouter</button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Éléments décoratifs */}
      <div className="manuscript-elements">
        <div className="ink-spots">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="ink-spot"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 2) * 30}%`,
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="watermarks">
          <motion.div
            className="watermark"
            animate={{
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
          >
            BIBLIOTHÈQUE ACADÉMIQUE
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicLibraryDashboard;
