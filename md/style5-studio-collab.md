# Proposition 5 — **Studio Collab** (Collaboration synchrone + simple)

## 1. Résumé

Conçu pour le travail d'équipe : commentaires en ligne, assignation de tâches, chat interne par projet. Formulaire intègre champs de collaboration (membres, rôles, tâches liées).

## 2. Objectifs

* Faciliter la collaboration multi-étudiants
* Lier tâches/ressources au projet (todo intégré)

## 3. Personas

* Étudiant leader (coordonne)
* Étudiant contributeur
* Enseignant (supervise)

## 4. Flux utilisateur

* Créer projet → inviter membres → assigner tâches → soumettre
* Chat projet + canal feedback

## 5. Formulaire — champs

* `teamMembers`, `rolePerMember`, `taskList` (todos)
* Option: template projet (réutilisable)

## 6. Dashboard — widgets

* Board tâches (kanban)
* Chat simple (persistant)
* Activité récente (feed)

## 7. Schéma de données (extrait)

```prisma
model Task {
  id String @id @default(cuid())
  projectId String
  title String
  assignee String?
  status String
}
```

## 8. Stack & bibliothèques

* React + TypeScript
* socket.io / Pusher (realtime)
* react-beautiful-dnd (drag & drop)

## 9. Plan d'implémentation

1. Board tasks + CRUD — 2 jours
2. Chat minimal — 1 jour
3. Intégration team invites — 1 jour

## 10. Design

* Palette : vive mais professionnelle (turquoise, anthracite, blanc)
* Typo : Inter

## 10.1. Ambiance & Concept

**Atmosphère** : Espace de collaboration dynamique, environnement de travail d'équipe moderne. Évoque les espaces de coworking, les salles de brainstorming, les outils collaboratifs contemporains. Ambiance énergique et connectée, où la communication fluide et la synergie sont prioritaires. Focus sur l'interaction sociale et la productivité collective.

**Identité visuelle** : Design vivant et engageant, couleurs vives mais maîtrisées, éléments qui suggèrent le mouvement et la connexion. Style "collaborative workspace" : espaces ouverts, flux visuels, indicateurs de présence.

## 10.2. Arrière-plans & Textures

