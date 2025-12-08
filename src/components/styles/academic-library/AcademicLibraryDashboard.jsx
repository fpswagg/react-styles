import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AcademicTabs from './AcademicTabs';

const AcademicLibraryDashboard = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  const tabs = [
    { id: 'research', title: 'Recherche', icon: '📚' },
    { id: 'library', title: 'Bibliothèque', icon: '📖' },
    { id: 'citations', title: 'Citations', icon: '📝' },
    { id: 'notes', title: 'Notes', icon: '📓' }
  ];

  const researchData = {
    recent: [
      {
        title: 'La phénoménologie de Husserl',
        author: 'Edmund Husserl',
        type: 'Ouvrage théorique',
        pages: 247,
        progress: 65,
        lastRead: '2024-12-08',
        citations: 23
      },
      {
        title: 'Être et temps',
        author: 'Martin Heidegger',
        type: 'Monographie',
        pages: 589,
        progress: 30,
        lastRead: '2024-12-07',
        citations: 45
      },
      {
        title: 'Critique de la raison pure',
        author: 'Emmanuel Kant',
        type: 'Traité philosophique',
        pages: 856,
        progress: 12,
        lastRead: '2024-12-06',
        citations: 78
      }
    ],
    topics: [
      { name: 'Phénoménologie', count: 23, color: '#8B4513' },
      { name: 'Ontologie', count: 18, color: '#DAA520' },
      { name: 'Épistémologie', count: 31, color: '#CD853F' },
      { name: 'Éthique', count: 15, color: '#A0522D' }
    ]
  };

  const libraryData = {
    sections: [
      {
        name: 'Philosophie Antique',
        books: 1456,
        available: 1423,
        borrowed: 33
      },
      {
        name: 'Philosophie Moderne',
        books: 892,
        available: 876,
        borrowed: 16
      },
      {
        name: 'Philosophie Contemporaine',
        books: 678,
        available: 654,
        borrowed: 24
      },
      {
        name: 'Sciences Humaines',
        books: 1234,
        available: 1189,
        borrowed: 45
      }
    ]
  };

  const citationsData = [
    {
      id: 1,
      text: '"La conscience est toujours conscience de quelque chose"',
      author: 'Edmund Husserl',
      source: 'Idées directrices pour une phénoménologie',
      page: 87,
      category: 'Phénoménologie',
      dateAdded: '2024-12-08'
    },
    {
      id: 2,
      text: '"L\'être est ce qui se manifeste dans la compréhension"',
      author: 'Martin Heidegger',
      source: 'Être et temps',
      page: 143,
      category: 'Ontologie',
      dateAdded: '2024-12-07'
    },
    {
      id: 3,
      text: '"Deux choses remplissent l\'âme d\'une admiration... toujours nouvelle"',
      author: 'Immanuel Kant',
      source: 'Critique de la raison pratique',
      page: 288,
      category: 'Éthique',
      dateAdded: '2024-12-06'
    }
  ];

  const notesData = [
    {
      id: 1,
      title: 'Réduction phénoménologique',
      content: 'La réduction eidétique permet d\'accéder à l\'essence des phénomènes...',
      tags: ['phénoménologie', 'méthode', 'réduction'],
      created: '2024-12-08',
      lastModified: '2024-12-08'
    },
    {
      id: 2,
      title: 'Différence ontologique',
      content: 'Heidegger distingue l\'être de l\'étant, ouvrant ainsi la question fondamentale...',
      tags: ['ontologie', 'heidegger', 'différence'],
      created: '2024-12-07',
      lastModified: '2024-12-07'
    }
  ];

  const toggleBookmark = (itemId) => {
    setBookmarks(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderPageNumbers = (totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <motion.button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => setCurrentPage(i)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {i}
        </motion.button>
      );
    }
    return pages;
  };

  const renderResearchContent = () => (
    <div className="research-content">
      {/* Barre de recherche manuscrite */}
      <div className="manuscript-search">
        <div className="search-ornament left"></div>
        <input
          type="text"
          placeholder="Rechercher dans les ouvrages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="manuscript-input"
        />
        <div className="search-ornament right"></div>
      </div>

      {/* Sujets de recherche */}
      <div className="topics-section">
        <h3>Domaines de Recherche</h3>
        <div className="topics-cloud">
          {researchData.topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              className="topic-tag"
              style={{
                backgroundColor: topic.color + '20',
                borderColor: topic.color
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 5px 15px ${topic.color}30`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {topic.name}
              <span className="topic-count">{topic.count}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lectures récentes */}
      <div className="recent-readings">
        <h3>Lectures en Cours</h3>
        <div className="readings-list">
          {researchData.recent.map((book, index) => (
            <motion.div
              key={index}
              className="reading-item"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="book-spine" style={{
                background: `linear-gradient(135deg, #8B4513, #DAA520)`
              }}>
                <div className="spine-title">{book.title.split(' ')[0]}</div>
              </div>

              <div className="book-details">
                <h4>{book.title}</h4>
                <p className="author">{book.author}</p>
                <p className="type">{book.type}</p>

                <div className="reading-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${book.progress}%` }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    />
                  </div>
                  <span className="progress-text">{book.progress}%</span>
                </div>

                <div className="book-meta">
                  <span>{book.pages} pages</span>
                  <span>{book.citations} citations</span>
                  <span>Dernière lecture: {book.lastRead}</span>
                </div>
              </div>

              <motion.button
                className={`bookmark-btn ${bookmarks.includes(book.title) ? 'bookmarked' : ''}`}
                onClick={() => toggleBookmark(book.title)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                📖
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLibraryContent = () => (
    <div className="library-content">
      <div className="library-stats">
        <motion.div
          className="total-books"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <span className="big-number">
            {libraryData.sections.reduce((acc, section) => acc + section.books, 0).toLocaleString()}
          </span>
          <span className="label">ouvrages</span>
        </motion.div>
      </div>

      <div className="library-sections">
        <h3>Sections de la Bibliothèque</h3>
        {libraryData.sections.map((section, index) => (
          <motion.div
            key={section.name}
            className="section-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="section-header">
              <h4>{section.name}</h4>
              <div className="section-stats">
                <span className="total">{section.books} ouvrages</span>
                <span className="available">{section.available} disponibles</span>
                <span className="borrowed">{section.borrowed} empruntés</span>
              </div>
            </div>

            <div className="availability-bar">
              <motion.div
                className="available-fill"
                initial={{ width: 0 }}
                animate={{ width: `${(section.available / section.books) * 100}%` }}
                transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
              />
              <motion.div
                className="borrowed-fill"
                initial={{ width: 0 }}
                animate={{ width: `${(section.borrowed / section.books) * 100}%` }}
                transition={{ delay: index * 0.2 + 0.7, duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCitationsContent = () => (
    <div className="citations-content">
      <div className="citations-header">
        <h3>Citations Collectées</h3>
        <div className="citation-count">
          {citationsData.length} citations dans votre bibliothèque personnelle
        </div>
      </div>

      <div className="citations-list">
        {citationsData.map((citation, index) => (
          <motion.div
            key={citation.id}
            className="citation-card"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="citation-quotation">"</div>
            <div className="citation-text">{citation.text}</div>
            <div className="citation-footer">
              <div className="citation-source">
                <span className="author">{citation.author}</span>
                <span className="source">— {citation.source}, p. {citation.page}</span>
              </div>
              <div className="citation-meta">
                <span className="category">{citation.category}</span>
                <span className="date">{citation.dateAdded}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderNotesContent = () => (
    <div className="notes-content">
      <div className="notes-header">
        <h3>Notes de Recherche</h3>
        <motion.button
          className="add-note-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✏️ Nouvelle Note
        </motion.button>
      </div>

      <div className="notes-grid">
        {notesData.map((note, index) => (
          <motion.div
            key={note.id}
            className="note-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(139, 69, 19, 0.2)"
            }}
          >
            <div className="note-header">
              <h4>{note.title}</h4>
              <div className="note-date">{note.created}</div>
            </div>

            <div className="note-content">
              {note.content.substring(0, 150)}...
            </div>

            <div className="note-tags">
              {note.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="note-tag">#{tag}</span>
              ))}
            </div>

            <div className="note-actions">
              <button className="note-action-btn">📖 Lire</button>
              <button className="note-action-btn">✏️ Éditer</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'research':
        return renderResearchContent();
      case 'library':
        return renderLibraryContent();
      case 'citations':
        return renderCitationsContent();
      case 'notes':
        return renderNotesContent();
      default:
        return renderResearchContent();
    }
  };

  return (
    <div className="academic-library-container">
      <motion.div
        className="library-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="library-title">
          <span className="title-text">Bibliothèque Académique</span>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-flourish"></div>
          </div>
        </div>
        <div className="library-subtitle">
          Portail de recherche érudit — {new Date().toLocaleDateString('fr-FR')}
        </div>
      </motion.div>

      <AcademicTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="tab-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {renderActiveContent()}
        </motion.div>
      </AnimatePresence>

      {/* Pagination manuscrite */}
      <div className="manuscript-pagination">
        <motion.button
          className="page-nav prev"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹ Précédent
        </motion.button>

        <div className="page-numbers">
          {renderPageNumbers(5)}
        </div>

        <motion.button
          className="page-nav next"
          onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          disabled={currentPage === 5}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Suivant ›
        </motion.button>
      </div>

      {/* Éléments décoratifs anciens */}
      <div className="library-decorations">
        {/* Coins de page anciens */}
        <div className="page-corners">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>

        {/* Taches d'encre */}
        <div className="ink-spots">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="ink-spot"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Filigranes */}
        <div className="watermarks">
          <motion.div
            className="watermark"
            animate={{
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
          >
            BIBLIOTHÈQUE ACADÉMIQUE
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicLibraryDashboard;
