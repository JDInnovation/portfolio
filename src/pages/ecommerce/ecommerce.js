import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ecommerce.css";
import heroImage from "../../assets/images/852aaa.png"; // Import da imagem da secção 1
import section2Image from "../../assets/images/852aaa.png"; // Import da imagem da secção 2
import section3Image from "../../assets/images/section3.png"; // Import da imagem da secção 3
import section4Image from "../../assets/images/section4.png"; // Import da imagem da secção 4
import section5Image from "../../assets/images/section5.png"; // Import da imagem da secção 5

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

            {/* Quarta Secção */}
            <section className="section-four">
                <div className="section-four-content">
                    <div className="section-four-left">
                        <h3>Gestão Simplificada de Produtos</h3>
                        <h4>Porque o seu público está em toda a parte.</h4>
                        <p>
                            O nosso sistema facilita a adição, edição e remoção de produtos na sua loja. Com uma interface intuitiva e rápida, qualquer pessoa poderá gerir o seu catálogo de produtos sem complicações técnicas.
                        </p>
                        <p>
                            Não há necessidade de depender de um programador para fazer pequenas alterações. Isso poupa tempo e dinheiro, permitindo-lhe focar-se no crescimento do seu negócio.
                        </p>
                        <p>
                            Além disso, o sistema é flexível para lojas de qualquer dimensão, desde pequenos comércios a grandes inventários.
                        </p>
                    </div>
                    <div className="section-four-image">
                        <img src={section4Image} alt="Gestão Simplificada de Produtos" />
                    </div>
                </div>
            </section>

            {/* Quinta Secção */}
            <section className="section-five">
                <div className="section-five-content">
                    <div className="section-five-image">
                        <img src={section5Image} alt="Otimização para SEO" />
                    </div>
                    <div className="section-five-right">
                        <h3>Otimização para SEO</h3>
                        <h4>Coloque a sua loja na linha da frente do Google.</h4>
                        <p>
                            O seu sucesso online depende de ser encontrado pelos clientes. Criamos lojas online totalmente otimizadas para motores de busca (SEO), ajudando o seu site a ser mais facilmente encontrado por potenciais clientes.
                        </p>
                        <p>
                            Isso inclui otimizações nas páginas de produtos, URLs amigáveis, meta descrições e integração com ferramentas de análise para que possa monitorizar o seu progresso.
                        </p>
                        <p>
                            Ao melhorar a sua visibilidade no Google e outros motores de busca, está a aumentar o tráfego qualificado para o seu site e, consequentemente, as vendas.
                        </p>
                    </div>
                </div>
            </section>

            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ecommerce;
