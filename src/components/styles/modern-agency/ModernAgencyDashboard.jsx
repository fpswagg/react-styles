import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernAgencyModal from './ModernAgencyModal';

const ModernAgencyDashboard = () => {
  const [activeModals, setActiveModals] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const modalConfigs = [
    {
      id: 'projects',
      title: '🚀 Projets Actifs',
      variant: 'primary',
      content: (
        <div className="modal-grid">
          <div className="metric-card">
            <h4>Refonte E-commerce</h4>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <p>Client: TechCorp • Deadline: 15 déc</p>
          </div>
          <div className="metric-card">
            <h4>Application Mobile</h4>
            <div className="progress-bar">
              <motion.div
                className="progress-fill accent"
                initial={{ width: 0 }}
                animate={{ width: '45%' }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </div>
            <p>Client: StartupXYZ • Deadline: 28 déc</p>
          </div>
        </div>
      )
    },
    {
      id: 'metrics',
      title: '📊 Métriques Clés',
      variant: 'secondary',
      content: (
        <div className="metrics-display">
          <motion.div
            className="big-metric"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <span className="metric-value">2.4M€</span>
            <span className="metric-label">CA 2024</span>
            <motion.span
              className="metric-change positive"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              +23%
            </motion.span>
          </motion.div>
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="value">94%</span>
              <span className="label">Satisfaction</span>
            </div>
            <div className="metric-item">
              <span className="value">12</span>
              <span className="label">Projets actifs</span>
            </div>
            <div className="metric-item">
              <span className="value">8</span>
              <span className="label">Équipe</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: '👥 Équipe Créative',
      variant: 'accent',
      content: (
        <div className="team-grid">
          {[
            { name: 'Alice Design', role: 'Directrice Créa', avatar: '🎨', status: 'online' },
            { name: 'Bob Dev', role: 'Lead Developer', avatar: '💻', status: 'busy' },
            { name: 'Charlie Strat', role: 'Chef de Projet', avatar: '🎯', status: 'online' },
            { name: 'Diana UX', role: 'UX Designer', avatar: '✨', status: 'away' }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`avatar ${member.status}`}>
                <span>{member.avatar}</span>
                <div className={`status-dot ${member.status}`}></div>
              </div>
              <div className="member-info">
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  const openModal = (modalId) => {
    if (!activeModals.includes(modalId)) {
      setActiveModals(prev => [...prev, modalId]);
    }
  };

  const closeModal = (modalId) => {
    setActiveModals(prev => prev.filter(id => id !== modalId));
  };

  // Ouvrir automatiquement les modales au chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      modalConfigs.forEach((config, index) => {
        setTimeout(() => openModal(config.id), index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="modern-agency-container">
      <motion.div
        className="agency-welcome"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Modern Agency</h1>
        <p>Interface entièrement modale - Tout flotte dans l'espace ✨</p>
      </motion.div>

      {/* Cartes déclencheuses de modales */}
      <div className="modal-triggers">
        {modalConfigs.map((config, index) => (
          <motion.div
            key={config.id}
            className="modal-trigger-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
            }}
            onClick={() => openModal(config.id)}
            onHoverStart={() => setHoveredCard(config.id)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className="card-glow"
              animate={{
                opacity: hoveredCard === config.id ? 0.6 : 0.2,
                scale: hoveredCard === config.id ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="card-content">
              <h3>{config.title}</h3>
              <motion.div
                className="card-icon"
                animate={{
                  rotate: hoveredCard === config.id ? 360 : 0,
                  scale: hoveredCard === config.id ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {config.title.split(' ')[0]}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modales actives */}
      {modalConfigs.map(config => (
        <ModernAgencyModal
          key={config.id}
          isOpen={activeModals.includes(config.id)}
          onClose={() => closeModal(config.id)}
          title={config.title}
          variant={config.variant}
        >
          {config.content}
        </ModernAgencyModal>
      ))}

      {/* Effets de particules en arrière-plan */}
      <div className="background-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${220 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernAgencyDashboard;
