# Proposition 10 — **Academic Library** (Design bibliothèque académique — érudit & intemporel)

## 1. Résumé

Interface de bibliothèque académique traditionnelle avec design intemporel et érudit. Le dashboard présente les ressources documentaires, recherches en cours et publications académiques. Le formulaire gère les demandes de ressources et soumissions de travaux de recherche avec un processus formel et rigoureux.

## 2. Objectifs

* Fournir un accès organisé aux ressources académiques
* Faciliter la recherche et la découverte de connaissances
* Maintenir des standards élevés de présentation académique
* Créer un environnement propice à l'étude et la recherche

## 3. Personas

* **Chercheur Universitaire** : Accès aux publications et bases de données
* **Étudiant de Master/Doctorat** : Recherche documentaire et citations
* **Professeur** : Publication et gestion de ressources pédagogiques
* **Bibliothécaire** : Gestion et organisation des collections

## 4. Flux utilisateur (wireframe académique)

```
┌─────────────────────────────────────────────────────────────┐
│          BIBLIOTHÈQUE ACADÉMIQUE - PORTAIL ÉRUDIT           │
│                                                             │
│  ┌─────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│  │ CATALOGUE│ │ COLLECTIONS │ │ RECHERCHE   │ │ MON COMPTE │ │
│  └─────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
│                                                             │
│ ╭─────────────────────────────────────────────────────────╮ │
│ │                TABLE DE TRAVAIL VIRTUELLE                 │ │
│ │                                                           │ │
│ │ 📚 OUVRAGES CONSULTÉS CE MOIS: 47                        │ │
│ │ ├─ Philosophie: 12 ouvrages                              │ │
│ │ ├─ Histoire: 18 ouvrages                                 │ │
│ │ ├─ Sciences: 17 ouvrages                                 │ │
│ │                                                           │
│ │ 📖 ARTICLES EN COURS DE LECTURE: 8                       │ │
│ │ ├─ "La phénoménologie de Husserl" (Chapitre 3)          │ │
│ │ ├─ "Histoire des idées politiques" (Chapitre 7)          │ │
│ │ └─ "Méthodes de recherche qualitative" (Chapitre 2)      │ │
│ ╰─────────────────────────────────────────────────────────╯ │
│                                                             │
│ [RESSOURCES RÉCENTES] [CITATIONS] [NOTES] [EXPORT]          │
└─────────────────────────────────────────────────────────────┘
```

## 5. Formulaire (demande de recherche) — structure académique

### **Étape 1: Définition de la recherche**
```
┌─────────────────────────────────────────────────────────────┐
│ DEMANDE DE RECHERCHE DOCUMENTAIRE                         │
│                                                             │
│ Domaine de recherche:                                       │
│ ◉ Philosophie ◉ Histoire ◉ Sciences sociales               │
│ ◉ Littérature ◉ Sciences ◉ Droit ◉ Économie                │
│ ◉ Autre (préciser): _____________________________________   │
│                                                             │
│ Sujet précis:                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "L'influence de la phénoménologie sur la pensée        │ │
│ │  contemporaine en sciences sociales"                    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Niveau d'étude: ◉ Licence ◉ Master ◉ Doctorat               │
│                                                             │
│ [CONTINUER VERS LES CRITÈRES]                              │
└─────────────────────────────────────────────────────────────┘
```

### **Étape 2: Critères documentaires**
```
┌─────────────────────────────────────────────────────────────┐
│ CRITÈRES DE RECHERCHE                                       │
│                                                             │
│ Types de documents souhaités:                               │
│ ◉ Ouvrages théoriques                                       │
│ ◉ Articles de recherche (revues académiques)                │
│ ◉ Thèses et mémoires                                        │
│ ◉ Actes de colloques                                        │
│ ◉ Documents iconographiques                                 │
│                                                             │
│ Période couverte: Depuis [____] jusqu'à [____]              │
│                                                             │
│ Langues: ◉ Français ◉ Anglais ◉ Allemand ◉ Autres          │
│                                                             │
│ [AJOUTER LES MOTS-CLÉS]                                     │
└─────────────────────────────────────────────────────────────┘
```

### **Étape 3: Validation académique**
```
┌─────────────────────────────────────────────────────────────┐
│ VALIDATION ACADÉMIQUE                                       │
│                                                             │
│ Directeur de recherche:                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Pr. Marie Dubois - Département de Philosophie           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Bibliographie préliminaire:                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ • Husserl, E. (1913). Idées directrices...              │ │
│ │ • Heidegger, M. (1927). Être et temps...                │ │
│ │ • Sartre, J.-P. (1943). L'être et le néant...           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Justification académique:                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Cette recherche s'inscrit dans le cadre de ma thèse...   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [SOUMETTRE LA DEMANDE]                                      │
└─────────────────────────────────────────────────────────────┘
```

## 6. Dashboard — widgets académiques

### **Widget Bibliothèque Personnelle**
```javascript
// Composant React pour bibliothèque personnelle
const AcademicLibrary = () => {
  const [readingList, setReadingList] = useState([
    {
      id: 1,
      title: "Idées directrices pour une phénoménologie",
      author: "Edmund Husserl",
      type: "Ouvrage théorique",
      progress: 65,
      dueDate: "2024-12-15",
      status: "emprunté"
    },
    {
      id: 2,
      title: "Être et temps",
      author: "Martin Heidegger",
      type: "Ouvrage théorique",
      progress: 30,
      status: "réservé"
    }
  ]);

  const [citations, setCitations] = useState([
    {
      id: 1,
      text: "La conscience est toujours conscience de quelque chose",
      source: "Husserl, 1913",
      page: "42",
      category: "phénoménologie"
    }
  ]);

  return (
    <div className="academic-dashboard">
      <div className="reading-stats">
        <h3>📚 Activité de lecture ce trimestre</h3>
        <div className="stats-grid">
          <StatCard
            title="Ouvrages consultés"
            value="47"
            subtitle="Depuis septembre"
            icon="📖"
          />
          <StatCard
            title="Articles lus"
            value="23"
            subtitle="Ce mois-ci"
            icon="📄"
          />
          <StatCard
            title="Citations collectées"
            value="156"
            subtitle="Base personnelle"
            icon="📝"
          />
        </div>
      </div>

      <div className="reading-list">
        <h3>Livres en cours de lecture</h3>
        {readingList.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="citation-manager">
        <h3>Citations récentes</h3>
        {citations.map(citation => (
          <CitationCard key={citation.id} citation={citation} />
        ))}
      </div>
    </div>
  );
};
```

### **Widget Catalogue de Recherche**
```
┌─────────────────────────────────────────────────────────────┐
│ CATALOGUE DE RECHERCHE ACADÉMIQUE                          │
│                                                             │
│ Recherche avancée:                                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ phénoménologie AND conscience AND méthode              │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Filtres actifs:                                             │
│ 📚 Ouvrages • 📄 Articles • 📅 1900-2024 • 🇫🇷🇬🇧🇩🇪       │
│                                                             │
│ Résultats trouvés: 1 247 documents                         │
│                                                             │
│ [🔍 Recherche] [📚 Catalogue complet] [📝 Mes recherches]   │
└─────────────────────────────────────────────────────────────┘
```

## 7. Schéma de données (PostgreSQL académique)

