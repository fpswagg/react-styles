# Proposition 6 — **Modern Agency** (Design agence digitale moderne — tech & créatif)

## 1. Résumé

Interface d'agence digitale moderne combinant élégance minimaliste et éléments tech innovants. Le dashboard présente les projets clients avec métriques de performance, tandis que le formulaire gère les briefs créatifs et les propositions commerciales. Design centré sur l'expérience utilisateur avec des animations fluides et des interactions intuitives.

## 2. Objectifs

* Présenter une image professionnelle et moderne de l'agence
* Faciliter la gestion de projets créatifs et techniques
* Optimiser les processus de brief et de proposition
* Créer une expérience utilisateur engageante et mémorable

## 3. Personas

* **Directeur de Création** : Supervise les projets, valide les propositions
* **Chef de Projet** : Gère les briefs clients et le suivi opérationnel
* **Designer/Developer** : Consulte les briefs et met à jour l'avancement
* **Client** : Accède aux propositions et suit l'évolution des projets

## 4. Flux utilisateur (wireframe détaillé)

```
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                              │
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ LOGO    │ │ DASHBOARD    │ │ PROJETS     │ │ CLIENTS     │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ DASHBOARD - Vue d'ensemble des projets                     │
│                                                             │
│ [PROJETS ACTIFS] [PROPOSITIONS] [EN COURS] [TERMINÉS]       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ PROJET: Refonte Site E-commerce                        │ │
│ │ ├─ Client: Mode & Style                               │ │
│ │ ├─ Statut: ✓ Phase conception                         │ │
│ │ ├─ Deadline: 15 déc 2024                              │ │
│ │ ├─ Budget: 45 000€                                    │ │
│ │ └─ Équipe: 3 designers, 2 devs                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [MÉTRIQUES CLÉS]                                            │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│ │ 12 projets  │ │ 94% délais │ │ 98% satisf │            │
│ │ actifs      │ │ respectés  │ │ clients    │            │
│ └─────────────┘ └─────────────┐ └─────────────┘            │
│                               │                            │
│                               └────────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

## 5. Formulaire (brief créatif) — structure détaillée

### **Étapes du formulaire de brief client**

#### **Étape 1: Informations générales**
```
┌─────────────────────────────────────────────────────────────┐
│ NOUVEL BRIEF CRÉATIF                                       │
│                                                             │
│ Nom du projet: [_______________________________]           │
│ Client: [_______________________________] [🔍]             │
│ Type de projet:                                             │
│ ◉ Site web ◉ Application mobile ◉ Identité visuelle       │
│ ◉ Campagne publicitaire ◉ Motion design                    │
│                                                             │
│ Budget estimé: [________________] €                        │
│ Deadline souhaitée: [📅 Sélectionner une date]             │
│                                                             │
│ [SUIVANT]                                                  │
└─────────────────────────────────────────────────────────────┘
```

#### **Étape 2: Cahier des charges**
```
┌─────────────────────────────────────────────────────────────┐
│ CAHIER DES CHARGES                                         │
│                                                             │
│ Objectifs principaux:                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ • Augmenter la visibilité de la marque                 │ │
│ │ • Améliorer l'expérience utilisateur                    │ │
│ │ • Optimiser les conversions                            │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Cibles: [Jeunes adultes 25-35 ans] [👥]                    │
│                                                             │
│ Contraintes techniques:                                    │
│ ◉ Responsive design ◉ SEO optimisé ◉ Accessibilité WCAG   │
│                                                             │
│ [PRÉCÉDENT] [SUIVANT]                                       │
└─────────────────────────────────────────────────────────────┘
```

#### **Étape 3: Éléments créatifs**
```
┌─────────────────────────────────────────────────────────────┐
│ ÉLÉMENTS CRÉATIFS                                          │
│                                                             │
│ Charte graphique existante:                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📎 logo.zip (2.3 MB) ✓                                  │ │
│ │ 📎 couleurs_brand.pdf (1.1 MB) ✓                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Références d'inspiration:                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🌐 https://site-inspiration.com                         │ │
│ │ 🌐 https://portfolio-designer.fr                       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [PRÉCÉDENT] [SOUMETTRE LE BRIEF]                            │
└─────────────────────────────────────────────────────────────┘
```

## 6. Dashboard — widgets détaillés

### **Widget Projets Actifs**
```javascript
// Composant React pour le widget projets
const ProjectsWidget = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Refonte E-commerce",
      client: "Mode & Style",
      status: "conception",
      progress: 65,
      deadline: "2024-12-15",
      budget: 45000,
      team: ["Alice", "Bob", "Charlie"]
    }
  ]);

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

