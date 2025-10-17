import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Help.css';

const Help = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('inicio');
  
  const user = {
    nombre: 'Andrés González',
    email: 'andres@example.com'
  };

  const handleLogout = () => {
    localStorage.removeItem('mathconnect_token');
    localStorage.removeItem('mathconnect_user');
    navigate('/');
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'A';
  };

  const renderInicio = () => (
    <div className="help-content">
      <div className="hero-section">
        <h1 className="hero-title">Bienvenido a MathConnect</h1>
        <p className="hero-subtitle">
          Tu plataforma educativa interactiva para aprender límites y continuidad de funciones
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Límites Interactivos</h3>
          <p>Explora diferentes tipos de límites con visualizaciones dinámicas y ejemplos prácticos.</p>
          <Link to="/limits" className="feature-link">Ir a Límites</Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Continuidad de Funciones</h3>
          <p>Comprende la continuidad puntual, en intervalos abiertos y cerrados con gráficos interactivos.</p>
          <Link to="/continuity" className="feature-link">Ir a Continuidad</Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Ejercicios Prácticos</h3>
          <p>Practica con ejercicios paso a paso y simulaciones que refuerzan tu aprendizaje.</p>
          <button className="feature-link" onClick={() => setActiveSection('ejercicios')}>Ver Ejercicios</button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>Tutoriales</h3>
          <p>Sigue nuestros tutoriales detallados para dominar cada concepto matemático.</p>
          <button className="feature-link" onClick={() => setActiveSection('tutoriales')}>Ver Tutoriales</button>
        </div>
      </div>

      <div className="quick-start">
        <h2>Comenzar Rápidamente</h2>
        <div className="quick-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Elige tu Tema</h4>
              <p>Selecciona entre Límites o Continuidad según tu necesidad de aprendizaje</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Explora los Subtemas</h4>
              <p>Cada tema tiene múltiples subtemas con ejemplos y simulaciones específicas</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Practica Interactivamente</h4>
              <p>Usa las simulaciones y ejercicios para reforzar tu comprensión</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLimites = () => (
    <div className="help-content">
      <h1>Guía de Límites</h1>
      
      <div className="topic-overview">
        <h2>¿Qué son los Límites?</h2>
        <p>
          Un límite describe el comportamiento de una función cuando la variable independiente 
          se acerca a un valor específico. Es fundamental para entender el cálculo diferencial e integral.
        </p>
      </div>

      <div className="subtopics-grid">
        <div className="subtopic-card">
          <h3>Definición</h3>
          <p>Concepto básico y formal de límites con la notación matemática estándar.</p>
          <div className="examples">
            <strong>Ejemplo:</strong> lim<sub>x→a</sub> f(x) = L
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Límites Laterales</h3>
          <p>Límites por la izquierda y derecha cuando la función se acerca desde diferentes direcciones.</p>
          <div className="examples">
            <strong>Funciones:</strong> f(x) = |x|/x, límites en x = 0
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Existencia del Límite</h3>
          <p>Condiciones para que un límite exista: los límites laterales deben ser iguales.</p>
          <div className="examples">
            <strong>Caso:</strong> Funciones con saltos o discontinuidades
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Propiedades</h3>
          <p>Reglas para calcular límites: suma, producto, cociente y composición.</p>
          <div className="examples">
            <strong>Reglas:</strong> lim[f(x) + g(x)] = lim f(x) + lim g(x)
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Trigonométricos</h3>
          <p>Límites especiales de funciones trigonométricas, especialmente lim sin(x)/x = 1.</p>
          <div className="examples">
            <strong>Fundamental:</strong> lim<sub>x→0</sub> sin(x)/x = 1
          </div>
        </div>
      </div>

      <div className="navigation-help">
        <h2>Cómo Usar la Sección de Límites</h2>
        <ul>
          <li><strong>Modo Ejemplo:</strong> Ve tablas de valores y gráficos estáticos para entender el concepto</li>
          <li><strong>Modo Simulación:</strong> Interactúa con gráficos dinámicos y puntos móviles</li>
          <li><strong>Función Dropdown:</strong> Cambia entre diferentes funciones para comparar comportamientos</li>
          <li><strong>Valores Aproximados:</strong> Observa cómo los valores se acercan al límite</li>
        </ul>
      </div>
    </div>
  );

  const renderContinuidad = () => (
    <div className="help-content">
      <h1>Guía de Continuidad</h1>
      
      <div className="topic-overview">
        <h2>¿Qué es la Continuidad?</h2>
        <p>
          Una función es continua si no presenta saltos, huecos o interrupciones en su gráfica. 
          Formalmente: f(x) es continua en x = a si lim<sub>x→a</sub> f(x) = f(a).
        </p>
      </div>

      <div className="subtopics-grid">
        <div className="subtopic-card">
          <h3>Continuidad Puntual</h3>
          <p>Estudia la continuidad en un punto específico usando f(x) = x² en x = 2.</p>
          <div className="examples">
            <strong>Función:</strong> f(x) = x² es continua en x = 2
          </div>
        </div>

        <div className="subtopic-card">
          <h3>En Punto</h3>
          <p>Similar a continuidad puntual pero con f(x) = 3x en x = 1 para variar el ejemplo.</p>
          <div className="examples">
            <strong>Función:</strong> f(x) = 3x es continua en x = 1
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Intervalo Abierto</h3>
          <p>Continuidad en (a, b) sin incluir extremos. Ejemplo: f(x) = 1/x en (-∞, 0).</p>
          <div className="examples">
            <strong>Función:</strong> f(x) = 1/x en (-∞, 0)
          </div>
        </div>

        <div className="subtopic-card">
          <h3>Intervalo Cerrado</h3>
          <p>Continuidad en [a, b] incluyendo extremos. Ejemplo: f(x) = √x en [0, 4].</p>
          <div className="examples">
            <strong>Función:</strong> f(x) = √x en [0, 4]
          </div>
        </div>
      </div>

      <div className="navigation-help">
        <h2>Cómo Usar la Sección de Continuidad</h2>
        <ul>
          <li><strong>Subnavegación:</strong> Cambia entre los 4 tipos de continuidad</li>
          <li><strong>Tablas de Valores:</strong> Ve cómo los valores se comportan cerca del punto de interés</li>
          <li><strong>Gráficos Específicos:</strong> Cada subtema tiene un tipo de función diferente</li>
          <li><strong>Explicaciones:</strong> Lee las explicaciones que aparecen en cajas verdes</li>
        </ul>
      </div>
    </div>
  );

  const renderTutoriales = () => (
    <div className="help-content">
      <h1>Tutoriales Paso a Paso</h1>
      
      <div className="tutorials-list">
        <div className="tutorial-item">
          <h3>🎯 Tutorial 1: Tu Primer Límite</h3>
          <p>Aprende los conceptos básicos calculando lim<sub>x→2</sub> (x² - 4)/(x - 2)</p>
          <div className="tutorial-steps">
            <ol>
              <li>Ve a la sección <strong>Límites → Definición</strong></li>
              <li>Selecciona <strong>Modo Ejemplo</strong></li>
              <li>Observa cómo los valores se acercan a 4 cuando x se acerca a 2</li>
              <li>Cambia a <strong>Modo Simulación</strong> para interactuar</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-item">
          <h3>📊 Tutorial 2: Límites Laterales</h3>
          <p>Comprende cuándo un límite no existe usando f(x) = |x|/x</p>
          <div className="tutorial-steps">
            <ol>
              <li>Ve a <strong>Límites → Límites Laterales</strong></li>
              <li>Observa la tabla de valores negativos y positivos</li>
              <li>Ve cómo el límite por la izquierda es -1 y por la derecha es 1</li>
              <li>Conclusión: El límite no existe porque son diferentes</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-item">
          <h3>🔄 Tutorial 3: Funciones Continuas</h3>
          <p>Explora la continuidad de f(x) = x² en un punto</p>
          <div className="tutorial-steps">
            <ol>
              <li>Ve a <strong>Continuidad → Continuidad Puntual</strong></li>
              <li>Analiza la tabla: valores cerca de x = 2 se acercan a f(2) = 4</li>
              <li>Observa el gráfico: no hay saltos ni huecos</li>
              <li>Conclusión: La función es continua en x = 2</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-item">
          <h3>🎲 Tutorial 4: Discontinuidades</h3>
          <p>Identifica discontinuidades usando f(x) = 1/x</p>
          <div className="tutorial-steps">
            <ol>
              <li>Ve a <strong>Continuidad → Intervalo Abierto</strong></li>
              <li>Ve cómo f(x) = 1/x no está definida en x = 0</li>
              <li>Observa que es continua en (-∞, 0) porque 0 no se incluye</li>
              <li>Nota la línea roja discontinua en x = 0</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-item">
          <h3>🌟 Tutorial 5: Límites Trigonométricos</h3>
          <p>Explora el límite fundamental lim<sub>x→0</sub> sin(x)/x = 1</p>
          <div className="tutorial-steps">
            <ol>
              <li>Ve a <strong>Límites → Trigonométricos</strong></li>
              <li>Observa la tabla: valores cerca de 0 se acercan a 1</li>
              <li>Ve el gráfico de la función sinc</li>
              <li>Este límite es fundamental para derivar funciones trigonométricas</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEjercicios = () => (
    <div className="help-content">
      <h1>Ejercicios Prácticos</h1>
      
      <div className="exercises-intro">
        <p>
          Practica con estos ejercicios interactivos. Cada uno está vinculado a una sección específica 
          de MathConnect donde puedes explorar y verificar las respuestas.
        </p>
      </div>

      <div className="exercise-categories">
        <div className="exercise-category">
          <h2>🎯 Ejercicios de Límites</h2>
          
          <div className="exercise-item">
            <h4>Ejercicio 1: Límite Básico</h4>
            <p><strong>Calcular:</strong> lim<sub>x→3</sub> (2x + 1)</p>
            <p><strong>Pista:</strong> Usa sustitución directa</p>
            <Link to="/limits" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 2: Límite con Indeterminación</h4>
            <p><strong>Calcular:</strong> lim<sub>x→2</sub> (x² - 4)/(x - 2)</p>
            <p><strong>Pista:</strong> Factoriza el numerador</p>
            <Link to="/limits" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 3: Límites Laterales</h4>
            <p><strong>Determinar si existe:</strong> lim<sub>x→0</sub> |x|/x</p>
            <p><strong>Pista:</strong> Calcula límites por izquierda y derecha</p>
            <Link to="/limits" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 4: Límite Trigonométrico</h4>
            <p><strong>Calcular:</strong> lim<sub>x→0</sub> sin(3x)/x</p>
            <p><strong>Pista:</strong> Usa el límite fundamental sin(x)/x = 1</p>
            <Link to="/limits" className="exercise-link">Resolver en MathConnect</Link>
          </div>
        </div>

        <div className="exercise-category">
          <h2>📈 Ejercicios de Continuidad</h2>
          
          <div className="exercise-item">
            <h4>Ejercicio 1: Continuidad Puntual</h4>
            <p><strong>¿Es continua f(x) = x² - 1 en x = 1?</strong></p>
            <p><strong>Pista:</strong> Verifica que lim<sub>x→1</sub> f(x) = f(1)</p>
            <Link to="/continuity" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 2: Discontinuidad</h4>
            <p><strong>¿Dónde es discontinua f(x) = 1/(x-2)?</strong></p>
            <p><strong>Pista:</strong> Busca donde la función no está definida</p>
            <Link to="/continuity" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 3: Continuidad en Intervalos</h4>
            <p><strong>¿Es f(x) = √x continua en [0, 9]?</strong></p>
            <p><strong>Pista:</strong> Verifica continuidad en todo el intervalo</p>
            <Link to="/continuity" className="exercise-link">Resolver en MathConnect</Link>
          </div>

          <div className="exercise-item">
            <h4>Ejercicio 4: Función Definida por Partes</h4>
            <p><strong>Analiza la continuidad de:</strong></p>
            <p>f(x) = {"{x² si x < 1, 2x si x ≥ 1}"}</p>
            <p><strong>Pista:</strong> Verifica en x = 1</p>
            <Link to="/continuity" className="exercise-link">Resolver en MathConnect</Link>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreguntas = () => (
    <div className="help-content">
      <h1>Preguntas Frecuentes</h1>
      
      <div className="faq-section">
        <div className="faq-item">
          <h3>¿Cómo navego entre los diferentes temas?</h3>
          <p>
            Usa el menú principal en la parte superior para moverte entre Inicio, Límites, 
            Continuidad y Ayuda. Cada sección tiene su propia subnavegación.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Qué significan los botones "Ejercicio" y "Simulación"?</h3>
          <p>
            <strong>Ejercicio:</strong> Muestra ejemplos estáticos con tablas y gráficos fijos para entender conceptos.<br/>
            <strong>Simulación:</strong> Permite interactuar con gráficos dinámicos y puntos móviles.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Por qué algunos límites "no existen"?</h3>
          <p>
            Un límite no existe cuando los límites laterales (por izquierda y derecha) son diferentes, 
            o cuando la función tiende a infinito, o cuando oscila sin acercarse a un valor.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Cómo leo las tablas de valores?</h3>
          <p>
            Las tablas muestran valores de x acercándose al punto de interés y los correspondientes 
            valores f(x). Observa cómo f(x) se acerca (o no) a un valor específico.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Qué representan los puntos verdes en los gráficos?</h3>
          <p>
            Los puntos verdes interactivos muestran valores específicos de la función. 
            Puedes observar cómo cambian cuando te acercas al punto de interés.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Cómo interpreto las líneas discontinuas rojas?</h3>
          <p>
            Las líneas rojas discontinuas indican puntos donde la función no está definida 
            o tiene una discontinuidad infinita (como divisiones por cero).
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Puedo cambiar las funciones en los ejemplos?</h3>
          <p>
            Actualmente cada subtema tiene una función específica optimizada para demostrar 
            ese concepto particular. Futuras versiones podrán incluir más opciones.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Cómo reporto un problema o sugiero mejoras?</h3>
          <p>
            Puedes contactar al equipo de desarrollo a través del correo: 
            <strong>soporte@mathconnect.edu</strong> o usar el formulario de contacto en la sección de ayuda.
          </p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'inicio':
        return renderInicio();
      case 'limites':
        return renderLimites();
      case 'continuidad':
        return renderContinuidad();
      case 'tutoriales':
        return renderTutoriales();
      case 'ejercicios':
        return renderEjercicios();
      case 'preguntas':
        return renderPreguntas();
      default:
        return renderInicio();
    }
  };

  return (
    <div className="help-container">
      {/* Header */}
      <header className="help-header">
        <div className="header-content">
          <Link to="/dashboard" className="app-title-link">
            <h1 className="app-title">MathConnect</h1>
          </Link>
          
          <nav className="main-navigation">
            <Link to="/dashboard" className="nav-item">Inicio</Link>
            <Link to="/limits" className="nav-item">Límites</Link>
            <Link to="/continuity" className="nav-item">Continuidad</Link>
            <Link to="/help" className="nav-item active">Ayuda</Link>
          </nav>

          <div className="user-menu">
            <div className="user-avatar" onClick={handleLogout}>
              {getInitials(user.nombre)}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar de Ayuda */}
      <div className="help-layout">
        <aside className="help-sidebar">
          <nav className="help-nav">
            <h2>Centro de Ayuda</h2>
            <ul>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'inicio' ? 'active' : ''}`}
                  onClick={() => setActiveSection('inicio')}
                >
                  🏠 Inicio
                </button>
              </li>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'limites' ? 'active' : ''}`}
                  onClick={() => setActiveSection('limites')}
                >
                  📊 Guía de Límites
                </button>
              </li>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'continuidad' ? 'active' : ''}`}
                  onClick={() => setActiveSection('continuidad')}
                >
                  📈 Guía de Continuidad
                </button>
              </li>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'tutoriales' ? 'active' : ''}`}
                  onClick={() => setActiveSection('tutoriales')}
                >
                  🎓 Tutoriales
                </button>
              </li>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'ejercicios' ? 'active' : ''}`}
                  onClick={() => setActiveSection('ejercicios')}
                >
                  💪 Ejercicios
                </button>
              </li>
              <li>
                <button 
                  className={`help-nav-item ${activeSection === 'preguntas' ? 'active' : ''}`}
                  onClick={() => setActiveSection('preguntas')}
                >
                  ❓ Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <main className="help-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Help;