```sql
-- Base de données pour bibliothèque académique
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- Pour recherche full-text
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- Table des utilisateurs académiques
CREATE TABLE academic_users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    academic_title VARCHAR(50), -- Dr., Pr., etc.
    institution VARCHAR(255),
    department VARCHAR(255),
    user_type VARCHAR(20) DEFAULT 'student', -- student, researcher, professor, librarian
    membership_status VARCHAR(20) DEFAULT 'active',
    registration_date DATE DEFAULT CURRENT_DATE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des ressources documentaires
CREATE TABLE library_resources (
    resource_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    subtitle VARCHAR(500),
    authors TEXT[], -- Tableau d'auteurs
    publication_year INTEGER,
    publisher VARCHAR(255),
    isbn VARCHAR(20),
    issn VARCHAR(20), -- Pour revues
    resource_type VARCHAR(50) NOT NULL, -- book, article, thesis, conference, etc.
    subject_area VARCHAR(100),
    language VARCHAR(10) DEFAULT 'fr',

    -- Métadonnées spécifiques par type
    journal_title VARCHAR(255), -- Pour articles
    volume INTEGER,
    issue INTEGER,
    pages VARCHAR(50),

    -- Localisation physique
    shelf_location VARCHAR(50),
    call_number VARCHAR(50),

    -- Métadonnées numériques
    digital_copy BOOLEAN DEFAULT false,
    file_path VARCHAR(500),
    doi VARCHAR(100),

    -- Statut et disponibilité
    availability_status VARCHAR(20) DEFAULT 'available', -- available, borrowed, reserved, lost
    total_copies INTEGER DEFAULT 1,
    available_copies INTEGER DEFAULT 1,

    -- Indexation et recherche
    full_text_search TSVECTOR,
    keywords TEXT[],

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des emprunts
CREATE TABLE loans (
    loan_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES academic_users(user_id),
    resource_id UUID REFERENCES library_resources(resource_id),
    loan_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date DATE NOT NULL,
    return_date TIMESTAMP NULL,
    renewal_count INTEGER DEFAULT 0,
    loan_status VARCHAR(20) DEFAULT 'active', -- active, returned, overdue, lost

    UNIQUE(user_id, resource_id, loan_status)
);

-- Table des réservations
CREATE TABLE reservations (
    reservation_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES academic_users(user_id),
    resource_id UUID REFERENCES library_resources(resource_id),
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expiration_date DATE NOT NULL,
    notification_sent BOOLEAN DEFAULT false,
    reservation_status VARCHAR(20) DEFAULT 'active'
);

-- Table des recherches sauvegardées
CREATE TABLE saved_searches (
    search_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES academic_users(user_id),
    search_name VARCHAR(255) NOT NULL,
    search_query TEXT NOT NULL,
    search_filters JSONB,
    result_count INTEGER,
    last_executed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Table des citations personnelles
CREATE TABLE personal_citations (
    citation_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES academic_users(user_id),
    resource_id UUID REFERENCES library_resources(resource_id),
    citation_text TEXT NOT NULL,
    page_reference VARCHAR(50),
    citation_style VARCHAR(20) DEFAULT 'APA', -- APA, MLA, Chicago, etc.
    categories TEXT[],
    notes TEXT,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes pour performance
CREATE INDEX idx_resources_title ON library_resources USING gin(title gin_trgm_ops);
CREATE INDEX idx_resources_authors ON library_resources USING gin(authors);
CREATE INDEX idx_resources_keywords ON library_resources USING gin(keywords);
CREATE INDEX idx_resources_subject ON library_resources(subject_area);
CREATE INDEX idx_resources_type ON library_resources(resource_type);
CREATE INDEX idx_resources_fts ON library_resources USING gin(full_text_search);

CREATE INDEX idx_loans_user ON loans(user_id);
CREATE INDEX idx_loans_resource ON loans(resource_id);
CREATE INDEX idx_loans_status ON loans(loan_status);
CREATE INDEX idx_loans_due ON loans(due_date) WHERE loan_status = 'active';

CREATE INDEX idx_citations_user ON personal_citations(user_id);
CREATE INDEX idx_citations_categories ON personal_citations USING gin(categories);

-- Trigger pour mise à jour full_text_search
CREATE OR REPLACE FUNCTION update_resource_fts() RETURNS TRIGGER AS $$
BEGIN
    NEW.full_text_search :=
        setweight(to_tsvector('french', COALESCE(NEW.title, '')), 'A') ||
        setweight(to_tsvector('french', COALESCE(NEW.subtitle, '')), 'B') ||
        setweight(to_tsvector('french', array_to_string(NEW.authors, ' '))), 'B') ||
        setweight(to_tsvector('french', array_to_string(NEW.keywords, ' ')), 'C');

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_fts
    BEFORE INSERT OR UPDATE ON library_resources
    FOR EACH ROW EXECUTE FUNCTION update_resource_fts();
```

## 8. Stack & technologies académiques

### **Backend académique**
```python
# app.py - Application Flask pour bibliothèque académique
from flask import Flask, request, jsonify, g
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from flask_cors import CORS
from sqlalchemy import text
from datetime import datetime, timedelta
import os

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

# Extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

# Modèles de données
class AcademicUser(db.Model):
    __tablename__ = 'academic_users'

    user_id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(255), unique=True, nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    academic_title = db.Column(db.String(50))
    institution = db.Column(db.String(255))
    department = db.Column(db.String(255))
    user_type = db.Column(db.String(20), default='student')

    loans = db.relationship('Loan', backref='user', lazy=True)
    citations = db.relationship('Citation', backref='user', lazy=True)

class LibraryResource(db.Model):
    __tablename__ = 'library_resources'

    resource_id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    title = db.Column(db.String(500), nullable=False)
    authors = db.Column(db.ARRAY(db.String), nullable=False)
    publication_year = db.Column(db.Integer)
    resource_type = db.Column(db.String(50), nullable=False)
    subject_area = db.Column(db.String(100))
    language = db.Column(db.String(10), default='fr')
    availability_status = db.Column(db.String(20), default='available')

    loans = db.relationship('Loan', backref='resource', lazy=True)

class Loan(db.Model):
    __tablename__ = 'loans'

    loan_id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('academic_users.user_id'), nullable=False)
    resource_id = db.Column(db.String(36), db.ForeignKey('library_resources.resource_id'), nullable=False)
    loan_date = db.Column(db.DateTime, default=datetime.utcnow)
    due_date = db.Column(db.Date, nullable=False)
    return_date = db.Column(db.DateTime)
    loan_status = db.Column(db.String(20), default='active')

# Routes API
@app.route('/api/search', methods=['GET'])
@jwt_required()
def search_resources():
    """Recherche avancée dans le catalogue"""
    query = request.args.get('q', '')
    resource_type = request.args.get('type')
    subject = request.args.get('subject')
    year_from = request.args.get('year_from')
    year_to = request.args.get('year_to')

    # Construction de la requête
    search_query = LibraryResource.query

    if query:
        # Recherche full-text
        search_query = search_query.filter(
            text("full_text_search @@ plainto_tsquery('french', :query)")
        ).params(query=query)

    if resource_type:
        search_query = search_query.filter_by(resource_type=resource_type)

    if subject:
        search_query = search_query.filter_by(subject_area=subject)

    if year_from:
        search_query = search_query.filter(LibraryResource.publication_year >= int(year_from))

    if year_to:
        search_query = search_query.filter(LibraryResource.publication_year <= int(year_to))

    # Pagination
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 20))
    resources = search_query.paginate(page=page, per_page=per_page)

    return jsonify({
        'resources': [resource.to_dict() for resource in resources.items],
        'pagination': {
            'page': page,
            'per_page': per_page,
            'total': resources.total,
            'pages': resources.pages
        }
    })

@app.route('/api/loans', methods=['POST'])
@jwt_required()
def create_loan():
    """Créer un nouvel emprunt"""
    user_id = get_jwt_identity()
    data = request.get_json()

    # Vérifier disponibilité
    resource = LibraryResource.query.filter_by(
        resource_id=data['resource_id'],
        availability_status='available'
    ).first_or_404()

    # Calculer date de retour (3 semaines)
    due_date = datetime.utcnow().date() + timedelta(weeks=3)

    # Créer l'emprunt
    loan = Loan(
        user_id=user_id,
        resource_id=data['resource_id'],
        due_date=due_date
    )

    # Mettre à jour disponibilité
    resource.available_copies -= 1
    if resource.available_copies == 0:
        resource.availability_status = 'borrowed'

    db.session.add(loan)
    db.session.commit()

    return jsonify({
        'loan': loan.to_dict(),
        'message': 'Emprunt créé avec succès'
    }), 201

@app.route('/api/resources/<resource_id>/reserve', methods=['POST'])
@jwt_required()
def reserve_resource(resource_id):
    """Réserver une ressource"""
    user_id = get_jwt_identity()

    # Vérifier que la ressource existe et n'est pas disponible
    resource = LibraryResource.query.filter(
        LibraryResource.resource_id == resource_id,
        LibraryResource.availability_status != 'available'
    ).first_or_404()

    # Vérifier qu'il n'y a pas déjà une réservation active
    existing_reservation = Reservation.query.filter_by(
        user_id=user_id,
        resource_id=resource_id,
        reservation_status='active'
    ).first()

    if existing_reservation:
        return jsonify({'message': 'Réservation déjà active'}), 400

    # Créer la réservation (valable 7 jours)
    expiration_date = datetime.utcnow().date() + timedelta(days=7)

    reservation = Reservation(
        user_id=user_id,
        resource_id=resource_id,
        expiration_date=expiration_date
    )

    db.session.add(reservation)
    db.session.commit()

    return jsonify({
        'reservation': reservation.to_dict(),
        'message': 'Réservation créée avec succès'
    }), 201

if __name__ == '__main__':
    app.run(debug=True)
```

