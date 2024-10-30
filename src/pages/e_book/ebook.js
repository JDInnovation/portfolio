import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import "./ebook.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LeftImage from "../../assets/images/ebookcapa.png";
import Arrow from "../../assets/images/download.png";
import Logo from "../../assets/images/feature.png";
import Office from "../../assets/images/office.jpg";
import Icon1 from "../../assets/images/alvo.png";
import Icon2 from "../../assets/images/easy.png";
import Icon3 from "../../assets/images/free.png";
import Carousel from "./carousel";

/* global fbq */

function Ebook(props) {
    const theme = props.theme;

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Formulário para a primeira seção
            window.hbspt.forms.create({
                portalId: "145502623",
                formId: "6a2871bc-17cf-4b79-87fa-330949c5d419",
                target: "#hubspot-form-hero",
            });
            // Formulário original no final da página
            window.hbspt.forms.create({
                portalId: "145502623",
                formId: "8871a299-f90d-46d0-a8bc-8ce29d4fc7f8",
                target: "#hubspot-form",
            });

            // Captura o envio do formulário manualmente
            const formElement = document.querySelector('#hubspot-form form');
            if (formElement) {
                formElement.addEventListener('submit', function () {
                    console.log('Formulário enviado - Evento Lead disparado');
                    fbq('track', 'Lead');  // Dispara o evento Lead no Facebook Pixel
                });
            }
        };
    }, []);




    return (
        <div className="ebook-main_ebook">
            <div className="hero-section_ebook">
                <div className="hero-content_ebook">
                    <div className="hero-image_ebook">
                        <img src={LeftImage} alt="Imagem à Esquerda" />
                    </div>
                    <div className="hero-text_ebook">
                        <h3>― E-BOOK GRÁTIS</h3>
                        <h1>8 Estratégias para Sites que <span className="highlighted-word_ebook">Vendem</span></h1>
                        <p className="description_ebook">
                            <strong>Transforme o seu site numa máquina de vendas!</strong> Descubra 8 estratégias comprovadas para converter visitantes em clientes. Faça download do nosso e-book <span className="highlighted-phrase_ebook">GRÁTIS</span> e veja como aumentar as suas vendas, mesmo sem ser especialista.
                        </p>
                        <div  id="hubspot-form-hero"></div>

                    </div>
                </div>
            </div>

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
                <h2>Seja mais um caso de sucesso:</h2>
                <Carousel />
            </section>
            <section className="about-section_ebook">
                <div className="about-content_ebook">
                    <div className="about-image_ebook">
                        <img src={Office} alt="Imagem da Clickspot" />
                    </div>
                    <div className="about-text_ebook">
                        <h2>Quem é a Clickspot?</h2>
                        <p>
                            Somos uma empresa de serviços digitais especializada na criação de lojas online e websites empresariais. <br></br> <br></br>

                            Desde 2019, temos desenvolvido soluções personalizadas que ajudam os nossos clientes a aumentar a visibilidade e a faturação, sempre com foco em resultados e excelência.<br></br> <br></br>

                            Além dos nossos serviços principais, oferecemos uma gama de serviços complementares que asseguram o sucesso digital, como marketing digital, SEO, e integração de ferramentas de automação. Isso permite-nos criar estratégias completas e adaptadas às necessidades de cada cliente.<br></br> <br></br>
                        </p>
                    </div>
                </div>
            </section>
            <section className="form-section" id="form-section">
                <h2>Converta visitantes em clientes<br></br>Faça o download do nosso E-Book grátis!</h2>
                <p className="form-subtitle">Preencha o formulário e receba de imediato o E-Book gratuito no seu e-mail.</p>
                <img src={Arrow} alt="Imagem do E-book" className="form-image" />
                <div id="hubspot-form"></div>

            </section>


            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ebook;
