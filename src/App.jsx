// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import "./App.css"; // Estilos globais

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Após 3 segundos, o conteúdo será exibido
    }, 3000); // Duração do carregamento (em ms)
    return () => clearTimeout(timer); // Limpa o temporizador quando o componente desmonta
  }, []);

  return (
    <div>
      {isLoading ? (
        <ProgressBar duration={3000} /> // Exibe a barra de progresso enquanto carrega
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
