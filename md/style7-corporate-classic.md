# Proposition 7 — **Corporate Classic** (Design corporate traditionnel — formel & professionnel)

## 1. Résumé

Interface corporate classique privilégiant l'élégance intemporelle et la confiance. Design traditionnel avec serif fonts, hiérarchie claire et couleurs institutionnelles. Le dashboard présente les rapports d'activité et indicateurs clés, tandis que le formulaire gère les demandes formelles et procédures administratives.

## 2. Objectifs

* Transmettre une image de stabilité et de sérieux
* Optimiser les processus administratifs et de reporting
* Faciliter la prise de décision avec des données claires
* Maintenir des standards élevés de présentation

## 3. Personas

* **Directeur Général** : Vue d'ensemble stratégique et rapports consolidés
* **Directeur Administratif** : Gestion des procédures et conformité
* **Manager** : Suivi des équipes et performance opérationnelle
* **Collaborateur** : Accès aux informations personnelles et procédures

## 4. Flux utilisateur (wireframe détaillé)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER INSTITUTIONNEL                                       │
│ ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ LOGO    │ │ TABLEAU     │ │ RAPPORTS    │ │ ADMIN       │ │
│ │ ENTREPRISE│ DE BORD     │ │ FINANCIERS  │ │ISTRATION    │ │
│ └─────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TABLEAU DE BORD EXECUTIVE                                  │
│                                                             │
│ [PÉRIODE: OCTOBRE 2024] [▼]                                 │
│                                                             │
│ ÉTAT FINANCIER CONSOLIDÉ                                    │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ CHIFFRE D'AFFAIRES: 2 450 000 € (+8.2%)                │ │
│ │ RÉSULTAT NET: 485 000 € (+12.1%)                        │ │
│ │ TRÉSORERIE: 1 250 000 €                                 │ │
│ │ ENDETTEMENT: 15.3%                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ INDICATEURS CLÉS DE PERFORMANCE                             │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│ │ 98%         │ │ 4.2/5      │ │ 92%         │            │
│ │ SATISFACTION │ │ QUALITÉ    │ │ RETENUE     │            │
│ │ CLIENT      │ │ SERVICE    │ │ PERSONNEL   │            │
│ └─────────────┘ └─────────────┘ └─────────────┘            │
│                                                             │
│ RAPPORTS DISPONIBLES                                        │
│ • Rapport annuel 2023 ✓                                     │
│ • Budget prévisionnel 2025                                  │
│ • Analyse trimestrielle Q3 2024                             │
│ • Revue des risques 2024                                    │
└─────────────────────────────────────────────────────────────┘
```

## 5. Formulaire (demande administrative) — structure détaillée

### **Étape 1: Type de demande**
```
┌─────────────────────────────────────────────────────────────┐
│ NOUVELLE DEMANDE ADMINISTRATIVE                            │
│                                                             │
│ Type de demande:                                            │
│ ◉ Congé annuel ◉ Formation professionnelle                 │
│ ◉ Avance sur salaire ◉ Changement de poste                 │
│ ◉ Matériel informatique ◉ Autre (préciser)                 │
│                                                             │
│ Urgence: ◉ Normal ◉ Urgent ◉ Très urgent                   │
│                                                             │
│ Service concerné: [Direction Ressources Humaines ▼]        │
│                                                             │
│ [SUIVANT]                                                  │
└─────────────────────────────────────────────────────────────┘
```

### **Étape 2: Détails de la demande**
```
┌─────────────────────────────────────────────────────────────┐
│ DÉTAILS DE LA DEMANDE                                       │
│                                                             │
│ Objet: [__________________________________________________] │
│                                                             │
│ Description détaillée:                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Veuillez exposer clairement les motifs de votre        │ │
│ │ demande et les éléments de contexte nécessaires...      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Pièces justificatives:                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📎 justificatif_conge.pdf (2.1 MB) ✓                   │ │
│ │ 📎 planning_equipe.xlsx (856 KB) ✓                     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [PRÉCÉDENT] [SUIVANT]                                       │
└─────────────────────────────────────────────────────────────┘
```

### **Étape 3: Validation hiérarchique**
```
┌─────────────────────────────────────────────────────────────┐
│ VALIDATION HIÉRARCHIQUE                                     │
│                                                             │
│ Validateur désigné: [Jean Dupont - Directeur RH]            │
│                                                             │
│ Approbateurs supplémentaires:                               │
│ ◉ Direction Générale                                        │
│ ◉ Direction Financière                                      │
│ ◉ Comité de Direction                                       │
│                                                             │
│ Commentaires pour les validateurs:                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Informations complémentaires pour faciliter la prise    │ │
│ │ de décision...                                           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [PRÉCÉDENT] [SOUMETTRE LA DEMANDE]                          │
└─────────────────────────────────────────────────────────────┘
```

## 6. Dashboard — widgets détaillés

### **Widget Financier Consolidé**
```javascript
// Composant React pour le tableau financier
const FinancialOverview = () => {
  const [financials, setFinancials] = useState({
    revenue: 2450000,
    revenueGrowth: 8.2,
    netIncome: 485000,
    netIncomeGrowth: 12.1,
    cashFlow: 1250000,
    debtRatio: 15.3
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const formatPercent = (value) => {
    return `${value > 0 ? '+' : ''}${value}%`;
  };

  return (
    <div className="financial-card">
      <h3>État Financier Consolidé</h3>
      <div className="metrics-grid">
        <MetricItem
          label="Chiffre d'Affaires"
          value={formatCurrency(financials.revenue)}
          change={formatPercent(financials.revenueGrowth)}
          trend="up"
        />
        <MetricItem
          label="Résultat Net"
          value={formatCurrency(financials.netIncome)}
          change={formatPercent(financials.netIncomeGrowth)}
          trend="up"
        />
        <MetricItem
          label="Trésorerie"
          value={formatCurrency(financials.cashFlow)}
          change=""
          trend="neutral"
        />
        <MetricItem
          label="Endettement"
          value={`${financials.debtRatio}%`}
          change=""
          trend="neutral"
        />
      </div>
    </div>
  );
};
```

### **Widget Organigramme**
```
┌─────────────────────────────────────────────────────────────┐
│ ORGANIGRAMME SIMPLIFIÉ                                      │
│                                                             │
│               [DIRECTEUR GÉNÉRAL]                           │
│                     │                                       │
│          ┌──────────┴──────────┐                            │
│   [DIR. COMMERCIAL]    [DIR. TECHNIQUE]                     │
│          │                     │                            │
│   ┌──────┴──────┐       ┌──────┴──────┐                     │
│ [RESP. VENTES] [RESP. MARK.] [RESP. DEV] [RESP. INFRA]      │
│                                                             │
│ Équipes: 12 départements • 245 collaborateurs              │
│ Taux de rotation annuel: 4.2%                               │
│                                                             │
│ [Voir organigramme détaillé]                                │
└─────────────────────────────────────────────────────────────┘
```

## 7. Schéma de données (SQL traditionnel)

```sql
-- Structure de base de données pour système corporate
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hire_date DATE NOT NULL,
    department_id INT,
    position VARCHAR(100),
    salary DECIMAL(10,2),
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL,
    manager_id INT,
    budget DECIMAL(12,2),
    location VARCHAR(100),

    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

CREATE TABLE requests (
    request_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    request_type VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    priority VARCHAR(10) DEFAULT 'normal',
    submitted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approval_date TIMESTAMP NULL,
    approver_id INT,

    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (approver_id) REFERENCES employees(employee_id)
);

CREATE TABLE financial_reports (
    report_id INT PRIMARY KEY AUTO_INCREMENT,
    report_type VARCHAR(50) NOT NULL,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    total_revenue DECIMAL(15,2),
    total_expenses DECIMAL(15,2),
    net_income DECIMAL(15,2),
    generated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    generated_by INT,

    FOREIGN KEY (generated_by) REFERENCES employees(employee_id)
);
```

## 8. Stack & technologies traditionnelles

### **Backend**
```php
// Structure PHP traditionnelle avec MVC
/application
  /controllers
    AdminController.php      // Gestion administrative
    ReportController.php     // Rapports financiers
    EmployeeController.php   // Gestion RH
  /models
    Employee.php             // Modèle employé
    Department.php           // Modèle département
    Request.php              // Modèle demande
  /views
    /admin
      dashboard.php          // Vue tableau de bord
      reports.php            // Vue rapports
    /employee
      profile.php            // Vue profil
      requests.php           // Vue demandes
```

### **Frontend traditionnel**
```html
<!-- Template HTML avec Bootstrap corporate -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portail Entreprise - Tableau de Bord</title>

    <!-- Bootstrap Corporate -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font corporate traditionnel -->
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

    <!-- CSS personnalisé -->
    <link href="/assets/css/corporate.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-corporate">
        <a class="navbar-brand" href="#">
            <img src="/assets/img/logo.png" height="40" alt="Logo Entreprise">
        </a>
    </nav>

    <!-- Contenu principal -->
    <main class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <!-- Sidebar -->
            </div>
            <div class="col-md-9">
                <!-- Contenu principal -->
            </div>
        </div>
    </main>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/corporate.js"></script>
</body>
</html>
```

## 9. Plan d'implémentation traditionnel

### **Phase 1: Architecture (Mois 1)**
```bash
# Structure du projet PHP traditionnel
mkdir -p application/{controllers,models,views,libraries}
mkdir -p public/assets/{css,js,img}
mkdir -p database/migrations

# Configuration initiale
# index.php - Point d'entrée
# config/database.php - Configuration DB
# config/routes.php - Routage
```

### **Phase 2: Core System (Mois 2-3)**
1. **Authentification & Autorisation**
   - Système de login traditionnel
   - Sessions PHP sécurisées
   - Rôles utilisateur (Admin, Manager, Employee)

2. **Base de données**
   - Création des tables principales
   - Relations et contraintes
   - Données de test

3. **Interface d'administration**
   - Tableau de bord principal
   - Gestion des employés
   - Gestion des départements

### **Phase 3: Fonctionnalités métier (Mois 4-6)**
1. **Système de demandes**
   - Formulaires multi-étapes
   - Workflow d'approbation
   - Notifications par email

2. **Rapports & Analytics**
   - Génération de rapports PDF
   - Tableaux de bord financiers
   - Indicateurs de performance

3. **Gestion documentaire**
   - Upload et stockage de fichiers
   - Archivage automatique
   - Recherche dans les documents

## 10. Design System Corporate

### **Palette institutionnelle**
```css
:root {
  /* Couleurs corporate classiques */
  --corporate-primary: #1A365D;      /* Navy profond */
  --corporate-secondary: #FFFFFF;    /* Blanc pur */
  --corporate-accent: #2D3748;       /* Gris foncé */

  /* Couleurs fonctionnelles */
  --corporate-success: #2F855A;      /* Vert institutionnel */
  --corporate-warning: #B7791F;      /* Or traditionnel */
  --corporate-error: #C53030;        /* Rouge classique */
  --corporate-info: #2B6CB0;         /* Bleu corporate */

  /* Tons de gris corporate */
  --corporate-gray-50: #F7FAFC;
  --corporate-gray-100: #EDF2F7;
  --corporate-gray-200: #E2E8F0;
  --corporate-gray-300: #CBD5E1;
  --corporate-gray-400: #A0AEC0;
  --corporate-gray-500: #718096;
  --corporate-gray-600: #4A5568;
  --corporate-gray-700: #2D3748;
  --corporate-gray-800: #1A202C;
  --corporate-gray-900: #171923;
}
```

### **Typographie institutionnelle**
```css
/* Hiérarchie typographique corporate */
.corporate-heading-1 {
  font-family: 'Crimson Text', serif;
  font-size: 2.5rem;         /* 40px */
  font-weight: 600;
  line-height: 1.2;
  color: var(--corporate-primary);
  margin-bottom: 1rem;
}

.corporate-heading-2 {
  font-family: 'Crimson Text', serif;
  font-size: 2rem;           /* 32px */
  font-weight: 500;
  line-height: 1.3;
  color: var(--corporate-primary);
  margin-bottom: 0.75rem;
}

.corporate-heading-3 {
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;         /* 24px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--corporate-primary);
  margin-bottom: 0.5rem;
}

.corporate-body-large {
  font-family: 'Georgia', serif;
  font-size: 1.125rem;       /* 18px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--corporate-gray-700);
}

.corporate-body-regular {
  font-family: 'Georgia', serif;
  font-size: 1rem;           /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--corporate-gray-700);
}

.corporate-caption {
  font-family: 'Georgia', serif;
  font-size: 0.875rem;       /* 14px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--corporate-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### **Composants formels**
```php
// Classe PHP pour composant Button corporate
class CorporateButton {
    private $variant;
    private $size;
    private $text;
    private $attributes;

    public function __construct($text, $variant = 'primary', $size = 'medium') {
        $this->text = $text;
        $this->variant = $variant;
        $this->size = $size;
        $this->attributes = [];
    }

    public function setAttribute($key, $value) {
        $this->attributes[$key] = $value;
        return $this;
    }

    public function render() {
        $classes = ['corporate-button'];

        // Variants
        switch ($this->variant) {
            case 'primary':
                $classes[] = 'corporate-button-primary';
                break;
            case 'secondary':
                $classes[] = 'corporate-button-secondary';
                break;
            case 'outline':
                $classes[] = 'corporate-button-outline';
                break;
        }

        // Sizes
        switch ($this->size) {
            case 'small':
                $classes[] = 'corporate-button-small';
                break;
            case 'large':
                $classes[] = 'corporate-button-large';
                break;
        }

        $classString = implode(' ', $classes);
        $attributesString = '';

        foreach ($this->attributes as $key => $value) {
            $attributesString .= " {$key}=\"{$value}\"";
        }

        return "<button class=\"{$classString}\"{$attributesString}>{$this->text}</button>";
    }
}

// Utilisation
$submitButton = new CorporateButton('Soumettre la Demande', 'primary', 'large');
$submitButton->setAttribute('type', 'submit');
echo $submitButton->render();
```

## 10.1. Ambiance & Concept

**Atmosphère** : Environnement professionnel traditionnel, inspirant confiance et stabilité. L'interface privilégie la lisibilité, la hiérarchie claire et l'élégance intemporelle. Chaque élément est pensé pour transmettre sérieux et fiabilité.

**Identité visuelle** : Design institutionnel avec serif fonts, couleurs navies, espacement généreux. L'accent est mis sur la clarté de l'information et la facilité d'utilisation pour tous les niveaux hiérarchiques.

## 10.2. Arrière-plans & Textures

* **Background principal** : Blanc pur avec texture de papier institutionnel
* **Pattern overlay** : Lignes de séparation subtiles (ruled paper)
* **Cards** : Fond blanc avec bordures fines navy
* **Zones de contenu** : Sections clairement délimitées avec headers formels
* **Texture de surface** : Grain de papier traditionnel très subtil

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Translation Y subtile (0.2s ease)
* **Boutons** : Scale minimal au clic (0.97)
* **Form inputs focus** : Border color change (0.2s ease)
* **Navigation** : Fade simple (0.2s ease)
* **Modal** : Fade uniquement (0.2s ease)

**Transitions de page** :
* **Navigation** : Fade cross-dissolve (0.2s)
* **Modal** : Apparition/disparition simple
* **Form steps** : Slide horizontal minimal

**Animations d'état** :
* **Loading** : Spinner traditionnel
* **Success** : Checkmark statique
* **Error** : Border rouge fixe

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **En-têtes formels** : Titres avec serif fonts et hiérarchie claire
* **Tableaux structurés** : Tables avec bordures et alignements parfaits
* **Badges de statut** : Indicateurs simples et lisibles
* **Navigation breadcrumb** : Fil d'ariane traditionnel
* **Pieds de page** : Mentions légales et informations institutionnelles

**Interactions spéciales** :
* **Double-clic pour détails** : Ouverture de modals d'information
* **Touche Entrée** : Validation automatique des formulaires
* **Échap** : Fermeture des modals
* **Tabulation** : Navigation séquentielle parfaite

**Composants signature** :
* **Formulaires administratifs** : Champs clairement libellés avec aide contextuelle
* **Tableaux de données** : Tri, filtrage et export CSV
* **Rapports PDF** : Génération de documents formels
* **Organigramme** : Visualisation hiérarchique claire

## 11. Code Examples Détaillés

### **Classe PHP pour formulaire multi-étapes**
```php
<?php
class MultiStepForm {
    private $currentStep;
    private $totalSteps;
    private $formData;
    private $validationRules;

    public function __construct($totalSteps = 3) {
        $this->totalSteps = $totalSteps;
        $this->currentStep = 1;
        $this->formData = [];
        $this->validationRules = [
            1 => ['request_type' => 'required', 'title' => 'required'],
            2 => ['description' => 'required|min:10'],
            3 => ['approver_id' => 'required']
        ];
    }

    public function renderStep($step) {
        $this->currentStep = $step;

        ob_start();
        include "views/forms/step{$step}.php";
        $content = ob_get_clean();

        return $this->renderFormWrapper($content);
    }

    private function renderFormWrapper($content) {
        $progress = ($this->currentStep / $this->totalSteps) * 100;

        return "
        <div class='corporate-form-wrapper'>
            <div class='form-progress'>
                <div class='progress-bar' style='width: {$progress}%'></div>
                <span class='progress-text'>Étape {$this->currentStep} sur {$this->totalSteps}</span>
            </div>
            <form method='POST' enctype='multipart/form-data'>
                {$content}
                <div class='form-navigation'>
                    {$this->renderNavigationButtons()}
                </div>
            </form>
        </div>";
    }

    private function renderNavigationButtons() {
        $buttons = '';

        if ($this->currentStep > 1) {
            $buttons .= "<button type='submit' name='step' value='" . ($this->currentStep - 1) . "' class='corporate-button-secondary'>Précédent</button>";
        }

        if ($this->currentStep < $this->totalSteps) {
            $buttons .= "<button type='submit' name='step' value='" . ($this->currentStep + 1) . "' class='corporate-button-primary'>Suivant</button>";
        } else {
            $buttons .= "<button type='submit' name='action' value='submit' class='corporate-button-primary'>Soumettre la demande</button>";
        }

        return $buttons;
    }

    public function validateStep($step, $data) {
        $rules = $this->validationRules[$step] ?? [];
        $errors = [];

        foreach ($rules as $field => $rule) {
            $value = $data[$field] ?? '';

            if (strpos($rule, 'required') !== false && empty($value)) {
                $errors[$field] = 'Ce champ est obligatoire';
            }

            if (preg_match('/min:(\d+)/', $rule, $matches)) {
                $minLength = (int)$matches[1];
                if (strlen($value) < $minLength) {
                    $errors[$field] = "Ce champ doit contenir au moins {$minLength} caractères";
                }
            }
        }

        return $errors;
    }
}

// Utilisation
$form = new MultiStepForm(3);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $step = $_POST['step'] ?? 1;
    $errors = $form->validateStep($step, $_POST);

    if (empty($errors)) {
        // Traiter l'étape suivante
        $nextStep = isset($_POST['action']) ? 'process' : $step + 1;
        // Redirection ou traitement
    }
}

echo $form->renderStep($step ?? 1);
?>
```

### **Template pour tableau de bord**
```php
<!-- templates/dashboard.php -->
<?php
$pageTitle = $pageTitle ?? 'Tableau de Bord';
$financialData = $financialData ?? [];
$user = $user ?? null;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?> - Portail Entreprise</title>

    <!-- Corporate CSS -->
    <link rel="stylesheet" href="/assets/css/corporate.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap">
</head>
<body>
    <!-- Header institutionnel -->
    <header class="corporate-header">
        <div class="header-content">
            <div class="logo-section">
                <img src="/assets/img/logo.png" alt="Logo Entreprise" class="corporate-logo">
                <h1 class="corporate-title">Portail Entreprise</h1>
            </div>

            <nav class="main-navigation">
                <ul>
                    <li><a href="/dashboard" class="nav-link <?php echo $currentPage === 'dashboard' ? 'active' : ''; ?>">Tableau de Bord</a></li>
                    <li><a href="/reports" class="nav-link <?php echo $currentPage === 'reports' ? 'active' : ''; ?>">Rapports</a></li>
                    <li><a href="/requests" class="nav-link <?php echo $currentPage === 'requests' ? 'active' : ''; ?>">Demandes</a></li>
                    <?php if ($user && $user['role'] === 'admin'): ?>
                    <li><a href="/admin" class="nav-link <?php echo $currentPage === 'admin' ? 'active' : ''; ?>">Administration</a></li>
                    <?php endif; ?>
                </ul>
            </nav>

            <div class="user-section">
                <span class="user-name"><?php echo htmlspecialchars($user['first_name'] . ' ' . $user['last_name']); ?></span>
                <a href="/logout" class="logout-link">Déconnexion</a>
            </div>
        </div>
    </header>

    <!-- Contenu principal -->
    <main class="corporate-main">
        <div class="container">
            <?php if (isset($flashMessage)): ?>
            <div class="alert alert-<?php echo $flashMessage['type']; ?>">
                <?php echo htmlspecialchars($flashMessage['message']); ?>
            </div>
            <?php endif; ?>

            <!-- Widgets financiers -->
            <section class="dashboard-section">
                <h2 class="section-title">État Financier Consolidé</h2>

                <div class="metrics-grid">
                    <div class="metric-card">
                        <h3 class="metric-title">Chiffre d'Affaires</h3>
                        <div class="metric-value"><?php echo number_format($financialData['revenue'] ?? 0, 0, ',', ' '); ?> €</div>
                        <div class="metric-change positive">+<?php echo $financialData['revenue_growth'] ?? 0; ?>%</div>
                    </div>

                    <div class="metric-card">
                        <h3 class="metric-title">Résultat Net</h3>
                        <div class="metric-value"><?php echo number_format($financialData['net_income'] ?? 0, 0, ',', ' '); ?> €</div>
                        <div class="metric-change positive">+<?php echo $financialData['net_income_growth'] ?? 0; ?>%</div>
                    </div>

                    <div class="metric-card">
                        <h3 class="metric-title">Trésorerie</h3>
                        <div class="metric-value"><?php echo number_format($financialData['cash_flow'] ?? 0, 0, ',', ' '); ?> €</div>
                    </div>

                    <div class="metric-card">
                        <h3 class="metric-title">Endettement</h3>
                        <div class="metric-value"><?php echo $financialData['debt_ratio'] ?? 0; ?>%</div>
                    </div>
                </div>
            </section>

            <!-- Graphiques et tableaux -->
            <section class="dashboard-section">
                <h2 class="section-title">Analyse Détaillée</h2>

                <div class="charts-grid">
                    <div class="chart-container">
                        <h3>Évolution du CA</h3>
                        <canvas id="revenueChart" width="400" height="200"></canvas>
                    </div>

                    <div class="chart-container">
                        <h3>Répartition par Département</h3>
                        <canvas id="departmentChart" width="400" height="200"></canvas>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <!-- Footer institutionnel -->
    <footer class="corporate-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>Service Informatique<br>
                    intranet@entreprise.com<br>
                    01 23 45 67 89</p>
                </div>

                <div class="footer-section">
                    <h4>Liens Utiles</h4>
                    <ul>
                        <li><a href="/help">Aide & Support</a></li>
                        <li><a href="/docs">Documentation</a></li>
                        <li><a href="/legal">Mentions Légales</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>© 2024 Entreprise SA</h4>
                    <p>Tous droits réservés</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="/assets/js/dashboard.js"></script>
</body>
</html>
```

### **Script JavaScript pour interactions**
```javascript
// assets/js/corporate.js
document.addEventListener('DOMContentLoaded', function() {

    // Gestion des onglets
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Masquer tous les contenus
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Désactiver tous les boutons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Activer l'onglet sélectionné
            document.getElementById(tabId).classList.add('active');
            this.classList.add('active');
        });
    });

    // Gestion des modals
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.corporate-modal');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function() {
            const modal = this.closest('.corporate-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Fermeture avec Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }
    });

    // Validation de formulaire côté client
    const forms = document.querySelectorAll('.corporate-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    });

    // Animations progressives
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.metric-card, .chart-container').forEach(el => {
        observer.observe(el);
    });

    // Gestion des tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'corporate-tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');

            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) + 'px';
            tooltip.style.top = rect.top - 30 + 'px';
        });

        element.addEventListener('mouseleave', function() {
            const tooltips = document.querySelectorAll('.corporate-tooltip');
            tooltips.forEach(tooltip => tooltip.remove());
        });
    });

});
```

## 12. Tests & Validation

### **Tests PHP unitaires**
```php
<?php
// tests/MultiStepFormTest.php
use PHPUnit\Framework\TestCase;

class MultiStepFormTest extends TestCase {

    public function testFormInitialization() {
        $form = new MultiStepForm(3);

        $this->assertEquals(1, $form->getCurrentStep());
        $this->assertEquals(3, $form->getTotalSteps());
    }

    public function testStepValidation() {
        $form = new MultiStepForm(3);

        // Test validation étape 1
        $validData = [
            'request_type' => 'congé',
            'title' => 'Demande de congé annuel'
        ];

        $errors = $form->validateStep(1, $validData);
        $this->assertEmpty($errors);

        // Test validation avec données manquantes
        $invalidData = [
            'title' => '' // request_type manquant
        ];

        $errors = $form->validateStep(1, $invalidData);
        $this->assertNotEmpty($errors);
        $this->assertArrayHasKey('request_type', $errors);
    }

    public function testFormRendering() {
        $form = new MultiStepForm(3);

        $output = $form->renderStep(1);

        $this->assertStringContains('corporate-form-wrapper', $output);
        $this->assertStringContains('progress-bar', $output);
        $this->assertStringContains('Étape 1 sur 3', $output);
    }

    public function testNavigationButtons() {
        $form = new MultiStepForm(3);

        // Étape 1 - devrait avoir seulement "Suivant"
        $output = $form->renderStep(1);
        $this->assertStringContains('Suivant', $output);
        $this->assertStringNotContains('Précédent', $output);

        // Étape 2 - devrait avoir "Précédent" et "Suivant"
        $output = $form->renderStep(2);
        $this->assertStringContains('Précédent', $output);
        $this->assertStringContains('Suivant', $output);

        // Étape 3 - devrait avoir "Précédent" et "Soumettre"
        $output = $form->renderStep(3);
        $this->assertStringContains('Précédent', $output);
        $this->assertStringContains('Soumettre la demande', $output);
    }
}
```

### **Tests d'intégration**
```php
<?php
// tests/integration/RequestSubmissionTest.php
use PHPUnit\Framework\TestCase;

class RequestSubmissionTest extends TestCase {

    private $pdo;

    protected function setUp(): void {
        // Configuration base de données de test
        $this->pdo = new PDO('sqlite::memory:');
        $this->createTestTables();
    }

    private function createTestTables() {
        $this->pdo->exec("
            CREATE TABLE employees (
                employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                department_id INTEGER
            );

            CREATE TABLE requests (
                request_id INTEGER PRIMARY KEY AUTOINCREMENT,
                employee_id INTEGER NOT NULL,
                request_type TEXT NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                status TEXT DEFAULT 'pending',
                submitted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
            );
        ");
    }

    public function testCompleteRequestSubmission() {
        // Créer un employé de test
        $stmt = $this->pdo->prepare("
            INSERT INTO employees (first_name, last_name, email, department_id)
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute(['Jean', 'Dupont', 'jean.dupont@entreprise.com', 1]);
        $employeeId = $this->pdo->lastInsertId();

        // Simuler soumission de demande
        $requestData = [
            'employee_id' => $employeeId,
            'request_type' => 'congé',
            'title' => 'Demande de congé annuel',
            'description' => 'Du 15 au 30 juillet 2024'
        ];

        $stmt = $this->pdo->prepare("
            INSERT INTO requests (employee_id, request_type, title, description)
            VALUES (?, ?, ?, ?)
        ");
        $result = $stmt->execute([
            $requestData['employee_id'],
            $requestData['request_type'],
            $requestData['title'],
            $requestData['description']
        ]);

        $this->assertTrue($result);

        // Vérifier que la demande a été créée
        $stmt = $this->pdo->query("SELECT COUNT(*) as count FROM requests");
        $count = $stmt->fetch()['count'];

        $this->assertEquals(1, $count);

        // Vérifier les données
        $stmt = $this->pdo->query("SELECT * FROM requests WHERE employee_id = $employeeId");
        $request = $stmt->fetch();

        $this->assertEquals('congé', $request['request_type']);
        $this->assertEquals('Demande de congé annuel', $request['title']);
        $this->assertEquals('pending', $request['status']);
    }
}
```

## 13. Sécurité & Conformité

### **Mesures de sécurité**
```php
// classes/Security.php
class Security {

    // Sanitisation des entrées
    public static function sanitizeInput($input) {
        if (is_array($input)) {
            return array_map([self::class, 'sanitizeInput'], $input);
        }

        return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
    }

    // Validation CSRF
    public static function generateCSRFToken() {
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }

    public static function validateCSRFToken($token) {
        return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
    }

    // Authentification
    public static function authenticateUser($email, $password) {
        // Vérification des credentials
        $stmt = Database::prepare("
            SELECT employee_id, password_hash, role, active
            FROM employees
            WHERE email = ? AND active = 1
        ");

        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password_hash'])) {
            // Créer session sécurisée
            session_regenerate_id(true);
            $_SESSION['user_id'] = $user['employee_id'];
            $_SESSION['user_role'] = $user['role'];
            $_SESSION['last_activity'] = time();

            return $user;
        }

        return false;
    }

    // Autorisation
    public static function checkPermission($permission, $userRole = null) {
        $role = $userRole ?? ($_SESSION['user_role'] ?? 'guest');

        $permissions = [
            'admin' => ['read', 'write', 'delete', 'admin'],
            'manager' => ['read', 'write', 'approve'],
            'employee' => ['read', 'write'],
            'guest' => []
        ];

        return in_array($permission, $permissions[$role] ?? []);
    }

    // Audit logging
    public static function logAction($action, $resource, $resourceId = null) {
        $stmt = Database::prepare("
            INSERT INTO audit_log (user_id, action, resource, resource_id, ip_address, user_agent, created_at)
            VALUES (?, ?, ?, ?, ?, ?, NOW())
        ");

        $stmt->execute([
            $_SESSION['user_id'] ?? null,
            $action,
            $resource,
            $resourceId,
            $_SERVER['REMOTE_ADDR'],
            $_SERVER['HTTP_USER_AGENT']
        ]);
    }
}
```

### **Conformité RGPD**
```php
// classes/GDPR.php
class GDPR {

    // Droit à l'effacement
    public static function deleteUserData($employeeId) {
        Database::beginTransaction();

        try {
            // Anonymiser les données personnelles
            Database::execute("
                UPDATE employees
                SET first_name = 'Anonymisé',
                    last_name = 'Anonymisé',
                    email = CONCAT('anonymise_', employee_id, '@deleted.com'),
                    phone = NULL,
                    address = NULL,
                    deleted_at = NOW()
                WHERE employee_id = ?
            ", [$employeeId]);

            // Supprimer les demandes associées
            Database::execute("DELETE FROM requests WHERE employee_id = ?", [$employeeId]);

            // Marquer comme supprimé dans l'audit
            Security::logAction('gdpr_deletion', 'employee', $employeeId);

            Database::commit();
            return true;

        } catch (Exception $e) {
            Database::rollback();
            error_log("GDPR deletion failed: " . $e->getMessage());
            return false;
        }
    }

    // Export des données personnelles
    public static function exportUserData($employeeId) {
        $data = [];

        // Données employé
        $employee = Database::fetch("
            SELECT * FROM employees WHERE employee_id = ?
        ", [$employeeId]);

        $data['employee'] = $employee;

        // Historique demandes
        $requests = Database::fetchAll("
            SELECT * FROM requests WHERE employee_id = ?
            ORDER BY submitted_date DESC
        ", [$employeeId]);

        $data['requests'] = $requests;

        // Générer fichier JSON
        $filename = "donnees_personnelles_{$employeeId}_" . date('Y-m-d') . ".json";

        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="' . $filename . '"');

        echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        exit;
    }
}
```

Ce fichier MD contient toutes les informations nécessaires pour recréer un système corporate traditionnel complet avec PHP, MySQL, et une architecture MVC classique.
