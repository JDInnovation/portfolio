import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import "./ebook.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LeftImage from "../../assets/images/ebook.webp"; // Importe a imagem aqui
import Icon1 from "../../assets/images/ebook.webp"; // Exemplo de ícone 1
import Icon2 from "../../assets/images/ebook.webp"; // Exemplo de ícone 2
import Icon3 from "../../assets/images/ebook.webp"; // Exemplo de ícone 3
import ReviewImage from "../../assets/images/review.png"; // Importe a imagem da review aqui

function Ebook(props) {
    const theme = props.theme;

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            window.hbspt.forms.create({
                region: "eu1",
                portalId: "145502623",
                formId: "9c59b6b6-cbbd-4dde-a727-45c9aca65d09",
                target: "#hubspot-form"
            });
        };
    }, []);

    return (
        <div className="ebook-main_ebook">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="hero-section_ebook">
                <div className="hero-content_ebook">
                    <div className="hero-image_ebook">
                        <img src={LeftImage} alt="Imagem à Esquerda" />
                    </div>
                    <div className="hero-text_ebook">
                        <h1>8 Estratégias para Sites que <span className="highlighted-word_ebook">Vendem</span></h1>
                        <p className="description_ebook">
                            <strong>Transforme o seu site numa máquina de vendas!</strong> Descubra 8 estratégias comprovadas para converter visitantes em clientes. Faça download do nosso e-book <span className="highlighted-phrase_ebook">GRÁTIS</span> e veja como aumentar as suas vendas, mesmo sem ser especialista.
                        </p>
                        <button className="cta-button_ebook">Quero o Meu Ebook Grátis</button>
                    </div>
                </div>
            </div>

            {/* Segunda Secção */}
            <section className="second-section_ebook">
                <h2>Porque escolher o nosso e-book?</h2>
                <div className="three-columns_ebook">
                    <div className="column_ebook">
                        <img src={Icon1} alt="Ícone 1" />
                        <h3>Estratégias Comprovadas</h3>
                        <p>Metodologias testadas para aumentar suas conversões e gerar mais vendas.</p>
                    </div>
                    <div className="column_ebook">
                        <img src={Icon2} alt="Ícone 2" />
                        <h3>Fácil de Implementar</h3>
                        <p>Dicas práticas que podem ser aplicadas por qualquer pessoa, sem complicações.</p>
                    </div>
                    <div className="column_ebook">
                        <img src={Icon3} alt="Ícone 3" />
                        <h3>Grátis e Acessível</h3>
                        <p>Conteúdo de alta qualidade disponível para download gratuito.</p>
                    </div>
                </div>
            </section>

            <section className="review-section_ebook">
                <div className="review-content_ebook">
                    <div className="review-image_ebook">
                        <img src={ReviewImage} alt="Imagem de Testemunho" />
                    </div>
                    <div className="review-text_ebook">
                        <p>“Com este e-book, aprendi a aplicar estratégias simples e práticas que duplicaram as vendas do meu site em apenas um mês!”</p>
                        <span>João Silva, Empreendedor e Especialista em Marketing Digital</span>
                    </div>
                </div>
            </section>
            <section className="form-section" id="form-section">
            
                    <div id="hubspot-form"></div>
        
            </section>


            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ebook;
