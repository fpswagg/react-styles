# Style 4 — Tropical Vernacular / Matériaux Locaux

## Concept
Mettre en avant le lien au territoire et aux matériaux africains. Approche immersive, texturée, didactique : expliquer les techniques vernaculaires et montrer leurs applications contemporaines. Design chaleureux et authentique.

## Objectifs
- Sensibiliser à l'architecture vernaculaire africaine
- Présenter les projets durables utilisant matériaux locaux
- Montrer les ateliers communautaires et formations
- Créer un pont entre tradition et modernité

## Ambiance & État d'esprit
- **Atmosphère** : Chaleureuse, authentique, pédagogique
- **Émotion** : Respect des traditions, fierté culturelle, curiosité
- **Public cible** : Étudiants africains, professionnels locaux, touristes culturels

## Pages & Fonctionnalités Clés

### 1. Approche & Philosophie
- **Hero immersif** : Photos de paysages et architectures locales
- **Manifeste** : Explication de l'approche pédagogique
- **Carte interactive** : Répartition des projets par région
- **Timeline historique** : Évolution des techniques vernaculaires

### 2. Matériaux (Fiches Techniques)
- **Catalogue matériaux** : Bois, pierre, terre, végétal
- **Fiches détaillées** : Propriétés, origines, utilisations
- **Galerie d'exemples** : Photos et schémas techniques
- **Calculateur** : Outil d'estimation de quantités

### 3. Projets Locaux (Case Studies)
- **Galerie projets** : Before/after avec matériaux locaux
- **Études de cas** : Détails techniques et impacts sociaux
- **Témoignages** : Retours d'habitants et artisans
- **Visites virtuelles** : Tours 360° des réalisations

### 4. Workshops & Formations
- **Planning ateliers** : Calendrier des sessions pratiques
- **Inscription** : Formulaires d'adhésion aux workshops
- **Galerie travaux** : Productions des participants
- **Ressources pédagogiques** : Guides et tutoriels PDF

### 5. Ressources Pédagogiques
- **Bibliothèque** : Documents, vidéos, podcasts
- **Outils didactiques** : Quiz, exercices pratiques
- **Communauté** : Forum d'échange entre praticiens

## Layout & Wireframe

### Structure Générale
```
┌─────────────────────────────────────────────────┐
│ Header avec motifs africains                      │
├─────────────────────────────────────────────────┤
│ Hero avec photo couleur + section matériaux       │
│ focus sous forme de cartes texturées              │
├─────────────────────────────────────────────────┤
│ Fiches matériaux : composition, avantages,        │
│ exemples de projets                              │
├─────────────────────────────────────────────────┤
│ Footer avec motifs traditionnels                 │
└─────────────────────────────────────────────────┘
```

### Composants Spécifiques
- **MaterialCard** : Carte avec texture et propriétés
- **CaseStudy** : Étude détaillée avec before/after
- **MapInteractive** : Carte des interventions régionales
- **WorkshopCard** : Planning et inscription ateliers
- **ResourceLibrary** : Bibliothèque organisée par thèmes

## Palette & Typographie

### Couleurs
```css
--bg-main: #F0E6DA;       /* Crème sable */
--bg-secondary: #CFA07A;  /* Argile */
--text-primary: #2C1810;  /* Terre foncée */
--text-secondary: #8A5A3F; /* Bois foncé */
--accent-primary: #D2691E; /* Terracotta */
--accent-secondary: #8B4513; /* Marron bois */
--border: #D2B48C;        /* Beige */
--card-bg: #F5F5DC;       /* Blanc cassé */
```

### Typographie
- **Titres** : Source Serif Pro (serif élégant)
- **Corps** : Inter (sans-serif moderne)
- **Accent** : Pour citations et témoignages
- **Technique** : Monospace pour données techniques

## Animations & Interactions

### Micro-interactions
- **Hover matériaux** : Révélation texture et propriétés
- **Scroll parallax** : Paysages qui défilent lentement
- **Reveal animations** : Éléments qui apparaissent progressivement
- **Texture transitions** : Changements fluides de motifs

