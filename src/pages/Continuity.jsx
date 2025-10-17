import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Continuity.css';

const Continuity = () => {
    const navigate = useNavigate();
    const [activeSubtopic, setActiveSubtopic] = useState('puntual');
    const [activeTab, setActiveTab] = useState('ejemplo');

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

    // Datos para continuidad puntual
    const puntualData = {
        tableData: [
            { x: 1.9, fx: 3.61 },
            { x: 1.99, fx: 3.96 },
            { x: 2.0, fx: 4.0 },
            { x: 2.01, fx: 4.04 },
            { x: 2.1, fx: 4.41 }
        ],
        function: "f(x)=x²",
        point: "x = 2",
        limit: 4
    };

    const enPuntoData = {
        tableData: [
            { x: 0.9, fx: 2.71 },
            { x: 0.99, fx: 2.97 },
            { x: 1.0, fx: 3.0 },
            { x: 1.01, fx: 3.03 },
            { x: 1.1, fx: 3.31 }
        ],
        function: "f(x)=3x",
        point: "x = 1",
        limit: 3
    };

    const intervaloAbiertoData = {
        tableData: [
            { x: -5, fx: -0.2 },
            { x: -2, fx: -0.5 },
            { x: -1, fx: -1.0 },
            { x: -0.5, fx: -2.0 },
            { x: -0.1, fx: -10.0 }
        ],
        function: "f(x)=1/x",
        interval: "(-∞, 0)",
        discontinuity: "x = 0"
    };

    const intervaloCerradoData = {
        tableData: [
            { x: 0, fx: 0.0 },
            { x: 1, fx: 1.0 },
            { x: 2, fx: 1.41 },
            { x: 3, fx: 1.73 },
            { x: 4, fx: 2.0 }
        ],
        function: "f(x)=√x",
        interval: "[0, 4]",
        domain: "x ≥ 0"
    };

    const renderPuntual = () => (
        <>
            {/* Panel izquierdo - Continuidad Puntual */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            Una función es <strong>continua en un punto</strong> si su gráfica
                            no presenta saltos ni interrupciones en ese lugar.
                            Formalmente, <em>f(x)</em> es continua en <em>x = a</em> si se
                            cumple:
                        </p>
                        <div className="formula-highlight">
                            <p>lim <sub>x→a</sub> f(x) = f(a)</p>
                        </div>
                        <p>
                            Es decir, el límite existe y coincide con el valor de
                            la función en ese punto.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejercicio
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
                            <h3 className="example-title">Ejercicio</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)=x² <span className="dropdown-arrow">▼</span></p>
                                <p>¿La función es continua en <em>x = 2</em>?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)=x² <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 2</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Continuidad Puntual */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {puntualData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {puntualData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Observa cómo, al acercar <em>x</em> a 2, los valores de la función se
                                acercan a 4 y <em>f(2) = 4</em>.
                            </p>
                            <p>
                                No se observa ningún salto ni corte en el gráfico, por lo que la
                                función es continua en <em>x = 2</em>.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-continuity" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-continuity)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="50" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Parábola f(x) = x² */}
                                    <path d="M 50 240 Q 150 180 200 120 Q 250 80 350 60"
                                        stroke="#1976d2" strokeWidth="3" fill="transparent" />

                                    {/* Punto en (2,4) */}
                                    <circle cx="200" cy="120" r="4" fill="#1976d2" strokeWidth="2" />
                                    <line x1="200" y1="250" x2="200" y2="120" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1="50" y1="120" x2="200" y2="120" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />

                                    {/* Etiquetas */}
                                    <text x="195" y="270" fontSize="12" fill="#666">2</text>
                                    <text x="30" y="125" fontSize="12" fill="#666">4</text>

                                    {/* Puntos de la tabla */}
                                    <circle cx="170" cy="140" r="2" fill="#4CAF50" />
                                    <circle cx="185" cy="130" r="2" fill="#4CAF50" />
                                    <circle cx="215" cy="130" r="2" fill="#4CAF50" />
                                    <circle cx="230" cy="140" r="2" fill="#4CAF50" />
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Esta gráfica muestra que la función es continua en <em>x
                                    = 2</em> porque no tiene saltos o cortes y el valor de la
                                función coincide con el límite.
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

                                    {/* Parábola roja */}
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
                                    <line x1="250" y1="300" x2="250" y2="130" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    {/* Punto central */}
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

    const renderEnPunto = () => (
        <>
            {/* Panel izquierdo - En Punto */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            Una función es <strong>continua en un punto</strong> si su gráfica
                            no presenta saltos ni interrupciones en ese lugar.
                            Formalmente, <em>f(x)</em> es continua en <em>x = a</em> si se
                            cumple:
                        </p>
                        <div className="formula-highlight">
                            <p>lim <sub>x→a</sub> f(x) = f(a)</p>
                        </div>
                        <p>
                            Es decir, el límite existe y coincide con el valor de
                            la función en ese punto.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejercicio
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
                            <h3 className="example-title">Ejercicio</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> {enPuntoData.function} <span className="dropdown-arrow">▼</span></p>
                                <p>¿La función es continua en <em>{enPuntoData.point}</em>?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> {enPuntoData.function} <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>x → a</strong></p>
                                    <p><strong>a = 1</strong></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de En Punto */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {enPuntoData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {enPuntoData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Observa cómo, al acercar <em>x</em> a 1, los valores de la función se
                                acercan a {enPuntoData.limit} y <em>f(1) = {enPuntoData.limit}</em>.
                            </p>
                            <p>
                                No se observa ningún salto ni corte en el gráfico, por lo que la
                                función es continua en <em>x = 1</em>.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-punto" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-punto)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="50" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Línea recta f(x) = 3x */}
                                    <line x1="50" y1="240" x2="350" y2="80"
                                        stroke="#1976d2" strokeWidth="3" />

                                    {/* Punto en (1,3) */}
                                    <circle cx="150" cy="180" r="4" fill="#1976d2" strokeWidth="2" />
                                    <line x1="150" y1="250" x2="150" y2="180" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1="50" y1="180" x2="150" y2="180" stroke="#ff4444" strokeWidth="1" strokeDasharray="5,5" />

                                    {/* Etiquetas */}
                                    <text x="145" y="270" fontSize="12" fill="#666">1</text>
                                    <text x="30" y="185" fontSize="12" fill="#666">3</text>

                                    {/* Puntos de la tabla */}
                                    <circle cx="120" cy="195" r="2" fill="#4CAF50" />
                                    <circle cx="135" cy="187" r="2" fill="#4CAF50" />
                                    <circle cx="165" y="173" r="2" fill="#4CAF50" />
                                    <circle cx="180" cy="165" r="2" fill="#4CAF50" />
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Esta gráfica muestra que la función lineal es continua en <em>x
                                    = 1</em> porque no tiene saltos o cortes y el valor de la
                                función coincide con el límite.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Igual simulación pero con valores diferentes */}
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

                                    {/* Línea recta roja */}
                                    <line x1="50" y1="280" x2="450" y2="80"
                                        stroke="#e53e3e"
                                        strokeWidth="4" />

                                    {/* Puntos interactivos */}
                                    <g className="interactive-points">
                                        <circle cx="180" cy="220" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="195" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="208" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">2.7</text>

                                        <circle cx="320" cy="140" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="115" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="128" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">3.3</text>
                                    </g>

                                    {/* Flecha L */}
                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    {/* Etiquetas del eje */}
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">0.9</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">1</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">1.1</text>

                                    {/* Indicadores de dirección */}
                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    {/* Líneas de referencia */}
                                    <line x1="180" y1="300" x2="180" y2="220" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="140" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="250" y1="300" x2="250" y2="180" stroke="#1976d2" strokeWidth="2" strokeDasharray="5,5" />

                                    {/* Punto central */}
                                    <circle cx="250" cy="180" r="4" fill="#1976d2" />
                                    <text x="260" y="175" fontSize="12" fill="#1976d2" fontWeight="bold">a</text>
                                    <text x="430" y="175" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="0.9">0.9</div>
                                    <div className="axis-center" data-value="1">1</div>
                                    <div className="axis-point right" data-value="1.1">1.1</div>
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

    const renderIntervaloAbierto = () => (
        <>
            {/* Panel izquierdo - Intervalo Abierto */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            Una función es <strong>continua en un intervalo abierto</strong> (a, b)
                            si es continua en todos los puntos del intervalo,
                            sin incluir los extremos.
                        </p>
                        <p>
                            En este caso, la función debe ser continua en
                            cada punto c donde a &lt; c &lt; b.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejercicio
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
                            <h3 className="example-title">Ejercicio</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> {intervaloAbiertoData.function} <span className="dropdown-arrow">▼</span></p>
                                <p>¿Es continua en el intervalo {intervaloAbiertoData.interval}?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> {intervaloAbiertoData.function} <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>Intervalo:</strong> (-∞, 0)</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido de Intervalo Abierto */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        {intervaloAbiertoData.tableData.map((item, index) => (
                                            <th key={index}>{item.x}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        {intervaloAbiertoData.tableData.map((item, index) => (
                                            <td key={index}>{item.fx}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Observa que la función f(x) = 1/x está definida y es continua para todos los valores
                                negativos de x, pero no está definida en x = 0.
                            </p>
                            <p>
                                Por lo tanto, la función es continua en el intervalo abierto (-∞, 0),
                                ya que 0 no está incluido en este intervalo.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-abierto" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-abierto)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Hipérbola f(x) = 1/x solo para x < 0 */}
                                    <path d="M 60 60 Q 100 90 120 120 Q 150 160 180 200 Q 195 230 199 250"
                                        stroke="#1976d2" strokeWidth="3" fill="transparent" />

                                    {/* Línea discontinua en x = 0 */}
                                    <line x1="200" y1="50" x2="200" y2="250" stroke="#ff4444" strokeWidth="2" strokeDasharray="8,4" />

                                    {/* Etiquetas */}
                                    <text x="195" y="270" fontSize="12" fill="#666">0</text>
                                    <text x="150" y="270" fontSize="10" fill="#666">-1</text>
                                    <text x="100" y="270" fontSize="10" fill="#666">-2</text>
                                    <text x="30" y="255" fontSize="12" fill="#666">0</text>
                                    <text x="30" y="200" fontSize="10" fill="#666">-1</text>
                                    <text x="30" y="120" fontSize="10" fill="#666">-2</text>

                                    {/* Puntos de la tabla */}
                                    <circle cx="80" cy="200" r="2" fill="#4CAF50" />
                                    <circle cx="120" cy="120" r="2" fill="#4CAF50" />
                                    <circle cx="150" cy="200" r="2" fill="#4CAF50" />
                                    <circle cx="170" cy="120" r="2" fill="#4CAF50" />
                                    <circle cx="190" cy="80" r="2" fill="#4CAF50" />
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Esta gráfica muestra que f(x) = 1/x es continua en (-∞, 0) porque
                                no presenta interrupciones en ese intervalo, aunque tenga una
                                discontinuidad infinita en x = 0, que no pertenece al intervalo abierto.
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

                                    {/* Hipérbola roja para x < 0 */}
                                    <path d="M 70 80 Q 100 100 130 140 Q 180 200 220 260 Q 240 280 245 295"
                                        stroke="#e53e3e"
                                        strokeWidth="4"
                                        fill="transparent" />

                                    {/* Línea discontinua en x = 0 */}
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#ff4444" strokeWidth="2" strokeDasharray="8,4" />

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
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">-2</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">0</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">2</text>

                                    {/* Indicadores de dirección */}
                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>

                                    {/* Líneas de referencia */}
                                    <line x1="180" y1="300" x2="180" y2="180" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />
                                    <line x1="320" y1="300" x2="320" y2="120" stroke="#999" strokeWidth="1" strokeDasharray="3,3" />

                                    {/* Punto central discontinuo */}
                                    <text x="260" y="125" fontSize="12" fill="#1976d2" fontWeight="bold">∞</text>
                                    <text x="430" y="125" fontSize="12" fill="#333">x</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="-2">-2</div>
                                    <div className="axis-center discontinuous" data-value="0">0</div>
                                    <div className="axis-point right" data-value="2">2</div>
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

    const renderIntervaloCerrado = () => (
        <>
            {/* Panel izquierdo - Intervalo Cerrado */}
            <div className="theory-panel">
                <div className="theory-card">
                    <h2 className="theory-title">Definición</h2>
                    <div className="theory-text">
                        <p>
                            Una función es <strong>continua en un intervalo cerrado</strong> [a, b]
                            si es continua en todos los puntos del intervalo,
                            incluyendo los extremos.
                        </p>
                        <p>
                            En este caso, la función debe ser continua en
                            cada punto c donde a &le; c &le; b.
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className={`action-btn ${activeTab === 'ejemplo' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ejemplo')}
                        >
                            Ejercicio
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
                            <h3 className="example-title">Ejercicio</h3>
                            <div className="example-content">
                                <p><strong>Función:</strong> f(x)=√x <span className="dropdown-arrow">▼</span></p>
                                <p>¿Es continua en el intervalo [0, 4]?</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'simulacion' && (
                        <div className="simulation-panel">
                            <h3 className="simulation-title">Simulación</h3>
                            <div className="simulation-content">
                                <div className="function-selector">
                                    <p><strong>Función:</strong> f(x)=√x <span className="dropdown-arrow">▼</span></p>
                                </div>
                                <div className="limit-approach">
                                    <p><strong>Intervalo:</strong> [0, 4]</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Panel derecho - Contenido REAL de Intervalo Cerrado */}
            <div className="interactive-panel">
                {activeTab === 'ejemplo' ? (
                    <>
                        <div className="values-table-container">
                            <table className="values-table">
                                <thead>
                                    <tr>
                                        <th>x</th>
                                        <th>0</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>f(x)</em></td>
                                        <td>0.0</td>
                                        <td>1.0</td>
                                        <td>1.41</td>
                                        <td>1.73</td>
                                        <td>2.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-explanation">
                            <p>
                                Observa que la función f(x) = √x está definida y es continua para todos los valores
                                en el intervalo [0, 4], incluyendo los extremos x = 0 y x = 4.
                            </p>
                            <p>
                                Por lo tanto, la función es continua en el intervalo cerrado [0, 4],
                                ya que no presenta interrupciones en ningún punto del intervalo.
                            </p>
                        </div>

                        <div className="graph-container">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 400 300" className="limit-graph">
                                    <defs>
                                        <pattern id="grid-cerrado" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="400" height="300" fill="url(#grid-cerrado)" />

                                    {/* Ejes */}
                                    <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />
                                    <line x1="50" y1="50" x2="50" y2="250" stroke="#666" strokeWidth="2" />

                                    {/* Función raíz cuadrada */}
                                    <path d="M 50 250 Q 100 220 150 200 Q 200 180 250 160 Q 300 140 350 120"
                                        stroke="#1976d2" strokeWidth="3" fill="transparent" />

                                    {/* Puntos extremos marcados */}
                                    <circle cx="50" cy="250" r="4" fill="#1976d2" />
                                    <circle cx="350" cy="120" r="4" fill="#1976d2" />

                                    {/* Etiquetas */}
                                    <text x="45" y="270" fontSize="12" fill="#666">0</text>
                                    <text x="345" y="270" fontSize="12" fill="#666">4</text>
                                    <text x="100" y="270" fontSize="10" fill="#666">1</text>
                                    <text x="200" y="270" fontSize="10" fill="#666">2</text>
                                    <text x="300" y="270" fontSize="10" fill="#666">3</text>

                                    <text x="25" y="255" fontSize="12" fill="#666">0</text>
                                    <text x="25" y="220" fontSize="10" fill="#666">1</text>
                                    <text x="25" y="180" fontSize="10" fill="#666">1.4</text>
                                    <text x="25" y="125" fontSize="10" fill="#666">2</text>
                                </svg>
                            </div>
                        </div>

                        <div className="final-explanation">
                            <p>
                                Esta gráfica muestra que f(x) = √x es continua en [0, 4] porque
                                está definida en todos los puntos del intervalo, incluyendo los extremos.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="simulation-explanation">
                            <p>
                                Los valores de la función se comportan de manera continua en todo el intervalo [0, 4],
                                incluyendo los extremos. No hay saltos ni discontinuidades.
                            </p>
                        </div>

                        <div className="graph-container simulation-graph">
                            <div className="graph-placeholder">
                                <svg viewBox="0 0 500 350" className="simulation-svg">
                                    <rect width="500" height="350" fill="rgba(255,255,255,0.95)" rx="10" />

                                    {/* Ejes */}
                                    <line x1="50" y1="300" x2="450" y2="300" stroke="#333" strokeWidth="2" />
                                    <line x1="250" y1="50" x2="250" y2="300" stroke="#333" strokeWidth="2" />

                                    {/* Función raíz cuadrada roja */}
                                    <path d="M 80 280 Q 150 220 220 180 Q 280 140 350 120 Q 400 100 420 90"
                                        stroke="#e53e3e"
                                        strokeWidth="4"
                                        fill="transparent" />

                                    {/* Puntos interactivos */}
                                    <g className="interactive-points">
                                        <circle cx="180" cy="200" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="155" y="175" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="180" y="188" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">5.8</text>

                                        <circle cx="320" cy="140" r="6" fill="#4CAF50" stroke="white" strokeWidth="2" />
                                        <rect x="295" y="115" width="50" height="20" fill="rgba(76, 175, 80, 0.9)" rx="10" />
                                        <text x="320" y="128" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">6.2</text>
                                    </g>

                                    {/* Flecha L */}
                                    <g className="limit-indicator">
                                        <path d="M 400 150 L 420 130 L 420 140 L 450 140 L 450 160 L 420 160 L 420 170 Z"
                                            fill="#666" />
                                        <text x="435" y="175" textAnchor="middle" fontSize="14" fill="#1976d2" fontWeight="bold">L</text>
                                    </g>

                                    {/* Etiquetas */}
                                    <text x="180" y="320" textAnchor="middle" fontSize="12" fill="#666">1</text>
                                    <text x="250" y="320" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">2</text>
                                    <text x="320" y="320" textAnchor="middle" fontSize="12" fill="#666">3</text>

                                    <text x="100" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Izquierda</text>
                                    <text x="400" y="340" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Derecha</text>
                                </svg>
                            </div>
                        </div>

                        <div className="simulation-axis">
                            <div className="axis-container">
                                <div className="axis-line">
                                    <div className="axis-point left" data-value="1">1</div>
                                    <div className="axis-center" data-value="2">2</div>
                                    <div className="axis-point right" data-value="3">3</div>
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

    // Renderizar contenido según subtema activo
    const renderContent = () => {
        console.log('Active subtopic:', activeSubtopic); // Temporal para debug

        if (activeSubtopic === 'puntual') {
            return renderPuntual();
        } else if (activeSubtopic === 'punto') {
            return renderEnPunto();
        } else if (activeSubtopic === 'abierto') {
            return renderIntervaloAbierto();
        } else if (activeSubtopic === 'cerrado') {
            return renderIntervaloCerrado();
        }
        return renderPuntual();
    };


    return (
        <div className="continuity-container">
            {/* Header */}
            <header className="continuity-header">
                <div className="header-content">
                    <Link to="/dashboard" className="app-title-link">
                        <h1 className="app-title">MathConnect</h1>
                    </Link>

                    <nav className="main-navigation">
                        <Link to="/dashboard" className="nav-item">Inicio</Link>
                        <Link to="/limits" className="nav-item">Límites</Link>
                        <Link to="/continuity" className="nav-item active">Continuidad</Link>
                        <Link to="/help" className="nav-item">Ayuda</Link>
                    </nav>

                    <div className="user-menu">
                        <div className="user-avatar" onClick={handleLogout}>
                            {getInitials(user.nombre)}
                        </div>
                    </div>
                </div>
            </header>

            {/* Subnavegación de continuidad */}
            <div className="continuity-subnav">
                <div className="subnav-content">
                    <button
                        className={`subnav-item ${activeSubtopic === 'puntual' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('puntual')}
                    >
                        Continuidad puntual
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'punto' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('punto')}
                    >
                        En punto
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'abierto' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('abierto')}
                    >
                        Intervalo abierto
                    </button>
                    <span className="separator">|</span>
                    <button
                        className={`subnav-item ${activeSubtopic === 'cerrado' ? 'active' : ''}`}
                        onClick={() => setActiveSubtopic('cerrado')}
                    >
                        Intervalo cerrado
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <main className="continuity-main">
                <div className="continuity-content">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default Continuity;