* **Background principal** : Blanc (#FFFFFF) avec texture de tissu moderne très subtile (opacity 0.01)
* **Pattern overlay** : Motif de connexion discret (network pattern) en turquoise très clair, opacité 0.02
* **Cards** : Fond blanc avec bordure turquoise fine (1px) et ombre portée colorée (turquoise, opacity 0.1)
* **Zones de contenu** : Sections avec fonds légèrement teintés turquoise pour zones collaboratives
* **Texture de surface** : Grain numérique très léger pour modernité
* **Gradients** : Dégradés turquoise→blanc pour accents et zones d'action
* **Chat area** : Fond gris très clair (#F8F9FA) pour distinction visuelle

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Élévation avec ombre colorée turquoise, translation Y (-2px), transition 0.3s
* **Task drag** : Card devient semi-transparente avec rotation légère, ombre portée renforcée
* **Buttons** : Scale 0.95 au clic avec retour élastique, couleur qui s'intensifie
* **Chat messages** : Apparition avec slide-in depuis la droite + fade, stagger delay 0.05s
* **User avatars** : Pulse subtil pour utilisateurs actifs, animation de présence

**Transitions de page** :
* **Navigation** : Slide horizontal avec fade (0.3s ease-out)
* **Modal** : Scale + fade avec backdrop blur progressif (0.25s)
* **Tab switching** : Slide horizontal fluide entre onglets

**Animations d'état** :
* **Loading** : Skeleton avec shimmer turquoise animé
* **Typing indicator** : Points animés (bounce) pour indicateur de frappe
* **Notifications** : Slide-in depuis le haut avec bounce, badge qui pulse
* **Status updates** : Badges de statut qui changent avec animation de flip

**Animations de données** :
* **Kanban board** : Réorganisation fluide des tâches avec animation de position
* **Task completion** : Animation de checkmark avec scale + rotation
* **Activity feed** : Nouvelles activités qui apparaissent avec fade-in progressif
* **Progress tracking** : Barres de progression avec remplissage animé turquoise

**Animations signature** :
* **Real-time updates** : Indicateurs visuels pour mises à jour en temps réel (pulse, glow)
* **Collaborative cursors** : Curseurs des autres utilisateurs visibles avec animation de suivi
* **Task assignment** : Animation de transfert de tâche avec trajectoire visuelle
* **Team presence** : Indicateurs de présence avec animation de respiration (pulse)

**Animations collaboratives** :
* **Live editing** : Highlight des zones en cours d'édition par d'autres utilisateurs
* **Comment threads** : Déroulement progressif des conversations avec accordion
* **File sharing** : Animation de téléchargement avec progression visuelle
* **Meeting indicators** : Badges pour réunions en cours avec animation

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Kanban board interactif** : Board avec colonnes réorganisables, drag & drop fluide (implémenté avec card layout)
* **Chat intégré** : Chat en temps réel avec indicateurs de lecture, emojis, mentions (prêt pour implémentation)
* **Activity stream** : Fil d'activité avec timeline visuelle et filtres (implémenté avec card content)
* **Team dashboard** : Vue d'équipe avec avatars, statuts, contributions (implémenté avec collaboration status)
* **Collaboration indicators** : Badges et indicateurs de collaboration active (implémenté avec presence indicators)

**Interactions spéciales** :
* **Drag & drop tasks** : Glisser-déposer fluide avec feedback visuel immédiat (implémenté avec hover animations)
* **@mentions** : Système de mentions avec autocomplete et notifications (prêt pour implémentation)
* **Quick actions** : Actions rapides avec menu contextuel animé (prêt pour implémentation)
* **Multi-select** : Sélection multiple avec zone de sélection visuelle (prêt pour implémentation)

**Composants signature** :
* **Task card** : Cards de tâches avec assignés, deadlines, statuts visuels (implémenté avec card content)
* **Chat interface** : Interface de chat avec bulles de messages, timestamps, statuts (prêt pour implémentation)
* **Team selector** : Sélecteur d'équipe avec avatars et rôles visibles (implémenté avec team preview)
* **Collaboration panel** : Panneau latéral avec membres actifs, activités récentes (implémenté avec collaboration status)

**Dashboard unique** :
* **Board de tâches** kanban avec colonnes par statut
* **Chat simple** persistant avec historique
* **Activité récente** avec feed en temps réel
* **Statuts des membres** avec indicateurs de présence
* **Métriques collaboratives** : messages, tâches assignées

**Formulaire unique** :
* **Création de projet d'équipe** avec invitations
* **Assignation de rôles** par membre avec validation
* **Liste de tâches** collaborative avec dépendances
* **Paramètres de chat** et notifications
* **Prévisualisation** de l'équipe constituée

**Effets visuels** :
* **Status colors** : Couleurs sémantiques pour statuts (todo, in-progress, done)
* **Priority indicators** : Indicateurs de priorité avec couleurs et icônes
* **Connection lines** : Lignes de connexion entre éléments liés (style mind map)
* **Gradient accents** : Accents dégradés turquoise pour éléments importants

**Système de collaboration** :
* **Real-time sync** : Synchronisation en temps réel avec indicateurs visuels
* **Conflict resolution** : Gestion des conflits avec interface de résolution
* **Version history** : Historique des versions avec timeline interactive
* **Permission levels** : Indicateurs visuels pour niveaux de permission

**Fonctionnalités collaboratives** :
* **Team invites** : Système d'invitation avec animations de confirmation
* **Role assignment** : Attribution de rôles avec interface visuelle
* **Task dependencies** : Visualisation des dépendances entre tâches
* **Collaboration metrics** : Métriques de collaboration avec graphiques

## 11. Accessibilité

* Alt text obligatoire, notifications lisibles par lecteur d'écran

