# Style 3 — Gallery / Portfolio Centré

## Concept
Priorité aux visuels — layout masonry ou grid pour montrer maquettes, photos, rendus. Convient aux portfolios d'étudiants, expositions ou publications visuelles. Interface immersive centrée sur la découverte visuelle.

## Objectifs
- Expositer les travaux de manière visuellement impactante
- Faciliter la découverte et l'exploration de projets
- Offrir une expérience immersive de galerie
- Supporter le partage et l'export de portfolios

## Ambiance & État d'esprit
- **Atmosphère** : Immersive, artistique, inspirante
- **Émotion** : Admiration, créativité, découverte, fierté
- **Public cible** : Étudiants, professionnels, recruteurs, grand public

## Pages & Fonctionnalités Clés

### 1. Galerie Principale (Masonry Layout)
- **Grid adaptatif** : Masonry responsive avec images de différentes tailles
- **Filtres avancés** : Par année, type, matériaux, auteur, tags
- **Tri intelligent** : Par popularité, récence, alphabétique
- **Mode fullscreen** : Vue immersive sans distractions

### 2. Pages Projet (Dossier Visuel)
- **Lightbox enrichie** : Images HD avec détails (auteurs, matériaux, contexte)
- **Navigation fluide** : Défilement horizontal/vertical dans le projet
- **Informations détaillées** : Descriptions, processus, contraintes
- **Téléchargements** : PDFs, plans, rendus haute résolution

### 3. Mode Exposition (Plein Écran)
- **Diaporama automatique** : Présentation guidée de projets
- **Contrôles tactiles** : Navigation intuitive sur écrans tactiles
- **Informations overlays** : Popups contextuelles sans casser l'immersion
- **Mode musée** : Idéal pour open days et présentations

### 4. Soumission de Projets
- **Upload guidé** : Interface intuitive d'upload multiple
- **Préparation automatique** : Génération de vignettes et miniatures
- **Métadonnées** : Formulaire pour descriptions, tags, auteurs
- **Validation** : Contrôle qualité avant publication

### 5. Profils Étudiants
- **Portfolio personnel** : Collection organisée de travaux
- **Statistiques** : Vues, likes, téléchargements
- **Partage** : Liens directs vers portfolios complets

## Layout & Wireframe

### Structure Générale
```
┌─────────────────────────────────────────────────┐
│ Header compact + barre de filtres collante        │
├─────────────────────────────────────────────────┤
│ Galerie masonry pleine largeur                    │
│ • Images de tailles variables                     │
│ • Hover pour aperçus rapides                     │
│ • Click ouvre lightbox détaillé                   │
├─────────────────────────────────────────────────┤
│ Footer minimal avec crédits et liens sociaux      │
└─────────────────────────────────────────────────┘
```

### Composants Spécifiques
- **MasonryGrid** : Layout adaptatif avec colonnes dynamiques
- **ImageCard** : Carte avec orientation automatique et métadonnées
- **Lightbox** : Modal plein écran avec carousel et détails
- **ImageUploader** : Drag & drop avec preview et crop
- **FilterBar** : Filtres collants avec catégories et recherche
- **ProjectSheet** : Page détaillée avec layout optimisé

## Palette & Typographie

### Couleurs
```css
--bg-main: #FFFFFF;        /* Blanc pur pour focus images */
--bg-secondary: #F8F9FA;   /* Gris très clair */
--text-primary: #000000;   /* Noir profond pour titres */
--text-secondary: #666666; /* Gris pour descriptions */
--accent-primary: #007AFF; /* Bleu iOS pour CTAs */
--accent-secondary: #FF9500; /* Orange pour highlights */
--border: #E5E5E5;         /* Bordures subtiles */
--overlay: rgba(0,0,0,0.7); /* Overlay lightbox */
```

### Typographie
- **Titres** : SF Pro Display ou Inter Bold (sans-serif moderne)
- **Corps** : Inter Regular (haute lisibilité)
- **Caption** : Inter Small (pour légendes images)
- **Mono** : Pour métadonnées techniques

## Animations & Interactions

### Micro-interactions
- **Hover images** : Scale subtil + overlay info
- **Lightbox transition** : Scale + fade smooth depuis la miniature
- **Filter application** : Transition fluide avec shuffle des éléments
- **Loading images** : Blur-to-sharp reveal

### Animations Page
- **Grid loading** : Cascade progressive des images
- **Scroll reveal** : Animation au scroll pour performance
- **Modal transitions** : Transitions fluides entre vues

## Backgrounds & Textures

### Patterns
- **Minimal grid** : Lignes très subtiles pour structure
- **Subtle noise** : Texture papier pour authenticité
- **Dynamic gradients** : Selon le type de contenu affiché

### Images
- **Qualité** : Ultra haute résolution pour galeries
- **Format** : WebP/AVIF avec fallbacks
- **Optimisation** : Srcset automatique selon device

## Composants & États

### Masonry Card
```jsx
<div className="masonry-item">
  <div className="image-container">
    <img
      src="project-image.jpg"
      alt="Maison passive - Façade nord"
      loading="lazy"
    />
    <div className="image-overlay">
      <div className="overlay-content">
        <h3>Maison Passive Atlas</h3>
        <p>Étudiants M2 Architecture Durable</p>
        <div className="image-tags">
          <span className="tag">Bois local</span>
          <span className="tag">Énergie passive</span>
        </div>
      </div>
    </div>
  </div>
  <div className="item-meta">
    <span className="author">Ahmed Bennani</span>
    <span className="year">2024</span>
    <span className="views">1.2K vues</span>
  </div>
</div>
```

