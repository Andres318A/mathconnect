import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Limits.css';

const Limits = () => {
    const navigate = useNavigate();
    const [activeSubtopic, setActiveSubtopic] = useState('definicion');
    const [activeTab, setActiveTab] = useState('ejemplo');
    const [activeProperty, setActiveProperty] = useState('constante'); // Mover aquí el estado

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

    // Datos para diferentes temas
    const definicionData = {
        tableData: [
            { x: 2.9, fx: 5.8 },
            { x: 2.99, fx: 5.98 },
            { x: 2.999, fx: 5.998 },
            { x: 3.001, fx: 6.002 },
            { x: 3.01, fx: 6.02 },
            { x: 3.1, fx: 6.2 }
        ]
    };

    const lateralesData = {
        tableData: [
            { x: -0.1, fx: 0.1 },
            { x: -0.01, fx: 0.01 },
            { x: -0.001, fx: 0.001 },
            { x: 0.001, fx: 0.001 },
            { x: 0.01, fx: 0.01 },
            { x: 0.1, fx: 0.1 }
        ]
    };

    const existenciaData = {
        tableData: [
            { x: -0.1, fx: 1 },
            { x: -0.01, fx: 1 },
            { x: -0.001, fx: 1 },
            { x: 0.001, fx: 2 },
            { x: 0.01, fx: 2 },
            { x: 0.1, fx: 2 }
        ]
    };

    const propiedadesData = {
        constante: {
            formula: "lim x→k k = k",
            ejemplo: "lim x→1 3 = 3",
            explicacion: "El límite de una constante k siempre es k. Aquí, el valor constante es 3.",
            grafico: "horizontal"
        },
        suma: {
            formula: "lim x→a [f(x) + g(x)] = lim x→a f(x) + lim x→a g(x)",
            ejemplo: "lim x→1 (2x + 3) = 2 + 3 = 5",
            explicacion: "El límite de la suma es la suma de los límites, como aquí la función 2x + 3, que se acerca al valor 5 cuando x se acerca a 1.",
            grafico: "lineal"
        },
        resta: {
            formula: "lim x→a [f(x) - g(x)] = lim x→a f(x) - lim x→a g(x)",
            ejemplo: "lim x→1 (2x - 3) = 2 - 3 = -1",
            explicacion: "Esta gráfica representa el límite de la resta de funciones, donde el límite de f(x) - g(x) es igual a la resta de los límites individuales.",
            grafico: "lineal"
        },
        producto: {
            formula: "lim x→a [f(x) × g(x)] = lim x→a f(x) × lim x→a g(x)",
            ejemplo: "lim x→1 (2x × 3) = 2 × 3 = 6",
            explicacion: "Esta gráfica muestra el límite del producto, que es el producto de los límites de f y g. Aquí f(x) = 2x y g(x) = 3, por lo que f(x) × g(x) = 6x",
            grafico: "lineal"
        },
        cociente: {
            formula: "lim x→a [f(x) / g(x)] = lim x→a f(x) / lim x→a g(x)",
            ejemplo: "lim x→1 (2x / 3) = 2/3",
            explicacion: "Esta gráfica representa el límite del cociente de dos funciones. Al acercarse x a 1, el valor de f(x)/g(x) se aproxima a 2/3.",
            grafico: "lineal"
        },
        konstante: {
            formula: "lim x→a [k × f(x)] = k × lim x→a f(x)",
            ejemplo: "lim x→1 (5 × 2x) = 5 × 2 = 10",
            explicacion: "Esta gráfica muestra la propiedad del límite por constante multiplicativa: multiplicar la función por 3 multiplica también el límite.",
            grafico: "lineal"
        }
    };

    const trigonometricosData = {
        tableData: [
            { x: -0.1, fx: 0.998 },
            { x: -0.01, fx: 0.99998 },
            { x: -0.001, fx: 0.9999998 },
            { x: 0.001, fx: 0.9999998 },
            { x: 0.01, fx: 0.99998 },
            { x: 0.1, fx: 0.998 }
        ]
    };

    // Renderizar contenido según subtema activo
    const renderContent = () => {
        if (activeSubtopic === 'definicion') {
            return renderDefinicion();
        } else if (activeSubtopic === 'laterales') {
            return renderLaterales();
        } else if (activeSubtopic === 'existencia') {
            return renderExistencia();
        } else if (activeSubtopic === 'propiedades') {
            return renderPropiedades();
        } else if (activeSubtopic === 'trigonometricos') {
            return renderTrigonometricos();
        }
        return renderDefinicion();
    };


    const renderDefinicion = () => (
        <>
            {/* Panel izquierdo - Definición */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            El <strong>límite</strong> de una función describe el valor al que
                            se acercan sus resultados cuando la variable
                            independiente se aproxima a un punto.
                        </p>
                        <p>
                            Cuando se habla de límite en matemáticas, se
                            está analizando "qué sucede con los valores de
                            <em>f(x)</em> cuando <em>x</em> se acerca mucho a cierto número
                            ('a')". Si al acercarnos a ese número, los valores
                            de <em>f(x)</em> se aproximan a un valor específico 'L',
                            entonces se dice que el límite de <em>f(x)</em> cuando
                            <em>x</em> tiende a 'a' es 'L'.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejemplo
                        </button>
                        <button
                            className={`action-btn ${activeTab === 'simulacion' ? 'active' : ''}`}
                            onClick={() => setActiveTab('simulacion')}
                        >
                            Simulación
                        </button>
                    </div>

                    {activeTab === 'ejemplo' && (
                        <div className="example-panel">
                            <h3 className="example-title">Ejemplo</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)=2x+1</p>
                                <p>¿A qué valor se acercan los resultados de <em>f(x)</em> cuando <em>x</em> se aproxima a 3?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)=2x+1 <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 3</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Definición */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {definicionData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {definicionData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>Se observa que los valores de <em>f(x)</em> se acercan a 6 cuando <em>x</em> se aproxima a 3.</p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid)" />

                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="50" y2="250" stroke="#666" strokeWidth="2" />

                                    <line x1="50" y1="200" x2="350" y2="50" stroke="#1976d2" strokeWidth="3" />

                                    <circle cx="200" cy="100" r="4" fill="#ff4444" />
                                    <line x1="200" y1="250" x2="200" y2="100" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1="50" y1="100" x2="200" y2="100" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />

                                    <text x="195" y="270" fontSize="12" fill="#666">3</text>
                                    <text x="30" y="105" fontSize="12" fill="#666">6</text>
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Mira cómo, al elegir valores de <em>x</em> más y más cercanos a 3, los
                                resultados de la función se acercan cada vez más a 6. Pero no es
                                necesario que <em>x</em> sea exactamente 3 para que <em>f(x)</em> esté cerca de 6.
                                Eso es el límite.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="simulation-explanation">
                            <p>Observa cómo, al acercar <em>x</em> a un número, el valor de <em>f(x)</em> se acerca a un valor específico, formando una línea recta.</p>
                        </div>

                        <div className="graph-container simulation-graph">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 500 350" className="simulation-svg">
                                    <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                    <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                    <path d="M 80 260 Q 150 200 220 140 Q 280 100 380 60"
                                        stroke="#e53e3e"
                                        strokeWidth="4"
                                        fill="transparent" />

                                    <g className="interactive-points">
                                        <circle cx="180" cy="180" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="155" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="168" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                        <circle cx="320" cy="120" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="95" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="108" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                    </g>

                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">2.9</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">3</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3.1</text>

                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    <line x1="180" y1="300" x2="180" y2="180" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="120" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="250" y1="300" x2="250" y2="130" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    <circle cx="250" cy="130" r="4" fill="#1976d2" />
                                    <text x="260" y="125" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                    <text x="430" y="125" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="2.9">2.9</div>
                                    <div className="axis-center" data-value="3">3</div>
                                    <div className="axis-point right" data-value="3.1">3.1</div>
                                </div>
                                <div className="axis-labels">
                                    <span className="axis-label-left">Izquierda</span>
                                    <span className="axis-label-right">Derecha</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );

    const renderLaterales = () => (
        <>
            {/* Panel izquierdo - Límites Laterales */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            El <strong>límite lateral</strong> describe cómo se comporta una
                            función cuando la variable se acerca a un
                            número desde un solo lado: solo desde la
                            izquierda o solo desde la derecha.
                        </p>
                        <p>
                            <strong>Límite por la izquierda</strong> (<em>x → a⁻</em>): La función se
                            estudia tomando valores de <em>x</em> que se acercan a
                            <em>a</em> pero solo desde números menores a <em>a</em>.
                        </p>
                        <p>
                            <strong>Límite por la derecha</strong> (<em>x → a⁺</em>): La función se
                            estudia tomando valores de <em>x</em> que se acercan a
                            <em>a</em> pero solo desde números mayores a <em>a</em>.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejemplo
                        </button>
                        <button
                            className={`action-btn ${activeTab === 'simulacion' ? 'active' : ''}`}
                            onClick={() => setActiveTab('simulacion')}
                        >
                            Simulación
                        </button>
                    </div>

                    {activeTab === 'ejemplo' && (
                        <div className="example-panel">
                            <h3 className="example-title">Ejemplo</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)=|x|</p>
                                <p>¿A qué valor tienden los resultados de <em>f(x)</em> cuando <em>x</em> se acerca a 0 desde la izquierda y desde la derecha?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)=|x| <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 0</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Límites Laterales */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {lateralesData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {lateralesData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Cuando <em>x</em> se acerca a 0 desde la izquierda (<em>x → 0⁻</em>), los valores de <em>f(x)</em> se acercan a 0.
                                Lo mismo ocurre cuando <em>x</em> se acerca desde la derecha (<em>x → 0⁺</em>).
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-lateral" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-lateral)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Función |x| - Lado izquierdo */}
                                    <line x1="50" y1="200" x2="200" y2="50" stroke="#1976d2" strokeWidth="3" />

                                    {/* Función |x| - Lado derecho */}
                                    <line x1="200" y1="50" x2="350" y2="200" stroke="#1976d2" strokeWidth="3" />

                                    {/* Punto en el origen */}
                                    <circle cx="200" cy="250" r="4" fill="#ff4444" />

                                    {/* Etiquetas */}
                                    <text x="195" y="270" fontSize="12" fill="#666">0</text>
                                    <text x="170" y="255" fontSize="10" fill="#666">-0.4</text>
                                    <text x="230" y="255" fontSize="10" fill="#666">0.4</text>
                                    <text x="180" y="245" fontSize="10" fill="#666">0</text>
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Observa cómo, acercándonos a <em>x = 0</em> por ambos lados, la
                                función se aproxima al mismo valor. Pero si una función tiene
                                comportamientos diferentes al acercarse por cada lado, sus
                                límites laterales pueden no coincidir.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="simulation-explanation">
                            <p>
                                Observa cómo, al acercarse a <em>a</em> desde la izquierda (<em>x → a⁻</em>) o desde la derecha (<em>x → a⁺</em>),
                                la función puede acercarse al mismo valor o a valores distintos.
                            </p>
                        </div>

                        <div className="graph-container simulation-graph">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 500 350" className="simulation-svg">
                                    <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                    {/* Ejes */}
                                    <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                    {/* Función |x| - Lado izquierdo (rojo) */}
                                    <path d="M 80 220 L 250 80" stroke="#e53e3e" strokeWidth="4" fill="transparent" />

                                    {/* Función |x| - Lado derecho (rojo) */}
                                    <path d="M 250 80 L 420 220" stroke="#e53e3e" strokeWidth="4" fill="transparent" />

                                    {/* Puntos interactivos */}
                                    <g className="interactive-points">
                                        <circle cx="180" cy="150" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="125" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="138" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                        <circle cx="320" cy="150" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="125" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="138" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                    </g>

                                    {/* Flecha L */}
                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    {/* Etiquetas del eje */}
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">2.9</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">0</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3.1</text>

                                    {/* Indicadores de dirección */}
                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    {/* Líneas de referencia */}
                                    <line x1="180" y1="300" x2="180" y2="150" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="150" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="250" y1="300" x2="250" y2="80" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    {/* Punto central */}
                                    <circle cx="250" cy="80" r="4" fill="#1976d2" />
                                    <text x="260" y="75" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                    <text x="430" y="75" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="2.9">2.9</div>
                                    <div className="axis-center" data-value="0">0</div>
                                    <div className="axis-point right" data-value="3.1">3.1</div>
                                </div>
                                <div className="axis-labels">
                                    <span className="axis-label-left">Izquierda</span>
                                    <span className="axis-label-right">Derecha</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );

    const renderExistencia = () => (
        <>
            {/* Panel izquierdo - Existencia del límite */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            El <strong>límite</strong> de una función en un punto existe si, al
                            acercarse a ese valor desde la izquierda y desde
                            la derecha, los resultados de la función se
                            aproximan al mismo número.
                        </p>
                        <p>
                            Si ambos límites laterales son iguales, decimos
                            que el límite existe.
                        </p>
                        <p>
                            Si los límites laterales son diferentes, el límite <strong>no
                                existe</strong> en ese punto.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejemplo
                        </button>
                        <button
                            className={`action-btn ${activeTab === 'simulacion' ? 'active' : ''}`}
                            onClick={() => setActiveTab('simulacion')}
                        >
                            Simulación
                        </button>
                    </div>

                    {activeTab === 'ejemplo' && (
                        <div className="example-panel">
                            <h3 className="example-title">Ejemplo</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)={`{1 si x<0  2 si x>0`}</p>
                                <p>¿Existe el límite de <em>f(x)</em> cuando <em>x</em> se aproxima a 0?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)={`{1 si x<0  2 si x>0`} <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 0</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Existencia del límite */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {existenciaData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {existenciaData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Al acercarse a 0 desde la izquierda, los valores de <em>f(x)</em> son 1. Al acercarse desde la
                                derecha, los valores son 2.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-existencia" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-existencia)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Función discontinua - Lado izquierdo (y = 1) */}
                                    <line x1="50" y1="150" x2="195" y2="150" stroke="#1976d2" strokeWidth="3" />
                                    <circle cx="195" cy="150" r="4" fill="white" stroke="#1976d2" strokeWidth="3" />

                                    {/* Función discontinua - Lado derecho (y = 2) */}
                                    <line x1="205" y1="100" x2="350" y2="100" stroke="#1976d2" strokeWidth="3" />
                                    <circle cx="205" cy="100" r="4" fill="#1976d2" strokeWidth="3" />

                                    {/* Línea vertical punteada en x=0 */}
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />

                                    {/* Etiquetas */}
                                    <text x="195" y="270" fontSize="12" fill="#666">0</text>
                                    <text x="30" y="155" fontSize="12" fill="#666">1</text>
                                    <text x="30" y="105" fontSize="12" fill="#666">2</text>

                                    {/* Punto vacío y lleno */}
                                    <text x="170" y="140" fontSize="10" fill="#666">○</text>
                                    <text x="210" y="90" fontSize="10" fill="#1976d2">●</text>
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Como los límites laterales son diferentes (1 y 2), el límite de
                                <em>f(x)</em> en <em>x = 0</em> <strong>no existe</strong>. El límite solo existe si ambas
                                aproximaciones laterales coinciden.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="simulation-explanation">
                            <p>
                                Desde la izquierda, los valores de la función se acercan a 1; desde la derecha, se acercan a
                                2. Como los límites son diferentes, el límite en <em>x = 0</em> <strong>no existe</strong>.
                            </p>
                        </div>

                        <div className="graph-container simulation-graph">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 500 350" className="simulation-svg">
                                    <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                    {/* Ejes */}
                                    <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                    {/* Función discontinua - Lado izquierdo (rojo) */}
                                    <line x1="80" y1="180" x2="245" y2="180" stroke="#e53e3e" strokeWidth="4" />
                                    <circle cx="245" cy="180" r="5" fill="white" stroke="#e53e3e" strokeWidth="4" />

                                    {/* Función discontinua - Lado derecho (rojo) */}
                                    <line x1="255" y1="120" x2="420" y2="120" stroke="#e53e3e" strokeWidth="4" />
                                    <circle cx="255" cy="120" r="5" fill="#e53e3e" strokeWidth="4" />

                                    {/* Puntos interactivos */}
                                    <g className="interactive-points">
                                        <circle cx="180" cy="180" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="155" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="168" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                        <circle cx="320" cy="120" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="95" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="108" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                    </g>

                                    {/* Flecha L */}
                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    {/* Etiquetas del eje */}
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">2.9</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">0</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3.1</text>

                                    {/* Indicadores de dirección */}
                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    {/* Líneas de referencia */}
                                    <line x1="180" y1="300" x2="180" y2="180" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="120" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="250" y1="300" x2="250" y2="50" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    {/* Punto central discontinuo */}
                                    <text x="260" y="75" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                    <text x="430" y="75" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="2.9">2.9</div>
                                    <div className="axis-center" data-value="0">0</div>
                                    <div className="axis-point right" data-value="3.1">3.1</div>
                                </div>
                                <div className="axis-labels">
                                    <span className="axis-label-left">Izquierda</span>
                                    <span className="axis-label-right">Derecha</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );

    const renderPropiedades = () => {
        const propertyButtons = [
            { key: 'constante', label: 'Constante' },
            { key: 'suma', label: 'Suma' },
            { key: 'resta', label: 'Resta' },
            { key: 'producto', label: 'Producto' },
            { key: 'cociente', label: 'Cociente' },
            { key: 'Konstante', label: 'K * lim f' }
        ];
        // Mapeo de títulos
        const propertyTitles = {
            'constante': 'Límite de una constante',
            'suma': 'Límite de la suma',
            'resta': 'Límite de la resta',
            'producto': 'Límite del producto',
            'cociente': 'Límite del cociente',
            'konstante': 'Límite de la función constante multiplicada'
        };

        const currentProperty = propiedadesData[activeProperty] || propiedadesData.constante;
        const currentTitle = propertyTitles[activeProperty] || 'Límite';

        return (
            <>
                {/* Panel izquierdo - Propiedades */}
                <div className="theory-panel">
                    <div className="theory-card">
                        <h2 className="theory-title">Definición</h2>
                        <div className="theory-text">
                            <p>
                                Las <strong>propiedades de los límites</strong> permiten calcular
                                el límite de combinaciones de funciones usando
                                los límites de funciones simples. Estas
                                propiedades ayudan a simplificar y resolver
                                límites de sumas, productos, cocientes y
                                potencias.
                            </p>
                            <ul>
                                <li>El límite de una suma es la suma de los límites.</li>
                                <li>El límite de una diferencia es la diferencia de los límites.</li>
                                <li>El límite de un producto es el producto de los límites.</li>
                                <li>El límite de un cociente es el cociente de los límites (si el denominador no tiende a cero).</li>
                                <li>El límite de una constante es esa constante.</li>
                            </ul>
                        </div>

                        <div className="action-buttons">
                            <button
                                className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                                onClick={() => setActiveTab('ejemplo')}
                            >
                                Ejemplo
                            </button>
                            <button
                                className={`action-btn ${activeTab === 'simulacion' ? 'active' : ''}`}
                                onClick={() => setActiveTab('simulacion')}
                            >
                                Simulación
                            </button>
                        </div>

                        {activeTab === 'ejemplo' && (
                            <div className="example-panel">
                                <h3 className="example-title">Ejemplo</h3>
                                <div className="example-content">
                                    <p><strong>Función:</strong> f(x)=2x &nbsp;&nbsp; g(x) = 3</p>
                                    <p><strong>Lim f(x)=2</strong> &nbsp;&nbsp; <strong>lim g(x)=3</strong></p>
                                    <p><strong>x→1</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>x→1</strong></p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'simulacion' && (
                            <div className="simulation-panel">
                                <h3 className="simulation-title">Simulación</h3>
                                <div className="simulation-content">
                                    <div className="function-selector">
                                        <p><strong>Función:</strong> f(x)=2x &nbsp;&nbsp; g(x) = 3 <span className="dropdown-arrow">▼</span></p>
                                    </div>
                                    <div className="limit-approach">
                                        <p><strong>x → a</strong></p>
                                        <p><strong>a = 0</strong></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Panel derecho - Contenido de Propiedades */}
                <div className="interactive-panel">
                    {/* Botones de propiedades */}
                    <div className="properties-buttons-container">
                        <div className="properties-buttons">
                            {propertyButtons.map((prop) => (
                                <button
                                    key={prop.key}
                                    className={`property-btn ${activeProperty === prop.key ? 'active' : ''}`}
                                    onClick={() => setActiveProperty(prop.key)}
                                >
                                    {prop.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeTab === 'ejemplo' ? (
                        <>
                            {/* Fórmula de la propiedad */}
                            <div className="property-formula-container">
                                <div className="property-label">
                                    {currentTitle}
                                </div>
                                <div className="property-formula">
                                    {currentProperty.formula}
                                </div>
                                <div className="property-example">
                                    {currentProperty.ejemplo}
                                </div>
                            </div>

                            <div className="property-explanation">
                                <p>
                                    Usando las propiedades de los límites, basta con calcular los
                                    límites de funciones simples y luego operar igual que lo harías
                                    con números.
                                </p>
                            </div>

                            {/* Gráfico según la propiedad */}
                            <div className="graph-container">
                                <div className="graph-placeholder">
                                    <svg viewBox="0 0 400 300" className="limit-graph">
                                        <defs>
                                            <pattern id="grid-properties" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                            </pattern>
                                        </defs>
                                        <rect width="400" height="300" fill="url(#grid-properties)" />

                                        {/* Ejes */}
                                        <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                        <line x1="50" y1="50" x2="50" y2="250" stroke="#666" strokeWidth="2" />

                                        {/* Gráfico según propiedad activa */}
                                        {activeProperty === 'constante' && (
                                            <>
                                                {/* Línea horizontal (función constante) */}
                                                <line x1="50" y1="150" x2="350" y2="150" stroke="#1976d2" strokeWidth="3" />
                                                <text x="30" y="155" fontSize="12" fill="#666">3</text>
                                            </>
                                        )}

                                        {(activeProperty === 'suma' || activeProperty === 'resta' || activeProperty === 'producto' || activeProperty === 'cociente' || activeProperty === 'konstante') && (
                                            <>
                                                {/* Línea inclinada */}
                                                <line x1="50" y1="200" x2="350" y2="100" stroke="#1976d2" strokeWidth="3" />
                                                <circle cx="200" cy="150" r="4" fill="#ff4444" />
                                                <line x1="200" y1="250" x2="200" y2="150" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />
                                                <text x="195" y="270" fontSize="12" fill="#666">1</text>
                                            </>
                                        )}
                                    </svg>
                                </div>
                            </div>

                            <div className="final-explanation">
                                <p>{currentProperty.explicacion}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Modo Simulación */}
                            <div className="properties-buttons-container">
                                <div className="properties-buttons">
                                    {propertyButtons.map((prop) => (
                                        <button
                                            key={prop.key}
                                            className={`property-btn ${activeProperty === prop.key ? 'active' : ''}`}
                                            onClick={() => setActiveProperty(prop.key)}
                                        >
                                            {prop.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contenido específico según propiedad en simulación */}
                            {activeProperty === 'konstante' ? (
                                <>
                                    {/* Simulación específica para K * lim f */}
                                    <div className="simulation-explanation">
                                        <p>
                                            Desde la izquierda, los valores de la función se acercan a 1; desde la derecha, se acercan a
                                            2. Como los límites son diferentes, el límite en <em>x = 0</em> <strong>no existe</strong>.
                                        </p>
                                    </div>

                                    <div className="graph-container simulation-graph">
                                        <div className="graph-placeholder">
                                            <svg viewBox="0 0 500 350" className="simulation-svg">
                                                <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                                {/* Ejes */}
                                                <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                                <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                                {/* Función roja curva */}
                                                <path d="M 80 280 Q 150 200 220 140 Q 280 100 420 60"
                                                    stroke="#e53e3e"
                                                    strokeWidth="4"
                                                    fill="transparent" />

                                                {/* Puntos interactivos */}
                                                <g className="interactive-points">
                                                    <circle cx="180" cy="180" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                                    <rect x="155" y="155" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                                    <text x="180" y="168" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                                    <circle cx="320" cy="120" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                                    <rect x="295" y="95" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                                    <text x="320" y="108" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                                </g>

                                                {/* Flecha L */}
                                                <g className="limit-indicator">
                                                    <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                                        fill="#666" />
                                                    <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                                </g>

                                                {/* Etiquetas del eje */}
                                                <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">2.9</text>
                                                <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">0</text>
                                                <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3.1</text>

                                                {/* Indicadores de dirección */}
                                                <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                                <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                                {/* Líneas de referencia */}
                                                <line x1="180" y1="300" x2="180" y2="180" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                                <line x1="320" y1="300" x2="320" y2="120" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                                <line x1="250" y1="300" x2="250" y2="80" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                                {/* Punto central */}
                                                <circle cx="250" cy="80" r="4" fill="#1976d2" />
                                                <text x="260" y="75" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                                <text x="430" y="75" fontSize="12" fill="#333">x</text>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="simulation-axis">
                                        <div className="axis-container">
                                            <div className="axis-line">
                                                <div className="axis-point left" data-value="2.9">2.9</div>
                                                <div className="axis-center" data-value="0">0</div>
                                                <div className="axis-point right" data-value="3.1">3.1</div>
                                            </div>
                                            <div className="axis-labels">
                                                <span className="axis-label-left">Izquierda</span>
                                                <span className="axis-label-right">Derecha</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Simulación para otras propiedades */}
                                    <div className="simulation-explanation">
                                        <p>Observa cómo, al acercar <em>x</em> a un número, el valor de <em>f(x)</em> se acerca a un valor específico, formando una línea recta.</p>
                                    </div>

                                    <div className="graph-container simulation-graph">
                                        <div className="graph-placeholder">
                                            <svg viewBox="0 0 500 350" className="simulation-svg">
                                                <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                                {/* Ejes */}
                                                <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                                <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                                {/* Gráfico según propiedad */}
                                                {activeProperty === 'constante' && (
                                                    <line x1="50" y1="150" x2="450" y2="150" stroke="#1976d2" strokeWidth="3" />
                                                )}

                                                {(activeProperty === 'suma' || activeProperty === 'resta' || activeProperty === 'producto' || activeProperty === 'cociente') && (
                                                    <line x1="50" y1="250" x2="450" y2="100" stroke="#1976d2" strokeWidth="3" />
                                                )}
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="final-explanation">
                                        <p>{currentProperty.explicacion}</p>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </>
        );
    };

    const renderTrigonometricos = () => (
        <>
            {/* Panel izquierdo - Trigonométricos */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            Los <strong>límites de funciones trigonométricas</strong> son
                            fundamentales en cálculo, especialmente
                            cuando la variable se acerca a valores donde la
                            función tiene un comportamiento especial
                            (como en 0, π/2, etc.).
                        </p>
                        <p>
                            Uno de los límites más importantes y básicos en
                            trigonometría es:
                        </p>
                        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '1.1rem', textAlign: 'center', background: 'rgba(240, 248, 255, 0.8)', padding: '10px', borderRadius: '8px', margin: '15px 0' }}>
                            <strong>lim sin(x)/x = 1</strong><br />
                            <strong>x→0</strong>
                        </p>
                        <p>
                            Este resultado es esencial para derivadas y
                            aplicaciones del cálculo.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejemplo
                        </button>
                        <button
                            className={`action-btn ${activeTab === 'simulacion' ? 'active' : ''}`}
                            onClick={() => setActiveTab('simulacion')}
                        >
                            Simulación
                        </button>
                    </div>

                    {activeTab === 'ejemplo' && (
                        <div className="example-panel">
                            <h3 className="example-title">Ejemplo</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)=sin(x)/x <span className="dropdown-arrow">▼</span></p>
                                <p>¿Qué sucede con el valor de <em>f(x)</em> cuando <em>x</em> se aproxima a 0?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)=sin(x)/x <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 0</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Trigonométricos */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {trigonometricosData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {trigonometricosData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Observa que, al acercarse <em>x</em> a 0 (ya sea desde la izquierda o la derecha), los valores de
                                la función se acercan mucho a 1.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-trig" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-trig)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Función sinc sin(x)/x */}
                                    <path d="M 50 100 Q 100 80 150 90 Q 175 95 200 100 Q 225 95 250 90 Q 300 80 350 100"
                                        stroke="#1976d2" strokeWidth="3" fill="transparent" />

                                    {/* Punto límite en (0,1) */}
                                    <circle cx="200" cy="100" r="4" fill="#ff4444" />
                                    <line x1="200" y1="250" x2="200" y2="100" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1="50" y1="100" x2="200" y2="100" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />

                                    {/* Etiquetas */}
                                    <text x="195" y="270" fontSize="12" fill="#666">0</text>
                                    <text x="30" y="105" fontSize="12" fill="#666">1</text>
                                    <text x="170" y="255" fontSize="10" fill="#666">-0.01</text>
                                    <text x="230" y="255" fontSize="10" fill="#666">0.01</text>

                                    {/* Líneas de referencia adicionales */}
                                    <text x="30" y="175" fontSize="10" fill="#666">0.998</text>
                                    <text x="30" y="80" fontSize="10" fill="#666">1.001</text>
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Esto significa que el límite trigonométrico existe y es 1, aunque la
                                función no esté definida exactamente en <em>x = 0</em>.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="simulation-explanation">
                            <p>
                                Desde la izquierda, los valores de la función se acercan a 1; desde la derecha, se acercan a
                                2. Como los límites son diferentes, el límite en <em>x = 0</em> <strong>no existe</strong>.
                            </p>
                        </div>

                        <div className="graph-container simulation-graph">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 500 350" className="simulation-svg">
                                    <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                    {/* Ejes */}
                                    <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                    {/* Función sinc roja */}
                                    <path d="M 80 140 Q 150 120 200 130 Q 220 135 250 140 Q 280 135 300 130 Q 350 120 420 140"
                                        stroke="#e53e3e"
                                        strokeWidth="4"
                                        fill="transparent" />

                                    {/* Puntos interactivos */}
                                    <g className="interactive-points">
                                        <circle cx="180" cy="135" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="110" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="123" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                        <circle cx="320" cy="135" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="110" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="123" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                    </g>

                                    {/* Flecha L */}
                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    {/* Etiquetas del eje */}
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">2.9</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">0</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3.1</text>

                                    {/* Indicadores de dirección */}
                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    {/* Líneas de referencia */}
                                    <line x1="180" y1="300" x2="180" y2="135" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="135" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="250" y1="300" x2="250" y2="140" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    {/* Punto central */}
                                    <circle cx="250" cy="140" r="4" fill="#1976d2" />
                                    <text x="260" y="135" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                    <text x="430" y="135" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="2.9">2.9</div>
                                    <div className="axis-center" data-value="0">0</div>
                                    <div className="axis-point right" data-value="3.1">3.1</div>
                                </div>
                                <div className="axis-labels">
                                    <span className="axis-label-left">Izquierda</span>
                                    <span className="axis-label-right">Derecha</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );

    return (
        <div className="limits-container">
            {/* Header igual al anterior */}
            <header className="limits-header">
                <div className="header-content">
                    <Link to="/dashboard" className="app-title-link">
                        <h1 className="app-title">MathConnect</h1>
                    </Link>

                    <nav className="main-navigation">
                        <Link to="/dashboard" className="nav-item">Inicio</Link>
                        <Link to="/limits" className="nav-item active">Límites</Link>
                        <Link to="/continuity" className="nav-item">Continuidad</Link>
                        <Link to="/help" className="nav-item">Ayuda</Link>
                    </nav>

                    <div className="user-menu">
                        <div className="user-avatar" onClick={handleLogout}>
                            {getInitials(user.nombre)}
                        </div>
                    </div>
                </div>
            </header>

            {/* Subnavegación de límites */}
            <div className="limits-subnav">
                <div className="subnav-content">
                    <button
                        className={`subnav-item ${activeSubtopic === 'definicion' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('definicion')}
                    >
                        Definición
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'laterales' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('laterales')}
                    >
                        Límites laterales
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'existencia' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('existencia')}
                    >
                        Existencia del límite
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'propiedades' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('propiedades')}
                    >
                        Propiedades
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'trigonometricos' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('trigonometricos')}
                    >
                        Trigonométricos
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <main className="limits-main">
                <div className="limits-content">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default Limits;
