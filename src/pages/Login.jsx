import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Iniciando login con:', credentials);
      const response = await authService.login(credentials);
      console.log('Login exitoso:', response);
      
      if (response.success) {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('Usuario autenticado:', user);
        setLoading(false);
        navigate('/dashboard');
      } else {
        console.error('Respuesta sin éxito:', response);
        setError('Error en la autenticación. Por favor, intenta de nuevo.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error en login:', error);
      setError(error.message || 'Error al iniciar sesión. Verifica tus credenciales.');
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setCredentials({ ...credentials, [field]: value });
    if (error) setError('');
  };

  return (
    <div className="login-container">
      {/* Header igual al home */}
      <header className="login-header">
        <div className="header-content">
          <Link to="/" className="app-title-link">
            <h1 className="app-title">MathConnect</h1>
          </Link>
          <div className="header-buttons">
            <Link to="/" className="btn-back">Volver al inicio</Link>
            <Link to="/register" className="btn-register">Registrarse</Link>
          </div>
        </div>
      </header>

      {/* Contenido principal con título y formulario */}
      <main className="login-main">
        <div className="login-content">
          
          {/* Título igual que en el home */}
          <div className="welcome-title-container">
            <h2 className="welcome-title">¡Bienvenido a<br />MathConnect!</h2>
          </div>

          {/* Formulario centrado como en el mockup */}
          <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
              
              {/* Campo Correo */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  value={credentials.email}
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
                  value={credentials.password}
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

              {/* Botón Iniciar */}
              <button 
                type="submit" 
                className="btn-submit"
                disabled={loading}
              >
                {loading ? 'Iniciando...' : 'Iniciar'}
              </button>

              {/* Link para registrarse */}
              <div className="form-footer">
                <p>¿No tienes cuenta? <Link to="/register" className="link-register">Regístrate aquí</Link></p>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
