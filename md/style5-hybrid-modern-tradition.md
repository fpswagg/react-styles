# Style 5 — Hybrid Modern-Tradition (Plateforme Complète)

## Concept
Un site polyvalent et modulable — combine l'institutionnel, la galerie, et la collaboration. Design mixte, adaptable selon l'audience (prospection, étudiants, recherche). Plateforme complète pour l'écosystème ESSACA.

## Objectifs
- Centraliser tous les contenus institutionnels et pédagogiques
- Faciliter la collaboration entre acteurs de l'écosystème
- Supporter les expositions et publications académiques
- Créer une plateforme évolutive selon les besoins

## Ambiance & État d'esprit
- **Atmosphère** : Professionnelle, collaborative, innovante
- **Émotion** : Confiance, communauté, progrès, excellence
- **Public cible** : Tout l'écosystème (étudiants, enseignants, partenaires, alumni)

## Pages & Fonctionnalités Clés

### 1. Accueil Modulable
- **Blocs réordonnables** : Hero, news, projets, événements
- **Personnalisation** : Contenu adapté selon profil utilisateur
- **CTA dynamiques** : Actions contextuelles (admission, contact)
- **Tableau de bord** : Métriques clés pour administrateurs

### 2. Projets & Portfolios
- **Timeline versions** : Historique complet des itérations
- **Annotations collaboratives** : Commentaires enseignants/étudiants
- **Exports multiples** : PDF, images, présentations
- **Workflow évaluation** : Soumission → review → publication

### 3. Équipe & Réseau
- **Profils détaillés** : CV, publications, projets
- **Réseau social interne** : Connexions, groupes de recherche
- **Alumni network** : Base de données anciens élèves
- **Partenaires** : Galerie d'entreprises collaboratrices

### 4. Research Hub
- **Publications académiques** : Archive avec DOI
- **Projets recherche** : Présentation avec équipes
- **Conférences** : Programmation et archives vidéo
- **Laboratoires virtuels** : Outils collaboratifs

### 5. Plateforme Pédagogique
- **Cours en ligne** : LMS intégré avec progression
- **Ressources partagées** : Bibliothèque collaborative
- **Évaluations** : Système de notation automatisé
- **Certifications** : Diplômes et attestations

### 6. Administration
- **Tableau de bord** : KPIs temps réel
- **Gestion contenu** : CMS intégré
- **Analytics** : Suivi comportement utilisateur
- **Permissions** : Système de rôles granulaire

## Layout & Wireframe

### Structure Générale
```
┌─────────────────────────────────────────────────┐
│ Header avec navigation contextuelle              │
├─────────────────┬───────────────────────────────┤
│ Sidebar gauche  │ Content principal modulable     │
│ • Navigation    │ • Blocs CMS réordonnables       │
│ • User menu     │ • Widgets dynamiques            │
│ • Quick links   │ • Actions contextuelles         │
├─────────────────┴───────────────────────────────┘
│ Footer avec liens institutionnels               │
└─────────────────────────────────────────────────┘
```

### Composants Spécifiques
- **DashboardWidget** : Composants modulables (chart, list, calendar)
- **ProjectTimeline** : Historique versions avec annotations
- **AnnotationTool** : Outil de commentaires sur PDFs/images
- **KanbanBoard** : Gestion projets agile
- **AdminPanel** : Interface administration complète
- **UserProfile** : Profils avec portfolios et réseaux

## Palette & Typographie

### Couleurs
```css
--bg-main: #F7F4EF;      /* Blanc cassé élégant */
--bg-secondary: #FFFFFF; /* Blanc pur pour contenu */
--text-primary: #2C2A29; /* Noir charbonneux */
--text-secondary: #666666; /* Gris pour secondary */
--accent-primary: #C8612E; /* Orange terre cuite */
--accent-secondary: #8B7355; /* Beige architectural */
--border: #E5E5E5;       /* Bordures subtiles */
--success: #10B981;      /* Vert validation */
--warning: #F59E0B;      /* Orange avertissement */
--error: #EF4444;        /* Rouge erreur */
```

