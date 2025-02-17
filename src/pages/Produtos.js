import React from "react";
import "../styles/produtos.css"; // Certifique-se de que o nome está correto

function Produtos() {
  return (
    <div className="produtos-container">
      <h1 className="produtos-title">Nossos Produtos</h1>
      <p className="produtos-description">
        Conheça nossa linha de móveis planejados e sob medida, feitos com
        qualidade e atenção aos detalhes. Transforme seu espaço com elegância
        e funcionalidade.
      </p>

      <div className="produtos-grid">
        <div className="produto-card">
          <img src="/images/q.jpeg" alt="Produto 1" />
        </div>
        <div className="produto-card">
          <img src="/images/d.jpeg" alt="Produto 2" />
        </div>
        <div className="produto-card">
          <img src="/images/w.jpeg" alt="Produto 3" />
        </div>
      </div>
    </div>
  );
}

export default Produtos;