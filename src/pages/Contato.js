import React from "react";
import "../styles/contato.css"; // Arquivo de estilos específico para esta página
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram} from "react-icons/fa";

function Contato() {
  return (
    <div className="contato-container">
      <h1 className="contato-title">Entre em Contato</h1>

      <div className="contato-info">
        <div className="contato-item">
          <FaPhone className="contato-icon" />
          <span>+55 (11) 95925-4021</span>
        </div>

        <div className="contato-item">
          <FaEnvelope className="contato-icon" />
          <span>arteestilo40@gmail.com</span>
        </div>

        <div className="contato-item">
          <FaMapMarkerAlt className="contato-icon" />
          <span>Av. Marechal João Batista Mascarenhas de Moraes, 1480 - Osasco, São Paulo</span>
        </div>
      </div>

      <div className="contato-social">
        <a href="https://www.instagram.com/arteestilo3/?igsh=MXhtdXJ4M3VxMnZrMg%3D%3D#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon instagram" />
        </a>
      </div>
      <p className="contato-text">
        Siga-nos nas redes sociais para mais atualizações!
      </p>
    </div>
  );
}

export default Contato;
