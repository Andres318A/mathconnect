import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Simular usuario logueado (más adelante vendrá del contexto de auth)
  const user = {
    nombre: 'Andrés González',
    email: 'andres@example.com'
  };

  const handleLogout = () => {
    // Aquí limpiaremos el localStorage y context más adelante
    localStorage.removeItem('mathconnect_token');
    localStorage.removeItem('mathconnect_user');
    navigate('/');
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'A';
  };

  return (
    <div className="dashboard-container">
      {/* Header con navegación completa como usuario logueado */}
      <header className="dashboard-header">
        <div className="header-content">
          <Link to="/dashboard" className="app-title-link">
            <h1 className="app-title">MathConnect</h1>
          </Link>
          
          {/* Navegación principal */}
          <nav className="main-navigation">
            <Link to="/dashboard" className="nav-item active">Inicio</Link>
            <Link to="/limits" className="nav-item">Límites</Link>
            <Link to="/continuity" className="nav-item">Continuidad</Link>
            <Link to="/help" className="nav-item">Ayuda</Link>
          </nav>

          {/* Avatar y menú de usuario */}
          <div className="user-menu">
            <div className="user-avatar" onClick={handleLogout}>
              {getInitials(user.nombre)}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal igual al home pero como usuario logueado */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          
          {/* Título a la izquierda */}
          <div className="welcome-text">
            <h2 className="welcome-title">¡Bienvenido a<br />MathConnect!</h2>
          </div>
          
          {/* Caja de descripción a la derecha */}
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

export default Dashboard;