### **Widget Métriques Performance**
```
┌─────────────────────────────────────────────────────────────┐
│ 📊 INDICATEURS DE PERFORMANCE                              │
│                                                             │
│ Taux de satisfaction client:                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ████████████████████████████████████████░ 94%          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Respect des délais:                                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ █████████████████████████████████████████░ 96%          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ CA moyen par projet: 38 500€                               │
│ Marge moyenne: 28%                                         │
│                                                             │
│ [Voir détails]                                              │
└─────────────────────────────────────────────────────────────┘
```

## 7. Schéma de données (Prisma)

```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  clientId    String
  type        String   // 'website', 'mobile', 'branding', etc.
  status      String   @default("brief")
  budget      Float?
  deadline    DateTime?
  description String?
  requirements Json    // Cahier des charges structuré
  assets      Json     // Fichiers uploadés
  team        String[] // IDs des membres assignés
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  client      Client   @relation(fields: [clientId], references: [id])
  tasks       Task[]
}

model Client {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  company   String?
  projects  Project[]
}

model Task {
  id          String   @id @default(cuid())
  projectId   String
  title       String
  description String?
  assigneeId  String?
  status      String   @default("todo")
  priority    String   @default("medium")
  dueDate     DateTime?
  estimatedHours Float?

  project     Project  @relation(fields: [projectId], references: [id])
}
```

## 8. Stack & bibliothèques

### **Frontend**
```javascript
// package.json dependencies
{
  "dependencies": {
    "react": "^18.2.0",
    "next.js": "^13.4.0",
    "framer-motion": "^10.12.0",     // Animations avancées
    "react-spring": "^9.7.0",        // Animations fluides
    "styled-components": "^6.0.0",   // CSS-in-JS
    "react-hook-form": "^7.45.0",    // Gestion formulaires
    "zod": "^3.21.0",                // Validation
    "react-dropzone": "^14.2.0",     // Upload fichiers
    "react-chartjs-2": "^5.2.0",     // Graphiques
    "date-fns": "^2.30.0",           // Gestion dates
    "lucide-react": "^0.263.0"       // Icônes modernes
  }
}
```

### **Backend API**
```javascript
// API routes structure
/app
  /api
    /projects
      route.ts      // CRUD projets
    /clients
      route.ts      // Gestion clients
    /tasks
      route.ts      // Gestion tâches
    /metrics
      route.ts      // KPIs et métriques
```

## 9. Plan d'implémentation détaillé

### **Phase 1: Foundation (Semaine 1-2)**
```bash
# Setup projet Next.js avec TypeScript
npx create-next-app@latest modern-agency --typescript --tailwind --app

# Configuration base de données
npm install prisma @prisma/client
npx prisma init

# Authentification
npm install next-auth @auth/prisma-adapter
```

### **Phase 2: Core Features (Semaine 3-6)**
1. **Authentification & Autorisation**
   - Login/Register pour clients et équipe
   - Rôles: Admin, Chef de projet, Designer/Developer, Client
   - Middleware de protection des routes

2. **Dashboard Principal**
   - Vue d'ensemble des projets actifs
   - Widgets métriques en temps réel
   - Filtres par statut, client, deadline

3. **Gestion Projets**
   - Création de briefs avec formulaire multi-étapes
   - Assignation d'équipes
   - Suivi de progression avec timeline

