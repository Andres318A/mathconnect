import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="nav-title">MathConnect</span>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Inicio</Link>
        <Link to="/limites" className="nav-btn">Limites</Link>
        <Link to="/continuidad" className="nav-btn">Continuidad</Link>
        <Link to="/ayuda" className="nav-btn">Ayuda</Link>
      </div>
    </nav>
  );
}

export default Navbar;
