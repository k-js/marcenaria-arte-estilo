import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
    <img src="/images/logo.jpeg" alt="Logo da Marcenaria Arte&Estilo" className="logo" />
    <h1>
        <span>Marcenaria</span> <span>Arte&Estilo</span>
    </h1>
    </div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">|</Link></li>
        <li><Link to="/produtos">PRODUTOS</Link></li>
        <li><Link to="/">|</Link></li>
        <li><Link to="/contato">FALE CONOSCO</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
