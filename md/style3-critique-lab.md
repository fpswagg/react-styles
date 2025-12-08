# Proposition 3 — **Critique Lab** (Focus feedback & annotation)

## 1. Résumé

Un système centré sur la critique : outils d'annotation sur images/PDF, fil de discussion structuré par projet, système de versions (v1, v2...). Le formulaire inclut un champ pour indiquer demandes de correction précises.

## 2. Objectifs

* Intégrer l'annotation (stamps, notes) directement dans l'interface
* Gérer versions multiples d'un même projet
* Faciliter feedback synchrone/asynchrone

## 3. Personas

* Étudiant (envoie versions successives)
* Enseignant (annoter, laisser feedback)

## 4. Flux utilisateur

* Page projet → viewer (PDF/Image) avec outils d'annotation
* Bouton "Nouvelle version" → formulaire limité (upload + changelog)

## 5. Formulaire — champs spécifiques

* `versionLabel`, `changelog` (text), `annotableFiles`
* Permissions pour commentaires publics/privés

## 6. Dashboard — widgets

* Historique versions
* Heatmap d'attention (zones annotées le plus)
* Filtres feedback par enseignant

## 7. Schéma de données (extrait)

```prisma
model ProjectVersion {
  id String @id @default(cuid())
  projectId String
  label String
  changelog String
  files Json
  createdAt DateTime @default(now())
}
```

## 8. Stack & bibliothèques

* React + TypeScript
* PDF.js / react-pdf (viewer)
* fabric.js / Konva (annotation canvas)
* socket.io (feedback en temps réel)

## 9. Plan d'implémentation

1. Viewer + annotation basic — 3 jours
2. Versioning + UI historique — 2 jours
3. Notifications temps réel — 1 jour

## 10. Design

* Palette : paper-white, graphite, rouge accent pour annotations
* Typo : Roboto + monospace pour annotations

## 10.1. Ambiance & Concept

**Atmosphère** : Laboratoire de critique académique, espace de travail collaboratif et analytique. Évoque les salles de révision, les tables de travail avec plans étalés, les annotations manuscrites. Ambiance studieuse et précise, où chaque détail compte. Focus sur la clarté du feedback et la traçabilité des versions.

**Identité visuelle** : Esthétique de document annoté, références aux corrections manuscrites, système de versions clair. Style "workshop critique" : annotations visibles, historique tracé, précision technique.

## 10.2. Arrière-plans & Textures

* **Background principal** : Blanc papier (#FFFFFF) avec texture de papier à grain fin (opacity 0.015)
* **Pattern overlay** : Lignes de cahier très subtiles (ruled paper lines) en gris clair, espacement 28px
* **Viewer area** : Fond gris très clair (#FAFAFA) simulant une table de travail
* **Annotation layer** : Fond transparent avec overlay semi-transparent pour annotations
* **Cards** : Fond blanc avec bordure graphite fine (1px) et ombre portée discrète
* **Texture de surface** : Grain de papier légèrement visible pour rappel physique
* **Zones de version** : Alternance de fonds légèrement teintés pour distinguer les versions

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Annotation tools** : Icônes qui se transforment au hover (scale + rotation), feedback tactile
* **Drawing on canvas** : Trait qui suit le curseur avec légère traînée (trail effect)
* **Stamp placement** : Animation de "tampon" qui s'applique (scale 0 → 1 avec bounce)
* **Comment addition** : Apparition avec slide-in depuis la droite, fade progressif
* **Version switch** : Transition avec slide horizontal + fade, indicateur de version animé

**Transitions de page** :
* **Navigation** : Fade rapide (0.2s) pour maintenir focus sur le contenu
* **Modal annotation** : Apparition avec scale + fade, fermeture avec shrink
* **Version history** : Timeline qui se déroule progressivement (unfold animation)

**Animations d'état** :
* **Loading** : Skeleton avec pattern de lignes (style document en chargement)
* **Saving annotation** : Indicateur de sauvegarde avec animation de point qui pulse
* **New feedback** : Badge de notification qui pulse en rouge accent
* **Version diff** : Highlight animé des zones modifiées (flash animation)

**Animations de données** :
* **Heatmap** : Apparition progressive des zones chaudes (gradient animation)
* **Annotation count** : Compteur qui s'incrémente avec animation
* **Timeline** : Points de version qui apparaissent séquentiellement
* **Feedback threads** : Déroulement progressif des conversations (accordion animation)

**Animations signature** :
* **Drawing mode** : Curseur qui change en outil de dessin, feedback visuel immédiat
* **Annotation reveal** : Annotations qui apparaissent progressivement au scroll (reveal on scroll)
* **Version comparison** : Side-by-side avec highlight des différences (diff animation)
* **Collaborative cursor** : Curseurs des autres utilisateurs visibles en temps réel (multi-cursor)

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Toolbar flottante** : Barre d'outils d'annotation qui suit le scroll, style sticky (implémenté avec annotation toolbar)
* **Annotation pins** : Épingles colorées qui marquent les zones annotées, style post-it (implémenté avec status badges)
* **Version timeline** : Timeline verticale avec points de version, style chronologie (implémenté avec version timeline)
* **Diff viewer** : Vue comparative avec overlay de différences (rouge/vert) (prêt pour implémentation)
* **Comment threads** : Fils de discussion qui s'enroulent depuis les annotations (implémenté avec card content)

**Interactions spéciales** :
* **Multi-select annotations** : Sélection multiple avec zone de sélection (lasso tool) (prêt pour implémentation)
* **Keyboard shortcuts** : Raccourcis pour outils (P=pen, H=highlight, S=stamp) (implémenté avec tool buttons)
* **Gesture drawing** : Dessin libre avec souris/touch, reconnaissance de formes (prêt pour implémentation)
* **Quick annotations** : Annotations rapides avec presets (✓, ✗, ?, !) (prêt pour implémentation)

**Composants signature** :
* **PDF viewer** : Viewer intégré avec outils de zoom/pan, annotations superposées (prêt pour implémentation)
* **Annotation canvas** : Canvas interactif avec outils de dessin (pen, highlight, shapes) (implémenté avec tool buttons)
* **Version selector** : Dropdown avec miniatures des versions, preview au hover (implémenté avec version timeline)
* **Feedback panel** : Panneau latéral avec historique des commentaires, style chat (implémenté avec card layouts)

**Dashboard unique** :
* **Historique des versions** avec timeline visuelle
* **Heatmap d'attention** montrant les zones les plus annotées
* **Filtres par feedback** enseignant avec statistiques
* **Vue comparative** des versions avec diff visuel
* **Annotations actives** avec marqueurs colorés

**Formulaire unique** :
* **Soumission de version** avec changelog détaillé
* **Upload de fichiers annotés** (PDF, images)
* **Timeline de version** intégrée
* **Demandes de feedback** spécifiques
* **Permissions** de visibilité des commentaires

**Effets visuels** :
* **Highlight overlay** : Surlignage avec opacité variable selon importance
* **Redline marks** : Marques de correction en rouge (style architectural redlining)
* **Grid overlay** : Grille optionnelle pour alignement précis des annotations
* **Magnifying glass** : Loupe au hover pour zoom localisé sur détails

**Système de versions** :
* **Version badges** : Badges colorés selon type de version (draft, review, final)
* **Changelog visual** : Visualisation des changements avec arbre de versions
* **Rollback animation** : Animation de retour en arrière avec transition fluide
* **Merge conflicts** : Indication visuelle des conflits de versions

## 11. Accessibilité

* Transcriptions textuelles des annotations
* Options de contraste pour suivi visuel

