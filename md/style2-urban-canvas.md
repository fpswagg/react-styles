# Style 2 — Urban Canvas

## Concept
Design urbain/contemporain, dynamique, orienté vers actualités, événements, recherche et urbanisme. Idéal pour un portail d'actualité ou un laboratoire de recherche lié à l'école. Interface moderne et fonctionnelle avec une touche architecturale.

## Objectifs
- Communiquer efficacement les projets de recherche et d'innovation
- Présenter les événements et actualités de l'école
- Créer un hub d'actualité architectural et urbain
- Faciliter la découverte de contenus par thématiques

## Ambiance & État d'esprit
- **Atmosphère** : Dynamique urbaine, innovante, collaborative
- **Émotion** : Curiosité, engagement, modernité, communauté
- **Public cible** : Étudiants, chercheurs, professionnels urbains, grand public intéressé

## Pages & Fonctionnalités Clés

### 1. Accueil (Grid d'Actualités)
- **Hero dynamique** : Slider/carrousel d'articles importants
- **Grid d'actus** : Masonry layout avec articles, événements, projets
- **Filtres rapides** : Par catégorie, date, popularité
- **Sidebar** : Événements à venir, appels à projets

### 2. Articles & Publications
- **Articles détaillés** : Hero image + contenu riche
- **Mode lecture** : Interface épurée pour lecture confortable
- **Partage social** : Intégration réseaux sociaux
- **Commentaires** : Discussion communautaire

### 3. Événements (Calendrier Interactif)
- **Vue calendrier** : FullCalendar intégré
- **Liste événements** : Cards avec date, lieu, description
- **Inscription** : Formulaire simple d'inscription
- **Archives** : Événements passés consultables

### 4. Projets de Recherche
- **Grid projets** : Cards avec statut (en cours, terminé, publié)
- **Filtres avancés** : Par domaine, année, chercheur
- **Détails projet** : Équipe, publications, impacts

### 5. Ressources & Médias
- **Bibliothèque** : Documents PDF, vidéos, podcasts
- **Galerie médias** : Photos, vidéos d'événements
- **Recherche avancée** : Moteur de recherche intégré

## Layout & Wireframe

### Structure Générale
```
┌─────────────────────────────────────────────────┐
│ Header compact (logo + nav + recherche)           │
├─────────────────┬───────────────────────────────┤
│ Sidebar dynamic│ Content principal               │
│ • Événements   │ • Hero article/principal         │
│ • Calls        │ • Grid masonry articles         │
│ • Newsletter   │ • Pagination/Filtres            │
└─────────────────┴───────────────────────────────┘
```

### Composants Spécifiques
- **ArticleCard** : Miniature + titre + excerpt + métadonnées
- **EventCard** : Date glue + titre + lieu + CTA inscription
- **TagFilter** : Chips interactifs pour filtrage
- **SearchBar** : Recherche instantanée avec suggestions
- **NewsletterSignup** : Formulaire d'abonnement
- **CalendarWidget** : Mini-calendrier des événements

## Palette & Typographie

### Couleurs
```css
--bg-main: #0F1113;         /* Très sombre urbain */
--bg-secondary: #FFFFFF;    /* Blanc contrasté */
--text-primary: #FFFFFF;    /* Blanc sur sombre */
--text-secondary: #C7CCD1;  /* Gris clair */
--accent-primary: #00D4FF;  /* Turquoise cyber */
--accent-secondary: #FF6B6B; /* Rouge urbain */
--border: #333333;          /* Bordures sombres */
--card-bg: #1A1D1F;         /* Gris très foncé */
```

### Typographie
- **Titres** : Montserrat Bold (sans-serif contemporain)
- **Corps** : Inter Regular (haute lisibilité)
- **Accent** : Inter Medium pour métadonnées
- **Mono** : Pour codes/dates techniques

## Animations & Interactions

### Micro-interactions
- **Hover cards** : Overlay texte + scale subtil (1.02)
- **Transitions fluides** : Entre sections et états (0.25s ease)
- **Loading states** : Skeletons pour contenu dynamique
- **Scroll animations** : Reveal progressif des éléments

### Animations Page
- **Grid loading** : Stagger animation des cards
- **Filtrage** : Transition fluide avec fade des éléments
- **Modal ouverture** : Scale depuis le centre + backdrop blur

## Backgrounds & Textures

### Patterns
- **Grid urbain** : Lignes subtiles évoquant plans architecturaux
- **Noise digital** : Texture légère pour éviter la platitude
- **Gradient dynamique** : Selon l'heure/type de contenu

### Images
- **Style** : Photos urbaines, architecturale moderne
- **Format** : WebP avec fallbacks optimisés
- **Lazy loading** : Avec blur-up effect

## Composants & États

### Article Card
```jsx
<div className="article-card">
  <div className="card-image">
    <img src="article-cover.jpg" alt="Titre article" />
    <div className="card-category">Recherche</div>
  </div>
  <div className="card-content">
    <h3>Urbanisme durable : enjeux et perspectives</h3>
    <p>Analyse des défis urbains contemporains...</p>
    <div className="card-meta">
      <span className="date">15 déc 2024</span>
      <span className="author">Dr. Fatima Alaoui</span>
      <span className="read-time">5 min</span>
    </div>
  </div>
</div>
```

