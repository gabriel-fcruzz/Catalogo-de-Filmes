// src/Header.js
import React from "react";
import Navbar from "./NavBar.jsx";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>Catálogo de Filmes</h1>
      <Navbar />
    </header>
  );
};

export default Header;
