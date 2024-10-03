// src/components/Button.jsx
import React from "react";
import "../styles/Button.css"; // Importando os estilos específicos do botão

const Button = ({ text, onClick, primary, size }) => {
  const btnClass = `${primary ? "btn-primary" : "btn-secondary"} ${size}`;

  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
