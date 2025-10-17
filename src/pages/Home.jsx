import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      {/* Header exacto al mockup */}
      <header className="home-header">
        <div className="header-content">
          <h1 className="app-title">MathConnect</h1>
          <div className="header-buttons">
            <button className="btn-login" onClick={handleLogin}>
              Iniciar sesión
            </button>
            <button className="btn-register" onClick={handleRegister}>
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal exacto al mockup */}
      <main className="home-main">
        <div className="welcome-section">
          {/* Título a la izquierda */}
          <div className="welcome-text">
            <h2 className="welcome-title">¡Bienvenido a<br />MathConnect!</h2>
          </div>
          
          {/* Caja de texto a la derecha */}
          <div className="description-container">
            <div className="description-card">
              <p className="description-text">
                <span className="highlight">MathConnect</span> es una plataforma web 
                educativa diseñada para facilitar el aprendizaje interactivo de los 
                conceptos de límites y continuidad en funciones reales. El aplicativo integra 
                recursos teóricos claros, simulaciones visuales y ejemplos prácticos, 
                permitiendo a estudiantes y docentes explorar de manera intuitiva y dinámica 
                los principales temas del cálculo. MathConnect promueve la comprensión empírica y la 
                experimentación matemática en un entorno accesible, moderno y adaptado 
                a las necesidades de la formación.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