### Animations Page
- **Loading states** : Animations de construction (empilement terre)
- **Interactive demos** : Simulations de techniques vernaculaires
- **Photo transitions** : Transitions fluides entre galeries

## Backgrounds & Textures

### Patterns
- **Motifs africains** : Géométriques stylisés et organiques
- **Textures naturelles** : Grain bois, terre, végétal
- **Gradients terre** : Transitions douces évoquant paysages

### Images
- **Style** : Photos couleur authentiques, non retouchées
- **Contexte** : Toujours avec environnement local
- **Qualité** : Haute résolution pour détails matériaux

## Composants & États

### Material Card
```jsx
<div className="material-card">
  <div className="material-texture">
    <div className="texture-overlay"></div>
    <img src="bois-cedre-texture.jpg" alt="Texture bois de cèdre" />
  </div>
  <div className="material-info">
    <h3>Bois de Cèdre</h3>
    <div className="material-properties">
      <span className="property">Résistant à l'humidité</span>
      <span className="property">Durabilité 50+ ans</span>
      <span className="property">Origine locale</span>
    </div>
    <p>Description des caractéristiques et utilisations...</p>
    <div className="material-examples">
      <img src="example1.jpg" alt="Exemple utilisation" />
      <img src="example2.jpg" alt="Autre réalisation" />
    </div>
  </div>
</div>
```

### Case Study
```jsx
<div className="case-study">
  <div className="study-comparison">
    <div className="before-after">
      <div className="image-container">
        <img src="before.jpg" alt="Avant rénovation" />
        <span className="label">AVANT</span>
      </div>
      <div className="image-container">
        <img src="after.jpg" alt="Après rénovation" />
        <span className="label">APRÈS</span>
      </div>
    </div>
  </div>
  <div className="study-content">
    <h2>Rénovation École Primaire Aït Benhaddou</h2>
    <div className="study-meta">
      <span className="location">Village Aït Benhaddou</span>
      <span className="year">2023</span>
      <span className="materials">Pierre locale, Bois de cèdre</span>
    </div>
    <p>Description détaillée du projet...</p>
    <div className="study-impact">
      <div className="impact-stat">
        <span className="value">85%</span>
        <span className="label">Réduction coût énergie</span>
      </div>
      <div className="impact-stat">
        <span className="value">200</span>
        <span className="label">Élèves bénéficiant</span>
      </div>
    </div>
  </div>
</div>
```

## Schéma de Données

### Matériau
```json
{
  "id": "uuid",
  "name": "Bois de Cèdre de l'Atlas",
  "category": "Bois",
  "origin": "Montagnes de l'Atlas",
  "properties": {
    "density": "0.45 g/cm³",
    "durability": "Classe 2 (50+ ans)",
    "resistance": "Excellente à l'humidité",
    "availability": "Local - rayon 100km"
  },
  "characteristics": [
    "Résiste aux termites",
    "Parfum naturel agréable",
    "Teinte chaude qui patine",
    "Travail facile à la main"
  ],
  "uses": [
    "Charpente",
    "Menuiserie intérieure",
    "Ébénisterie",
    "Construction traditionnelle"
  ],
  "sustainability": {
    "renewable": true,
    "carbonFootprint": "2.3 kg CO2/m³",
    "certification": "PEFC",
    "harvesting": "Gestion durable"
  },
  "images": [
    {
      "url": "texture-close.jpg",
      "caption": "Texture de surface",
      "alt": "Grain fin du bois de cèdre"
    }
  ],
  "projects": ["project-uuid-1", "project-uuid-2"]
}
```

