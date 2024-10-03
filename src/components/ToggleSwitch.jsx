// src/components/ToggleSwitch.js
import React, { useState, useEffect } from "react";
import Button from "./Button"; // Importando o Button

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="toggle-switch">
      <Button onClick={toggleDarkMode} primary>
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </Button>
    </div>
  );
};

export default ToggleSwitch;
