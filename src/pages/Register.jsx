import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [userData, setUserData] = useState({ 
    nombre: '', 
    email: '', 
    password: '' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Aquí conectaremos con el backend más adelante
      console.log('Register:', userData);
      
      // Simulación de registro exitoso
      setTimeout(() => {
        setLoading(false);
        navigate('/login'); // Redirigir al login después del registro
      }, 1000);

    } catch (error) {
      setError('Error al registrarse. Intenta nuevamente.');
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
    if (error) setError(''); // Limpiar error al escribir
  };

  return (
    <div className="register-container">
      {/* Header igual al login */}
      <header className="register-header">
        <div className="header-content">
          <Link to="/" className="app-title-link">
            <h1 className="app-title">MathConnect</h1>
          </Link>
          <div className="header-buttons">
            <Link to="/" className="btn-back">Volver al inicio</Link>
            <Link to="/login" className="btn-login">Iniciar sesión</Link>
          </div>
        </div>
      </header>

      {/* Contenido principal con título y formulario */}
      <main className="register-main">
        <div className="register-content">
          
          {/* Título igual que en el login */}
          <div className="welcome-title-container">
            <h2 className="welcome-title">¡Bienvenido a<br />MathConnect!</h2>
          </div>

          {/* Formulario de registro centrado como en el mockup */}
          <div className="register-form-container">
            <form onSubmit={handleSubmit} className="register-form">
              
              {/* Campo Nombre */}
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  className="form-input"
                  value={userData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  placeholder=""
                  required
                />
              </div>

              {/* Campo Correo */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  value={userData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder=""
                  required
                />
              </div>

              {/* Campo Contraseña */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  value={userData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder=""
                  required
                />
              </div>

              {/* Mensaje de error */}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              {/* Botón Registrar */}
              <button 
                type="submit" 
                className="btn-submit"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrar'}
              </button>

              {/* Link para iniciar sesión */}
              <div className="form-footer">
                <p>¿Ya tienes cuenta? <Link to="/login" className="link-login">Inicia sesión aquí</Link></p>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
