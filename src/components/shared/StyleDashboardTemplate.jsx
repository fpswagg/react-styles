// This is a template file for creating style dashboards
// Each style should have its own Dashboard component based on this template
// Customize: container class, color references, and CSS import

import { useState } from 'react';
import { motion } from 'framer-motion';

export const createStyleDashboard = (config) => {
  const {
    containerClass,
    cssImport,
    primaryColor,
    cardColor,
    textColor,
    accentColor,
    styleName
  } = config;

  return () => {
    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const stats = [
      { label: 'Projets réalisés', value: '47', trend: '+12%' },
      { label: 'Étudiants formés', value: '1,250', trend: '+8%' },
      { label: 'Prix reçus', value: '23', trend: '+5' },
      { label: 'Partenaires', value: '89', trend: '+15%' }
    ];
    const projects = [
      { id: '1', title: 'Projet Architectural', description: 'Projet d\'architecture innovant et moderne', year: 2024, type: 'Design', location: 'Fès' },
      { id: '2', title: 'Campus Moderne', description: 'Nouveau campus avec architecture contemporaine', year: 2023, type: 'Construction', location: 'Casablanca' },
      { id: '3', title: 'Habitat Durable', description: 'Projet d\'habitat écologique et durable', year: 2024, type: 'Développement', location: 'Rabat' }
    ];
    const news = [
      { id: '1', title: 'Nouvelle Exposition Architecture', excerpt: 'Découvrez notre nouvelle exposition sur l\'architecture marocaine moderne', publishedAt: '2024-12-01', category: 'Événements' },
      { id: '2', title: 'Prix d\'Excellence 2024', excerpt: 'L\'ESSACA reçoit le prix d\'excellence en architecture', publishedAt: '2024-11-15', category: 'Récompenses' }
    ];
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
      <div className={containerClass}>
        <motion.header className={`page-header bg-${cardColor}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="header-content flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className={`text-display text-${accentColor}`}><span className="text-display-emphasis">ESSACA</span></h1>
              <p className={`text-${textColor}-70 text-sm sm:text-base hidden sm:block`}>École Supérieure des Sciences de l'Architecture</p>
            </div>
            <nav className="flex items-center gap-2 sm:gap-3">
              {['home', 'about', 'programs', 'projects', 'news', 'contact'].map((item) => (
                <button key={item} className={`text-xs sm:text-sm transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-${textColor}-20 ${activeSection === item ? `bg-${primaryColor} text-${cardColor}` : ''}`} onClick={() => setActiveSection(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>
        <main className="w-full">
          {activeSection === 'home' && (
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-6 sm:py-12">
              <div className={`container-main mb-8 hero-section`}>
                <div className="hero-image-container">
                  <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop" alt="Architecture" loading="eager" />
                </div>
                <div className="hero-content-wrapper">
                  <motion.h1 className={`text-display text-${textColor} mb-4`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    L'Excellence <span className="text-display-emphasis">Architecturale</span>
                  </motion.h1>
                  <motion.p className={`text-${textColor}-70 text-base sm:text-lg max-w-2xl mx-auto mb-6`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                    Depuis 1985, formons les architectes de demain en conciliant tradition et innovation.
                  </motion.p>
                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                    <button className="btn-cta">Découvrir nos programmes</button>
                    <button className="btn-secondary">En savoir plus</button>
                  </motion.div>
                </div>
                <div className="band-burgundy"></div>
              </div>
              <motion.div className="container-main mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div key={stat.label} className="text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                      <div className={`text-display text-${accentColor} mb-2`} style={{ fontSize: '2.5rem' }}>{stat.value}</div>
                      <div className={`text-${textColor}-70 text-sm sm:text-base mb-1`}>{stat.label}</div>
                      <div className={`text-${accentColor} text-xs sm:text-sm font-medium`}>{stat.trend}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.section className="container-main mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <h2 className={`text-3xl sm:text-4xl font-display font-light text-${textColor} mb-6`}>Projets Récents</h2>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  {projects.map((project, index) => (
                    <motion.div key={project.id} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className="card-header"><h3 className="card-title mb-3">{project.title}</h3></div>
                      <div className="card-content">
                        <p className="card-description mb-4">{project.description}</p>
                        <div className="flex gap-2 mb-4">
                          <span className={`text-xs text-${accentColor} font-medium`}>{project.type}</span>
                          <span className={`text-xs text-${textColor}-60`}>{project.year}</span>
                        </div>
                        <button className="btn-ghost text-sm">Voir le projet →</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
              <motion.section className="container-main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <h2 className={`text-3xl sm:text-4xl font-display font-light text-${textColor} mb-6`}>Actualités</h2>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <motion.div key={item.id} className="card" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className="card-header">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs text-${accentColor} font-medium`}>{item.category}</span>
                          <span className={`text-xs text-${textColor}-60`}>{item.publishedAt}</span>
                        </div>
                        <h3 className="card-title mb-3">{item.title}</h3>
                      </div>
                      <div className="card-content">
                        <p className={`text-${textColor}-70 text-sm sm:text-base mb-4`}>{item.excerpt}</p>
                        <button className="btn-ghost text-sm">Lire la suite →</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.section>
          )}
          {/* Other sections (about, programs, projects, news, contact) follow the same pattern */}
        </main>
        <footer className={`bg-${textColor} text-${cardColor} py-8 mt-12`}>
          <div className="header-content">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
              <div><h3 className={`text-display text-${cardColor} mb-2`} style={{ fontSize: '1.5rem' }}>ESSACA</h3><p className="text-sm opacity-80">École Supérieure des Sciences de l'Architecture</p></div>
              <div><h4 className="font-medium mb-2">Navigation</h4><ul className="text-sm space-y-1 opacity-80"><li><a href="#" className="hover:opacity-100">Accueil</a></li><li><a href="#" className="hover:opacity-100">Programmes</a></li><li><a href="#" className="hover:opacity-100">Projets</a></li></ul></div>
              <div><h4 className="font-medium mb-2">Contact</h4><p className="text-sm opacity-80">contact@essaca.ma</p></div>
            </div>
            <div className={`border-t border-${cardColor}/20 mt-8 pt-8 text-center text-sm opacity-60`}><p>© 2024 ESSACA. Tous droits réservés.</p></div>
          </div>
        </footer>
      </div>
    );
  };
};
