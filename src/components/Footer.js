import React from "react";
import "../styles/styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Marcenaria Arte&Estilo - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