### **Phase 3: Advanced Features (Semaine 7-10)**
1. **Interface Client**
   - Portail client avec suivi projets
   - Validation des livrables
   - Messagerie intégrée

2. **Outils Collaboratifs**
   - Commentaires sur projets
   - Partage de fichiers
   - Notifications temps réel

3. **Analytics & Reporting**
   - Tableaux de bord performance
   - Rapports automatisés
   - Export de données

## 10. Design System Complet

### **Palette de couleurs**
```css
/* Variables CSS pour le thème Modern Agency */
:root {
  /* Couleurs primaires */
  --ma-primary: #6366F1;      /* Indigo moderne */
  --ma-secondary: #F8FAFC;    /* Gris très clair */
  --ma-accent: #8B5CF6;       /* Violet accent */

  /* Couleurs sémantiques */
  --ma-success: #10B981;      /* Vert émeraude */
  --ma-warning: #F59E0B;      /* Jaune ambre */
  --ma-error: #EF4444;        /* Rouge erreur */
  --ma-info: #3B82F6;         /* Bleu info */

  /* Couleurs neutres */
  --ma-gray-50: #F8FAFC;
  --ma-gray-100: #F1F5F9;
  --ma-gray-200: #E2E8F0;
  --ma-gray-300: #CBD5E1;
  --ma-gray-400: #94A3B8;
  --ma-gray-500: #64748B;
  --ma-gray-600: #475569;
  --ma-gray-700: #334155;
  --ma-gray-800: #1E293B;
  --ma-gray-900: #0F172A;
}
```

### **Typographie**
```css
/* Hiérarchie typographique */
.ma-heading-1 {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;           /* 48px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.ma-heading-2 {
  font-family: 'Inter', sans-serif;
  font-size: 2.25rem;        /* 36px */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.ma-body-large {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;       /* 18px */
  font-weight: 400;
  line-height: 1.6;
}

.ma-body-regular {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;           /* 16px */
  font-weight: 400;
  line-height: 1.6;
}

.ma-caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;       /* 14px */
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### **Composants de base**
```javascript
// Composant Button principal
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-ma-primary hover:bg-ma-primary/90 text-white focus:ring-ma-primary",
    secondary: "bg-ma-secondary hover:bg-ma-gray-100 text-ma-gray-900 focus:ring-ma-gray-500",
    outline: "border border-ma-gray-300 hover:bg-ma-gray-50 text-ma-gray-700 focus:ring-ma-primary"
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 10.1. Ambiance & Concept

**Atmosphère** : Agence digitale moderne et dynamique, combinant créativité et rigueur technique. L'environnement inspire confiance et innovation, avec une touche d'élégance minimaliste. Les espaces sont aérés, les interactions fluides, créant une expérience utilisateur premium.

**Identité visuelle** : Design system cohérent avec des gradients subtils, des animations fluides et des micro-interactions raffinées. L'accent est mis sur la qualité des détails et l'attention portée à l'expérience utilisateur.

## 10.2. Arrière-plans & Textures

