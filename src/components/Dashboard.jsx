import Card from './Card'
import { useStyleTheme } from '../hooks/useStyleTheme'
import './Dashboard.css'

function Dashboard() {
  const { cssVars, theme } = useStyleTheme()

  // Different data structures for each style
  const getDashboardData = () => {
    switch(theme.ambiance) {
      case 'atelier-architecture':
        return {
          title: 'Studio Grid - Atelier d\'Architecture',
          subtitle: 'Gestion de projets architecturaux',
          layout: 'grid-architectural',
          items: [
            {
              id: 1,
              title: 'Projets Actifs',
              value: '12',
              description: 'Plans en développement',
              icon: '📐',
              status: 'active',
              type: 'kanban'
            },
            {
              id: 2,
              title: 'Rendus Deadline',
              value: '5',
              description: 'Cette semaine',
              icon: '⏰',
              status: 'urgent',
              type: 'calendar'
            },
            {
              id: 3,
              title: 'Plans Validés',
              value: '28',
              description: 'Ce trimestre',
              icon: '✅',
              status: 'completed',
              type: 'plans'
            },
            {
              id: 4,
              title: 'Revisions',
              value: '7',
              description: 'En attente',
              icon: '🔄',
              status: 'pending',
              type: 'revisions'
            }
          ]
        }

      case 'art-gallery':
        return {
          title: 'Portfolio Flow - Galerie',
          subtitle: 'Exposition des projets étudiants',
          layout: 'masonry-gallery',
          items: [
            {
              id: 1,
              title: 'Projets Exposés',
              value: '45',
              description: 'Portfolio public',
              icon: '🎨',
              status: 'featured',
              type: 'gallery'
            },
            {
              id: 2,
              title: 'Vues Totales',
              value: '2,847',
              description: 'Cette semaine',
              icon: '👁️',
              status: 'popular',
              type: 'analytics'
            },
            {
              id: 3,
              title: 'Téléchargements',
              value: '156',
              description: 'Ressources partagées',
              icon: '⬇️',
              status: 'shared',
              type: 'downloads'
            },
            {
              id: 4,
              title: 'Open Days',
              value: '3',
              description: 'Événements programmés',
              icon: '📅',
              status: 'upcoming',
              type: 'events'
            }
          ]
        }

      case 'academic-critique':
        return {
          title: 'Critique Lab - Laboratoire',
          subtitle: 'Feedback et annotation de projets',
          layout: 'annotation-workspace',
          items: [
            {
              id: 1,
              title: 'Projets Annotés',
              value: '23',
              description: 'Cette semaine',
              icon: '📝',
              status: 'annotated',
              type: 'annotations'
            },
            {
              id: 2,
              title: 'Versions Moyennes',
              value: '2.4',
              description: 'Par projet',
              icon: '🔄',
              status: 'iterations',
              type: 'versions'
            },
            {
              id: 3,
              title: 'Feedbacks Actifs',
              value: '18',
              description: 'Discussions ouvertes',
              icon: '💬',
              status: 'active',
              type: 'discussions'
            },
            {
              id: 4,
              title: 'Corrections Approuvées',
              value: '67',
              description: 'Ce mois',
              icon: '✅',
              status: 'approved',
              type: 'approvals'
            }
          ]
        }

      case 'modern-agency':
        return {
          title: 'Modern Agency - Projets',
          subtitle: 'Gestion de projets créatifs',
          layout: 'agency-projects',
          items: [
            {
              id: 1,
              title: 'Campagne Branding',
              value: 'En cours',
              description: 'Client: TechCorp',
              icon: '🎨',
              status: 'active',
              type: 'project'
            },
            {
              id: 2,
              title: 'Propositions',
              value: '12',
              description: 'En attente validation',
              icon: '📋',
              status: 'pending',
              type: 'proposals'
            },
            {
              id: 3,
              title: 'Budget Utilisé',
              value: '68%',
              description: 'Du trimestre',
              icon: '💰',
              status: 'budget',
              type: 'finance'
            },
            {
              id: 4,
              title: 'Équipe Active',
              value: '8',
              description: 'Membres connectés',
              icon: '👥',
              status: 'team',
              type: 'presence'
            }
          ]
        }

      case 'corporate-classic':
        return {
          title: 'Portail Entreprise',
          subtitle: 'Tableau de bord exécutif',
          layout: 'corporate-dashboard',
          items: [
            {
              id: 1,
              title: 'Chiffre d\'Affaires',
              value: '2.4M €',
              description: '+8.2% ce trimestre',
              icon: '📊',
              status: 'positive',
              type: 'finance'
            },
            {
              id: 2,
              title: 'Satisfaction Client',
              value: '94%',
              description: 'Score NPS moyen',
              icon: '⭐',
              status: 'excellent',
              type: 'satisfaction'
            },
            {
              id: 3,
              title: 'Demandes RH',
              value: '23',
              description: 'En attente validation',
              icon: '📋',
              status: 'pending',
              type: 'requests'
            },
            {
              id: 4,
              title: 'Taux de Retenue',
              value: '89%',
              description: 'Personnel confirmé',
              icon: '👥',
              status: 'stable',
              type: 'retention'
            }
          ]
        }

      case 'creative-workshop':
        return {
          title: 'Creative Workshop',
          subtitle: 'Atelier d\'inspiration créative',
          layout: 'creative-studio',
          items: [
            {
              id: 1,
              title: 'Projets Actifs',
              value: 'Rêverie Automnale',
              description: 'Phase: Création active',
              icon: '🎨',
              status: 'inspired',
              type: 'current'
            },
            {
              id: 2,
              title: 'Humeur Créative',
              value: '✨ Inspiré',
              description: 'État d\'esprit actuel',
              icon: '🎭',
              status: 'positive',
              type: 'mood'
            },
            {
              id: 3,
              title: 'Outils Utilisés',
              value: '5',
              description: 'Cette semaine',
              icon: '🖌️',
              status: 'active',
              type: 'tools'
            },
            {
              id: 4,
              title: 'Inspirations',
              value: '🍂 Automne',
              description: 'Thème actuel',
              icon: '🌱',
              status: 'seasonal',
              type: 'inspiration'
            }
          ]
        }

      case 'tech-startup':
        return {
          title: 'Tech Startup - Dashboard',
          subtitle: 'Métriques temps réel',
          layout: 'tech-dashboard',
          items: [
            {
              id: 1,
              title: 'Utilisateurs Actifs',
              value: '1.2M',
              description: '+127% ce mois',
              icon: '🚀',
              status: 'growth',
              type: 'users'
            },
            {
              id: 2,
              title: 'Revenue Mensuel',
              value: '$240K',
              description: 'Recurrent: 85%',
              icon: '💰',
              status: 'revenue',
              type: 'finance'
            },
            {
              id: 3,
              title: 'Churn Rate',
              value: '2.1%',
              description: '↓0.3% vs mois dernier',
              icon: '📉',
              status: 'improving',
              type: 'retention'
            },
            {
              id: 4,
              title: 'Tests A/B',
              value: '12',
              description: 'En cours d\'analyse',
              icon: '🧪',
              status: 'active',
              type: 'experiments'
            }
          ]
        }

      case 'academic-library':
        return {
          title: 'Bibliothèque Académique',
          subtitle: 'Portail de recherche érudit',
          layout: 'academic-portal',
          items: [
            {
              id: 1,
              title: 'Ouvrages Consultés',
              value: '47',
              description: 'Ce trimestre',
              icon: '📚',
              status: 'active',
              type: 'reading'
            },
            {
              id: 2,
              title: 'Articles Lus',
              value: '23',
              description: 'Ce mois',
              icon: '📄',
              status: 'scholarly',
              type: 'research'
            },
            {
              id: 3,
              title: 'Citations',
              value: '156',
              description: 'Base personnelle',
              icon: '📝',
              status: 'collected',
              type: 'citations'
            },
            {
              id: 4,
              title: 'Emprunts Actifs',
              value: '8',
              description: 'Retour prévu',
              icon: '📖',
              status: 'borrowed',
              type: 'loans'
            }
          ]
        }

      case 'enterprise-dashboard':
        return {
          title: 'Admin Studio - Gestion',
          subtitle: 'Tableaux de bord administratifs',
          layout: 'enterprise-analytics',
          items: [
            {
              id: 1,
              title: 'Utilisateurs Actifs',
              value: '1,234',
              description: 'Connectés ce mois',
              icon: '👥',
              status: 'active',
              type: 'users'
            },
            {
              id: 2,
              title: 'Rapports Générés',
              value: '89',
              description: 'Cette semaine',
              icon: '📊',
              status: 'reports',
              type: 'analytics'
            },
            {
              id: 3,
              title: 'Exports CSV',
              value: '34',
              description: 'Données exportées',
              icon: '📤',
              status: 'exports',
              type: 'data'
            },
            {
              id: 4,
              title: 'Taux de Soumission',
              value: '94.2%',
              description: 'Objectif atteint',
              icon: '📈',
              status: 'target',
              type: 'metrics'
            }
          ]
        }

      case 'collaborative-workspace':
        return {
          title: 'Studio Collab - Collaboration',
          subtitle: 'Espace de travail d\'équipe',
          layout: 'collaborative-hub',
          items: [
            {
              id: 1,
              title: 'Membres Actifs',
              value: '12',
              description: 'En ligne maintenant',
              icon: '🟢',
              status: 'online',
              type: 'presence'
            },
            {
              id: 2,
              title: 'Tâches Assignées',
              value: '47',
              description: 'En cours',
              icon: '📋',
              status: 'assigned',
              type: 'tasks'
            },
            {
              id: 3,
              title: 'Messages Échangés',
              value: '156',
              description: 'Aujourd\'hui',
              icon: '💬',
              status: 'chat',
              type: 'communication'
            },
            {
              id: 4,
              title: 'Projets Collaboratifs',
              value: '8',
              description: 'Équipes actives',
              icon: '🤝',
              status: 'teamwork',
              type: 'projects'
            }
          ]
        }

      default:
        return {
          title: 'Dashboard',
          subtitle: 'Vue d\'ensemble',
          layout: 'default',
          items: [
    {
      id: 1,
      title: 'Total Users',
      value: '1,234',
      description: 'Active users this month',
      icon: '👥'
    },
    {
      id: 2,
      title: 'Revenue',
      value: '$45,678',
      description: 'Total revenue generated',
      icon: '💰'
    },
    {
      id: 3,
      title: 'Orders',
      value: '892',
      description: 'Orders processed',
      icon: '📦'
    },
    {
      id: 4,
      title: 'Growth',
      value: '+12.5%',
      description: 'Compared to last month',
      icon: '📈'
    }
  ]
        }
    }
  }

  const dashboardData = getDashboardData()

  return (
    <div className={`dashboard dashboard-${dashboardData.layout}`} style={cssVars}>
      <div className="dashboard-header">
        <h1 className="dashboard-title">{dashboardData.title}</h1>
        {dashboardData.subtitle && (
          <p className="dashboard-subtitle">{dashboardData.subtitle}</p>
        )}
      </div>

      {/* Architectural grid lines overlay */}
      {theme.ambiance === 'atelier-architecture' && (
        <div className="architectural-grid-overlay">
          <div className="grid-line horizontal" style={{ top: '20%' }}></div>
          <div className="grid-line horizontal" style={{ top: '40%' }}></div>
          <div className="grid-line horizontal" style={{ top: '60%' }}></div>
          <div className="grid-line horizontal" style={{ top: '80%' }}></div>
          <div className="grid-line vertical" style={{ left: '25%' }}></div>
          <div className="grid-line vertical" style={{ left: '50%' }}></div>
          <div className="grid-line vertical" style={{ left: '75%' }}></div>
        </div>
      )}

      {/* Gallery masonry layout */}
      {theme.ambiance === 'art-gallery' && (
        <div className="gallery-controls">
          <div className="gallery-filter">
            <span className="filter-label">Filtre:</span>
            <button className="filter-btn active">Tous</button>
            <button className="filter-btn">Architecture</button>
            <button className="filter-btn">Design</button>
            <button className="filter-btn">Urbanisme</button>
          </div>
          <div className="gallery-view-toggle">
            <button className="view-btn active">🖼️ Grille</button>
            <button className="view-btn">📋 Liste</button>
          </div>
        </div>
      )}

      {/* Academic annotation toolbar */}
      {theme.ambiance === 'academic-critique' && (
        <div className="annotation-toolbar">
          <div className="tool-group">
            <button className="tool-btn active" title="Sélection">⯌</button>
            <button className="tool-btn" title="Commentaire">💬</button>
            <button className="tool-btn" title="Surlignage">🖍️</button>
            <button className="tool-btn" title="Tampon">🏷️</button>
          </div>
          <div className="tool-group">
            <button className="tool-btn" title="Versions">🔄</button>
            <button className="tool-btn" title="Comparaison">⚖️</button>
          </div>
        </div>
      )}

      {/* Enterprise data controls */}
      {theme.ambiance === 'enterprise-dashboard' && (
        <div className="enterprise-controls">
          <div className="data-filters">
            <select className="filter-select">
              <option>Tous les ateliers</option>
              <option>Atelier A</option>
              <option>Atelier B</option>
            </select>
            <input type="date" className="date-filter" />
            <button className="export-btn">📊 Exporter</button>
          </div>
        </div>
      )}

      {/* Collaborative presence indicators */}
      {theme.ambiance === 'collaborative-workspace' && (
        <div className="collaboration-status">
          <div className="online-users">
            <div className="user-avatar online">👤</div>
            <div className="user-avatar online">👤</div>
            <div className="user-avatar online">👤</div>
            <span className="online-count">+9 en ligne</span>
          </div>
          <div className="activity-indicator">
            <span className="activity-dot"></span>
            <span className="activity-text">Marie écrit...</span>
          </div>
        </div>
      )}

      <div className={`dashboard-grid dashboard-grid-${dashboardData.layout}`}>
        {dashboardData.items.map((item, index) => (
          <Card
            key={item.id}
            {...item}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard

