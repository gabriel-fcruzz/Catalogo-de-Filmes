// src/components/Footer.js
import React from "react";
import Button from "./Button";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <p>© 2024 Catálogo de Filmes</p>
      <Button
        text="Voltar ao Início"
        onClick={scrollToTop}
        primary={true}
        size="medium"
      />
    </footer>
  );
};

export default Footer;
