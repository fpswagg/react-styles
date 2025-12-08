# Proposition 4 — **Admin Studio** (Gestion avancée + rapports)

## 1. Résumé

Dashboard orienté administration scolaire : gestion utilisateurs (prof/étudiants), rapports d'activité, export CSV/PDF et gestion des droits. Formulaire orienté collecte administrative et validation des dossiers.

## 2. Objectifs

* Centraliser la gestion des utilisateurs et ateliers
* Fournir exports (CSV/Excel) et rapports (taux de soumission, délais)

## 3. Personas

* Admin (gestion globale)
* Responsable pédagogique (suivi des promos)

## 4. Flux utilisateur

* Admin login → Console users, rapports, paramètres ateliers
* Import massifs (CSV) pour étudiants

## 5. Formulaire — champs admin

* Création d'atelier (nom, description, enseignants assignés)
* Paramètres de rendu (deadlines globaux)

## 6. Dashboard — widgets

* Tableaux / graphiques (soumissions par date)
* Liste utilisateurs + actions massives
* Logs & audit

## 7. Schéma de données (extrait)

```prisma
model User {
  id String @id @default(cuid())
  email String @unique
  role String
  name String?
}
```

## 8. Stack & bibliothèques

* React + TypeScript
* Next.js (routes API)
* Recharts / Chart.js
* react-table (tables avancées)

## 9. Plan d'implémentation

1. Auth & gestion rôles — 2 jours
2. Import/Export CSV — 1 jour
3. Rapports & filtres — 2 jours

## 10. Design

* Palette : neutre pro (bleu gris, jaune foncé)
* Typo : Inter

## 10.1. Ambiance & Concept

**Atmosphère** : Console d'administration professionnelle, espace de contrôle et de gestion. Évoque les dashboards d'entreprise, les tableaux de bord analytiques, les interfaces de monitoring. Ambiance sérieuse et efficace, où l'information est claire et actionnable. Focus sur la productivité et la prise de décision rapide.

**Identité visuelle** : Design system cohérent, hiérarchie visuelle claire, données mises en avant. Style "enterprise dashboard" : tableaux structurés, graphiques lisibles, indicateurs visuels forts.

## 10.2. Arrière-plans & Textures

* **Background principal** : Gris très clair (#F7FAFC) avec texture de tissu technique subtile (opacity 0.01)
* **Pattern overlay** : Grille de lignes très discrètes (grid lines) en gris clair, espacement 8px
* **Cards** : Fond blanc pur avec bordure bleu-gris fine (1px #E2E8F0) et ombre portée minimale
* **Zones de contenu** : Sections avec fonds alternés (blanc/gris très clair) pour séparation visuelle
* **Texture de surface** : Aucune texture visible, pureté pour lisibilité des données
* **Gradients** : Dégradés subtils bleu-gris pour headers de sections
* **Data tables** : Lignes alternées (zebra striping) pour lisibilité

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Table rows hover** : Highlight avec fond bleu-gris très clair, transition instantanée
* **Buttons** : Press effect (scale 0.97) avec retour rapide, feedback immédiat
* **Form inputs focus** : Bordure bleu-gris qui s'épaissit progressivement (0.5s)
* **Dropdowns** : Ouverture avec slide-down + fade, fermeture avec slide-up
* **Checkboxes/Radios** : Scale animation au clic (0.8 → 1) avec bounce léger

**Transitions de page** :
* **Navigation** : Fade rapide (0.15s) pour réactivité, pas d'effet distrayant
* **Modal dialogs** : Apparition avec scale + fade (0.2s), fermeture instantanée
* **Tab switching** : Slide horizontal rapide (0.2s) entre onglets

**Animations d'état** :
* **Loading** : Skeleton tables avec shimmer effect horizontal
* **Data refresh** : Indicateur de rafraîchissement avec rotation discrète
* **Notifications** : Toast notifications slide-in depuis le haut, auto-dismiss
* **Status changes** : Badges de statut qui changent avec fade + scale

**Animations de données** :
* **Charts rendering** : Graphiques qui se dessinent progressivement (draw animation)
* **Counters** : Compteurs qui s'incrémentent avec count-up animation
* **Progress bars** : Barres de progression avec remplissage animé (0.5s ease-out)
* **Data tables** : Nouvelles lignes qui apparaissent avec fade-in (stagger 0.05s)

**Animations signature** :
* **Export progress** : Barre de progression pour exports CSV/PDF avec animation
* **Bulk actions** : Feedback visuel lors d'actions en masse (selection highlight)
* **Filter application** : Transitions fluides lors de l'application de filtres
* **Search results** : Résultats qui apparaissent avec fade-in progressif

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Data tables avancées** : Tables avec tri, filtres intégrés, pagination élégante (implémenté avec enterprise layout)
* **Dashboard widgets** : Widgets modulaires réorganisables (drag & drop) (prêt pour implémentation)
* **Chart library** : Graphiques variés (line, bar, pie, area) avec style cohérent (prêt pour implémentation)
* **Export center** : Zone centralisée pour exports avec prévisualisation (implémenté avec export button)
* **Activity feed** : Fil d'activité avec timeline visuelle (implémenté avec card layout)

**Interactions spéciales** :
* **Bulk selection** : Sélection multiple avec checkbox "select all", actions en masse (prêt pour implémentation)
* **Inline editing** : Édition directe dans les tableaux (click to edit) (prêt pour implémentation)
* **Quick filters** : Filtres rapides avec chips cliquables (implémenté avec data filters)
* **Keyboard navigation** : Navigation complète au clavier (Tab, Enter, Esc) (implémenté avec focus states)

**Composants signature** :
* **User management table** : Table avec actions contextuelles, statuts visuels (implémenté avec card layout)
* **Report generator** : Générateur de rapports avec prévisualisation en temps réel (implémenté avec export functionality)
* **Settings panel** : Panneau de paramètres avec sections collapsibles (prêt pour implémentation)
* **Audit log viewer** : Visualiseur de logs avec filtres temporels (implémenté avec card content)

**Dashboard unique** :
* **Tableaux/graphiques** de soumissions par date avec métriques
* **Liste utilisateurs** avec actions massives et statuts
* **Logs & audit** avec timeline et filtres
* **Rapports d'activité** avec exports CSV/PDF
* **Métriques clés** : taux de soumission, délais moyens

**Formulaire unique** :
* **Import CSV/Excel** avec validation et prévisualisation
* **Gestion des ateliers** avec paramètres de rendu
* **Configuration des rôles** avec permissions visuelles
* **Exports de données** avec filtres avancés
* **Validation** des données avant traitement

**Effets visuels** :
* **Status indicators** : Indicateurs de statut avec couleurs sémantiques (vert/jaune/rouge)
* **Progress indicators** : Indicateurs de progression avec pourcentages animés
* **Alert badges** : Badges d'alerte avec pulse pour notifications importantes
* **Data visualization** : Visualisations de données avec tooltips informatifs

**Système de rapports** :
* **Report templates** : Templates de rapports pré-configurés
* **Custom reports** : Création de rapports personnalisés avec builder visuel
* **Scheduled exports** : Exports programmés avec notifications
* **Report history** : Historique des rapports générés avec prévisualisation

**Fonctionnalités admin** :
* **User import** : Import CSV avec validation et prévisualisation
* **Role management** : Gestion des rôles avec permissions visuelles
* **Workspace settings** : Paramètres d'atelier avec formulaire structuré
* **Analytics dashboard** : Dashboard analytique avec métriques clés

## 11. Accessibilité

* Contrôle rôles & masquage des données sensibles

