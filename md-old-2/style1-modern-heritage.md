# Style 1 — Modern Heritage

## Concept
Une déclinaison élégante, minimaliste et patrimoniale. On conserve le grand hero photographique en N&B, on ajoute des touches de terre et d'ocre pour rappeler les matériaux. L'accent est mis sur la narration institutionnelle et la mise en valeur de projets emblématiques.

## Objectifs
- Présenter l'école de manière solennelle mais chaleureuse
- Valoriser des projets phares et le patrimoine architectural
- Attirer des étudiants et partenaires institutionnels
- Maintenir un ton professionnel avec une touche d'humanité

## Ambiance & État d'esprit
- **Atmosphère** : Élégance sobre, respectueuse du patrimoine, approche contemporaine des traditions
- **Émotion** : Fierté institutionnelle, confiance, stabilité, inspiration créative
- **Public cible** : Étudiants en architecture, partenaires institutionnels, professionnels du secteur

## Pages & Fonctionnalités Clés

### 1. Accueil (Hero + Mission)
- **Hero** : Image N&B grand format avec titre large centré
- **Mission** : Section expliquant la philosophie de l'école
- **Projets à la une** : 3-4 projets emblématiques en cards larges

### 2. À propos (Philosophie + Équipe)
- **Philosophie institutionnelle** : Texte narratif sur les valeurs
- **Équipe** : Présentation des enseignants avec photos et spécialisations
- **Histoire** : Timeline interactive de l'école

### 3. Programmes & Cursus
- **Liste des formations** : Cards filtrables par niveau/durée
- **Détails pédagogiques** : Contenu, débouchés, prérequis

### 4. Projets (Grid Filtrable)
- **Galerie de projets** : Grid responsive avec filtres (année, type, matériaux)
- **Pages projet** : Détail complet avec images, descriptions, intervenants

### 5. Actualités & Événements
- **Articles** : Blog institutionnel avec catégories
- **Calendrier** : Événements avec inscriptions

### 6. Admissions & Contact
- **Formulaire d'admission** : Processus guidé
- **Contact** : Formulaire + coordonnées

## Layout & Wireframe

### Structure Générale
```
┌─────────────────────────────────────────────────┐
│ Header minimal (logo gauche, menu hamburger droite) │
├─────────────────────────────────────────────────┤
│ Hero full-width avec image N&B + titre large centré │
│ (ligne de slogan en italique coloré)              │
├─────────────────────────────────────────────────┤
│ Section «Projets à la une» : cards larges avec      │
│ vignette et court pitch                            │
├─────────────────────────────────────────────────┤
│ Footer : contact, mentions légales, liens réseaux   │
└─────────────────────────────────────────────────┘
```

### Composants Spécifiques
- **Hero** : Image de fond avec overlay texte, CTA principal
- **ProjectCard Large** : Image + titre + résumé + lien détail
- **Timeline** : Chronologie interactive avec événements clés
- **GalleryPreview** : Aperçu masonry des projets
- **CTA Simple** : Boutons d'action avec hover subtil
- **Modal Légendes** : Popup pour détails images

## Palette & Typographie

### Couleurs
```css
--bg-main: #F5F2EA;        /* Crème */
--text-primary: #22242A;   /* Anthracite */
--text-secondary: #666666; /* Gris moyen */
--accent-primary: #B65A2A; /* Terracotta */
--accent-secondary: #E6A41E; /* Ocre subtile */
--border: #DDD;            /* Bordures légères */
--card-bg: #FFFFFF;        /* Blanc pur */
```

### Typographie
- **Titres** : Playfair Display Semi-Bold ou Merriweather (serif élégant)
- **Corps** : Inter ou IBM Plex Sans (sans-serif lisible)
- **Tailles** : Hiérarchie claire avec espacement généreux

## Animations & Interactions

### Micro-interactions
- **Hover cards** : Léger zoom (1.02) + drop shadow doux
- **Hero scroll** : Parallaxe subtile sur l'image de fond
- **Transitions** : Transitions fluides entre sections (0.3s ease)
- **Loading** : Skeletons pour les images et contenus

### Animations Page
- **Entrée sections** : Fade-in depuis le bas avec stagger
- **Modal ouverture** : Scale + fade depuis le centre
- **Navigation** : Slide transitions entre pages

## Backgrounds & Textures

### Patterns
- **Subtil grain** : Texture papier léger pour l'authenticité
- **Lignes architecturales** : Motifs géométriques discrets
- **Overlay hero** : Gradient subtil pour lisibilité texte

### Images
- **Qualité** : Photos haute résolution, traitement N&B élégant
- **Format** : WebP/AVIF pour performance, fallback JPG
- **Lazy loading** : Chargement progressif avec blur placeholder

## Composants & États

