import { useState } from 'react';
import { motion } from 'framer-motion';
import './ModernHeritage.css';

const ModernHeritageDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Sample data based on markdown schema
  const featuredProjects = [
    {
      id: '1',
      title: 'Maison d\'hôtes Dar Essalam',
      slug: 'dar-essalam',
      cover: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
      summary: 'Rénovation d\'une maison traditionnelle en respectant l\'architecture vernaculaire',
      year: 2024,
      type: 'Rénovation',
      location: 'Atlas Mountains',
      materials: ['Pierre locale', 'Bois de cèdre', 'Zellige'],
      authors: ['Pr. Ahmed Bennani', 'Étudiants M2']
    },
    {
      id: '2',
      title: 'Centre Culturel Fès',
      slug: 'centre-culturel-fes',
      cover: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
      summary: 'Réhabilitation d\'un monument historique avec intégration d\'espaces contemporains',
      year: 2023,
      type: 'Réhabilitation',
      location: 'Fès',
      materials: ['Pierre', 'Béton', 'Verre'],
      authors: ['Dr. Leila Tazi', 'Étudiants M1']
    },
    {
      id: '3',
      title: 'École Primaire Tamegroute',
      slug: 'ecole-tamegroute',
      cover: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop',
      summary: 'Construction durable utilisant matériaux locaux et techniques bioclimatiques',
      year: 2024,
      type: 'Construction',
      location: 'Tamegroute',
      materials: ['Terre', 'Bois local', 'Isolation naturelle'],
      authors: ['Pr. Mohamed Alaoui', 'Étudiants M2']
    }
  ];

  const news = [
    {
      id: '1',
      title: 'Journée Portes Ouvertes 2025',
      excerpt: 'Découvrez nos programmes et rencontrez nos enseignants',
      publishedAt: '2024-12-01',
      category: 'Événements',
      cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
      tags: ['portes ouvertes', 'admissions'],
      author: 'Service Communication'
    },
    {
      id: '2',
      title: 'Prix Aga Khan d\'Architecture',
      excerpt: 'Un projet étudiant primé pour son approche durable',
      publishedAt: '2024-11-15',
      category: 'Récompenses',
      cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
      tags: ['prix', 'architecture durable'],
      author: 'Service Communication'
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
      {/* Header - Minimal with logo left, menu hamburger right */}
      <motion.header
        className="heritage-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="header-content">
          <div className="header-brand">
            <h1 className="header-title">ESSACA</h1>
            <p className="header-subtitle">École Supérieure des Sciences de l'Architecture</p>
          </div>
          <button className="mobile-menu-toggle">
            <span></span><span></span><span></span>
          </button>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="heritage-navigation">
        {[
          { id: 'home', label: 'Accueil', icon: '🏛️' },
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

      {/* Main Content */}
      <main className="heritage-content">
        {activeSection === 'home' && (
          <motion.section
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero - Full-width with N&B image + large centered title */}
            <div className="hero-section">
              <div className="hero-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop" 
                  alt="Architecture marocaine traditionnelle"
                  loading="eager"
                  className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
                <div className="hero-text-container">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    L'Excellence Architecturale
                  </motion.h2>
                  <motion.p
                    className="hero-slogan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Depuis 1985, formons les architectes de demain en conciliant tradition et innovation.
                  </motion.p>
                  <motion.button
                    className="cta-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Découvrir nos programmes
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mission-section">
              <h3>Notre Mission</h3>
              <p>
                ESSACA s'engage à former des architectes capables de créer des espaces qui respectent 
                le patrimoine architectural marocain tout en répondant aux défis contemporains. 
                Notre approche pédagogique allie rigueur académique, pratique professionnelle et 
                sensibilité culturelle.
              </p>
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

            {/* Featured Projects - Cards larges avec vignette et court pitch */}
            <div className="projects-preview">
              <h3>Projets à la une</h3>
              <div className="projects-grid">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card-large"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="card-image">
                      <img src={project.cover} alt={project.title} />
                      <div className="card-overlay">
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                      </div>
                    </div>
                    <div className="card-meta">
                      <span className="year">{project.year}</span>
                      <span className="type">{project.type}</span>
                      <span className="location">{project.location}</span>
                    </div>
                  </motion.div>
                ))}
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
              <h2>Philosophie Institutionnelle</h2>
              <div className="philosophy-grid">
                <div className="philosophy-item">
                  <h3>Tradition & Modernité</h3>
                  <p>
                    Nous enseignons l'architecture comme un pont entre le patrimoine ancestral 
                    et les défis contemporains. Chaque projet doit respecter le contexte 
                    culturel tout en intégrant les innovations techniques.
                  </p>
                </div>
                <div className="philosophy-item">
                  <h3>Excellence Académique</h3>
                  <p>
                    Une formation rigoureuse associant théorie, pratique et recherche appliquée. 
                    Nos étudiants bénéficient d'un encadrement personnalisé et d'opportunités 
                    de stages en entreprise.
                  </p>
                </div>
                <div className="philosophy-item">
                  <h3>Innovation Sociale</h3>
                  <p>
                    Des architectes engagés dans le développement durable et l'équité sociale. 
                    Nous formons des professionnels conscients de leur responsabilité 
                    environnementale et sociale.
                  </p>
                </div>
              </div>

              {/* Timeline Interactive */}
              <div className="timeline-section">
                <h3>Histoire de l'École</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">1985</div>
                    <div className="timeline-content">
                      <h4>Fondation</h4>
                      <p>Création de l'ESSACA avec une première promotion de 30 étudiants</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2000</div>
                    <div className="timeline-content">
                      <h4>Reconnaissance Internationale</h4>
                      <p>Accréditation par l'Union Internationale des Architectes</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2020</div>
                    <div className="timeline-content">
                      <h4>Innovation Pédagogique</h4>
                      <p>Lancement du programme Architecture Durable et Bioclimatique</p>
                    </div>
                  </div>
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
            <h2>Galerie de Projets</h2>
            <div className="projects-filter">
              <button className="filter-btn active">Tous</button>
              <button className="filter-btn">Rénovation</button>
              <button className="filter-btn">Construction</button>
              <button className="filter-btn">Urbanisme</button>
            </div>
            <div className="projects-gallery">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="project-image">
                    <img src={project.cover} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-details">
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                    </div>
                    <div className="project-materials">
                      {project.materials.map((material, idx) => (
                        <span key={idx} className="material-tag">{material}</span>
                      ))}
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
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="news-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="news-image">
                    <img src={item.cover} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <span className="news-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="news-meta">
                      <span className="date">{new Date(item.publishedAt).toLocaleDateString('fr-FR')}</span>
                      <span className="author">{item.author}</span>
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
