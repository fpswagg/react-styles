import { useState } from 'react';
import { motion } from 'framer-motion';
import './UrbanCanvas.css';

const UrbanCanvasDashboard = () => {
  const [activeSection, setActiveSection] = useState('news');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Smart Cities : L\'architecture au service de l\'urbanisme',
      excerpt: 'Analyse des défis urbains contemporains et des solutions architecturales innovantes.',
      category: 'Recherche',
      author: 'Dr. Fatima Alaoui',
      date: '15 déc 2024',
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: 'Rénovation urbaine : Cas d\'étude Marrakech',
      excerpt: 'Comment concilier préservation du patrimoine et développement moderne.',
      category: 'Urbanisme',
      author: 'Pr. Ahmed Bennani',
      date: '12 déc 2024',
      readTime: '6 min',
      featured: false
    },
    {
      id: 3,
      title: 'Architecture bioclimatique au Maghreb',
      excerpt: 'Techniques traditionnelles adaptées aux défis climatiques actuels.',
      category: 'Technique',
      author: 'Dr. Leila Tazi',
      date: '10 déc 2024',
      readTime: '10 min',
      featured: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Colloque International d\'Architecture',
      date: '15-16 Janvier 2025',
      location: 'Auditorium ESSACA',
      type: 'Conférence'
    },
    {
      id: 2,
      title: 'Workshop Design Thinking',
      date: '22 Janvier 2025',
      location: 'Salle Innovation',
      type: 'Atelier'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="urban-canvas-container">
      {/* Header */}
      <motion.header
        className="canvas-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="brand">
            <h1>ESSACA</h1>
            <span className="subtitle">Urban Research Hub</span>
          </div>
          <div className="header-actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>
            <button className="theme-toggle">🌓</button>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="canvas-navigation">
        {[
          { id: 'news', label: 'ACTUALITÉS', icon: '📰' },
          { id: 'events', label: 'ÉVÉNEMENTS', icon: '📅' },
          { id: 'research', label: 'RECHERCHE', icon: '🔬' },
          { id: 'resources', label: 'RESSOURCES', icon: '📚' }
        ].map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="canvas-main">
        {/* Sidebar */}
        <aside className="canvas-sidebar">
          <div className="sidebar-section">
            <h3>Événements à venir</h3>
            <div className="events-list">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="event-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="event-date">{event.date}</div>
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <span>{event.location}</span>
                    <span className="event-type">{event.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Thématiques</h3>
            <div className="topics-list">
              {['Urbanisme', 'Bioclimatique', 'Patrimoine', 'Innovation', 'Durabilité'].map((topic, index) => (
                <motion.button
                  key={topic}
                  className="topic-tag"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  #{topic}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Newsletter</h3>
            <div className="newsletter-signup">
              <p>Restez informé de nos dernières publications</p>
              <input type="email" placeholder="Votre email" />
              <button className="signup-btn">S'inscrire</button>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="canvas-content">
          {activeSection === 'news' && (
            <motion.section
              className="news-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Article */}
              {articles.find(a => a.featured) && (
                <div className="featured-article">
                  <motion.div
                    className="article-hero"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="hero-image">
                      <img src="/api/placeholder/800/400" alt="Article principal" />
                    </div>
                    <div className="hero-content">
                      <span className="article-category">{articles.find(a => a.featured).category}</span>
                      <h2>{articles.find(a => a.featured).title}</h2>
                      <p>{articles.find(a => a.featured).excerpt}</p>
                      <div className="article-meta">
                        <span>Par {articles.find(a => a.featured).author}</span>
                        <span>{articles.find(a => a.featured).readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Articles Grid */}
              <div className="articles-grid">
                {filteredArticles.filter(a => !a.featured).map((article, index) => (
                  <motion.div
                    key={article.id}
                    className="article-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="article-image">
                      <img src={`/api/placeholder/300/200`} alt={article.title} />
                    </div>
                    <div className="article-content">
                      <span className="article-category">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className="article-meta">
                        <span>Par {article.author}</span>
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'events' && (
            <motion.section
              className="events-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Calendrier des Événements</h2>
              <div className="events-calendar">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="event-detail-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="event-header">
                      <h3>{event.title}</h3>
                      <span className="event-type">{event.type}</span>
                    </div>
                    <div className="event-details">
                      <div className="detail-item">
                        <span className="icon">📅</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="detail-item">
                        <span className="icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="register-btn">S'inscrire</button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'research' && (
            <motion.section
              className="research-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Projets de Recherche</h2>
              <div className="research-grid">
                {[
                  {
                    title: 'Urbanisme Régénératif',
                    status: 'En cours',
                    lead: 'Pr. Ahmed Bennani',
                    progress: 75
                  },
                  {
                    title: 'Architecture Bioclimatique',
                    status: 'En cours',
                    lead: 'Dr. Fatima Alaoui',
                    progress: 60
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="research-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3>{project.title}</h3>
                    <div className="research-meta">
                      <span>Responsable: {project.lead}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <span className="progress-text">{project.progress}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'resources' && (
            <motion.section
              className="resources-section"
              initial={{ opacity: 0, rotateY: -15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Bibliothèque de Ressources</h2>
              <div className="resources-grid">
                {[
                  { type: 'PDF', title: 'Guide Architecture Durable', size: '2.4 MB' },
                  { type: 'Video', title: 'Interview Pr. Bennani', duration: '45 min' },
                  { type: 'Audio', title: 'Podcast Urbanisme Maroc', duration: '32 min' }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    className="resource-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="resource-icon">
                      {resource.type === 'PDF' ? '📄' :
                       resource.type === 'Video' ? '🎥' : '🎧'}
                    </div>
                    <div className="resource-info">
                      <h4>{resource.title}</h4>
                      <span className="resource-meta">
                        {resource.size || resource.duration}
                      </span>
                    </div>
                    <button className="download-btn">↓</button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="canvas-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>ESSACA</h3>
            <p>Urban Research Hub</p>
          </div>
          <div className="footer-links">
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Confidentialité</a>
          </div>
          <div className="footer-social">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">ResearchGate</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UrbanCanvasDashboard;
