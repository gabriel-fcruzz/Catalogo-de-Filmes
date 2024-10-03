// src/components/ToggleSwitch.js
import React, { useState, useEffect } from "react";
import "../styles/ToggleSwitch.css"; // Estilos para o toggle

const ToggleSwitch = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggla o modo claro/escuro
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode); // Passa o novo estado para o componente pai
  };

  useEffect(() => {
    // Aplica o tema com base no estado do toggle
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
