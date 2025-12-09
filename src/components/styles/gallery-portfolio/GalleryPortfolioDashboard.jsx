import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GalleryPortfolio.css';

const GalleryPortfolioDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Maison Passive Atlas',
      student: 'Ahmed Bennani',
      year: 2024,
      category: 'Habitat',
      tags: ['bioclimatique', 'bois local', 'énergie passive'],
      images: ['maison-atlas-1.jpg', 'maison-atlas-2.jpg', 'maison-atlas-3.jpg']
    },
    {
      id: 2,
      title: 'Centre Culturel Fès',
      student: 'Fatima Alaoui',
      year: 2023,
      category: 'Culture',
      tags: ['réhabilitation', 'patrimoine', 'contemporain'],
      images: ['centre-fes-1.jpg', 'centre-fes-2.jpg']
    },
    {
      id: 3,
      title: 'Tour d\'Observation Marrakech',
      student: 'Youssef Tazi',
      year: 2024,
      category: 'Tourisme',
      tags: ['structure', 'panorama', 'durabilité'],
      images: ['tour-marrakech-1.jpg', 'tour-marrakech-2.jpg', 'tour-marrakech-3.jpg']
    }
  ];

  const filters = ['all', 'Habitat', 'Culture', 'Tourisme', 'Infrastructure'];
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="gallery-portfolio-container">
      {/* Header */}
      <motion.header
        className="gallery-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Portfolio Architectural</h1>
        <p>Galerie des travaux étudiants — ESSACA</p>
      </motion.header>

      {/* Filters */}
      <div className="gallery-filters">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === 'all' ? 'Tous' : filter}
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        className="gallery-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightboxImage(project.images[0])}
            >
              <div className="item-image">
                <img
                  src={`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop`}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="item-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.student}</p>
                  <div className="item-tags">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="item-meta">
                <span className="student">{project.student}</span>
                <span className="year">{project.year}</span>
                <span className="category">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightboxImage(null)}
              >
                ×
              </button>
              <img src={`https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop`} alt="Projet en détail" />
              <div className="lightbox-info">
                <h3>Projet Détail</h3>
                <p>Description complète du projet architectural avec ses caractéristiques techniques.</p>
                <div className="lightbox-meta">
                  <span>Auteur: Étudiant X</span>
                  <span>Année: 2024</span>
                  <span>Matériaux: Pierre, Bois</span>
                </div>
                <div className="lightbox-actions">
                  <button className="download-btn">Télécharger HD</button>
                  <button className="share-btn">Partager</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPortfolioDashboard;