### Lightbox
```jsx
<div className="lightbox-overlay">
  <div className="lightbox-container">
    <button className="lightbox-close">×</button>
    <div className="lightbox-image">
      <img src="full-image.jpg" alt="Image détaillée" />
    </div>
    <div className="lightbox-info">
      <h2>Titre du Projet</h2>
      <div className="lightbox-meta">
        <span>Auteur: Étudiant X</span>
        <span>Année: 2024</span>
        <span>Matériaux: Pierre, Bois</span>
      </div>
      <p>Description détaillée du projet...</p>
      <div className="lightbox-actions">
        <button>Télécharger HD</button>
        <button>Partager</button>
      </div>
    </div>
  </div>
</div>
```

## Schéma de Données

### Projet Galerie
```json
{
  "id": "uuid",
  "title": "Habitat bioclimatique Atlas",
  "slug": "habitat-bioclimatique-atlas",
  "description": "Projet de maison passive...",
  "category": "Habitat durable",
  "year": 2024,
  "authors": [
    {
      "name": "Ahmed Bennani",
      "role": "Étudiant M2",
      "avatar": "url-to-avatar"
    }
  ],
  "tags": ["bioclimatique", "bois local", "énergie passive"],
  "materials": ["Pierre locale", "Bois de cèdre", "Isolation naturelle"],
  "location": "Montagnes de l'Atlas",
  "images": [
    {
      "id": "img1",
      "url": "façade-nord.jpg",
      "thumbnail": "façade-nord-thumb.jpg",
      "caption": "Façade nord avec isolation thermique",
      "alt": "Façade en pierre avec menuiseries bois",
      "width": 3840,
      "height": 2160,
      "format": "Vue 3D",
      "role": "cover"
    }
  ],
  "documents": [
    {
      "type": "plan",
      "url": "plans-architecturaux.pdf",
      "title": "Plans complets"
    }
  ],
  "status": "published",
  "featured": true,
  "views": 1250,
  "likes": 45
}
```

### Soumission
```json
{
  "id": "uuid",
  "projectId": "project-uuid",
  "studentId": "student-uuid",
  "title": "Titre temporaire",
  "images": ["temp-upload-1.jpg", "temp-upload-2.jpg"],
  "metadata": {
    "category": "Architecture",
    "year": "2024",
    "materials": ["Béton", "Verre"],
    "description": "Description temporaire"
  },
  "status": "draft",
  "submittedAt": "2024-12-01T10:00:00Z",
  "reviewedBy": null,
  "approvedAt": null
}
```

## Stack Technique

### Frontend
- **Framework** : Next.js 14+ avec App Router
- **Styling** : Tailwind CSS + CSS Grid pour masonry
- **Images** : Next.js Image + react-photo-gallery
- **Upload** : react-dropzone + Cloudinary

### Backend & Data
- **Storage** : Cloudinary ou Supabase Storage
- **Database** : PostgreSQL avec optimisation images
- **API** : RESTful pour métadonnées
- **CDN** : Distribution globale des images

### Performance
- **Lazy loading** : Intersection Observer pour masonry
- **Progressive loading** : Images par résolution croissante
- **Caching** : Service Worker pour galeries offline
- **Optimisation** : WebP/AVIF automatique

## Accessibilité

### Standards
- **WCAG 2.1 AA** : Conformité complète
- **Images** : Alt texts détaillés obligatoires
- **Navigation** : Clavier pour lightbox et galeries
- **Motion** : Réduction mouvement respectée

### Fonctionnalités
- **Screen readers** : Descriptions complètes des images
- **Zoom** : Layout fonctionnel à tous les niveaux de zoom
- **Contraste** : Mode haute contraste disponible
- **Touch** : Navigation tactile optimisée

## Fonctionnalités Spéciales

### 1. Lightbox Enrichie
- Navigation clavier (flèches, espace, échap)
- Zoom/pan sur images haute résolution
- Partage direct vers réseaux sociaux
- Téléchargement avec watermark optionnel

### 2. Curation Éducative
- Sélections thématiques par enseignants
- Contextes pédagogiques pour chaque projet
- Liens vers ressources théoriques
- Commentaires d'experts intégrés

### 3. Export Portfolio
- Génération PDF automatique de portfolios
- Mise en page optimisée impression
- Sélection personnalisée de projets
- QR codes vers versions web

### 4. Mode Exposition
- Diaporama automatique avec timing personnalisable
- Informations contextuelles overlays
- Statistiques de visite en temps réel
- Mode plein écran immersif

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (1-2 colonnes, lightbox fullscreen)
- **Tablet** : 768px - 1024px (2-3 colonnes)
- **Desktop** : > 1024px (3-4 colonnes dynamiques)

### Adaptations
- **Masonry** : Colonnes adaptatives selon écran
- **Lightbox** : Toujours fullscreen, contrôles adaptés
- **Filtres** : Overlay mobile, barre sticky desktop
- **Upload** : Interface simplifiée mobile

## Idées d'Amélioration

### Fonctionnalités Futures
- **IA tagging** : Reconnaissance automatique des matériaux
- **VR gallery** : Visites virtuelles 3D des projets
- **Collaboration** : Annotations collaboratives sur projets
- **NFT** : Tokenisation de projets exceptionnels

### Intégrations
- **Adobe Creative Suite** : Import direct depuis Photoshop
- **SketchUp** : Intégration modèles 3D
- **Instagram API** : Import automatique de posts
- **Printful** : Commande de tirages photo

---

*Style gallery immersif pour portfolios architecturaux visuellement impactants.*
