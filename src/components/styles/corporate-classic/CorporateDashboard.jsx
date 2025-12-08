import { useState } from 'react';
import CorporateAccordion from './CorporateAccordion';

const CorporateDashboard = () => {
  const [openSections, setOpenSections] = useState({
    executive: true,
    finance: false,
    operations: false,
    hr: false,
    strategy: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const corporateData = {
    executive: {
      title: "Rapport Exécutif - Décembre 2024",
      metrics: [
        { label: "Chiffre d'Affaires", value: "€2,450,000", change: "+8.2%" },
        { label: "Résultat Net", value: "€485,000", change: "+12.1%" },
        { label: "Trésorerie", value: "€1,250,000", change: "Stable" }
      ],
      kpis: [
        { label: "Satisfaction Client", value: "94%", status: "excellent" },
        { label: "Délais Respectés", value: "96%", status: "excellent" },
        { label: "Rotation Personnel", value: "4.2%", status: "good" }
      ]
    },
    finance: {
      title: "États Financiers Détaillés",
      balance: {
        assets: "€3,200,000",
        liabilities: "€1,950,000",
        equity: "€1,250,000"
      },
      cashflow: {
        operating: "€420,000",
        investing: "-€180,000",
        financing: "€95,000"
      }
    },
    operations: {
      title: "Performance Opérationnelle",
      departments: [
        { name: "Production", efficiency: "87%", projects: 12 },
        { name: "Qualité", score: "4.2/5", audits: 8 },
        { name: "Logistique", ontime: "93%", suppliers: 45 }
      ],
      processes: [
        "Procédure qualité ISO 9001",
        "Gestion des risques",
        "Plan de continuité"
      ]
    },
    hr: {
      title: "Ressources Humaines",
      headcount: {
        total: 245,
        byDepartment: {
          production: 120,
          administration: 45,
          commercial: 35,
          direction: 15,
          autres: 30
        }
      },
      recruitment: {
        openPositions: 8,
        candidates: 156,
        avgTimeToHire: "28 jours"
      },
      training: {
        programs: 12,
        participants: 89,
        satisfaction: "4.1/5"
      }
    },
    strategy: {
      title: "Plan Stratégique 2025",
      objectives: [
        "Croissance organique 15%",
        "Digitalisation complète",
        "Expansion géographique",
        "Innovation produit"
      ],
      initiatives: [
        { name: "Transformation Digitale", progress: 65, deadline: "Q2 2025" },
        { name: "Nouveau Siège", progress: 30, deadline: "Q4 2025" },
        { name: "R&D Produit", progress: 45, deadline: "Q1 2025" }
      ]
    }
  };

  return (
    <div className="corporate-dashboard">
      <div className="corporate-header">
        <h1 className="corporate-title">Rapport Annuel 2024</h1>
        <div className="corporate-subtitle">
          <span>Entreprise S.A. au 31 décembre 2024</span>
          <span className="corporate-date">Généré le: {new Date().toLocaleDateString('fr-FR')}</span>
        </div>
      </div>

      <div className="corporate-accordion-container">
        {/* Section Executive */}
        <CorporateAccordion
          title="1. Rapport du Président Directeur Général"
          isOpen={openSections.executive}
          onToggle={() => toggleSection('executive')}
          level={1}
        >
          <div className="executive-summary">
            <div className="executive-intro">
              <p>Mesdames, Messieurs,</p>
              <p>L'exercice 2024 a été marqué par une croissance soutenue et des résultats financiers solides...</p>
            </div>

            <div className="executive-metrics">
              <h4>Indicateurs Clés de Performance</h4>
              <div className="metrics-grid">
                {corporateData.executive.metrics.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'neutral'}`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="executive-kpis">
              <h4>Tableau de Bord Qualité</h4>
              <div className="kpis-grid">
                {corporateData.executive.kpis.map((kpi, index) => (
                  <div key={index} className={`kpi-item status-${kpi.status}`}>
                    <div className="kpi-value">{kpi.value}</div>
                    <div className="kpi-label">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CorporateAccordion>

        {/* Section Finance */}
        <CorporateAccordion
          title="2. États Financiers"
          isOpen={openSections.finance}
          onToggle={() => toggleSection('finance')}
          level={1}
        >
          <div className="finance-section">
            <CorporateAccordion
              title="2.1 Bilan Consolidé"
              isOpen={true}
              onToggle={() => {}}
              level={2}
            >
              <div className="balance-sheet">
                <div className="balance-row">
                  <span className="account">ACTIF</span>
                  <span className="amount">{corporateData.finance.balance.assets}</span>
                </div>
                <div className="balance-row">
                  <span className="account">PASSIF</span>
                  <span className="amount">{corporateData.finance.balance.liabilities}</span>
                </div>
                <div className="balance-row total">
                  <span className="account">CAPITAUX PROPRES</span>
                  <span className="amount">{corporateData.finance.balance.equity}</span>
                </div>
              </div>
            </CorporateAccordion>

            <CorporateAccordion
              title="2.2 Flux de Trésorerie"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <div className="cashflow-statement">
                <div className="cf-row">
                  <span>Flux d'exploitation</span>
                  <span className="positive">{corporateData.finance.cashflow.operating}</span>
                </div>
                <div className="cf-row">
                  <span>Flux d'investissement</span>
                  <span className="negative">{corporateData.finance.cashflow.investing}</span>
                </div>
                <div className="cf-row">
                  <span>Flux de financement</span>
                  <span className="positive">{corporateData.finance.cashflow.financing}</span>
                </div>
              </div>
            </CorporateAccordion>
          </div>
        </CorporateAccordion>

        {/* Section Opérations */}
        <CorporateAccordion
          title="3. Performance Opérationnelle"
          isOpen={openSections.operations}
          onToggle={() => toggleSection('operations')}
          level={1}
        >
          <div className="operations-section">
            <div className="departments-overview">
              <h4>Aperçu par Département</h4>
              {corporateData.operations.departments.map((dept, index) => (
                <CorporateAccordion
                  key={index}
                  title={`3.${index + 1} ${dept.name}`}
                  isOpen={false}
                  onToggle={() => {}}
                  level={2}
                >
                  <div className="department-details">
                    {dept.efficiency && <p>Efficacité: {dept.efficiency}</p>}
                    {dept.score && <p>Score qualité: {dept.score}</p>}
                    {dept.ontime && <p>À l'heure: {dept.ontime}</p>}
                    {dept.projects && <p>Projets actifs: {dept.projects}</p>}
                    {dept.audits && <p>Audits passés: {dept.audits}</p>}
                    {dept.suppliers && <p>Fournisseurs: {dept.suppliers}</p>}
                  </div>
                </CorporateAccordion>
              ))}
            </div>

            <CorporateAccordion
              title="3.4 Processus et Procédures"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <ul className="processes-list">
                {corporateData.operations.processes.map((process, index) => (
                  <li key={index}>{process}</li>
                ))}
              </ul>
            </CorporateAccordion>
          </div>
        </CorporateAccordion>

        {/* Section RH */}
        <CorporateAccordion
          title="4. Ressources Humaines"
          isOpen={openSections.hr}
          onToggle={() => toggleSection('hr')}
          level={1}
        >
          <div className="hr-section">
            <CorporateAccordion
              title="4.1 Effectifs"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <div className="headcount-details">
                <div className="total-headcount">
                  <span className="number">{corporateData.hr.headcount.total}</span>
                  <span className="label">collaborateurs</span>
                </div>
                <div className="department-breakdown">
                  {Object.entries(corporateData.hr.headcount.byDepartment).map(([dept, count]) => (
                    <div key={dept} className="dept-item">
                      <span className="dept-name">{dept}</span>
                      <span className="dept-count">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CorporateAccordion>

            <CorporateAccordion
              title="4.2 Recrutement"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <div className="recruitment-metrics">
                <div className="recruitment-grid">
                  <div className="metric">
                    <span className="value">{corporateData.hr.recruitment.openPositions}</span>
                    <span className="label">Postes ouverts</span>
                  </div>
                  <div className="metric">
                    <span className="value">{corporateData.hr.recruitment.candidates}</span>
                    <span className="label">Candidatures</span>
                  </div>
                  <div className="metric">
                    <span className="value">{corporateData.hr.recruitment.avgTimeToHire}</span>
                    <span className="label">Temps de recrutement</span>
                  </div>
                </div>
              </div>
            </CorporateAccordion>

            <CorporateAccordion
              title="4.3 Formation"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <div className="training-metrics">
                <div className="training-grid">
                  <div className="metric">
                    <span className="value">{corporateData.hr.training.programs}</span>
                    <span className="label">Programmes actifs</span>
                  </div>
                  <div className="metric">
                    <span className="value">{corporateData.hr.training.participants}</span>
                    <span className="label">Participants</span>
                  </div>
                  <div className="metric">
                    <span className="value">{corporateData.hr.training.satisfaction}</span>
                    <span className="label">Satisfaction</span>
                  </div>
                </div>
              </div>
            </CorporateAccordion>
          </div>
        </CorporateAccordion>

        {/* Section Stratégie */}
        <CorporateAccordion
          title="5. Plan Stratégique"
          isOpen={openSections.strategy}
          onToggle={() => toggleSection('strategy')}
          level={1}
        >
          <div className="strategy-section">
            <CorporateAccordion
              title="5.1 Objectifs Stratégiques 2025"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <ul className="objectives-list">
                {corporateData.strategy.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </CorporateAccordion>

            <CorporateAccordion
              title="5.2 Initiatives Clés"
              isOpen={false}
              onToggle={() => {}}
              level={2}
            >
              <div className="initiatives-list">
                {corporateData.strategy.initiatives.map((initiative, index) => (
                  <div key={index} className="initiative-item">
                    <div className="initiative-header">
                      <h5>{initiative.name}</h5>
                      <span className="deadline">Échéance: {initiative.deadline}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{initiative.progress}%</span>
                  </div>
                ))}
              </div>
            </CorporateAccordion>
          </div>
        </CorporateAccordion>
      </div>

      <div className="corporate-footer">
        <div className="signature-section">
          <p>Approuvé par le Conseil d'Administration</p>
          <div className="signature-line"></div>
          <p className="signature-name">Jean Dupont</p>
          <p className="signature-title">Président Directeur Général</p>
        </div>
      </div>
    </div>
  );
};

export default CorporateDashboard;
