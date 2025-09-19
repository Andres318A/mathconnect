// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Limits from "./pages/Limits";
import Continuity from "./pages/Continuity";
import Help from "./pages/Help";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/limites" element={<Limits />} />
        <Route path="/continuidad" element={<Continuity />} />
        <Route path="/ayuda" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
