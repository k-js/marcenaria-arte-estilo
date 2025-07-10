import React, { useState, useEffect } from "react";
import "../styles/produtos.css";

function Produtos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [imagens, setImagens] = useState([]);

  // Carrega imagens dinamicamente do diretório public/images
  useEffect(() => {
    const nomes = ["q.jpeg", "d.jpeg", "w.jpeg", "a.jpeg", "f.jpeg", "c.jpeg", "a.jpeg", "f.jpeg",];
    const lista = nomes.map((nome, index) => ({
      src: `/images/${nome}`,
      alt: `Produto ${index + 1}`,
    }));
    setImagens(lista);
  }, []);

  const abrirModal = (index) => {
    setIndiceAtual(index);
    setModalAberto(true);
  };

  const fecharModal = () => setModalAberto(false);

  const anterior = (e) => {
    e.stopPropagation();
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = (e) => {
    e.stopPropagation();
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="produtos-container">
      <h1 className="produtos-title">Nossos Produtos</h1>
      <p className="produtos-description">
        Conheça nossa linha de móveis planejados e sob medida, feitos com
        qualidade e atenção aos detalhes.
      </p>

      <div className="galeria-grid">
        {imagens.map((img, index) => (
          <div key={index} className="galeria-item" onClick={() => abrirModal(index)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <span className="fechar" onClick={fecharModal}>&times;</span>

          <button className="nav anterior" onClick={anterior}>
            &#10094;
          </button>

          <img
            className="modal-imagem"
            src={imagens[indiceAtual].src}
            alt={imagens[indiceAtual].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button className="nav proximo" onClick={proximo}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default Produtos;

