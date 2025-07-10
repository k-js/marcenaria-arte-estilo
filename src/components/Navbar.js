import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img
            src="/images/logo.jpeg"
            alt="Logo da Marcenaria Arte&Estilo"
            className="logo"
          />
          <h1>
            <span className="titulo-parte1">Marcenaria</span>
            <span className="titulo-parte2">Arte & Estilo</span>
          </h1>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link className="nav-link-btn" to="/">Início</Link>
        </li>
        <li>
          <Link className="nav-link-btn" to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link className="nav-link-btn" to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
