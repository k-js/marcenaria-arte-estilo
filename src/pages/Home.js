import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import "../styles/styles.css";

function Home() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Marcenaria Arte & Estilo</h1>
          <p>
            Aqui, somos apaixonados por madeira e comprometidos com a arte de criar móveis e peças 
            personalizadas que se encaixam perfeitamente na sua vida. Trabalhamos com dedicação, 
            unindo técnicas tradicionais e inovações modernas, para oferecer produtos únicos, 
            duráveis e cheios de personalidade.
          </p>
          <button className="btn" onClick={() => navigate("/servicos")}>
            Saiba mais
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/home.jpeg" alt="Marcenaria em ação" />
        </div>
      </section>
      
      <section className="benefits">
        <h2>Por que escolher a Arte&Estilo?</h2>
        <p className="benefits-subtitle">
          Acreditamos que um móvel bem-feito faz toda a diferença no seu espaço e no seu dia a dia. 
          Ao optar pelos nossos serviços, você conta com qualidade, personalização e durabilidade. 
          Conheça três grandes benefícios que oferecemos para tornar sua experiência única:
        </p>
        <div className="benefit-cards">
          <div className="card">
            <span className="card-number">1</span>
            <h3>Qualidade Impecável</h3>
            <p>
              Cada peça é feita com materiais de alta qualidade, cuidadosamente selecionados para 
              garantir resistência, beleza e longa vida útil. Nosso processo artesanal e atenção 
              aos detalhes fazem toda a diferença.
            </p>
          </div>
          <div className="card">
            <span className="card-number">2</span>
            <h3>Projetos Sob Medida</h3>
            <p>
              Criamos móveis personalizados, adaptando-se perfeitamente ao seu espaço e estilo. 
              Você nos conta sua ideia, e juntos desenvolvemos o móvel que melhor se encaixa.
            </p>
          </div>
          <div className="card">
            <span className="card-number">3</span>
            <h3>Sustentabilidade</h3>
            <p>
              Trabalhamos com madeira de fontes responsáveis e minimizamos o desperdício, garantindo 
              móveis belos, funcionais e ecológicos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
