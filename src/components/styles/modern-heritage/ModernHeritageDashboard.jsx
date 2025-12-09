import { useState } from 'react';
import { motion } from 'framer-motion';
import './ModernHeritage.css';

const ModernHeritageDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const projects = [
    {
      id: 1,
      title: 'Riad Traditionnel Marrakech',
      description: 'Rénovation respectueuse d\'un riad historique',
      image: 'riad-marrakech.jpg',
      year: 2024,
      location: 'Marrakech',
      status: 'Terminé'
    },
    {
      id: 2,
      title: 'Maison d\'Hôtes Atlas',
      description: 'Construction bioclimatique en montagne',
      image: 'maison-atlas.jpg',
      year: 2024,
      location: 'Atlas',
      status: 'En cours'
    },
    {
      id: 3,
      title: 'Centre Culturel Fès',
      description: 'Réhabilitation d\'un monument historique',
      image: 'centre-fes.jpg',
      year: 2023,
      location: 'Fès',
      status: 'Terminé'
    }
  ];

  const stats = [
    { label: 'Projets réalisés', value: '47', trend: '+12%' },
    { label: 'Étudiants formés', value: '1,250', trend: '+8%' },
    { label: 'Prix reçus', value: '23', trend: '+5' },
    { label: 'Partenaires', value: '89', trend: '+15%' }
  ];

  return (
    <div className="modern-heritage-container">
      {/* Header */}
      <motion.header
        className="heritage-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <h1 className="header-title">ESSACA</h1>
          <p className="header-subtitle">École Supérieure des Sciences de l'Architecture</p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="heritage-navigation">
        {[
          { id: 'overview', label: 'Accueil', icon: '🏛️' },
          { id: 'about', label: 'À propos', icon: '📖' },
          { id: 'programs', label: 'Programmes', icon: '🎓' },
          { id: 'projects', label: 'Projets', icon: '🏗️' },
          { id: 'news', label: 'Actualités', icon: '📰' },
          { id: 'contact', label: 'Contact', icon: '📧' }
        ].map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Content */}
      <main className="heritage-content">
        {activeSection === 'overview' && (
          <motion.section
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero */}
            <div className="hero-section">
              <div className="hero-image">
                <img src="/api/placeholder/1200/600" alt="Architecture marocaine traditionnelle" />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  L'Excellence Architecturale
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Depuis 1985, formons les architectes de demain en conciliant tradition et innovation.
                </motion.p>
                <motion.button
                  className="cta-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Découvrir nos programmes
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-section">
              <h3>ESSACA en chiffres</h3>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-trend positive">{stat.trend}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="projects-preview">
              <h3>Projets emblématiques</h3>
              <div className="projects-grid">
                {projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card-large"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="project-image">
                      <img src={`/api/placeholder/400/250`} alt={project.title} />
                      <div className="project-overlay">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="year">{project.year}</span>
                      <span className="location">{project.location}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="view-all">
                <button
                  className="secondary-button"
                  onClick={() => setActiveSection('projects')}
                >
                  Voir tous les projets →
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'about' && (
          <motion.section
            className="about-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-content">
              <h2>Notre Philosophie</h2>
              <div className="philosophy-grid">
                <div className="philosophy-item">
                  <h3>Tradition & Modernité</h3>
                  <p>Nous enseignons l'architecture comme un pont entre le patrimoine ancestral et les défis contemporains.</p>
                </div>
                <div className="philosophy-item">
                  <h3>Excellence Académique</h3>
                  <p>Une formation rigoureuse associant théorie, pratique et recherche appliquée.</p>
                </div>
                <div className="philosophy-item">
                  <h3>Innovation Sociale</h3>
                  <p>Des architectes engagés dans le développement durable et l'équité sociale.</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            className="projects-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Nos Projets</h2>
            <div className="projects-filter">
              <button className="filter-btn active">Tous</button>
              <button className="filter-btn">Rénovation</button>
              <button className="filter-btn">Construction</button>
              <button className="filter-btn">Urbanisme</button>
            </div>
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
                  <div className="project-image">
                    <img src={`/api/placeholder/300/200`} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-details">
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'news' && (
          <motion.section
            className="news-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Actualités & Événements</h2>
            <div className="news-grid">
              {[
                {
                  title: 'Journée Portes Ouvertes 2025',
                  date: '15 Janvier 2025',
                  type: 'Événement'
                },
                {
                  title: 'Prix Aga Khan d\'Architecture',
                  date: '12 Décembre 2024',
                  type: 'Récompense'
                },
                {
                  title: 'Nouveau programme Master Développement Durable',
                  date: '1 Décembre 2024',
                  type: 'Annonce'
                }
              ].map((news, index) => (
                <motion.div
                  key={index}
                  className="news-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="news-content">
                    <h3>{news.title}</h3>
                    <div className="news-meta">
                      <span className="date">{news.date}</span>
                      <span className="type">{news.type}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'contact' && (
          <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contactez-nous</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-item">
                  <h3>Adresse</h3>
                  <p>123 Boulevard de l'Architecture<br />Marrakech, Maroc</p>
                </div>
                <div className="info-item">
                  <h3>Téléphone</h3>
                  <p>+212 524 123 456</p>
                </div>
                <div className="info-item">
                  <h3>Email</h3>
                  <p>contact@essaca.ma</p>
                </div>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <label>Nom complet</label>
                  <input type="text" placeholder="Votre nom" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="votre.email@email.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Votre message..." rows="5"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Envoyer
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="heritage-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ESSACA</h4>
            <p>Excellence architecturale depuis 1985</p>
          </div>
          <div className="footer-section">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#programs">Programmes</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ESSACA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModernHeritageDashboard;
