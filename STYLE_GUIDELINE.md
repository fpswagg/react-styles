# Propositions de styles — Sites dérivés ESSACA (Markdown)

> Document : 5 propositions détaillées et enrichies, prêtes à être utilisées comme cahier des charges pour un site dérivé d'ESSACA. Chaque proposition contient : concept, objectifs, pages clés, composants, palette & typo, wireframe / layout conseillé, idées UX/UI, schéma de données minimal, recommandations techniques, accessibilité et idées supplémentaires originales.

---

## Contexte synthétique

À partir du site officiel de ESSACA et de la capture fournie (hero en noir & blanc, bords arrondis, typographie grande, boutons contrastés), j'ai tiré 5 directions visuelles cohérentes avec l'identité : **tradition, matériaux locaux, grande mise en valeur des visuels, minimalisme institutionnel et capacité à évoluer vers des usages pédagogiques/communautaires**.

Chaque proposition ci‑dessous est écrite pour pouvoir être implémentée en React + Tailwind (ou autre) et contient des idées pratiques et esthétiques pour rendre le site à la fois beau et utilisable.

---

# Proposition A — Modern Heritage

**Concept** : Une déclinaison élégante, minimaliste et patrimoniale. On conserve le grand hero photographique en N&B, on ajoute des touches de terre et d'ocre pour rappeler les matériaux. L'accent est mis sur la narration institutionnelle et la mise en valeur de projets emblématiques.

**Objectifs** : présenter l'école, valoriser des projets phares, attirer des étudiants/partenaires, garder un ton solennel mais chaleureux.

**Pages clés** : Accueil (hero + mission), À propos (philosophie + équipe), Programmes & Cursus, Projets (grid filtrable), Actualités, Admissions, Contact.

**Layout / Wireframe** :

* Header minimal (logo à gauche, menu hamburger à droite).
* Hero full‑width avec image N&B + titre large centré (ligne de slogan en italique coloré).
* Section «Projets à la une» : cards larges avec vignette et court pitch.
* Footer : contact, mentions, liens réseaux.

**Palette & Typo** :

* Fond : #F5F2EA (crème)
* Texte principal : #22242A (anthracite)
* Accent : #B65A2A (terracotta) + #E6A41E (ocre subtile)
* Titres : Playfair Display Semi‑Bold ou Merriweather (serif)
* Corps : Inter / IBM Plex Sans

**Composants à prévoir** : Hero, ProjectCard (large), GalleryPreview, Timeline, CTA simple, Breadcrumbs, Modal légendes images.

**Idées UX/UI & micro‑interactions** :

* Hover des project cards : léger zoom + drop shadow doux.
* Hero : légère parallaxe lorsque l'utilisateur scroll.
* Prévisualisation des fichiers PDF/maquettes dans un modal avec mini‑viewer.

**Schéma de données (idée minimale)**

```json
{
  "project": {"id":"uuid","title":"","cover":"url","summary":"","authors":[""],"year":2025}
}
```

**Recommandations techniques** : Next.js + Tailwind, images optimisées (next/image ou Cloudinary), Supabase Storage ou S3 pour fichiers, react-hook-form pour formulaires.

**Accessibilité** : contraste >= 4.5, gros targets tactiles pour CTA, alt text obligatoire sur images.

**Bonus / bonnes idées** :

* Une section «Voix des anciens» (témoignages audio) avec player intégré.
* Une carte interactive des projets par région (map choroplèthe simplifiée).

---

# Proposition B — Urban Canvas

**Concept** : Design urbain / contemporain, dynamique, orienté vers actualités, événements, recherche et urbanisme. Idéal pour un portail d'actualité ou un laboratoire de recherche lié à l'école.

**Objectifs** : communiquer des projets de recherche, événements, articles, et créer un hub d'actualité.

