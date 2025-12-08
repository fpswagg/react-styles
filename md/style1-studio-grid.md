# Proposition 1 — **Studio Grid** (Design modulaire, inspiration atelier d'architecture)

## 1. Résumé

Un dashboard modulaire qui évoque un atelier d'architecture : grandes cartes (cards) rappelant des plans, grille flexible, zones pour maquettes, projets et calendrier des rendus. Le formulaire est pensé comme une fiche projet (brief), simple à remplir par les étudiants et paramétrable par les professeurs.

## 2. Objectifs

* Collecter des briefs de projet complets (texte, images, fichiers DWG/PDF).
* Permettre la validation et le feedback enseignant (annotation sommaire, statut, note).
* Offrir une vue claire par atelier, promotion et statut.

## 3. Personas

* Étudiant (soumet un projet, suit l'état)
* Enseignant (corrige, commente, attribue note)
* Administrateur (gère ateliers, utilisateurs, deadlines)

## 4. Flux utilisateur (wireframe)

* Page d'accueil : vue par atelier (cards)
* Cliquer card → Page projet (détails + timeline + fichiers)
* Bouton "Soumettre un projet" → formulaire multi-étapes
* Enseignant : accès à panneau d'évaluation sur chaque projet

## 5. Formulaire (fiches projet) — structure proposée

**Étapes / Sections** :

1. Informations générales (titre, atelier, promotion, responsable)
2. Description & objectifs (champ texte riche — markdown)
3. Fichiers (upload multiple : images, pdf, dwg). Prévisualisation images.
4. Planning & date de rendu (date picker)
5. Confidentialité / partage (choix : public, promo, privé)
6. Bouton "Soumettre" + confirmation (modal)

**Champs clés**:

* `title: string` (required)
* `atelierId: uuid` (select)
* `students: string[]` (tags / mention)
* `description: markdown` (rich text)
* `files: File[]` (max size + types)
* `dueDate: date`

## 6. Dashboard — widgets

* Vue Kanban par statut (À faire, En cours, À corriger, Fini)
* Timeline / calendrier des rendus
* Carte des projets (miniatures)
* Filtre dynamique (atelier, promo, enseignant, date)
* Notifications (nouvelles soumissions, commentaires)

## 7. Schéma de données (extrait Prisma)

```prisma
model Project {
  id        String   @id @default(cuid())
  title     String
  atelier   String
  description String
  files     Json
  dueDate   DateTime?
  status    String   @default("draft")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ownerId   String
}
```

## 8. Stack & bibliothèques

* React + TypeScript
* Next.js (optionnel) pour SSR/Pages
* TailwindCSS + DaisyUI (composants rapides, accessible)
* react-hook-form + zod (validation)
* react-query / TanStack Query (data fetching)
* Dropzone / react-dropzone (uploads)
* react-markdown + remark (prévisualisation description)
* Full Calendar (calendrier)

## 9. Plan d'implémentation (milestones)

1. Prototype wireframe (Figma) — 1 jour
2. Setup projet (Next + Tailwind + DaisyUI) — 1 jour
3. Formulaire multi-step (client-side) — 2 jours
4. Uploads + storage (S3 / Supabase Storage) — 2 jours
5. Dashboard Kanban + filtres — 2 jours
6. Tests & accessibilité — 1 jour

## 10. Design

* Palette : béton clair (#F5F6F7), gris ardoise (#2B2F33), accent ocre (#E6A41E)
* Typo : Inter / IBM Plex Sans
* Iconographie : lignes nettes, icônes inspirées CAD
* Mood : minimal, matériel, atelier

## 10.1. Ambiance & Concept

**Atmosphère** : Atelier d'architecture professionnel, espace de travail structuré et méthodique. Évoque les plans techniques, les maquettes sur tables à dessin, les règles et équerres. Ambiance studieuse mais créative, où la précision rencontre l'innovation.

**Identité visuelle** : Géométrie stricte, grilles modulaires, alignements parfaits. Références au dessin technique : lignes de construction subtiles, annotations discrètes, système de coordonnées invisible mais présent.

## 10.2. Arrière-plans & Textures

* **Background principal** : Dégradé subtil gris-béton (#F5F6F7 → #E8EAED) avec texture de papier calque très légère (opacity 0.03)
* **Pattern overlay** : Grille de points discrets (dot grid) en gris très clair, espacement 24px, rappelant le papier millimétré
* **Cards** : Fond blanc pur avec bordure fine gris-ardoise (#2B2F33, 1px) et ombre portée douce
* **Zones de contenu** : Alternance subtile de fonds légèrement teintés pour créer des zones fonctionnelles
* **Texture de surface** : Grain de papier très subtil sur les cards (noise texture, 0.5% opacity)

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Translation Y (-4px) + ombre augmentée, transition 0.3s cubic-bezier(0.4, 0, 0.2, 1)
* **Boutons** : Scale 0.98 au clic, retour élastique (spring animation)
* **Form inputs focus** : Bordure accent ocre qui s'étend progressivement (width animation 0.3s)
* **Upload zone** : Pulse subtil (scale 1.02) quand fichier survolé, bordure en pointillés animée
* **Kanban drag** : Card devient semi-transparente (opacity 0.7) avec rotation légère (-2deg), ombre portée renforcée

**Transitions de page** :
* **Navigation** : Fade + slide horizontal (0.4s ease-out)
* **Modal** : Scale + fade (0.25s cubic-bezier), backdrop blur progressif
* **Form steps** : Slide horizontal avec fade, indicateur de progression animé

**Animations d'état** :
* **Loading** : Skeleton screens avec shimmer effect (gradient animé)
* **Notifications** : Slide-in depuis le haut avec bounce léger
* **Statut badges** : Pulse discret pour statuts "urgent" ou "nouveau"
* **Timeline** : Apparition progressive des éléments (stagger animation, 0.1s delay entre chaque)

**Animations de données** :
* **Graphiques** : Apparition progressive des barres/lignes (draw animation)
* **Compteurs** : Count-up animation pour statistiques
* **Filtres** : Cards se réorganisent avec transition fluide (layout animation)

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Grille magnétique** : Les cards s'alignent automatiquement sur une grille invisible, avec snap-to-grid au drag (implémenté avec grid overlay)
* **Lignes de construction** : Lignes guides subtiles qui apparaissent au hover sur les cards (comme des lignes d'aide CAD) (implémenté avec architectural grid overlay)
* **Annotations flottantes** : Petites notes en style post-it qui flottent légèrement au-dessus des cards (implémenté avec hover effects)
* **Règle horizontale** : Barre de mesure discrète en haut de page, rappelant les règles d'architecte (implémenté avec title underline)
* **Miniatures de plans** : Prévisualisations de projets en style plan technique (lignes noires sur fond blanc) (implémenté avec card textures)

**Interactions spéciales** :
* **Double-clic sur card** : Ouvre en mode plein écran avec zoom progressif (implémenté avec scale animations)
* **Raccourcis clavier** : Navigation rapide avec flèches (comme dans un logiciel CAD) (prêt pour implémentation)
* **Multi-sélection** : Shift+click pour sélectionner plusieurs projets, avec feedback visuel de zone de sélection (prêt pour implémentation)
* **Vue isométrique** : Option de vue 3D isométrique pour le dashboard (transformation CSS 3D) (prêt pour implémentation)

**Composants signature** :
* **Date picker** : Style calendrier d'atelier avec grille de dates, marqueurs de deadlines en accent ocre (implémenté dans form)
* **Upload zone** : Zone de drop avec grille de prévisualisation, style planche à dessin (implémenté avec file upload)
* **Status indicators** : Badges avec icônes géométriques (carré, triangle, cercle) selon statut (implémenté dans cards)
* **Progress bars** : Barres de progression avec texture de béton, remplissage animé (implémenté avec animations)

**Dashboard unique** :
* **Vue Kanban par statut** avec colonnes "À faire", "En cours", "À corriger", "Fini"
* **Timeline/calendrier** des rendus avec marqueurs visuels
* **Carte des projets** en miniatures avec statut coloré
* **Filtres dynamiques** par atelier, promo, enseignant, date
* **Notifications** en temps réel pour nouvelles soumissions

**Formulaire unique** :
* **Soumission architecturale** avec champs techniques (échelle, fichiers DWG/PDF)
* **Validation multi-étapes** avec progression visuelle
* **Prévisualisation** des plans uploadés
* **Grille de construction** visible dans le formulaire

## 11. Accessibilité

* Contrastes >= 4.5:1
* Labels explicites + aria-describedby pour aides
* Navigation clavier pour uploads et kanban drag & drop

