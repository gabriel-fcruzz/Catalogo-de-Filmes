// src/components/Header.js
import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import Navbar from "./NavBar.jsx";
import "../styles/Header.css";

const Header = () => {
  const handleThemeChange = (isDarkMode) => {
    console.log(`Modo escuro: ${isDarkMode}`);
  };

  return (
    <header>
      <div className="header-content">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