### **Frontend académique traditionnel**
```html
<!-- catalogue.html - Page de catalogue traditionnel -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogue - Bibliothèque Académique</title>

    <!-- Bootstrap académique -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap">

    <!-- CSS personnalisé -->
    <link rel="stylesheet" href="/static/css/academic.css">
</head>
<body>
    <!-- Header académique -->
    <header class="academic-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand academic-brand" href="/">
                    <span class="academic-logo">📚</span>
                    Bibliothèque Académique
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/catalogue">Catalogue</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mes-emprunts">Mes emprunts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/recherche">Recherche avancée</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/compte">Mon compte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Corps de la page -->
    <main class="academic-main">
        <div class="container">
            <!-- Filtres de recherche -->
            <div class="search-filters card">
                <div class="card-body">
                    <form id="searchForm" class="search-form">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="searchQuery"
                                       placeholder="Rechercher par titre, auteur, sujet...">
                            </div>
                            <div class="col-md-3">
                                <select class="form-control" id="resourceType">
                                    <option value="">Tous types</option>
                                    <option value="book">Ouvrages</option>
                                    <option value="article">Articles</option>
                                    <option value="thesis">Thèses</option>
                                    <option value="conference">Actes</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <button type="submit" class="btn btn-primary btn-block">
                                    🔍 Rechercher
                                </button>
                            </div>
                        </div>

                        <div class="advanced-filters collapse" id="advancedFilters">
                            <div class="form-row mt-3">
                                <div class="col-md-3">
                                    <select class="form-control" id="subjectArea">
                                        <option value="">Toutes disciplines</option>
                                        <option value="philosophy">Philosophie</option>
                                        <option value="history">Histoire</option>
                                        <option value="sociology">Sociologie</option>
                                        <option value="literature">Littérature</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control" id="language">
                                        <option value="">Toutes langues</option>
                                        <option value="fr">Français</option>
                                        <option value="en">Anglais</option>
                                        <option value="de">Allemand</option>
                                        <option value="es">Espagnol</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="number" class="form-control" id="yearFrom"
                                           placeholder="Année de...">
                                </div>
                                <div class="col-md-3">
                                    <input type="number" class="form-control" id="yearTo"
                                           placeholder="...à">
                                </div>
                            </div>
                        </div>

                        <div class="mt-2">
                            <a data-toggle="collapse" href="#advancedFilters" role="button">
                                🔧 Recherche avancée
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Résultats de recherche -->
            <div class="search-results">
                <div class="results-header d-flex justify-content-between align-items-center">
                    <h3>Résultats de recherche</h3>
                    <span id="resultsCount" class="text-muted">0 résultats</span>
                </div>

                <div id="resultsContainer" class="results-container">
                    <!-- Les résultats seront chargés ici via AJAX -->
                </div>

                <!-- Pagination -->
                <nav id="resultsPagination" class="mt-4" style="display: none;">
                    <ul class="pagination justify-content-center">
                        <!-- Pagination générée dynamiquement -->
                    </ul>
                </nav>
            </div>
        </div>
    </main>

    <!-- Footer académique -->
    <footer class="academic-footer bg-light mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Contact</h5>
                    <p>
                        Bibliothèque Académique<br>
                        123 Rue des Lettres<br>
                        75005 Paris<br>
                        contact@bibliotheque.fr
                    </p>
                </div>
                <div class="col-md-4">
                    <h5>Horaires d'ouverture</h5>
                    <p>
                        Lundi - Vendredi: 8h - 20h<br>
                        Samedi: 9h - 18h<br>
                        Dimanche: Fermé
                    </p>
                </div>
                <div class="col-md-4">
                    <h5>Liens utiles</h5>
                    <ul class="list-unstyled">
                        <li><a href="/reglement">Règlement intérieur</a></li>
                        <li><a href="/aide">Aide à la recherche</a></li>
                        <li><a href="/formations">Formations documentaires</a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="text-center">
                <p>&copy; 2024 Bibliothèque Académique. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/static/js/academic-catalogue.js"></script>
</body>
</html>
```

## 9. Plan d'implémentation académique

### **Phase 1: Catalogue et recherche (Mois 1-2)**
```python
# Configuration de l'indexation full-text
from sqlalchemy import text

def create_search_index():
    """Créer les indexes de recherche"""
    # Index GIN pour recherche full-text
    db.engine.execute(text("""
        CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_resources_fts
        ON library_resources USING gin(full_text_search);
    """))

    # Index pour recherche par auteurs
    db.engine.execute(text("""
        CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_resources_authors
        ON library_resources USING gin(authors);
    """))

def populate_sample_data():
    """Ajouter des données d'exemple"""
    sample_resources = [
        {
            'title': 'Idées directrices pour une phénoménologie',
            'authors': ['Edmund Husserl'],
            'publication_year': 1913,
            'resource_type': 'book',
            'subject_area': 'philosophy',
            'language': 'fr',
            'keywords': ['phénoménologie', 'conscience', 'méthode']
        },
        # ... autres ressources
    ]

    for resource_data in sample_resources:
        resource = LibraryResource(**resource_data)
        db.session.add(resource)

    db.session.commit()
```

