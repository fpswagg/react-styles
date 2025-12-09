import { useState } from 'react';
import { motion } from 'framer-motion';
import './TropicalVernacular.css';

const TropicalVernacularDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const materials = [
    {
      id: 1,
      name: 'Bois de Cèdre',
      origin: 'Atlas',
      properties: ['Résistant humidité', 'Durabilité 50+ ans', 'Parfum naturel'],
      uses: ['Charpente', 'Menuiserie', 'Ébénisterie'],
      sustainability: 'Gestion durable certifiée'
    },
    {
      id: 2,
      name: 'Pierre Locale',
      origin: 'Région Marrakech',
      properties: ['Isolation thermique', 'Résistance sismique', 'Esthétique naturelle'],
      uses: ['Murs porteurs', 'Façades', 'Sols'],
      sustainability: 'Extraction contrôlée'
    },
    {
      id: 3,
      name: 'Terre Crue',
      origin: 'Vallée du Draâ',
      properties: ['Régulation hygrométrique', 'Écologique', 'Économique'],
      uses: ['Construction', 'Enduits', 'Isolants'],
      sustainability: 'Ressource renouvelable'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'École Durable Tamegroute',
      location: 'Tamegroute',
      materials: ['Pierre locale', 'Bois de cèdre'],
      impact: '150 élèves bénéficient d\'un cadre d\'apprentissage sain',
      beforeImage: 'school-before.jpg',
      afterImage: 'school-after.jpg'
    }
  ];

  return (
    <div className="tropical-vernacular-container">
      {/* Header */}
      <motion.header
        className="vernacular-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <h1>MATÉRIAUX LOCAUX</h1>
          <p>Architecture vernaculaire et développement durable</p>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="vernacular-navigation">
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: '🏠' },
          { id: 'materials', label: 'Matériaux', icon: '🧱' },
          { id: 'projects', label: 'Projets', icon: '🏗️' },
          { id: 'workshops', label: 'Ateliers', icon: '🔨' },
          { id: 'resources', label: 'Ressources', icon: '📚' }
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
      <main className="vernacular-content">
        {activeSection === 'overview' && (
          <motion.section
            className="overview-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero */}
            <div className="vernacular-hero">
              <div className="hero-image">
                <img src="/api/placeholder/1200/600" alt="Architecture vernaculaire marocaine" />
              </div>
              <div className="hero-content">
                <h2>L'Excellence des Savoir-Faire Locaux</h2>
                <p>Redécouvrir les matériaux et techniques traditionnelles pour un avenir durable.</p>
              </div>
            </div>

            {/* Materials Focus */}
            <div className="materials-focus">
              <h3>Matériaux à la une</h3>
              <div className="materials-grid">
                {materials.slice(0, 3).map((material, index) => (
                  <motion.div
                    key={material.id}
                    className="material-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="material-texture">
                      <img src={`/api/placeholder/200/150`} alt={`Texture ${material.name}`} />
                    </div>
                    <div className="material-info">
                      <h4>{material.name}</h4>
                      <p className="origin">Origine: {material.origin}</p>
                      <div className="properties">
                        {material.properties.slice(0, 2).map((prop, i) => (
                          <span key={i} className="property">{prop}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'materials' && (
          <motion.section
            className="materials-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Catalogue des Matériaux</h2>
            <div className="materials-catalog">
              {materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  className="material-detail-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="material-header">
                    <h3>{material.name}</h3>
                    <span className="origin-badge">{material.origin}</span>
                  </div>

                  <div className="material-content">
                    <div className="material-image">
                      <img src={`/api/placeholder/300/200`} alt={material.name} />
                    </div>

                    <div className="material-details">
                      <div className="properties-section">
                        <h4>Propriétés</h4>
                        <ul>
                          {material.properties.map((prop, i) => (
                            <li key={i}>{prop}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="uses-section">
                        <h4>Usages</h4>
                        <div className="uses-tags">
                          {material.uses.map((use, i) => (
                            <span key={i} className="use-tag">{use}</span>
                          ))}
                        </div>
                      </div>

                      <div className="sustainability-section">
                        <h4>Durabilité</h4>
                        <p>{material.sustainability}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            <h2>Études de Cas</h2>
            <div className="case-studies">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="case-study"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="study-comparison">
                    <div className="before-after">
                      <div className="image-container">
                        <img src={`/api/placeholder/300/200`} alt="Avant" />
                        <span className="label">AVANT</span>
                      </div>
                      <div className="image-container">
                        <img src={`/api/placeholder/300/200`} alt="Après" />
                        <span className="label">APRÈS</span>
                      </div>
                    </div>
                  </div>

                  <div className="study-content">
                    <h3>{project.title}</h3>
                    <div className="study-meta">
                      <span className="location">{project.location}</span>
                      <div className="materials-used">
                        {project.materials.map((material, i) => (
                          <span key={i} className="material-tag">{material}</span>
                        ))}
                      </div>
                    </div>
                    <p className="impact">{project.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'workshops' && (
          <motion.section
            className="workshops-section"
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ateliers Pratiques</h2>
            <div className="workshops-grid">
              {[
                {
                  title: 'Construction en Terre Crue',
                  date: '15-17 Janvier 2025',
                  level: 'Débutant',
                  duration: '3 jours'
                },
                {
                  title: 'Charpente Traditionnelle',
                  date: '22-24 Janvier 2025',
                  level: 'Intermédiaire',
                  duration: '3 jours'
                }
              ].map((workshop, index) => (
                <motion.div
                  key={index}
                  className="workshop-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3>{workshop.title}</h3>
                  <div className="workshop-meta">
                    <span className="date">{workshop.date}</span>
                    <span className="level">{workshop.level}</span>
                    <span className="duration">{workshop.duration}</span>
                  </div>
                  <button className="register-btn">S'inscrire</button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'resources' && (
          <motion.section
            className="resources-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ressources Pédagogiques</h2>
            <div className="resources-grid">
              {[
                { type: 'Guide', title: 'Manuel de Construction Vernaculaire', format: 'PDF' },
                { type: 'Vidéo', title: 'Techniques de Maçonnerie', format: 'MP4' },
                { type: 'Quiz', title: 'Test de Connaissances', format: 'Interactif' }
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
                    {resource.format === 'PDF' ? '📄' :
                     resource.format === 'MP4' ? '🎥' : '❓'}
                  </div>
                  <div className="resource-info">
                    <h4>{resource.title}</h4>
                    <span className="resource-type">{resource.type}</span>
                    <span className="resource-format">{resource.format}</span>
                  </div>
                  <button className="download-btn">Accéder</button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default TropicalVernacularDashboard;