### Typographie
- **Titres** : Merriweather (serif traditionnel)
- **Corps** : Inter (sans-serif moderne)
- **UI** : Inter Medium pour boutons et labels
- **Mono** : Pour code et données techniques

## Animations & Interactions

### Micro-interactions
- **Hover widgets** : Subtle scale + shadow
- **Drag & drop** : Smooth transitions pour réordonnancement
- **Loading states** : Skeletons contextuels
- **Notifications** : Toast animations fluides

### Animations Page
- **Page transitions** : Slide transitions entre sections
- **Modal openings** : Scale + backdrop blur
- **List animations** : Stagger pour listes dynamiques

## Backgrounds & Textures

### Patterns
- **Subtle grid** : Structure architecturale discrète
- **Paper texture** : Évocation documents académiques
- **Gradient overlays** : Selon type de contenu

### Images
- **Institutionnelles** : Haute qualité, composition soignée
- **Projets** : Documentation professionnelle
- **Équipe** : Portraits formels et décontractés

## Composants & États

### Dashboard Widget
```jsx
<div className="dashboard-widget">
  <div className="widget-header">
    <h3>Projets Actifs</h3>
    <div className="widget-actions">
      <button className="widget-settings">⚙️</button>
      <button className="widget-refresh">🔄</button>
    </div>
  </div>
  <div className="widget-content">
    <div className="project-list">
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <div className="project-info">
            <h4>{project.title}</h4>
            <span className="project-status">{project.status}</span>
          </div>
          <div className="project-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${project.progress}%`}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

### Project Timeline
```jsx
<div className="project-timeline">
  <div className="timeline-header">
    <h2>Historique du Projet</h2>
    <button className="add-version-btn">+ Nouvelle Version</button>
  </div>
  <div className="timeline-content">
    {versions.map((version, index) => (
      <div key={version.id} className="timeline-item">
        <div className="timeline-marker">
          <div className="version-number">{index + 1}</div>
        </div>
        <div className="timeline-content">
          <div className="version-header">
            <h3>Version {version.number}</h3>
            <span className="version-date">{version.createdAt}</span>
          </div>
          <p>{version.description}</p>
          <div className="version-files">
            {version.files.map(file => (
              <div key={file.id} className="file-item">
                <span className="file-icon">📄</span>
                <span className="file-name">{file.name}</span>
                <button className="download-btn">↓</button>
              </div>
            ))}
          </div>
          <div className="version-comments">
            {version.comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-text">{comment.text}</div>
                <div className="comment-date">{comment.createdAt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
```

## Schéma de Données

### Projet
```json
{
  "id": "uuid",
  "title": "Campus Durable ESSACA",
  "description": "Conception d'un campus éco-responsable",
  "ownerId": "user-uuid",
  "status": "in_progress",
  "category": "Architecture durable",
  "tags": ["écologie", "campus", "innovation"],
  "createdAt": "2024-01-15T09:00:00Z",
  "updatedAt": "2024-12-01T14:30:00Z",
  "deadline": "2025-06-30T23:59:00Z",
  "versions": [
    {
      "id": "version-1",
      "number": 1,
      "description": "Esquisse initiale et analyse site",
      "createdAt": "2024-01-15T09:00:00Z",
      "files": [
        {
          "id": "file-1",
          "name": "analyse-site.pdf",
          "url": "files/analyse-site.pdf",
          "type": "pdf",
          "size": 2048576
        }
      ],
      "comments": [
        {
          "id": "comment-1",
          "author": "Pr. Bennani",
          "text": "Excellente analyse du contexte urbain",
          "createdAt": "2024-01-16T11:00:00Z"
        }
      ]
    }
  ],
  "team": [
    {
      "userId": "user-uuid-2",
      "role": "Architecte principal",
      "permissions": ["edit", "comment", "publish"]
    }
  ],
  "reviews": [
    {
      "id": "review-1",
      "reviewerId": "user-uuid-3",
      "status": "approved",
      "comments": "Projet validé pour la phase 2",
      "reviewedAt": "2024-02-01T16:00:00Z"
    }
  ]
}
```