### **Phase 2: Gestion des emprunts (Mois 3-4)**
```python
# Système de gestion des emprunts
from datetime import datetime, timedelta

class LoanManager:
    def __init__(self, db):
        self.db = db
        self.max_loan_duration = 21  # jours
        self.max_loans_per_user = 5

    def create_loan(self, user_id, resource_id):
        """Créer un emprunt avec validation"""

        # Vérifier limites utilisateur
        active_loans = Loan.query.filter_by(
            user_id=user_id,
            loan_status='active'
        ).count()

        if active_loans >= self.max_loans_per_user:
            raise ValueError("Limite d'emprunts atteinte")

        # Vérifier disponibilité
        resource = LibraryResource.query.filter_by(
            resource_id=resource_id,
            availability_status='available'
        ).first()

        if not resource:
            raise ValueError("Ressource non disponible")

        # Calculer date de retour
        due_date = datetime.utcnow().date() + timedelta(days=self.max_loan_duration)

        # Créer l'emprunt
        loan = Loan(
            user_id=user_id,
            resource_id=resource_id,
            due_date=due_date
        )

        # Mettre à jour disponibilité
        resource.available_copies -= 1
        if resource.available_copies == 0:
            resource.availability_status = 'borrowed'

        self.db.session.add(loan)
        self.db.session.commit()

        return loan

    def return_loan(self, loan_id):
        """Retourner un emprunt"""
        loan = Loan.query.filter_by(loan_id=loan_id).first()
        if not loan:
            raise ValueError("Emprunt non trouvé")

        loan.return_date = datetime.utcnow()
        loan.loan_status = 'returned'

        # Remettre à jour disponibilité
        resource = loan.resource
        resource.available_copies += 1
        if resource.available_copies > 0:
            resource.availability_status = 'available'

        self.db.session.commit()

        return loan

    def get_overdue_loans(self):
        """Récupérer les emprunts en retard"""
        return Loan.query.filter(
            Loan.due_date < datetime.utcnow().date(),
            Loan.loan_status == 'active'
        ).all()
```

### **Phase 3: Interface utilisateur (Mois 5-6)**
```javascript
// academic-catalogue.js - JavaScript pour le catalogue
$(document).ready(function() {

    // Configuration de la recherche
    let currentPage = 1;
    let currentQuery = '';
    let currentFilters = {};

    // Gestionnaire de formulaire de recherche
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();

        currentQuery = $('#searchQuery').val();
        currentFilters = {
            type: $('#resourceType').val(),
            subject: $('#subjectArea').val(),
            language: $('#language').val(),
            yearFrom: $('#yearFrom').val(),
            yearTo: $('#yearTo').val()
        };

        currentPage = 1;
        performSearch();
    });

    // Fonction de recherche
    function performSearch() {
        const searchParams = new URLSearchParams({
            q: currentQuery,
            page: currentPage,
            ...currentFilters
        });

        // Afficher loader
        $('#resultsContainer').html('<div class="text-center p-4"><div class="spinner-border" role="status"></div></div>');

        // Requête AJAX
        $.ajax({
            url: '/api/search?' + searchParams.toString(),
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + getAuthToken()
            },
            success: function(response) {
                displayResults(response.resources);
                updatePagination(response.pagination);
                $('#resultsCount').text(response.pagination.total + ' résultats');
            },
            error: function(xhr) {
                console.error('Erreur recherche:', xhr);
                $('#resultsContainer').html('<div class="alert alert-danger">Erreur lors de la recherche</div>');
            }
        });
    }

    // Affichage des résultats
    function displayResults(resources) {
        if (resources.length === 0) {
            $('#resultsContainer').html('<div class="alert alert-info">Aucun résultat trouvé</div>');
            return;
        }

        const resultsHtml = resources.map(resource => `
            <div class="resource-card card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="card-title">${escapeHtml(resource.title)}</h5>
                            <p class="card-text text-muted">
                                ${resource.authors ? resource.authors.join(', ') : 'Auteur inconnu'}
                                ${resource.publication_year ? ' (' + resource.publication_year + ')' : ''}
                            </p>
                            <span class="badge badge-secondary">${getResourceTypeLabel(resource.resource_type)}</span>
                            ${resource.subject_area ? `<span class="badge badge-info ml-1">${resource.subject_area}</span>` : ''}
                        </div>
                        <div class="text-right">
                            <div class="availability-status ${resource.availability_status}">
                                ${getAvailabilityLabel(resource.availability_status)}
                            </div>
                        </div>
                    </div>

                    <div class="resource-actions mt-3">
                        <button class="btn btn-outline-primary btn-sm" onclick="viewResource('${resource.resource_id}')">
                            👁️ Voir détails
                        </button>

                        ${resource.availability_status === 'available' ?
                            `<button class="btn btn-success btn-sm ml-2" onclick="borrowResource('${resource.resource_id}')">
                                📖 Emprunter
                            </button>` :
                            `<button class="btn btn-warning btn-sm ml-2" onclick="reserveResource('${resource.resource_id}')">
                                📅 Réserver
                            </button>`
                        }
                    </div>
                </div>
            </div>
        `).join('');

        $('#resultsContainer').html(resultsHtml);
    }

    // Pagination
    function updatePagination(pagination) {
        if (pagination.pages <= 1) {
            $('#resultsPagination').hide();
            return;
        }

        let paginationHtml = '';

        // Précédent
        if (pagination.page > 1) {
            paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="${pagination.page - 1}">Précédent</a></li>`;
        }

        // Pages
        for (let i = Math.max(1, pagination.page - 2); i <= Math.min(pagination.pages, pagination.page + 2); i++) {
            paginationHtml += `<li class="page-item ${i === pagination.page ? 'active' : ''}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        }

        // Suivant
        if (pagination.page < pagination.pages) {
            paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="${pagination.page + 1}">Suivant</a></li>`;
        }

        $('.pagination').html(paginationHtml);
        $('#resultsPagination').show();

        // Gestionnaire de clic pagination
        $('.pagination .page-link').on('click', function(e) {
            e.preventDefault();
            currentPage = parseInt($(this).data('page'));
            performSearch();
        });
    }

    // Fonctions utilitaires
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function getResourceTypeLabel(type) {
        const labels = {
            'book': 'Ouvrage',
            'article': 'Article',
            'thesis': 'Thèse',
            'conference': 'Actes'
        };
        return labels[type] || type;
    }

    function getAvailabilityLabel(status) {
        const labels = {
            'available': 'Disponible',
            'borrowed': 'Emprunté',
            'reserved': 'Réservé'
        };
        return labels[status] || status;
    }

    function getAuthToken() {
        return localStorage.getItem('authToken');
    }

    // Fonctions d'action (à implémenter)
    window.viewResource = function(resourceId) {
        // Ouvrir modal de détails
        console.log('Voir ressource:', resourceId);
    };

    window.borrowResource = function(resourceId) {
        // Ouvrir modal d'emprunt
        console.log('Emprunter ressource:', resourceId);
    };

    window.reserveResource = function(resourceId) {
        // Ouvrir modal de réservation
        console.log('Réserver ressource:', resourceId);
    };
});
```

## 10. Design System Érudit

### **Palette académique**
```css
:root {
  /* Couleurs classiques et intemporelles */
  --academic-primary: #8B4513;      /* Marron bibliothèque */
  --academic-secondary: #F5F5DC;    /* Beige ancien */
  --academic-accent: #DAA520;        /* Doré académique */

  /* Tons de parchemin et encre */
  --parchment-light: #FAF0E6;        /* Beige très clair */
  --parchment-medium: #F5F5DC;       /* Beige moyen */
  --parchment-dark: #D2B48C;         /* Beige foncé */
  --ink-black: #2F1B14;              /* Noir d'encre */
  --ink-brown: #3D2817;              /* Marron encre */

  /* Couleurs disciplinaires */
  --discipline-philosophy: #4A5568;  /* Gris philosophique */
  --discipline-history: #8B4513;     /* Marron historique */
  --discipline-science: #2D3748;     /* Bleu scientifique */
  --discipline-literature: #DAA520;  /* Doré littéraire */
}
```

### **Typographie érudite**
```css
/* Hiérarchie typographique académique */
.academic-display {
  font-family: 'Crimson Text', serif;
  font-size: 3.5rem;         /* 56px */
  font-weight: 400;
  line-height: 1.1;
  color: var(--ink-black);
  letter-spacing: -0.02em;
}

