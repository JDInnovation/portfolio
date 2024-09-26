import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ecommerce.css";
import heroImage from "../../assets/images/852aaa.png"; // Import da imagem da secção 1
import section2Image from "../../assets/images/852aaa.png"; // Import da imagem da secção 2
import section3Image from "../../assets/images/section3.png"; // Import da imagem da secção 3

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

            {/* Terceira Secção */}
            <section className="section-three">
                <div className="section-three-content">
                    <div className="section-three-image">
                        <img src={section3Image} alt="Design Responsivo" />
                    </div>
                    <div className="section-three-right">
                        <h3>Design Responsivo</h3>
                        <h4>Porque o seu público está em toda a parte.</h4>
                        <p>
                            A sua loja online será otimizada para funcionar perfeitamente em qualquer dispositivo, seja desktop, tablet ou telemóvel. Isso significa que os seus clientes poderão navegar e comprar com facilidade, independentemente de onde estiverem.
                        </p>
                        <p>
                            Um design responsivo garante que o layout se adapta a diferentes tamanhos de ecrã, oferecendo uma experiência de compra contínua, o que aumenta a taxa de conversão e reduz o abandono de carrinho. As lojas que proporcionam uma boa experiência em dispositivos móveis vendem mais.
                        </p>
                    </div>
                </div>
            </section>

            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ecommerce;