### Cards Projet
```jsx
<div className="project-card-large">
  <div className="card-image">
    <img src="project-cover.jpg" alt="Titre projet" />
    <div className="card-overlay">
      <h3>Titre du Projet</h3>
      <p>Résumé court du projet architectural</p>
    </div>
  </div>
  <div className="card-meta">
    <span className="year">2024</span>
    <span className="type">Habitat</span>
    <span className="location">Marrakech</span>
  </div>
</div>
```

### Navigation
```jsx
<nav className="main-nav">
  <div className="nav-brand">
    <img src="logo.svg" alt="ESSACA" />
  </div>
  <button className="mobile-menu-toggle">
    <span></span><span></span><span></span>
  </button>
  <ul className="nav-menu">
    <li><a href="/">Accueil</a></li>
    <li><a href="/about">À propos</a></li>
    <li><a href="/programs">Programmes</a></li>
    <li><a href="/projects">Projets</a></li>
    <li><a href="/news">Actualités</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

## Schéma de Données

### Projet
```json
{
  "id": "uuid",
  "title": "Maison d'hôtes Dar Essalam",
  "slug": "dar-essalam",
  "cover": "url-to-image",
  "summary": "Rénovation d'une maison traditionnelle...",
  "description": "Description complète du projet",
  "year": 2024,
  "type": "Rénovation",
  "location": "Atlas Mountains",
  "materials": ["Pierre locale", "Bois de cèdre", "Zellige"],
  "authors": ["Pr. Ahmed Bennani", "Étudiants M2"],
  "images": [
    {
      "url": "image1.jpg",
      "caption": "Façade principale",
      "alt": "Façade en pierre de la maison d'hôtes"
    }
  ],
  "status": "published"
}
```

### Actualité
```json
{
  "id": "uuid",
  "title": "Journée Portes Ouvertes 2025",
  "content": "Contenu de l'article...",
  "excerpt": "Résumé court",
  "publishedAt": "2024-12-01",
  "category": "Événements",
  "cover": "url-to-image",
  "tags": ["portes ouvertes", "admissions"],
  "author": "Service Communication"
}
```

## Stack Technique

### Frontend
- **Framework** : Next.js 14+ (App Router)
- **Styling** : Tailwind CSS + CSS Modules
- **Animations** : Framer Motion
- **Images** : Next.js Image component

### Backend & Data
- **CMS** : Strapi ou Sanity pour contenu
- **Database** : PostgreSQL via Supabase
- **Storage** : Supabase Storage ou Cloudinary
- **Forms** : React Hook Form + validation

### Performance
- **Optimisation** : ISR/SSR pour pages statiques
- **CDN** : Vercel ou Netlify
- **Monitoring** : Vercel Analytics

## Accessibilité

### Standards
- **WCAG 2.1 AA** : Conformité niveau A et AA
- **Navigation** : Focus visible, ordre logique
- **Contenu** : Alt texts obligatoires, hiérarchie Hn
- **Couleurs** : Contraste minimum 4.5:1
- **Mobile** : Touch targets 44px minimum

### Fonctionnalités
- **Clavier** : Navigation complète au clavier
- **Screen readers** : Labels et descriptions appropriées
- **Réduction mouvement** : Respect des préférences utilisateur
- **Zoom** : Mise en page fonctionnelle jusqu'à 200%

## Fonctionnalités Spéciales

### 1. Timeline Interactive
- Chronologie de l'école avec événements marquants
- Navigation temporelle avec filtres par période
- Intégration de témoignages audio/visuels

### 2. Carte Interactive des Projets
- Visualisation géographique des réalisations
- Clustering par région/type de projet
- Popups avec informations détaillées

### 3. Mode Lecture pour Articles
- Interface épurée pour lecture confortable
- Typographie adaptée (taille, interlignage)
- Navigation chapitre par chapitre

### 4. Export Portfolio PDF
- Génération de portfolios étudiants
- Mise en page optimisée impression
- Téléchargement direct

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (menu hamburger, stack vertical)
- **Tablet** : 768px - 1024px (grid 2 colonnes)
- **Desktop** : > 1024px (layout complet)

### Adaptations
- **Hero** : Hauteur réduite mobile, texte centré
- **Cards** : Stack vertical mobile, grid responsive
- **Navigation** : Menu hamburger mobile
- **Images** : Aspect ratio adapté selon device

## Idées d'Amélioration

### Fonctionnalités Futures
- **Application mobile** : Companion app pour étudiants
- **VR/AR** : Visites virtuelles des projets
- **IA générative** : Suggestions de projets similaires
- **Communauté** : Forum étudiants/anciens

### Intégrations
- **Réseaux sociaux** : Partage seamless des projets
- **Google Analytics** : Suivi comportemental avancé
- **CRM** : Gestion prospects admissions
- **LMS** : Intégration plateforme pédagogique

---

*Style conçu pour valoriser le patrimoine architectural tout en restant moderne et accessible.*