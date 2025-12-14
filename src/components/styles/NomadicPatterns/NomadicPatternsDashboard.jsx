import { useState } from 'react';
import { motion } from 'framer-motion';
import './NomadicPatterns.css';

const NomadicPatternsDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const stats = [
    { label: 'Projets réalisés', value: '47', trend: '+12%' },
    { label: 'Étudiants formés', value: '1,250', trend: '+8%' },
    { label: 'Prix reçus', value: '23', trend: '+5' },
    { label: 'Partenaires', value: '89', trend: '+15%' }
  ];

  const projects = [
    {
      id: '1',
      title: 'Motifs Traditionnels',
      description: 'Projet inspiré des motifs berbères et des tapis nomades marocains',
      year: 2024,
      type: 'Tradition',
      location: 'Fès'
    },
    {
      id: '2',
      title: 'Architecture Nomade',
      description: 'Design adaptatif inspiré des tentes et structures nomades',
      year: 2023,
      type: 'Nomade',
      location: 'Sahara'
    },
    {
      id: '3',
      title: 'Géométrie Textile',
      description: 'Intégration des motifs géométriques dans l\'architecture moderne',
      year: 2024,
      type: 'Géométrie',
      location: 'Marrakech'
    }
  ];

  const news = [
    {
      id: '1',
      title: 'Exposition Motifs Nomades',
      excerpt: 'Découvrez notre exposition sur les motifs et patterns nomades',
      publishedAt: '2024-12-01',
      category: 'Événements'
    },
    {
      id: '2',
      title: 'Prix Patrimoine Nomade 2024',
      excerpt: 'L\'ESSACA reçoit le prix pour la préservation des motifs traditionnels',
      publishedAt: '2024-11-15',
      category: 'Récompenses'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="nomadic-patterns-container">
      <motion.header
        className="page-header bg-ivory"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="header-content flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-display text-crimson">
              <span className="text-display-emphasis">ESSACA</span>
            </h1>
            <p className="text-main-70 text-sm sm:text-base hidden sm:block">
              École Supérieure des Sciences de l'Architecture
            </p>
          </div>
          <nav className="flex items-center gap-2 sm:gap-3">
            {['home', 'about', 'programs', 'projects', 'news', 'contact'].map((item) => (
              <button
                key={item}
                className={`text-xs sm:text-sm text-main-60 hover:text-main transition-colors px-2 sm:px-3 py-1.5 sm:py-2 border border-main-20 hover:border-main-40 ${
                  activeSection === item ? 'bg-page text-crimson border-crimson' : ''
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="w-full">
        {activeSection === 'home' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main mb-8 hero-section">
              <div className="hero-image-container">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop"
                  alt="Architecture nomade"
                  loading="eager"
                />
              </div>
              <div className="hero-content-wrapper">
                <motion.h1
                  className="text-display text-main mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Architecture <span className="text-display-emphasis">Nomade</span>
                </motion.h1>
                <motion.p
                  className="text-main-70 text-base sm:text-lg max-w-3xl mx-auto mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Les motifs ancestraux au service de l'architecture moderne
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <button className="btn-cta">Découvrir les motifs</button>
                  <button className="btn-secondary">Notre héritage</button>
                </motion.div>
              </div>
              <div className="band-crimson"></div>
            </div>

            <motion.div
              className="container-main mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-display text-crimson mb-2" style={{ fontSize: '2.5rem' }}>
                      {stat.value}
                    </div>
                    <div className="text-main-70 text-sm sm:text-base mb-1">{stat.label}</div>
                    <div className="text-royal text-xs sm:text-sm font-medium">{stat.trend}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.section
              className="container-main mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Projets Récents
              </h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-header">
                      <h3 className="card-title mb-3">{project.title}</h3>
                    </div>
                    <div className="card-content">
                      <p className="card-description mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-xs text-crimson font-medium">{project.type}</span>
                        <span className="text-xs text-main-60">{project.year}</span>
                      </div>
                      <button className="btn-ghost text-sm">Voir le projet →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="container-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Actualités
              </h2>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-header">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-crimson font-medium">{item.category}</span>
                        <span className="text-xs text-main-60">{item.publishedAt}</span>
                      </div>
                      <h3 className="card-title mb-3">{item.title}</h3>
                    </div>
                    <div className="card-content">
                      <p className="text-main-70 text-sm sm:text-base mb-4">{item.excerpt}</p>
                      <button className="btn-ghost text-sm">Lire la suite →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.section>
        )}

        {activeSection === 'about' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                À propos de l'ESSACA
              </h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="card">
                  <h3 className="card-title mb-4">Notre Mission</h3>
                  <p className="card-description mb-4">
                    Depuis 1985, l'ESSACA forme les architectes de demain en conciliant tradition et innovation. 
                    Notre mission est de développer l'excellence architecturale au Maroc et en Afrique.
                  </p>
                  <p className="card-description">
                    Nous offrons une formation complète qui allie théorie et pratique, 
                    préparant nos étudiants aux défis de l'architecture contemporaine.
                  </p>
                </div>
                <div className="card">
                  <h3 className="card-title mb-4">Nos Valeurs</h3>
                  <ul className="space-y-3">
                    <li className="text-main-70 flex items-start">
                      <span className="text-crimson mr-2">•</span>
                      Excellence académique et professionnelle
                    </li>
                    <li className="text-main-70 flex items-start">
                      <span className="text-crimson mr-2">•</span>
                      Innovation et créativité
                    </li>
                    <li className="text-main-70 flex items-start">
                      <span className="text-crimson mr-2">•</span>
                      Respect du patrimoine architectural
                    </li>
                    <li className="text-main-70 flex items-start">
                      <span className="text-crimson mr-2">•</span>
                      Développement durable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-main">
              <h3 className="text-2xl sm:text-3xl font-display font-light text-main mb-6">
                Notre Histoire
              </h3>
              <div className="card">
                <p className="card-description mb-4">
                  Fondée en 1985, l'ESSACA est devenue une référence dans l'enseignement de l'architecture au Maroc. 
                  Nous avons formé plus de 1,250 architectes qui contribuent aujourd'hui au développement 
                  architectural du pays et du continent africain.
                </p>
                <p className="card-description">
                  Notre école combine l'héritage architectural marocain avec les innovations contemporaines, 
                  créant un pont entre tradition et modernité.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'programs' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Nos Programmes
              </h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Architecture Générale',
                    duration: '5 ans',
                    description: 'Formation complète en architecture avec spécialisations en design, construction et urbanisme.',
                    level: 'Licence + Master'
                  },
                  {
                    title: 'Architecture du Patrimoine',
                    duration: '2 ans',
                    description: 'Spécialisation en restauration et conservation du patrimoine architectural marocain.',
                    level: 'Master'
                  },
                  {
                    title: 'Architecture Durable',
                    duration: '2 ans',
                    description: 'Programme axé sur l\'architecture écologique et les matériaux durables.',
                    level: 'Master'
                  },
                  {
                    title: 'Design Urbain',
                    duration: '2 ans',
                    description: 'Formation en urbanisme et aménagement du territoire.',
                    level: 'Master'
                  },
                  {
                    title: 'Architecture Numérique',
                    duration: '1 an',
                    description: 'Spécialisation en BIM, modélisation 3D et technologies numériques.',
                    level: 'Certificat'
                  },
                  {
                    title: 'Architecture d\'Intérieur',
                    duration: '3 ans',
                    description: 'Formation complète en design d\'intérieur et aménagement d\'espaces.',
                    level: 'Licence'
                  }
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-header">
                      <h3 className="card-title mb-2">{program.title}</h3>
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs text-crimson font-medium">{program.level}</span>
                        <span className="text-xs text-main-60">{program.duration}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="card-description mb-4">{program.description}</p>
                      <button className="btn-ghost text-sm">En savoir plus →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Tous nos Projets
              </h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-header">
                      <h3 className="card-title mb-3">{project.title}</h3>
                    </div>
                    <div className="card-content">
                      <p className="card-description mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4">
                        <span className="text-xs text-crimson font-medium">{project.type}</span>
                        <span className="text-xs text-main-60">{project.year}</span>
                        <span className="text-xs text-main-60">{project.location}</span>
                      </div>
                      <button className="btn-ghost text-sm">Voir le projet →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'news' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main">
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Toutes les Actualités
              </h2>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card-header">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-crimson font-medium">{item.category}</span>
                        <span className="text-xs text-main-60">{item.publishedAt}</span>
                      </div>
                      <h3 className="card-title mb-3">{item.title}</h3>
                    </div>
                    <div className="card-content">
                      <p className="text-main-70 text-sm sm:text-base mb-4">{item.excerpt}</p>
                      <button className="btn-ghost text-sm">Lire la suite →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'contact' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-6 sm:py-12"
          >
            <div className="container-main">
              <h2 className="text-3xl sm:text-4xl font-display font-light text-main mb-6">
                Contactez-nous
              </h2>
              <div className="card max-w-2xl mx-auto">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-main mb-2 block">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-main mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-main mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Votre message..."
                    />
                  </div>
                  <div className="flex gap-4 justify-center mt-6">
                    <button type="button" className="btn-cta">
                      Envoyer
                    </button>
                    <button type="button" className="btn-secondary">
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="bg-main text-ivory py-8 mt-12">
        <div className="header-content">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <div>
              <h3 className="text-display text-ivory mb-2" style={{ fontSize: '1.5rem' }}>
                ESSACA
              </h3>
              <p className="text-sm opacity-80">
                École Supérieure des Sciences de l'Architecture
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Navigation</h4>
              <ul className="text-sm space-y-1 opacity-80">
                <li><a href="#" className="hover:opacity-100">Accueil</a></li>
                <li><a href="#" className="hover:opacity-100">Programmes</a></li>
                <li><a href="#" className="hover:opacity-100">Projets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Contact</h4>
              <p className="text-sm opacity-80">contact@essaca.ma</p>
            </div>
          </div>
          <div className="border-t border-ivory/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 ESSACA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NomadicPatternsDashboard;

