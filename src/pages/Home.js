import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <div className="home-background">
      <div className="centered-content">
        <h1 className="home-title">
          ¡Bienvenido asf<br/>a<br/>MathConnect!
        </h1>
        <div className="home-info">
          <p><strong>MathConnect</strong> es una plataforma web educativa diseñada para facilitar el aprendizaje interactivo de los conceptos de límites y continuidad en funciones reales. El aplicativo integra recursos teóricos claros, simulaciones visuales y ejemplos prácticos, permitiendo a estudiantes y docentes explorar de manera intuitiva y dinámica los principales temas del cálculo. MathConnect promueve la comprensión empírica y la experimentación matemática en un entorno accesible, moderno y adaptado a las necesidades de la formación.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
