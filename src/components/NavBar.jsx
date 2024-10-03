// src/components/Navbar.js
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch.js"; // Importando o ToggleSwitch
import "../styles/NavBar.css";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img
            className="logo"
            src="https://tse3.mm.bing.net/th?id=OIG3.3VHqocVyIvF1SCCVPZGW&pid=ImgGn"
          ></img>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li onClick={closeMenu}>
            <AiFillHome size={20} />
          </li>
          <li onClick={closeMenu}>Sobre</li>
          <li onClick={closeMenu}>Contato</li>
          <li className="dropdown">
            Gêneros
            <ul className="dropdown-content">
              <li onClick={closeMenu}>Ação</li>
              <li onClick={closeMenu}>Comédia</li>
              <li onClick={closeMenu}>Drama</li>
              <li onClick={closeMenu}>Terror</li>
            </ul>
          </li>
        </ul>
        <ToggleSwitch /> {/* Usando o ToggleSwitch */}
      </div>
    </nav>
  );
};

export default Navbar;