* **Background principal** : Dégradé subtil indigo-violet (#F8FAFC → #E2E8F0) créant profondeur
* **Pattern overlay** : Points de lumière diffuse avec effet de particules flottantes
* **Cards** : Fond blanc avec légers gradients et ombres colorées
* **Zones de contenu** : Alternance de transparences avec effet glassmorphism
* **Texture de surface** : Subtile texture numérique pour modernité

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Translation Y + scale + glow effect (0.4s cubic-bezier)
* **Boutons** : Ripple effect au clic avec scale animation
* **Form inputs focus** : Border animation + shadow expansion
* **Navigation** : Smooth slide transitions avec fade
* **Loading states** : Skeleton screens avec shimmer effect

**Transitions de page** :
* **Navigation** : Slide horizontal avec blur backdrop
* **Modal** : Scale + fade avec spring animation
* **Form steps** : Progress bar animation + slide transitions

**Animations d'état** :
* **Success states** : Checkmark animation avec confetti effect
* **Error states** : Shake animation avec pulse border
* **Loading** : Dots animation avec gradient background

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Glassmorphism panels** : Panneaux transparents avec blur background
* **Floating action buttons** : FABs animés avec ripple effects
* **Progress rings** : Anneaux de progression avec gradients animés
* **Particle backgrounds** : Particules flottantes en arrière-plan
* **Gradient borders** : Bordures avec gradients animés au focus

**Interactions spéciales** :
* **Magnetic cursor** : Curseur attiré par les éléments interactifs
* **Stagger animations** : Animations échelonnées pour les listes
* **Morphing shapes** : Formes qui se transforment au hover
* **Parallax effects** : Effets de parallaxe subtils

**Composants signature** :
* **Project cards** : Cards avec gradients, stats et mini-charts
* **Client portal** : Interface client avec timeline interactive
* **Team dashboard** : Vue équipe avec avatars et statuts temps réel
* **Proposal builder** : Constructeur de propositions avec drag & drop

## 11. Accessibilité & Performance

**Standards d'accessibilité** :
* Conformité WCAG 2.1 niveau AA
* Navigation clavier complète
* Screen reader optimization
* High contrast mode support

**Optimisations performance** :
* Code splitting automatique
* Lazy loading des images
* Service worker pour offline
* CDN pour assets statiques

**SEO & Analytics** :
* Meta tags dynamiques
* Structured data (JSON-LD)
* Google Analytics 4
* Hotjar pour UX tracking

## 12. Code Examples Détaillés

### **Composant ProjectCard avec animations**
```javascript
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="card-background"
        animate={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))"
            : "rgba(255, 255, 255, 0.8)"
        }}
      />

      <div className="card-content">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {project.title}
        </motion.h3>

        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${project.progress}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
};
```

### **Hook personnalisé pour les animations**
```javascript
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useStaggerAnimation = (items) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }));
  }, [items, controls]);

  return controls;
};
```

### **API Routes Next.js**
```javascript
// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().min(1),
  clientId: z.string(),
  type: z.enum(['website', 'mobile', 'branding', 'campaign', 'motion']),
  budget: z.number().optional(),
  deadline: z.date().optional(),
  description: z.string().optional(),
  requirements: z.object({}).optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = projectSchema.parse(body);

    const project = await prisma.project.create({
      data: validatedData,
      include: {
        client: true
      }
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## 13. Tests & Qualité

### **Tests unitaires**
```javascript
// __tests__/components/ProjectCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/ProjectCard';

const mockProject = {
  id: '1',
  title: 'Test Project',
  client: 'Test Client',
  status: 'active',
  progress: 75
};

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Client')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('applies hover animations', async () => {
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByRole('article');
    fireEvent.mouseEnter(card);

    await waitFor(() => {
      expect(card).toHaveStyle('transform: translateY(-8px) scale(1.02)');
    });
  });
});
```

### **Tests d'intégration**
```javascript
// __tests__/pages/dashboard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '@/pages/dashboard';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/projects', (req, res, ctx) => {
    return res(ctx.json([
      { id: '1', title: 'Project 1', status: 'active' }
    ]));
  })
);

describe('Dashboard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('loads and displays projects', async () => {
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
  });
});
```

## 14. Déploiement & Maintenance

### **Configuration CI/CD**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Run tests
        run: npm test

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### **Monitoring & Analytics**
```javascript
// lib/analytics.ts
import { Analytics } from '@vercel/analytics/react';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackProjectCreation = (project: Project) => {
  trackEvent('project_created', {
    project_id: project.id,
    project_type: project.type,
    client_id: project.clientId,
    budget: project.budget
  });
};
```

Ce fichier MD contient toutes les informations nécessaires pour qu'une IA puisse recréer complètement le site Modern Agency, incluant le design, les fonctionnalités, le code, les tests et le déploiement.
