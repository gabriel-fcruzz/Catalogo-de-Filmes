// src/components/ProgressBar.js
import React, { useState, useEffect } from "react";
import "../styles/ProgressBar.css"; // Importe os estilos da barra de progresso

const ProgressBar = ({ duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100); // Aumenta a cada intervalo
      });
    }, duration / 100); // Divide o tempo de duração total por 100 para um incremento suave

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
