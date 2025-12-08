import { useState } from 'react'
import { useStyleTheme } from '../hooks/useStyleTheme'
import './Form.css'

function Form() {
  const { cssVars, theme } = useStyleTheme()

  // Different form structures for each style
  const getFormConfig = () => {
    switch(theme.ambiance) {
      case 'atelier-architecture':
        return {
          title: 'Soumission de Projet Architectural',
          subtitle: 'Créer une nouvelle fiche projet',
          type: 'architectural-submission',
          fields: [
            {
              id: 'projectTitle',
              label: 'Titre du Projet',
              type: 'text',
              placeholder: 'Ex: Rénovation Musée d\'Art Moderne',
              required: true,
              icon: '📐'
            },
            {
              id: 'atelier',
              label: 'Atelier',
              type: 'select',
              options: ['Architecture', 'Urbanisme', 'Paysage', 'Design Intérieur'],
              required: true,
              icon: '🏢'
            },
            {
              id: 'students',
              label: 'Étudiants (séparés par virgule)',
              type: 'text',
              placeholder: 'Marie Dupont, Jean Martin, Sophie Leroy',
              required: true,
              icon: '👥'
            },
            {
              id: 'description',
              label: 'Description Technique',
              type: 'textarea',
              placeholder: 'Décrivez le projet, les contraintes, les objectifs...',
              rows: 6,
              required: true,
              icon: '📋'
            },
            {
              id: 'files',
              label: 'Fichiers Techniques',
              type: 'file',
              multiple: true,
              accept: '.dwg,.pdf,.jpg,.png',
              description: 'Plans DWG, PDF, Images haute résolution',
              icon: '📁'
            },
            {
              id: 'deadline',
              label: 'Date de Rendu',
              type: 'date',
              required: true,
              icon: '📅'
            },
            {
              id: 'scale',
              label: 'Échelle',
              type: 'select',
              options: ['1:100', '1:200', '1:500', '1:1000'],
              icon: '📏'
            }
          ],
          submitText: 'Soumettre le Projet'
        }

      case 'art-gallery':
        return {
          title: 'Publication Portfolio',
          subtitle: 'Ajouter un projet à la galerie',
          type: 'portfolio-publication',
          fields: [
            {
              id: 'projectTitle',
              label: 'Titre de l\'Œuvre',
              type: 'text',
              placeholder: 'Ex: Habitation Passive - Étude de Cas',
              required: true,
              icon: '🎨'
            },
            {
              id: 'coverImage',
              label: 'Image de Couverture',
              type: 'file',
              accept: 'image/*',
              description: 'Image principale (JPG, PNG, haute résolution)',
              required: true,
              icon: '🖼️'
            },
            {
              id: 'additionalImages',
              label: 'Images Supplémentaires',
              type: 'file',
              multiple: true,
              accept: 'image/*',
              description: 'Jusqu\'à 10 images du projet',
              icon: '📸'
            },
            {
              id: 'pitch',
              label: 'Pitch (Description courte)',
              type: 'textarea',
              placeholder: 'Résumez votre projet en quelques lignes accrocheuses...',
              rows: 3,
              maxLength: 200,
              required: true,
              icon: '💡'
            },
            {
              id: 'tags',
              label: 'Tags (Techniques & Matériaux)',
              type: 'text',
              placeholder: 'bois, béton, verre, acier, durable...',
              description: 'Séparés par des virgules',
              icon: '🏷️'
            },
            {
              id: 'visibility',
              label: 'Visibilité',
              type: 'select',
              options: ['Public (galerie)', 'Promo uniquement', 'Privé'],
              defaultValue: 'Public (galerie)',
              icon: '👁️'
            },
            {
              id: 'cloudLink',
              label: 'Lien Cloud (optionnel)',
              type: 'url',
              placeholder: 'https://drive.google.com/...',
              description: 'Vers le dossier complet du projet',
              icon: '☁️'
            }
          ],
          submitText: 'Publier dans la Galerie'
        }

      case 'academic-critique':
        return {
          title: 'Nouvelle Version',
          subtitle: 'Soumettre une révision annotée',
          type: 'version-submission',
          fields: [
            {
              id: 'versionLabel',
              label: 'Étiquette de Version',
              type: 'text',
              placeholder: 'Ex: v2.1 - Corrections apportées',
              required: true,
              icon: '🏷️'
            },
            {
              id: 'changelog',
              label: 'Journal des Modifications',
              type: 'textarea',
              placeholder: 'Décrivez les changements apportés...\n• Correction des cotes\n• Ajout des annotations\n• Mise à jour des matériaux',
              rows: 4,
              required: true,
              icon: '📝'
            },
            {
              id: 'annotableFiles',
              label: 'Fichiers Annotés',
              type: 'file',
              multiple: true,
              accept: '.pdf,.jpg,.png',
              description: 'PDF ou images avec annotations',
              required: true,
              icon: '📎'
            },
            {
              id: 'feedbackRequests',
              label: 'Demandes de Feedback',
              type: 'textarea',
              placeholder: 'Précisez les points sur lesquels vous souhaitez un retour...',
              rows: 3,
              icon: '❓'
            },
            {
              id: 'visibility',
              label: 'Visibilité des Commentaires',
              type: 'select',
              options: ['Public (tous enseignants)', 'Enseignants assignés', 'Privé'],
              defaultValue: 'Enseignants assignés',
              icon: '🔒'
            }
          ],
          submitText: 'Soumettre la Version'
        }

      case 'enterprise-dashboard':
        return {
          title: 'Administration - Import Utilisateurs',
          subtitle: 'Gestion des utilisateurs et ateliers',
          type: 'admin-management',
          fields: [
            {
              id: 'importType',
              label: 'Type d\'Import',
              type: 'select',
              options: ['Étudiants CSV', 'Enseignants CSV', 'Utilisateurs Excel'],
              required: true,
              icon: '📊'
            },
            {
              id: 'csvFile',
              label: 'Fichier CSV/Excel',
              type: 'file',
              accept: '.csv,.xlsx,.xls',
              description: 'Format: nom,email,rôle,atelier',
              required: true,
              icon: '📁'
            },
            {
              id: 'atelierAssignment',
              label: 'Atelier de Destination',
              type: 'select',
              options: ['Tous les ateliers', 'Atelier A', 'Atelier B', 'Atelier C'],
              required: true,
              icon: '🏢'
            },
            {
              id: 'roleAssignment',
              label: 'Rôle par Défaut',
              type: 'select',
              options: ['Étudiant', 'Enseignant', 'Administrateur'],
              defaultValue: 'Étudiant',
              icon: '👤'
            },
            {
              id: 'notificationEmail',
              label: 'Envoyer Email de Notification',
              type: 'checkbox',
              defaultChecked: true,
              icon: '📧'
            },
            {
              id: 'previewImport',
              label: 'Aperçu des Données',
              type: 'preview',
              description: 'Vérifiez les données avant import',
              icon: '👁️'
            }
          ],
          submitText: 'Lancer l\'Import'
        }

      case 'collaborative-workspace':
        return {
          title: 'Créer un Projet Collaboratif',
          subtitle: 'Inviter l\'équipe et définir les tâches',
          type: 'team-project',
          fields: [
            {
              id: 'projectTitle',
              label: 'Nom du Projet',
              type: 'text',
              placeholder: 'Ex: Rénovation École Primaire',
              required: true,
              icon: '📋'
            },
            {
              id: 'teamMembers',
              label: 'Membres de l\'Équipe',
              type: 'text',
              placeholder: 'email1@ecole.fr, email2@ecole.fr',
              description: 'Emails séparés par des virgules',
              required: true,
              icon: '👥'
            },
            {
              id: 'roles',
              label: 'Rôles par Membre',
              type: 'textarea',
              placeholder: 'marie.dupont@ecole.fr: Chef de projet\njean.martin@ecole.fr: Architecte\nsophie.leroy@ecole.fr: Paysagiste',
              rows: 4,
              icon: '🎭'
            },
            {
              id: 'tasks',
              label: 'Tâches Initiales',
              type: 'textarea',
              placeholder: '• Analyse du site\n• Esquisses préliminaires\n• Étude de faisabilité\n• Présentation client',
              rows: 5,
              description: 'Une tâche par ligne',
              icon: '✅'
            },
            {
              id: 'deadline',
              label: 'Deadline du Projet',
              type: 'date',
              required: true,
              icon: '⏰'
            },
            {
              id: 'template',
              label: 'Utiliser un Template',
              type: 'select',
              options: ['Aucun', 'Rénovation Urbaine', 'Construction Neuve', 'Aménagement Paysager'],
              icon: '📋'
            },
            {
              id: 'chatChannel',
              label: 'Créer un Canal de Discussion',
              type: 'checkbox',
              defaultChecked: true,
              icon: '💬'
            }
          ],
          submitText: 'Créer le Projet d\'Équipe'
        }

      case 'modern-agency':
        return {
          title: 'Brief Créatif - Agence Moderne',
          subtitle: 'Définir les contours du projet',
          type: 'agency-brief',
          fields: [
            {
              id: 'clientName',
              label: 'Nom du Client',
              type: 'text',
              placeholder: 'Ex: TechCorp Solutions',
              required: true,
              icon: '🏢'
            },
            {
              id: 'projectType',
              label: 'Type de Projet',
              type: 'select',
              options: ['Site Web', 'Application Mobile', 'Identité Visuelle', 'Campagne Publicitaire', 'Motion Design'],
              required: true,
              icon: '🎯'
            },
            {
              id: 'objectives',
              label: 'Objectifs Principaux',
              type: 'textarea',
              placeholder: 'Augmenter la visibilité, améliorer l\'expérience utilisateur, optimiser les conversions...',
              rows: 4,
              required: true,
              icon: '🎯'
            },
            {
              id: 'technologies',
              label: 'Technologies Souhaitées',
              type: 'text',
              placeholder: 'React, Node.js, AWS, etc.',
              icon: '⚡'
            },
            {
              id: 'budget',
              label: 'Budget Estimé',
              type: 'number',
              placeholder: '50000',
              icon: '💰'
            },
            {
              id: 'deadline',
              label: 'Deadline',
              type: 'date',
              required: true,
              icon: '📅'
            }
          ],
          submitText: 'Envoyer le Brief'
        }

      case 'corporate-classic':
        return {
          title: 'Demande Administrative',
          subtitle: 'Formulaire officiel d\'entreprise',
          type: 'corporate-request',
          fields: [
            {
              id: 'requestType',
              label: 'Type de Demande',
              type: 'select',
              options: ['Congé Annuel', 'Formation', 'Avance Salaire', 'Matériel Informatique', 'Autre'],
              required: true,
              icon: '📋'
            },
            {
              id: 'employeeName',
              label: 'Nom de l\'Employé',
              type: 'text',
              placeholder: 'Votre nom complet',
              required: true,
              icon: '👤'
            },
            {
              id: 'department',
              label: 'Département',
              type: 'select',
              options: ['Ressources Humaines', 'Informatique', 'Commercial', 'Production', 'Direction'],
              required: true,
              icon: '🏢'
            },
            {
              id: 'description',
              label: 'Description Détaillée',
              type: 'textarea',
              placeholder: 'Veuillez exposer clairement les motifs de votre demande...',
              rows: 5,
              required: true,
              icon: '📝'
            },
            {
              id: 'justification',
              label: 'Justification',
              type: 'textarea',
              placeholder: 'Arguments justifiant cette demande...',
              rows: 3,
              icon: '⚖️'
            },
            {
              id: 'urgent',
              label: 'Demande Urgente',
              type: 'checkbox',
              description: 'Cochez si cette demande nécessite un traitement prioritaire',
              icon: '⚡'
            }
          ],
          submitText: 'Soumettre la Demande'
        }

      case 'creative-workshop':
        return {
          title: 'Processus Créatif',
          subtitle: 'Définir votre projet artistique',
          type: 'creative-process',
          fields: [
            {
              id: 'projectTitle',
              label: 'Titre du Projet Créatif',
              type: 'text',
              placeholder: 'Ex: Rêverie Automnale',
              required: true,
              icon: '🎨'
            },
            {
              id: 'mood',
              label: 'Humeur Créative',
              type: 'select',
              options: ['Énergique', 'Calme', 'Ludique', 'Naturel', 'Magique'],
              required: true,
              icon: '🎭'
            },
            {
              id: 'inspiration',
              label: 'Mots d\'Inspiration',
              type: 'text',
              placeholder: 'automne, feuilles, pluie, introspection...',
              description: 'Séparés par des virgules',
              icon: '🌱'
            },
            {
              id: 'techniques',
              label: 'Techniques à Explorer',
              type: 'text',
              placeholder: 'aquarelle digitale, calligraphie, gravure...',
              icon: '🖌️'
            },
            {
              id: 'colorPalette',
              label: 'Palette de Couleurs',
              type: 'text',
              placeholder: 'rouge brique, orange brûlé, beige sable...',
              description: 'Décrivez ou laissez vide pour génération aléatoire',
              icon: '🎨'
            },
            {
              id: 'deadline',
              label: 'Date Souhaitée',
              type: 'date',
              icon: '📅'
            }
          ],
          submitText: 'Commencer la Création'
        }

      case 'tech-startup':
        return {
          title: 'Brief Projet Tech',
          subtitle: 'Définir les spécifications techniques',
          type: 'tech-brief',
          fields: [
            {
              id: 'productName',
              label: 'Nom du Produit',
              type: 'text',
              placeholder: 'Ex: DataFlow Analytics',
              required: true,
              icon: '🚀'
            },
            {
              id: 'solutionType',
              label: 'Type de Solution',
              type: 'select',
              options: ['SaaS', 'Application Mobile', 'API', 'IA/ML', 'Blockchain', 'IoT'],
              required: true,
              icon: '⚙️'
            },
            {
              id: 'targetUsers',
              label: 'Utilisateurs Cibles',
              type: 'text',
              placeholder: 'PMEs, startups, entreprises du CAC 40...',
              required: true,
              icon: '👥'
            },
            {
              id: 'keyFeatures',
              label: 'Fonctionnalités Clés',
              type: 'textarea',
              placeholder: 'Authentification OAuth, tableau de bord temps réel, API REST...',
              rows: 4,
              required: true,
              icon: '🔧'
            },
            {
              id: 'techStack',
              label: 'Stack Technique',
              type: 'text',
              placeholder: 'React, Node.js, PostgreSQL, AWS...',
              icon: '💻'
            },
            {
              id: 'kpis',
              label: 'KPIs de Succès',
              type: 'textarea',
              placeholder: 'CAC < 50€, LTV/CAC > 3, churn < 5%...',
              rows: 3,
              icon: '📊'
            }
          ],
          submitText: 'Lancer le Projet Tech'
        }

      case 'academic-library':
        return {
          title: 'Demande de Recherche',
          subtitle: 'Définir votre projet de recherche documentaire',
          type: 'academic-research',
          fields: [
            {
              id: 'researchTopic',
              label: 'Sujet de Recherche',
              type: 'text',
              placeholder: 'Ex: L\'influence de la phénoménologie sur la pensée contemporaine',
              required: true,
              icon: '📚'
            },
            {
              id: 'discipline',
              label: 'Discipline',
              type: 'select',
              options: ['Philosophie', 'Histoire', 'Sciences Sociales', 'Littérature', 'Sciences', 'Droit', 'Économie'],
              required: true,
              icon: '🎓'
            },
            {
              id: 'academicLevel',
              label: 'Niveau d\'Études',
              type: 'select',
              options: ['Licence', 'Master', 'Doctorat', 'Post-doctorat'],
              required: true,
              icon: '🎓'
            },
            {
              id: 'documentTypes',
              label: 'Types de Documents',
              type: 'text',
              placeholder: 'ouvrages théoriques, articles de recherche, thèses...',
              description: 'Séparés par des virgules',
              icon: '📄'
            },
            {
              id: 'period',
              label: 'Période Chronologique',
              type: 'text',
              placeholder: 'Ex: 1900-2024 ou XIXe-XXIe siècle',
              icon: '📅'
            },
            {
              id: 'languages',
              label: 'Langues',
              type: 'text',
              placeholder: 'français, anglais, allemand...',
              description: 'Séparés par des virgules',
              icon: '🌐'
            },
            {
              id: 'supervisor',
              label: 'Directeur de Recherche',
              type: 'text',
              placeholder: 'Pr. Marie Dubois',
              icon: '👨‍🏫'
            },
            {
              id: 'bibliography',
              label: 'Bibliographie Préliminaire',
              type: 'textarea',
              placeholder: '• Husserl, E. (1913). Idées directrices...\n• Heidegger, M. (1927). Être et temps...',
              rows: 4,
              icon: '📝'
            }
          ],
          submitText: 'Soumettre la Demande'
        }

      default:
        return {
          title: 'Contact Form',
          subtitle: 'Get in touch with us',
          type: 'default',
          fields: [
            {
              id: 'name',
              label: 'Name',
              type: 'text',
              required: true
            },
            {
              id: 'email',
              label: 'Email',
              type: 'email',
              required: true
            },
            {
              id: 'phone',
              label: 'Phone',
              type: 'tel'
            },
            {
              id: 'message',
              label: 'Message',
              type: 'textarea',
              rows: 5,
              required: true
            }
          ],
          submitText: 'Submit'
        }
    }
  }

  const formConfig = getFormConfig()
  const [formData, setFormData] = useState({})
  const [filePreviews, setFilePreviews] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'file' && files) {
      setFormData(prev => ({
        ...prev,
        [name]: files
      }))

      // Create previews for images
      if (name.includes('Image') || name.includes('image')) {
        const previews = Array.from(files).map(file => URL.createObjectURL(file))
        setFilePreviews(previews)
      }
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(`${formConfig.submitText} - Check console for details.`)
  }

  const renderField = (field) => {
    const value = formData[field.id] || field.defaultValue || ''

    switch(field.type) {
      case 'select':
        return (
          <select
            id={field.id}
            name={field.id}
            className="form-input"
            value={value}
            onChange={handleChange}
            required={field.required}
          >
            <option value="">Sélectionner...</option>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )

      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.id}
            className="form-input"
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={field.rows || 3}
            maxLength={field.maxLength}
            required={field.required}
          />
        )

      case 'file':
        return (
          <div className="file-upload">
            <input
              type="file"
              id={field.id}
              name={field.id}
              className="form-input file-input"
              accept={field.accept}
              multiple={field.multiple}
              onChange={handleChange}
              required={field.required}
            />
            <label htmlFor={field.id} className="file-upload-label">
              <span className="file-icon">{field.icon}</span>
              <span className="file-text">
                {value && value.length > 0 ? `${value.length} fichier(s) sélectionné(s)` : 'Choisir un fichier'}
              </span>
            </label>
            {field.description && (
              <p className="file-description">{field.description}</p>
            )}
            {filePreviews.length > 0 && (
              <div className="file-previews">
                {filePreviews.map((preview, index) => (
                  <img key={index} src={preview} alt={`Preview ${index + 1}`} className="file-preview" />
                ))}
              </div>
            )}
          </div>
        )

      case 'checkbox':
        return (
          <label className="checkbox-label">
            <input
              type="checkbox"
              name={field.id}
              checked={value}
              onChange={handleChange}
            />
            <span className="checkbox-text">{field.label}</span>
          </label>
        )

      case 'preview':
        return (
          <div className="data-preview">
            <div className="preview-placeholder">
              <span>{field.icon}</span>
              <p>{field.description}</p>
              <button type="button" className="preview-btn">Voir l'aperçu</button>
            </div>
          </div>
        )

      default:
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            className="form-input"
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        )
    }
  }

  return (
    <div className={`form-container form-container-${formConfig.type}`} style={cssVars}>
      <div className="form-header">
        <h1 className="form-title">{formConfig.title}</h1>
        {formConfig.subtitle && (
          <p className="form-subtitle">{formConfig.subtitle}</p>
        )}
      </div>

      {/* Architectural grid overlay */}
      {theme.ambiance === 'atelier-architecture' && (
        <div className="form-grid-overlay">
          <div className="grid-line horizontal" style={{ top: '30%' }}></div>
          <div className="grid-line horizontal" style={{ top: '70%' }}></div>
        </div>
      )}

      {/* Gallery form with image preview area */}
      {theme.ambiance === 'art-gallery' && filePreviews.length > 0 && (
        <div className="gallery-preview-area">
          <h3>Aperçu de la galerie</h3>
          <div className="preview-thumbnails">
            {filePreviews.map((preview, index) => (
              <div key={index} className="thumbnail-item">
                <img src={preview} alt={`Thumbnail ${index + 1}`} />
                {index === 0 && <span className="cover-badge">Couverture</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Academic version timeline */}
      {theme.ambiance === 'academic-critique' && (
        <div className="version-timeline">
          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="version-label">v1.0</span>
              <span className="version-date">Version initiale</span>
            </div>
          </div>
          <div className="timeline-item current">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="version-label">Nouvelle version</span>
              <span className="version-date">En cours de création</span>
            </div>
          </div>
        </div>
      )}

      {/* Enterprise data validation */}
      {theme.ambiance === 'enterprise-dashboard' && (
        <div className="data-validation-panel">
          <div className="validation-status">
            <span className="status-icon">⚠️</span>
            <span className="status-text">Prêt pour validation</span>
          </div>
        </div>
      )}

      {/* Collaborative team preview */}
      {theme.ambiance === 'collaborative-workspace' && formData.teamMembers && (
        <div className="team-preview">
          <h3>Équipe proposée</h3>
          <div className="team-avatars">
            {formData.teamMembers.split(',').map((email, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">👤</div>
                <span className="member-email">{email.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <form className={`form form-${formConfig.type}`} onSubmit={handleSubmit}>
        {formConfig.fields.map(field => (
          <div key={field.id} className={`form-group form-group-${field.type}`}>
            <label htmlFor={field.id} className="form-label">
              {field.icon && <span className="field-icon">{field.icon}</span>}
              {field.label}
              {field.required && <span className="required">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}

        <button type="submit" className="form-button">
          <span>{formConfig.submitText}</span>
        </button>
      </form>
    </div>
  )
}

export default Form

