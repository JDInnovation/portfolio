import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ecommerce.css";
import heroImage from "../../assets/images/852aaa.png"; // Import da imagem da secção 1
import section2Image from "../../assets/images/852aaa.png"; // Import da imagem da secção 2

function Ecommerce(props) {
    const theme = props.theme;
    return (
        <div className="ecommerce-main">
            <Header theme={theme} setTheme={props.setTheme} />

            {/* Primeira Secção */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Transforme a sua ideia em uma loja online de sucesso</h1>
                        <button className="cta-button">Peça orçamento grátis</button>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Loja online" />
                    </div>
                </div>
            </section>

            {/* Segunda Secção */}
            <section className="section-two">
                <div className="section-content">
                    <div className="section-image">
                        <img src={section2Image} alt="Imagem de produtos" />
                    </div>
                    <div className="section-text">
                        <h2>Porquê Precisa de Uma Loja Online?</h2>
                        <ul>
                            <li>Ausência de presença digital</li>
                            <li>Perda de oportunidades de venda</li>
                            <li>Dificuldade em gerir vendas</li>
                            <li>Websites lentos e difíceis de navegar</li>
                        </ul>
                        <p>Com a nossa solução de criação de lojas online, eliminamos todos esses obstáculos, garantindo uma experiência de compra perfeita para os seus clientes.</p>
                    </div>
                </div>
            </section>

            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ecommerce;
