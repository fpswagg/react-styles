import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CreativeCanvas = ({ project, onSave }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#8B4513');
  const [currentTool, setCurrentTool] = useState('brush');
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Fond avec texture organique
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FEFEFE');
    gradient.addColorStop(1, '#F5F5F0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ajouter texture de papier
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillStyle = `rgba(139, 69, 19, ${Math.random() * 0.02})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentTool === 'brush') {
      drawBrush(ctx, x, y);
    } else if (currentTool === 'eraser') {
      erase(ctx, x, y);
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentTool === 'brush') {
      drawBrush(ctx, x, y);
    } else if (currentTool === 'eraser') {
      erase(ctx, x, y);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    // Sauvegarder automatiquement
    if (onSave) {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();
      onSave(dataURL);
    }
  };

  const drawBrush = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fillStyle = brushColor;
    ctx.fill();

    // Ajouter effet de texture organique
    ctx.beginPath();
    ctx.arc(x + (Math.random() - 0.5) * 3, y + (Math.random() - 0.5) * 3, brushSize * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = brushColor + '80';
    ctx.fill();
  };

  const erase = (ctx, x, y) => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const addFloatingElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      x: Math.random() * 300 + 50,
      y: Math.random() * 200 + 50,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5
    };

    setFloatingElements(prev => [...prev, newElement]);
  };

  const renderFloatingElement = (element) => {
    switch (element.type) {
      case 'leaf':
        return '🍃';
      case 'flower':
        return '🌸';
      case 'butterfly':
        return '🦋';
      case 'cloud':
        return '☁️';
      case 'star':
        return '⭐';
      default:
        return '✨';
    }
  };

  return (
    <div className="creative-canvas-container">
      <div className="canvas-header">
        <h3>{project.title}</h3>
        <div className="canvas-mood">
          Humeur créative: {project.mood}
        </div>
      </div>

      <div className="canvas-workspace">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="creative-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />

        {/* Éléments flottants animés */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            style={{
              left: element.x,
              top: element.y,
              fontSize: `${element.scale * 2}rem`
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: element.scale,
              rotate: element.rotation,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 0.5,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            drag
            dragConstraints={{
              left: 0,
              right: 400,
              top: 0,
              bottom: 300
            }}
          >
            {renderFloatingElement(element)}
          </motion.div>
        ))}

        {/* Particules organiques en arrière-plan */}
        <div className="organic-particles">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="organic-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `hsl(${25 + Math.random() * 30}, ${60 + Math.random() * 20}%, ${70 + Math.random() * 20}%)`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="canvas-toolbar">
        <div className="tool-section">
          <h4>Outils de dessin</h4>
          <div className="tool-buttons">
            <button
              className={`tool-btn ${currentTool === 'brush' ? 'active' : ''}`}
              onClick={() => setCurrentTool('brush')}
            >
              🖌️
            </button>
            <button
              className={`tool-btn ${currentTool === 'eraser' ? 'active' : ''}`}
              onClick={() => setCurrentTool('eraser')}
            >
              🧽
            </button>
          </div>
        </div>

        <div className="brush-section">
          <h4>Couleur & Taille</h4>
          <div className="brush-controls">
            <div className="color-picker">
              {['#8B4513', '#D2691E', '#DAA520', '#556B2F', '#2F4F4F'].map(color => (
                <motion.button
                  key={color}
                  className={`color-btn ${brushColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setBrushColor(color)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            <div className="size-picker">
              <input
                type="range"
                min="1"
                max="20"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="size-slider"
              />
              <span className="size-value">{brushSize}px</span>
            </div>
          </div>
        </div>

        <div className="elements-section">
          <h4>Éléments flottants</h4>
          <div className="element-buttons">
            <motion.button
              className="element-btn"
              onClick={() => addFloatingElement('leaf')}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              🍃
            </motion.button>
            <motion.button
              className="element-btn"
              onClick={() => addFloatingElement('flower')}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              🌸
            </motion.button>
            <motion.button
              className="element-btn"
              onClick={() => addFloatingElement('butterfly')}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              🦋
            </motion.button>
            <motion.button
              className="element-btn"
              onClick={() => addFloatingElement('cloud')}
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              ☁️
            </motion.button>
          </div>
        </div>

        <div className="actions-section">
          <h4>Actions</h4>
          <div className="action-buttons">
            <button
              className="action-btn"
              onClick={() => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                setFloatingElements([]);
              }}
            >
              🗑️ Effacer
            </button>
            <button
              className="action-btn"
              onClick={() => {
                const canvas = canvasRef.current;
                const link = document.createElement('a');
                link.download = `${project.title}.png`;
                link.href = canvas.toDataURL();
                link.click();
              }}
            >
              💾 Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCanvas;