**Pages clés** : Accueil (grid d'actus), Projects (cards petites), Events (calendrier), Publications, Contact pro.

**Layout / Wireframe** :

* Grid compacte sur l'accueil (masonry ou CSS Grid) avec filtres par tags.
* Sidebar dynamique sur desktop : événements à venir / calls.
* Page article riche (hero image + contenu + ressources téléchargeables).

**Palette & Typo** :

* Fond : #0F1113 (très sombre) ou #FFFFFF selon sobriété souhaitée
* Accent : #C7CCD1 (gris clair) + accent couleur vive ponctuelle (turquoise sombre)
* Typo : Inter / Montserrat (sans‑serif contemporain)

**Composants** : ArticleCard, EventCard (avec date glue), TagFilter, SearchBar, NewsletterSignup.

**Idées UX/UI** :

* Filtrage instantané (client‑side) + pagination infinie.
* Micro‑interactions : survol cartes → overlay texte, transitions fluides.
* Mode lecture (article) : police agrandie, suppression distractions.

**Schéma de données (simplifié)**

```prisma
model Article { id String @id @default(cuid()) title String content String tags Json publishedAt DateTime }
```

**Tech** : Next.js + Tailwind, Algolia/Typesense pour recherche, FullCalendar pour events.

**Accessibilité** : contrast élevé si mode sombre, focus visible, navigation au clavier.

**Bonus / bonnes idées** :

* «Dossier thématique» où l’on compile articles + projets + ressources liés à un même sujet (ex : matériaux locaux).
* Intégration d'un mini podcast/playlist (interviews enseignants, visites de chantier).

---

# Proposition C — Gallery / Portfolio Centré

**Concept** : Priorité aux visuels — layout masonry ou grid pour montrer maquettes, photos, rendus. Convient aux portfolios d'étudiants, expositions ou publications visuelles.

**Objectifs** : exposer travaux, faciliter découverte visuelle, offrir partage et lightbox enrichie.

**Pages clés** : Galerie (masonry, filtres), Projet (dossier visuel), Expo (mode plein écran), Soumettre un projet (formulaire simplifié).

**Layout / Wireframe** :

* Page galerie pleine largeur avec barre de filtres collante en haut.
* Lightbox : images haute résolution + détails (auteurs, année, matériaux) + commentaires.

**Palette & Typo** :

* Fond : blanc pur ou gris très clair
* Accent : noir profond pour titres, turquoise ou ocre pour accents
* Typo : Playfair (titres optionnels) + Inter (texte)

**Composants** : MasonryGrid, ImageCard (avec orientation auto), Lightbox + Carousel, ImageUploader (drag & drop), Crop & Orientation tool.

**Idées UX/UI** :

* Upload guidé : aider l'étudiant à fournir une vignette, une couverture, et des miniatures optimisées.
* Filtre par format (photo, plan, coupe, maquette) et tags (vernaculaire, durable).
* Mode exposition : une diapo plein écran contrôlable (idéal pour open days).

**Schéma**

```json
{
  "galleryItem": {"id":"","title":"","images":[{"url":"","role":"cover"}],"tags":[],"authors":[]}
}
```

**Tech** : React + Tailwind, react-photo-gallery, Cloudinary/Supabase + CDN, lazy loading, responsive srcset.

**Accessibilité** : alt text obligatoire, descriptions longues disponibles pour lecteurs d'écran.

**Bonus / bonnes idées** :

* Fonction «Curation» : un enseignant peut créer une sélection affichée sur la page d'accueil.
* Option export PDF d’un projet (génération à la volée) pour portfolios imprimables.

---

# Proposition D — Tropical Vernacular / Matériaux Locaux

**Concept** : Mettre en avant le lien au territoire et aux matériaux africains. Approche immersive, texturée, didactique : expliquer les techniques vernaculaires et montrer leurs applications contemporaines.

**Objectifs** : sensibiliser à l'architecture vernaculaire, présenter projets durables et ateliers communautaires.

**Pages clés** : Approche (méthodologie), Matériaux (fiches), Projets locaux, Workshops, Ressources pédagogiques.

**Layout / Wireframe** :

* Hero contextualisé (photo couleur) + section «matériaux en focus» sous forme de cartes texturées.
* Fiches matériaux : composition, avantages, exemples de projets.

**Palette & Typo** :

* Terre : #CFA07A (argile), #8A5A3F (bois foncé), #F0E6DA (crème)
* Typo : Source Serif + Inter

**Composants** : MaterialCard (avec texture), CaseStudy (étude détaillée), Gallery before/after, Map of interventions.

**Idées UX/UI** :

* Mini‑animations qui simulent l’empilement de terre ou l’assemblage d’un module (micro‑interactions pédagogiques).
* Fiches imprimables pour ateliers (PDF ready) avec fiches techniques.

**Schéma de données**

```prisma
model Material { id String @id @default(cuid()) name String properties Json projects Json }
```

**Tech** : site statique possible (Next.js ISR) pour performance, côté CMS headless (Sanity / Strapi) pour fiches évolutives.

**Accessibilité** : alternatives textuelles pour textures, options de contraste.

**Bonus / bonnes idées** :

* Atelier virtuel : mini‑tuto animé (web animation) montrant une technique de construction.
* Calculateur simple d’empreinte carbone pour un projet type.

---

# Proposition E — Hybrid Modern‑Tradition (plateforme complète)

**Concept** : Un site polyvalent et modulable — combine l'institutionnel, la galerie, et la collaboration. Design mixte, adaptable selon l'audience (prospection, étudiants, recherche).

**Objectifs** : centraliser contenus institutionnels et pédagogiques, faciliter collaboration, supporter expositions et publications.

**Pages clés** : Accueil modulable, Projets, Equipe, Research Hub, Events, Plateforme de soumission/évaluation (formulaires avancés).

**Layout / Wireframe** :

* Accueil modulaire (blocs réordonnables) : hero, sélection projets, news, upcoming events, CTA admissions.
* Projet : timeline versions, downloads, annotations publiques/privées.

**Palette & Typo** :

* Neutre + accents : #F7F4EF, #2C2A29, accent ocre #C8612E
* Typo : Mixing serif & sans for hierarchy (Merriweather + Inter)

**Composants** : ProjectCard, VersionHistory, AnnotationTool, Kanban board simple (pour suivi), AdminPanel, Export tools.

**Idées UX/UI** :

* Workflow de soumission → évaluation → versioning automatisé.
* Mode critique : teacher can annotate images/PDF with stamps + voice notes.
* Dashboard admin : KPIs (soumissions / taux qualité / temps moyen correction).

**Schéma de données (extrait)**

```prisma
model Project {
  id String @id @default(cuid())
  title String
  ownerId String
  status String
  versions Json
}
```

**Tech** : Next.js, Supabase (auth + storage), socket.io pour realtime, pdf.js + fabric/konva pour annotations.

**Accessibilité** : navigation claire, gestion des permissions, exports accessibles (PDF tags, structure sémantique).

**Bonus / bonnes idées** :

* Mode «Open Day» : transform the site into an immersive exhibition one day per year (full screen guided tour).
* Intégration d’un système de micro‑bourses / prix pour projets (submission + jury review flow).

---

## Recommandations transversales et bonnes pratiques

1. **Identité visuelle** : garder 1 couleur signature + 1 palette secondaire. Conserver une famille typographique pour la hiérarchie.
2. **Performance** : lazy load images, servir WebP/AVIF, utiliser CDN pour grandes galeries.
3. **SEO & contenu** : pages projets indexables, métadonnées Open Graph, sitemap.xml, bonne structuration Hn.
4. **I18n** : français + anglais minimal, utiliser next-intl ou react-i18next.
5. **Sécurité & conformité** : contrôle types de fichiers uploadés, scan si possible, size limits, RGPD basics (consent forms pour données personnelles).
6. **Tests** : E2E (Playwright) pour parcours critique (soumission projet, upload, visualisation).

---

## Exemples concrets à ajouter au template (idées pratiques)

* **Card «Projet du mois»** : mise en avant automatique via tag + curator pick.
* **Mode offline pour les expositions** : export d’une version statique pour offline display (sur une tablette durant expositions).
* **Impression optimisée** : génération d’un PDF A4/A3 pour dossiers d’admission ou portfolios imprimables.
* **Collection pédagogique** : un mini‑CMS pour fiches pédagogiques et ressources téléchargeables (PDF imprimables, fiches matériaux).

---

## Prochaine étape (si tu veux que j'exécute)

Je peux maintenant générer, au choix :

* des templates React + Tailwind (un par style) en .md (arborescence + README + snippet TSX),
* une maquette Figma / brief (format texte pour importer dans Figma),
* ou des composants détaillés (ProjectCard, Hero, MasonryGrid) en TSX.

Dis‑moi simplement lequel des 5 tu veux en priorité et je produis le contenu correspondant en markdown prêt à copier/coller dans ton repo.

---

*Fini.*
