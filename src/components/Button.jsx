// src/components/Button.js
import React from "react";
import "../styles/Button.css"; // Importando os estilos do botão

const Button = ({ primary, size, onClick, children }) => {
  const classNames = `button ${primary ? "primary" : ""} ${size}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