### Navigation
```jsx
<nav className="urban-nav">
  <div className="nav-brand">
    <h1>ESSACA</h1>
    <span className="nav-subtitle">Urban Research Hub</span>
  </div>
  <div className="nav-search">
    <input type="search" placeholder="Rechercher..." />
    <button className="search-btn">🔍</button>
  </div>
  <ul className="nav-menu">
    <li><a href="/" className="active">Actualités</a></li>
    <li><a href="/events">Événements</a></li>
    <li><a href="/research">Recherche</a></li>
    <li><a href="/resources">Ressources</a></li>
  </ul>
</nav>
```

## Schéma de Données

### Article
```json
{
  "id": "uuid",
  "title": "Smart Cities : l'architecture au service de l'urbanisme",
  "slug": "smart-cities-architecture-urbanisme",
  "content": "Contenu complet en markdown...",
  "excerpt": "Résumé court pour les previews",
  "cover": "url-to-cover-image",
  "category": "Urbanisme",
  "tags": ["smart cities", "iot", "durabilité"],
  "author": {
    "name": "Dr. Fatima Alaoui",
    "role": "Chercheuse en urbanisme",
    "avatar": "url-to-avatar"
  },
  "publishedAt": "2024-12-15T10:00:00Z",
  "readTime": 8,
  "featured": true,
  "status": "published"
}
```

### Événement
```json
{
  "id": "uuid",
  "title": "Colloque International d'Architecture",
  "description": "Deux jours de conférences...",
  "startDate": "2025-01-15T09:00:00Z",
  "endDate": "2025-01-16T18:00:00Z",
  "location": {
    "name": "Auditorium ESSACA",
    "address": "123 Rue de l'Architecture",
    "city": "Marrakech"
  },
  "type": "Conférence",
  "capacity": 200,
  "registrationRequired": true,
  "registrationDeadline": "2025-01-10T23:59:00Z",
  "speakers": [
    {
      "name": "Pr. Ahmed Bennani",
      "bio": "Directeur de recherche",
      "photo": "url-to-photo"
    }
  ],
  "program": [
    {
      "time": "09:00",
      "title": "Accueil et café",
      "type": "pause"
    }
  ]
}
```

## Stack Technique

### Frontend
- **Framework** : Next.js 14+ avec App Router
- **Styling** : Tailwind CSS avec design system
- **Animations** : Framer Motion pour interactions
- **State** : Zustand ou Redux Toolkit

### Backend & Data
- **CMS** : Sanity ou Strapi headless
- **Database** : PostgreSQL via Supabase
- **Search** : Algolia ou Typesense
- **Calendar** : FullCalendar React

### Performance
- **ISR** : Pour pages d'articles statiques
- **Edge** : Functions pour recherche temps réel
- **CDN** : Optimisation images automatiques
- **Analytics** : Plausible ou Vercel Analytics

## Accessibilité

### Standards
- **WCAG 2.1 AA** : Conformité complète
- **Navigation** : Skip links, focus management
- **Mode sombre** : Contraste élevé maintenu
- **Responsive** : Touch targets adaptés

### Fonctionnalités
- **Clavier** : Navigation complète au clavier
- **Screen readers** : ARIA labels, live regions
- **Réduction mouvement** : Animations désactivables
- **Haute contraste** : Mode spécial disponible

## Fonctionnalités Spéciales

### 1. Dossiers Thématiques
- Compilation d'articles + projets + ressources
- Navigation transversale par sujets
- Export PDF de dossiers complets

### 2. Podcast/Playlist Intégré
- Player audio/vidéo intégré
- Interviews d'enseignants et professionnels
- Visites virtuelles de chantiers

### 3. Mode Lecture Avancé
- Police ajustable, interlignage personnalisable
- Thème sombre/clair/sepia
- Barre de progression de lecture
- Bookmarks et notes personnelles

### 4. Recherche Intelligente
- Recherche full-text avec fuzzy matching
- Filtres par date, auteur, catégorie
- Suggestions automatiques
- Historique de recherche

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (sidebar cachée, stack vertical)
- **Tablet** : 768px - 1024px (sidebar compacte)
- **Desktop** : > 1024px (layout complet avec sidebar)

### Adaptations
- **Grid** : Masonry adaptatif selon écran
- **Navigation** : Menu hamburger mobile
- **Search** : Overlay plein écran mobile
- **Calendar** : Vue adaptée (liste mobile, calendrier desktop)

## Idées d'Amélioration

### Fonctionnalités Futures
- **Application PWA** : Mode hors ligne pour articles
- **IA recommandations** : Articles suggérés personnalisés
- **Live streaming** : Diffusion d'événements en direct
- **Collaborative editing** : Rédaction collaborative d'articles

### Intégrations
- **Mastodon/ActivityPub** : Fédération sociale
- **ORCID** : Intégration chercheurs académiques
- **DOI** : Références académiques standardisées
- **Webmention** : Commentaires inter-sites

---

*Style urbain dynamique pour un hub de recherche et d'actualité architectural.*