.academic-heading-1 {
  font-family: 'Crimson Text', serif;
  font-size: 2.5rem;         /* 40px */
  font-weight: 600;
  line-height: 1.2;
  color: var(--academic-primary);
  margin-bottom: 1rem;
}

.academic-heading-2 {
  font-family: 'Crimson Text', serif;
  font-size: 2rem;           /* 32px */
  font-weight: 500;
  line-height: 1.3;
  color: var(--academic-primary);
}

.academic-body-large {
  font-family: 'Crimson Text', serif;
  font-size: 1.25rem;        /* 20px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--ink-brown);
}

.academic-body-regular {
  font-family: 'Crimson Text', serif;
  font-size: 1rem;           /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--ink-brown);
}

.academic-caption {
  font-family: 'Georgia', serif;
  font-size: 0.875rem;       /* 14px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--parchment-dark);
  font-style: italic;
}
```

### **Animations académiques**
```css
/* Animations subtiles et élégantes */
@keyframes parchment-fade {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes ink-flow {
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

@keyframes book-open {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(-10deg);
  }
}

/* Classes d'animation */
.academic-fade-in {
  animation: parchment-fade 0.6s ease-out;
}

.ink-underline {
  position: relative;
}

.ink-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 1px;
  background: var(--ink-brown);
  animation: ink-flow 1s ease-out forwards;
}

.book-card:hover {
  animation: book-open 0.3s ease-out forwards;
}
```

## 10.1. Ambiance & Concept

**Atmosphère** : Environnement académique intemporel, inspirant le respect des connaissances et la rigueur intellectuelle. L'interface dégage une impression de stabilité et de profondeur, parfaite pour la recherche savante.

**Identité visuelle** : Design classique avec serif fonts, couleurs traditionnelles et textures de parchemin. L'accent est mis sur la lisibilité et la hiérarchie de l'information académique.

## 10.2. Arrière-plans & Textures

* **Background principal** : Dégradé beige subtil avec texture de parchemin
* **Pattern overlay** : Aucun pattern visible, pureté académique
* **Cards** : Fond parchemin avec bordures dorées fines
* **Zones de contenu** : Sections clairement définies avec hiérarchie typographique
* **Texture de surface** : Grain de papier ancien pour authenticité

## 10.3. Animations & Transitions

**Micro-interactions** :
* **Cards hover** : Translation Y légère avec animation de livre qui s'ouvre
* **Boutons** : Underline animé avec effet d'encre qui coule
* **Form inputs focus** : Border doré avec transition douce
* **Navigation** : Fade subtil entre sections
* **Loading states** : Spinner élégant, pas de distraction

**Transitions de page** :
* **Navigation** : Fade cross-dissolve élégant
* **Modal** : Scale + fade avec backdrop parchment
* **Form steps** : Slide horizontal avec progress bar

**Animations d'état** :
* **Success** : Checkmark élégant, pas d'effet flashy
* **Error** : Border rouge subtil avec message discret
* **Loading** : Progress bar animée avec style académique

## 10.4. Idées & Détails Design

**Éléments uniques** :
* **Parchemin virtuel** : Fond avec texture de vieux papier
* **Encre animée** : Underlines qui s'écrivent comme avec une plume
* **Livres 3D** : Cards qui s'ouvrent légèrement au hover
* **Rubans de lecture** : Indicateurs de progression en forme de rubans
* **Sceau académique** : Validation avec effet de tampon en relief

**Interactions spéciales** :
* **Double-clic académique** : Ouvre modal de détails érudits
* **Glisser pour noter** : Annotation par glisser-déposer
* **Marque-page** : Sauvegarde avec effet de marque-page
* **Citation instantanée** : Sélection de texte avec génération de citation

**Composants signature** :
* **Catalogue érudit** : Liste avec hiérarchie typographique claire
* **Fiche détaillée** : Page de détail avec toutes métadonnées
* **Gestion d'emprunts** : Interface de suivi avec dates précises
* **Recherche savante** : Moteur avec filtres disciplinaires

## 11. Code Examples Détaillés

### **API de catalogue académique**
```python
from flask import Blueprint, request, jsonify
from sqlalchemy import or_, and_, func
from models import LibraryResource, db

academic_bp = Blueprint('academic', __name__)

@academic_bp.route('/api/academic/search', methods=['GET'])
def search_academic_resources():
    """Recherche académique avancée avec filtres complexes"""

    # Paramètres de recherche
    query = request.args.get('q', '').strip()
    resource_types = request.args.getlist('type[]')
    subjects = request.args.getlist('subject[]')
    languages = request.args.getlist('language[]')
    year_from = request.args.get('year_from')
    year_to = request.args.get('year_to')
    authors = request.args.getlist('author[]')

    # Pagination
    page = int(request.args.get('page', 1))
    per_page = min(int(request.args.get('per_page', 20)), 100)

    # Construction de la requête
    search_query = LibraryResource.query

    # Recherche full-text si query fournie
    if query:
        # Recherche dans titre, auteurs, mots-clés
        search_terms = [term.strip() for term in query.split() if term.strip()]
        if search_terms:
            # Utilisation de l'index full-text
            tsquery = " | ".join(f"'{term}':*" for term in search_terms)
            search_query = search_query.filter(
                db.text(f"full_text_search @@ to_tsquery('french', '{tsquery}')")
            )

    # Filtres par type de ressource
    if resource_types:
        search_query = search_query.filter(
            LibraryResource.resource_type.in_(resource_types)
        )

    # Filtres par discipline
    if subjects:
        search_query = search_query.filter(
            LibraryResource.subject_area.in_(subjects)
        )

    # Filtres par langue
    if languages:
        search_query = search_query.filter(
            LibraryResource.language.in_(languages)
        )

    # Filtres temporels
    if year_from:
        try:
            year_from_int = int(year_from)
            search_query = search_query.filter(
                LibraryResource.publication_year >= year_from_int
            )
        except ValueError:
            pass

    if year_to:
        try:
            year_to_int = int(year_to)
            search_query = search_query.filter(
                LibraryResource.publication_year <= year_to_int
            )
        except ValueError:
            pass

    # Filtres par auteur
    if authors:
        # Recherche partielle dans le tableau d'auteurs
        author_conditions = []
        for author in authors:
            author_conditions.append(
                LibraryResource.authors.any(author)
            )
        if author_conditions:
            search_query = search_query.filter(or_(*author_conditions))

    # Tri par pertinence (score full-text) puis par date
    search_query = search_query.order_by(
        db.desc(db.text("ts_rank(full_text_search, to_tsquery('french', :query))")) if query else db.text("1"),
        db.desc(LibraryResource.publication_year)
    ).params(query=query if query else "")

    # Exécution avec pagination
    resources_page = search_query.paginate(page=page, per_page=per_page)

    # Formatage des résultats
    resources_data = []
    for resource in resources_page.items:
        resource_dict = {
            'id': resource.resource_id,
            'title': resource.title,
            'subtitle': resource.subtitle,
            'authors': resource.authors,
            'publication_year': resource.publication_year,
            'publisher': resource.publisher,
            'resource_type': resource.resource_type,
            'subject_area': resource.subject_area,
            'language': resource.language,
            'availability_status': resource.availability_status,
            'available_copies': resource.available_copies,
            'total_copies': resource.total_copies,
            'isbn': resource.isbn,
            'issn': resource.issn,
            'doi': resource.doi,
            'shelf_location': resource.shelf_location,
            'call_number': resource.call_number,
            'digital_copy': resource.digital_copy,
            'keywords': resource.keywords
        }
        resources_data.append(resource_dict)

    # Métadonnées de pagination
    pagination_info = {
        'page': page,
        'per_page': per_page,
        'total': resources_page.total,
        'pages': resources_page.pages,
        'has_next': resources_page.has_next,
        'has_prev': resources_page.has_prev,
        'next_page': resources_page.next_num if resources_page.has_next else None,
        'prev_page': resources_page.prev_num if resources_page.has_prev else None
    }

    # Statistiques de recherche
    search_stats = {
        'total_results': resources_page.total,
        'search_time': 0.0,  # À mesurer en production
        'filters_applied': {
            'query': bool(query),
            'types': len(resource_types),
            'subjects': len(subjects),
            'languages': len(languages),
            'temporal': bool(year_from or year_to),
            'authors': len(authors)
        }
    }

    return jsonify({
        'success': True,
        'data': resources_data,
        'pagination': pagination_info,
        'search_stats': search_stats,
        'query': {
            'original': query,
            'types': resource_types,
            'subjects': subjects,
            'languages': languages,
            'year_range': [year_from, year_to],
            'authors': authors
        }
    })

@academic_bp.route('/api/academic/resources/<resource_id>', methods=['GET'])
def get_resource_details(resource_id):
    """Détails complets d'une ressource académique"""

    resource = LibraryResource.query.filter_by(resource_id=resource_id).first()

    if not resource:
        return jsonify({
            'success': False,
            'message': 'Ressource non trouvée'
        }), 404

    # Récupérer les emprunts actifs pour cette ressource
    active_loans = db.session.query(func.count()).select_from(Loan).filter(
        Loan.resource_id == resource_id,
        Loan.loan_status == 'active'
    ).scalar()

    # Récupérer les réservations actives
    active_reservations = db.session.query(func.count()).select_from(Reservation).filter(
        Reservation.resource_id == resource_id,
        Reservation.reservation_status == 'active'
    ).scalar()

    resource_data = {
        'id': resource.resource_id,
        'title': resource.title,
        'subtitle': resource.subtitle,
        'authors': resource.authors,
        'publication_year': resource.publication_year,
        'publisher': resource.publisher,
        'isbn': resource.isbn,
        'issn': resource.issn,
        'doi': resource.doi,
        'resource_type': resource.resource_type,
        'subject_area': resource.subject_area,
        'language': resource.language,
        'description': resource.description,
        'table_of_contents': resource.table_of_contents,
        'abstract': resource.abstract,
        'keywords': resource.keywords,
        'availability': {
            'status': resource.availability_status,
            'available_copies': resource.available_copies,
            'total_copies': resource.total_copies,
            'active_loans': active_loans,
            'active_reservations': active_reservations
        },
        'location': {
            'shelf_location': resource.shelf_location,
            'call_number': resource.call_number,
            'library_section': resource.library_section
        },
        'digital': {
            'has_digital_copy': resource.digital_copy,
            'file_path': resource.file_path,
            'file_size': resource.file_size,
            'mime_type': resource.mime_type,
            'last_modified': resource.last_modified.isoformat() if resource.last_modified else None
        },
        'metadata': {
            'pages': resource.pages,
            'edition': resource.edition,
            'volume': resource.volume,
            'issue': resource.issue,
            'journal_title': resource.journal_title,
            'conference_name': resource.conference_name,
            'series_title': resource.series_title,
            'created_at': resource.created_at.isoformat(),
            'updated_at': resource.updated_at.isoformat()
        }
    }

    return jsonify({
        'success': True,
        'data': resource_data
    })

@academic_bp.route('/api/academic/loans', methods=['POST'])
def create_academic_loan():
    """Créer un emprunt académique avec règles métier"""

    # Vérification de l'authentification (middleware)
    user_id = request.user_id  # Défini par le middleware d'auth

    data = request.get_json()
    resource_id = data.get('resource_id')

    if not resource_id:
        return jsonify({
            'success': False,
            'message': 'ID de ressource requis'
        }), 400

    # Vérifier que l'utilisateur existe et est actif
    user = AcademicUser.query.filter_by(
        user_id=user_id,
        membership_status='active'
    ).first()

    if not user:
        return jsonify({
            'success': False,
            'message': 'Utilisateur non trouvé ou inactif'
        }), 404

    # Vérifier les limites d'emprunt selon le type d'utilisateur
    loan_limits = {
        'student': 5,
        'researcher': 10,
        'professor': 15,
        'librarian': 20
    }

    current_loans = Loan.query.filter_by(
        user_id=user_id,
        loan_status='active'
    ).count()

    max_loans = loan_limits.get(user.user_type, 5)

    if current_loans >= max_loans:
        return jsonify({
            'success': False,
            'message': f'Limite d\'emprunts atteinte ({max_loans} maximum)'
        }), 400

    # Vérifier la disponibilité de la ressource
    resource = LibraryResource.query.filter_by(resource_id=resource_id).first()

    if not resource:
        return jsonify({
            'success': False,
            'message': 'Ressource non trouvée'
        }), 404

    if resource.availability_status != 'available' or resource.available_copies <= 0:
        return jsonify({
            'success': False,
            'message': 'Ressource actuellement indisponible'
        }), 400

    # Vérifier si l'utilisateur n'a pas déjà emprunté cette ressource
    existing_loan = Loan.query.filter_by(
        user_id=user_id,
        resource_id=resource_id,
        loan_status='active'
    ).first()

    if existing_loan:
        return jsonify({
            'success': False,
            'message': 'Vous avez déjà emprunté cette ressource'
        }), 400

    # Calculer la durée d'emprunt selon le type de ressource et d'utilisateur
    loan_durations = {
        'student': {
            'book': 21,      # 3 semaines
            'article': 7,    # 1 semaine
            'thesis': 14,    # 2 semaines
            'conference': 7  # 1 semaine
        },
        'researcher': {
            'book': 42,      # 6 semaines
            'article': 14,   # 2 semaines
            'thesis': 28,    # 4 semaines
            'conference': 14 # 2 semaines
        },
        'professor': {
            'book': 84,      # 12 semaines
            'article': 28,   # 4 semaines
            'thesis': 56,    # 8 semaines
            'conference': 28 # 4 semaines
        }
    }

    duration_days = loan_durations.get(user.user_type, loan_durations['student']).get(resource.resource_type, 21)

    # Créer l'emprunt
    loan_date = datetime.utcnow()
    due_date = loan_date + timedelta(days=duration_days)

    loan = Loan(
        user_id=user_id,
        resource_id=resource_id,
        loan_date=loan_date,
        due_date=due_date.date(),
        loan_status='active'
    )

    # Mettre à jour la disponibilité
    resource.available_copies -= 1
    if resource.available_copies == 0:
        resource.availability_status = 'borrowed'

    try:
        db.session.add(loan)
        db.session.commit()

        # Log de l'emprunt
        app.logger.info(f'Emprunt créé: {user.first_name} {user.last_name} -> {resource.title}')

        return jsonify({
            'success': True,
            'data': {
                'loan_id': loan.loan_id,
                'resource_title': resource.title,
                'due_date': loan.due_date.isoformat(),
                'loan_duration_days': duration_days
            },
            'message': f'Emprunt créé avec succès. Date de retour: {loan.due_date.strftime("%d/%m/%Y")}'
        }), 201

    except Exception as e:
        db.session.rollback()
        app.logger.error(f'Erreur création emprunt: {str(e)}')
        return jsonify({
            'success': False,
            'message': 'Erreur lors de la création de l\'emprunt'
        }), 500
```

### **Interface de catalogue académique**
```html
<!-- academic-resource-card.html - Template pour carte de ressource -->
<div class="academic-resource-card card mb-4 shadow-sm">
    <div class="card-body">
        <!-- En-tête avec type et discipline -->
        <div class="resource-header d-flex justify-content-between align-items-start mb-2">
            <div class="resource-badges">
                <span class="badge badge-resource-type badge-{{ resource.resource_type }}">
                    {{ get_resource_type_label(resource.resource_type) }}
                </span>
                {% if resource.subject_area %}
                <span class="badge badge-subject-area badge-{{ resource.subject_area }}">
                    {{ get_subject_label(resource.subject_area) }}
                </span>
                {% endif %}
            </div>
            <div class="resource-year">
                {% if resource.publication_year %}
                <small class="text-muted">{{ resource.publication_year }}</small>
                {% endif %}
            </div>
        </div>

        <!-- Titre et sous-titre -->
        <h5 class="card-title academic-title">
            <a href="/resources/{{ resource.resource_id }}" class="text-decoration-none">
                {{ resource.title }}
            </a>
        </h5>
        {% if resource.subtitle %}
        <h6 class="card-subtitle mb-2 text-muted academic-subtitle">
            {{ resource.subtitle }}
        </h6>
        {% endif %}

        <!-- Auteurs -->
        <div class="resource-authors mb-2">
            <small class="text-muted">
                {% if resource.authors %}
                    {% for author in resource.authors %}
                        <span class="author-name">{{ author }}</span>{% if not loop.last %}, {% endif %}
                    {% endfor %}
                {% else %}
                    <em>Auteur non spécifié</em>
                {% endif %}
            </small>
        </div>

        <!-- Métadonnées supplémentaires -->
        <div class="resource-metadata mb-3">
            {% if resource.publisher %}
            <small class="text-muted d-block">
                <strong>Éditeur:</strong> {{ resource.publisher }}
            </small>
            {% endif %}

            {% if resource.language %}
            <small class="text-muted d-block">
                <strong>Langue:</strong> {{ get_language_label(resource.language) }}
            </small>
            {% endif %}

            {% if resource.isbn %}
            <small class="text-muted d-block">
                <strong>ISBN:</strong> {{ resource.isbn }}
            </small>
            {% endif %}

            {% if resource.doi %}
            <small class="text-muted d-block">
                <strong>DOI:</strong>
                <a href="https://doi.org/{{ resource.doi }}" target="_blank" class="doi-link">
                    {{ resource.doi }}
                </a>
            </small>
            {% endif %}
        </div>

        <!-- Mots-clés -->
        {% if resource.keywords %}
        <div class="resource-keywords mb-3">
            {% for keyword in resource.keywords %}
            <span class="keyword-badge badge badge-outline">
                {{ keyword }}
            </span>
            {% endfor %}
        </div>
        {% endif %}

        <!-- Statut de disponibilité -->
        <div class="availability-section mb-3">
            <div class="availability-status status-{{ resource.availability_status }}">
                <i class="status-icon {{ get_status_icon(resource.availability_status) }}"></i>
                <span class="status-text">{{ get_availability_label(resource.availability_status) }}</span>

                {% if resource.availability_status == 'available' %}
                <small class="text-success d-block">
                    {{ resource.available_copies }}/{{ resource.total_copies }} exemplaires disponibles
                </small>
                {% elif resource.availability_status == 'borrowed' %}
                <small class="text-warning d-block">
                    Retour prévu: {{ get_next_return_date(resource.resource_id) }}
                </small>
                {% endif %}
            </div>
        </div>

        <!-- Actions -->
        <div class="resource-actions d-flex justify-content-between align-items-center">
            <div class="primary-actions">
                <a href="/resources/{{ resource.resource_id }}" class="btn btn-outline-primary btn-sm">
                    <i class="fa fa-eye"></i> Détails
                </a>

                {% if resource.digital_copy %}
                <a href="/digital/{{ resource.resource_id }}" class="btn btn-outline-info btn-sm ml-1">
                    <i class="fa fa-download"></i> Version numérique
                </a>
                {% endif %}
            </div>

            <div class="secondary-actions">
                {% if resource.availability_status == 'available' %}
                <button class="btn btn-success btn-sm borrow-btn"
                        data-resource-id="{{ resource.resource_id }}"
                        data-resource-title="{{ resource.title }}">
                    <i class="fa fa-book"></i> Emprunter
                </button>
                {% elif resource.availability_status == 'borrowed' %}
                <button class="btn btn-warning btn-sm reserve-btn"
                        data-resource-id="{{ resource.resource_id }}"
                        data-resource-title="{{ resource.title }}">
                    <i class="fa fa-calendar"></i> Réserver
                </button>
                {% endif %}

                <button class="btn btn-outline-secondary btn-sm save-search-btn"
                        data-resource-id="{{ resource.resource_id }}">
                    <i class="fa fa-bookmark"></i>
                </button>
            </div>
        </div>

        <!-- Informations de localisation (si disponible et empruntable) -->
        {% if resource.availability_status == 'available' and resource.shelf_location %}
        <div class="location-info mt-2">
            <small class="text-muted">
                <i class="fa fa-map-marker"></i>
                Localisation: {{ resource.shelf_location }}
                {% if resource.call_number %} • Cote: {{ resource.call_number }}{% endif %}
            </small>
        </div>
        {% endif %}
    </div>
</div>

<!-- academic-search-filters.html - Filtres de recherche avancés -->
<div class="academic-search-filters card mb-4">
    <div class="card-header">
        <h6 class="mb-0">
            <i class="fa fa-filter"></i> Filtres de recherche
        </h6>
    </div>
    <div class="card-body">
        <form id="advancedSearchForm">

            <!-- Types de ressources -->
            <div class="filter-group mb-3">
                <label class="filter-label">Types de documents</label>
                <div class="filter-options">
                    {% for type_key, type_label in resource_types.items() %}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                               id="type_{{ type_key }}" name="resource_types[]" value="{{ type_key }}">
                        <label class="form-check-label" for="type_{{ type_key }}">
                            {{ type_label }}
                        </label>
                    </div>
                    {% endfor %}
                </div>
            </div>

            <!-- Disciplines -->
            <div class="filter-group mb-3">
                <label class="filter-label">Disciplines</label>
                <div class="filter-options">
                    {% for subject_key, subject_label in subjects.items() %}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                               id="subject_{{ subject_key }}" name="subjects[]" value="{{ subject_key }}">
                        <label class="form-check-label" for="subject_{{ subject_key }}">
                            {{ subject_label }}
                        </label>
                    </div>
                    {% endfor %}
                </div>
            </div>

            <!-- Langues -->
            <div class="filter-group mb-3">
                <label class="filter-label">Langues</label>
                <div class="filter-options">
                    {% for lang_code, lang_label in languages.items() %}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                               id="lang_{{ lang_code }}" name="languages[]" value="{{ lang_code }}">
                        <label class="form-check-label" for="lang_{{ lang_code }}">
                            {{ lang_label }}
                        </label>
                    </div>
                    {% endfor %}
                </div>
            </div>

            <!-- Période de publication -->
            <div class="filter-group mb-3">
                <label class="filter-label">Période de publication</label>
                <div class="row">
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="yearFrom"
                               name="year_from" placeholder="Année de début"
                               min="1000" max="{{ current_year }}">
                    </div>
                    <div class="col-md-6">
                        <input type="number" class="form-control" id="yearTo"
                               name="year_to" placeholder="Année de fin"
                               min="1000" max="{{ current_year }}">
                    </div>
                </div>
            </div>

            <!-- Auteurs -->
            <div class="filter-group mb-3">
                <label class="filter-label">Auteurs spécifiques</label>
                <input type="text" class="form-control" id="authors"
                       name="authors" placeholder="Séparer par des virgules"
                       data-role="tagsinput">
            </div>

            <!-- Disponibilité -->
            <div class="filter-group mb-3">
                <label class="filter-label">Disponibilité</label>
                <div class="filter-options">
                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                               id="availability_all" name="availability" value="all" checked>
                        <label class="form-check-label" for="availability_all">
                            Tous les documents
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                               id="availability_available" name="availability" value="available">
                        <label class="form-check-label" for="availability_available">
                            Disponibles uniquement
                        </label>
                    </div>
                </div>
            </div>

            <!-- Boutons d'action -->
            <div class="filter-actions d-flex justify-content-between">
                <button type="button" class="btn btn-outline-secondary" id="resetFilters">
                    <i class="fa fa-times"></i> Réinitialiser
                </button>
                <button type="submit" class="btn btn-primary">
                    <i class="fa fa-search"></i> Appliquer les filtres
                </button>
            </div>
        </form>
    </div>
</div>
```

## 12. Tests & Validation Académiques

### **Tests de recherche académique**
```python
import pytest
from app import create_app, db
from models import LibraryResource, AcademicUser
from datetime import datetime

class TestAcademicSearch:
    @pytest.fixture
    def app(self):
        app = create_app('testing')
        with app.app_context():
            db.create_all()
            yield app
            db.drop_all()

    @pytest.fixture
    def client(self, app):
        return app.test_client()

    @pytest.fixture
    def sample_data(self, app):
        with app.app_context():
            # Créer des ressources d'exemple
            resources = [
                LibraryResource(
                    title="Phénoménologie de la perception",
                    authors=["Maurice Merleau-Ponty"],
                    publication_year=1945,
                    resource_type="book",
                    subject_area="philosophy",
                    language="fr",
                    keywords=["phénoménologie", "perception", "corps"]
                ),
                LibraryResource(
                    title="Being and Time",
                    authors=["Martin Heidegger"],
                    publication_year=1927,
                    resource_type="book",
                    subject_area="philosophy",
                    language="en",
                    keywords=["ontologie", "temporalité", "existence"]
                ),
                LibraryResource(
                    title="Critique of Pure Reason",
                    authors=["Immanuel Kant"],
                    publication_year=1781,
                    resource_type="book",
                    subject_area="philosophy",
                    language="en",
                    keywords=["critique", "raison", "transcendantal"]
                )
            ]

            for resource in resources:
                db.session.add(resource)
            db.session.commit()

            yield resources

    def test_basic_search(self, client, sample_data):
        """Test recherche basique"""
        response = client.get('/api/academic/search?q=phénoménologie')

        assert response.status_code == 200
        data = response.get_json()

        assert data['success'] == True
        assert len(data['data']) == 1
        assert data['data'][0]['title'] == "Phénoménologie de la perception"

    def test_advanced_search_filters(self, client, sample_data):
        """Test filtres de recherche avancés"""
        response = client.get('/api/academic/search?subject[]=philosophy&language[]=en&year_from=1900')

        assert response.status_code == 200
        data = response.get_json()

        assert data['success'] == True
        assert len(data['data']) == 2  # Heidegger et Kant

        # Vérifier que les résultats correspondent aux filtres
        for resource in data['data']:
            assert resource['subject_area'] == 'philosophy'
            assert resource['language'] == 'en'
            assert resource['publication_year'] >= 1900

    def test_pagination(self, client, sample_data):
        """Test pagination des résultats"""
        # Ajouter plus de ressources pour tester la pagination
        with client.application.app_context():
            for i in range(25):  # 25 + 3 initiales = 28 ressources
                resource = LibraryResource(
                    title=f"Test Book {i}",
                    authors=["Test Author"],
                    publication_year=2000 + i,
                    resource_type="book",
                    subject_area="test",
                    language="fr"
                )
                db.session.add(resource)
            db.session.commit()

        response = client.get('/api/academic/search?page=2&per_page=10')

        assert response.status_code == 200
        data = response.get_json()

        assert data['pagination']['page'] == 2
        assert data['pagination']['per_page'] == 10
        assert len(data['data']) == 10
        assert data['pagination']['has_next'] == True
        assert data['pagination']['has_prev'] == True

    def test_full_text_search(self, client, sample_data):
        """Test recherche full-text"""
        response = client.get('/api/academic/search?q=temporalité+existence')

        assert response.status_code == 200
        data = response.get_json()

        assert data['success'] == True
        # Devrait trouver "Being and Time" qui contient ces mots-clés

    def test_search_stats(self, client, sample_data):
        """Test statistiques de recherche"""
        response = client.get('/api/academic/search?q=phénoménologie&subject[]=philosophy')

        assert response.status_code == 200
        data = response.get_json()

        assert 'search_stats' in data
        assert data['search_stats']['total_results'] >= 0
        assert 'filters_applied' in data['search_stats']
        assert data['search_stats']['filters_applied']['query'] == True
        assert data['search_stats']['filters_applied']['subjects'] == 1
```

Ce fichier MD contient toutes les informations nécessaires pour recréer une bibliothèque académique complète avec recherche avancée, gestion d'emprunts, et interface érudite.