### Utilisateur
```json
{
  "id": "uuid",
  "email": "ahmed.bennani@essaca.ma",
  "profile": {
    "firstName": "Ahmed",
    "lastName": "Bennani",
    "avatar": "avatars/ahmed.jpg",
    "title": "Professeur d'Architecture",
    "bio": "Spécialiste en architecture durable...",
    "department": "Architecture & Urbanisme",
    "joinedAt": "2015-09-01"
  },
  "roles": ["teacher", "researcher"],
  "permissions": {
    "projects": ["create", "edit", "review", "publish"],
    "users": ["view"],
    "content": ["manage"]
  },
  "stats": {
    "projectsCreated": 12,
    "projectsReviewed": 45,
    "publications": 8,
    "studentsSupervised": 23
  },
  "social": {
    "linkedin": "https://linkedin.com/in/ahmedbennani",
    "researchgate": "https://researchgate.net/profile/AhmedBennani"
  }
}
```

## Stack Technique

### Frontend
- **Framework** : Next.js 14+ avec App Router
- **State** : Zustand pour state management complexe
- **UI** : Radix UI + Tailwind pour composants accessibles
- **Charts** : Recharts pour visualisations

### Backend & Data
- **Database** : PostgreSQL avec Supabase
- **Auth** : Supabase Auth avec rôles
- **Storage** : Supabase Storage pour fichiers
- **Real-time** : Supabase Realtime pour collaborations

### Performance
- **ISR/SSR** : Pages publiques pré-rendues
- **Edge functions** : API routes optimisées
- **Caching** : Redis pour sessions et données
- **CDN** : Distribution globale optimisée

## Accessibilité

### Standards
- **WCAG 2.1 AAA** : Conformité maximale
- **Navigation** : Raccourcis clavier complets
- **Multimodal** : Support vocal et gestuel
- **Personnalisation** : Thèmes et layouts adaptables

### Fonctionnalités
- **Focus management** : Gestion focus complexe
- **Live regions** : Annonces changements dynamiques
- **Skip links** : Navigation rapide sections
- **High contrast** : Mode contraste élevé

## Fonctionnalités Spéciales

### 1. Workflow Soumission-Évaluation
- Pipeline automatisé : Draft → Review → Published
- Notifications temps réel aux intervenants
- Historique complet des modifications
- Exports automatiques pour jurys

### 2. Annotation Collaborative
- Outil de commentaires sur PDFs/images
- Annotations vocales et texte
- Résolutions de commentaires
- Exports avec annotations

### 3. Dashboard Analytics
- KPIs personnalisables par rôle
- Graphiques temps réel
- Rapports automatisés
- Alertes configurables

### 4. Mode Open Day
- Transformation interface visiteur
- Visite guidée immersive
- Statistiques visite temps réel
- QR codes vers ressources détaillées

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (sidebar cachée, navigation bottom)
- **Tablet** : 768px - 1024px (sidebar compacte)
- **Desktop** : > 1024px (layout complet)

### Adaptations
- **Widgets** : Réorganisation automatique selon écran
- **Navigation** : Menu adaptatif avec recherche
- **Modals** : Toujours fullscreen mobile
- **Tables** : Scroll horizontal ou cards empilées

## Idées d'Amélioration

### Fonctionnalités Futures
- **IA assistante** : Suggestions de projets similaires
- **Blockchain** : Certification projets et diplômes
- **VR/AR** : Visites virtuelles campus/projets
- **Marketplace** : Échange services entre acteurs

### Intégrations
- **Microsoft Teams** : Collaboration en temps réel
- **Moodle** : Intégration LMS existant
- **ORCID** : Profils chercheurs académiques
- **DOI** : Références publications

---

*Plateforme hybride complète pour l'écosystème académique et professionnel ESSACA.*
