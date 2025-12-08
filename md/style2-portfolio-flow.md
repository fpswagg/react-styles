# Proposition 2 — **Portfolio Flow** (Design centré sur les visuels — portfolio étudiant)

## 1. Résumé

Orientation image-first : le dashboard ressemble à un portfolio en mosaïque (masonry). Le formulaire est optimisé pour ajouter des images haute résolution et textes courts (pitch). Idéal pour l'exposition publique des travaux et pour open days.

## 2. Objectifs

* Mettre en valeur les rendus visuels
* Publier rapidement un project-card partageable
* Filtrage par tags (technique, matériaux)

## 3. Personas

* Étudiant créateur
* Curateur (administrateur qui modère les publications)
* Visiteur (accès en lecture)

## 4. Flux utilisateur

* Galerie page (masonry) + recherche rapide
* Modal projet (aperçu full-screen)
* Publier via formulaire simplifié (upload drag & drop)

## 5. Formulaire (fiches projet) — sections

* Titre + pitch (one-liner)
* Images (ordre, couverture)
* Tags (matériaux, technique)
* Lien vers dossier complet (Cloud)

## 6. Dashboard — widgets

* Galerie filtrable
* Statistiques vues / téléchargements
* Mode exposition (affichage plein écran pour open day)

## 7. Schéma de données (extrait JSON)

```json
{
  "id": "uuid",
  "title": "...",
  "coverImage": "url",
  "images": ["url1","url2"],
  "tags": ["béton"," bois"],
  "visibility": "public"
}
```

## 8. Stack & bibliothèques

* React + TypeScript
* TailwindCSS + DaisyUI
* react-photo-gallery (masonry)
* react-infinite-scroll-component
* Cloud storage (Supabase / S3) + CDN

## 9. Plan d'implémentation

1. Prototype galerie — 1 jour
2. Formulaire d'upload & crop — 2 jours
3. Mode exposition & partage — 1 jour

## 10. Design

* Palette : blanc cassé, noir profond, accent turquoise
* Typo : Playfair Display + Inter (pour titres et body)
* Mood : galerie, élégant, centré image

## 10.1. Ambiance & Concept

**Atmosphère** : Galerie d'art contemporain, espace d'exposition minimaliste et sophistiqué. Évoque les musées blancs, les cimaises, l'éclairage muséal. Ambiance contemplative, où chaque projet est une œuvre à découvrir. Focus sur la beauté visuelle et l'expérience immersive.

**Identité visuelle** : Espaces blancs généreux, mise en valeur des images, typographie élégante. Références à l'art contemporain : compositions asymétriques, contrastes forts, élégance discrète.

## 10.2. Arrière-plans & Textures

* **Background principal** : Blanc cassé (#F5F5F0) avec texture de toile de lin très subtile (opacity 0.02)
* **Pattern overlay** : Aucun pattern visible, pureté du blanc pour mettre en valeur les contenus
* **Cards** : Fond blanc pur (#FFFFFF) avec ombre douce et diffuse (soft shadow, blur 20px)
* **Zones de contenu** : Alternance entre blanc pur et blanc cassé pour créer profondeur
* **Texture de surface** : Grain photographique très léger (film grain, 0.3% opacity) pour rappel analogique
* **Gradients** : Dégradés subtils turquoise→blanc pour zones d'accentuation

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Scale léger (1.05) + élévation d'ombre, transition fluide 0.4s ease-out
* **Images hover** : Zoom progressif (scale 1.1) avec overlay turquoise translucide (opacity 0.1)
* **Boutons** : Underline animation depuis la gauche, couleur turquoise qui se propage
* **Form inputs focus** : Bordure turquoise qui pulse doucement (opacity animation)
* **Gallery items** : Apparition avec fade + scale depuis le centre (stagger delay 0.08s)

**Transitions de page** :
* **Navigation** : Fade cross-dissolve élégant (0.5s ease-in-out)
* **Modal image** : Zoom depuis la position de l'image cliquée (transform-origin animation)
* **Fullscreen mode** : Transition fluide avec blur backdrop progressif

**Animations d'état** :
* **Loading** : Skeleton shimmer élégant, gradient blanc→turquoise→blanc
* **Notifications** : Slide-in depuis la droite avec fade, style toast discret
* **Image loading** : Progressive image reveal avec blur-to-sharp effect
* **Infinite scroll** : Nouvelles images apparaissent avec fade-in depuis le bas

**Animations de données** :
* **Masonry layout** : Réorganisation fluide des items avec animation de position
* **Image carousel** : Transitions douces avec parallax effect léger
* **Tags** : Apparition avec scale + fade, animation élastique
* **Stats counters** : Count-up avec easing élégant

**Animations signature** :
* **Parallax scroll** : Images en arrière-plan avec parallax subtil (0.5x speed)
* **Magnetic cursor** : Effet d'attraction magnétique sur les cards (cursor suit légèrement)
* **Image reveal** : Au scroll, images se révèlent avec un masque qui s'ouvre (reveal animation)

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Masonry dynamique** : Grille adaptative qui s'ajuste selon ratio des images, style Pinterest (implémenté avec gallery grid)
* **Lightbox immersif** : Vue plein écran avec navigation par swipe, informations en overlay discret (prêt pour implémentation)
* **Filtres élégants** : Tags avec style badge minimaliste, animation de sélection fluide (implémenté avec gallery controls)
* **Vignettes flottantes** : Miniatures de projets qui flottent dans l'espace blanc (implémenté avec card hover effects)
* **Typographie expressive** : Titres en Playfair Display avec tracking large, style éditorial (implémenté avec fonts)

**Interactions spéciales** :
* **Double-tap like** : Animation de cœur qui apparaît au double-tap (style Instagram) (prêt pour implémentation)
* **Swipe navigation** : Navigation par swipe gauche/droite dans la galerie (prêt pour implémentation)
* **Zoom gesture** : Pinch-to-zoom sur images avec retour fluide (implémenté avec hover animations)
* **Collection mode** : Vue "collection" où les projets s'organisent en sets visuels (prêt pour implémentation)

**Composants signature** :
* **Image upload** : Zone de drop avec prévisualisation instantanée, style polaroid (implémenté avec file upload + previews)
* **Cover selector** : Sélection d'image de couverture avec overlay de sélection élégant (implémenté avec cover badge)
* **Share modal** : Modal de partage avec animation de QR code qui apparaît (prêt pour implémentation)
* **Exhibition mode** : Mode exposition plein écran avec transitions automatiques (slideshow) (prêt pour implémentation)

**Dashboard unique** :
* **Galerie filtrable** avec contrôles de filtrage par tags et type
* **Statistiques d'exposition** : vues, téléchargements, partages
* **Mode exposition** plein écran pour open days
* **Navigation par tags** avec animations fluides
* **Prévisualisation** des images avec zoom au hover

**Formulaire unique** :
* **Publication portfolio** avec upload multiple d'images
* **Sélection de couverture** avec prévisualisation
* **Tags dynamiques** pour matériaux et techniques
* **Aperçu galerie** intégré dans le formulaire
* **Validation** des formats d'image et tailles

**Effets visuels** :
* **Blur backdrop** : Arrière-plans flous pour mettre en valeur le contenu (backdrop-filter)
* **Gradient overlays** : Overlays dégradés turquoise→transparent sur images au hover
* **Text shadows** : Ombres portées subtiles sur textes pour profondeur
* **Glass morphism** : Éléments avec effet de verre dépoli (glassmorphism) pour modernité

## 11. Accessibilité

* Balises `figure` & `figcaption` pour images
* Légendes alternatives (alt) obligatoires