### Projet
```json
{
  "id": "uuid",
  "title": "École Durable Tamegroute",
  "type": "Éducation",
  "location": {
    "village": "Tamegroute",
    "region": "Drâa-Tafilalet",
    "coordinates": [30.123, -5.456]
  },
  "materials": [
    {
      "materialId": "bois-cedre",
      "quantity": 15,
      "unit": "m³",
      "purpose": "Charpente et menuiseries"
    }
  ],
  "team": [
    {
      "role": "Architecte",
      "name": "Ahmed Alaoui",
      "organization": "ESSACA"
    }
  ],
  "timeline": {
    "startDate": "2023-03-01",
    "endDate": "2023-09-15",
    "phases": ["Étude", "Construction", "Finitions"]
  },
  "impact": {
    "energySavings": "75%",
    "costReduction": "40%",
    "beneficiaries": 150,
    "sustainability": "A++"
  },
  "images": {
    "before": "construction-site.jpg",
    "during": ["phase1.jpg", "phase2.jpg"],
    "after": "completed-building.jpg"
  },
  "testimonials": [
    {
      "person": "Directeur d'école",
      "quote": "L'ambiance est parfaite pour les enfants...",
      "photo": "director.jpg"
    }
  ]
}
```

## Stack Technique

### Frontend
- **Framework** : Next.js 14+ avec ISR
- **Styling** : Tailwind CSS avec custom textures
- **Animations** : Framer Motion pour interactions douces
- **Maps** : React Leaflet pour cartes interactives

### Backend & Data
- **CMS** : Strapi pour contenu pédagogique
- **Database** : PostgreSQL avec extensions géospatiales
- **Storage** : Supabase avec optimisation images
- **API** : RESTful avec cache Redis

### Performance
- **Static generation** : Pages projets pré-rendues
- **Image optimization** : Formats modernes automatiques
- **CDN** : Distribution Afrique optimisée
- **Offline** : PWA pour ressources pédagogiques

## Accessibilité

### Standards
- **WCAG 2.1 AA** : Conformité internationale
- **Multilingue** : Français + langues locales
- **Images** : Descriptions culturelles sensibles
- **Performance** : Chargement rapide même basse connexion

### Fonctionnalités
- **Offline** : Contenu pédagogique accessible hors ligne
- **Audio** : Descriptions audio pour analphabètes
- **Touch** : Interface adaptée écrans tactiles
- **Voice** : Commandes vocales pour navigation

## Fonctionnalités Spéciales

### 1. Atelier Virtuel
- Tutoriel animé de construction en terre
- Étapes interactives avec feedback
- Quiz intégré pour validation apprentissage
- Ressources téléchargeables

### 2. Calculateur d'Empreinte
- Outil simple d'estimation carbone
- Base de données matériaux locaux
- Comparaisons scénarios
- Rapports PDF personnalisés

### 3. Carte des Savoir-Faire
- Géolocalisation des artisans locaux
- Fiches compétences par région
- Mise en relation projets/artisans
- Base de données collaborative

### 4. Bibliothèque Pédagogique
- Ressources classées par niveaux
- Exercices pratiques téléchargeables
- Vidéos de démonstration
- Forum d'échange communautaire

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (cartes empilées, navigation simplifiée)
- **Tablet** : 768px - 1024px (2 colonnes, sidebar compacte)
- **Desktop** : > 1024px (layout complet avec cartes larges)

### Adaptations
- **Textures** : Optimisées pour écrans rétina
- **Animations** : Désactivables sur mobile lent
- **Contenu** : Hiérarchisation selon device
- **Navigation** : Menu adaptatif avec icônes

## Idées d'Amélioration

### Fonctionnalités Futures
- **Blockchain traçabilité** : Certificats matériaux locaux
- **IA reconnaissance** : Identification automatique matériaux
- **Réalité augmentée** : Superposition techniques sur chantiers
- **Économie circulaire** : Marketplace matériaux recyclés

### Intégrations
- **Banque mondiale** : Projets développement durable
- **UNESCO** : Patrimoine culturel immatériel
- **ONG locales** : Partenariats communautaires
- **Universités** : Échanges académiques

---

*Style chaleureux célébrant les matériaux et savoir-faire africains traditionnels.*
