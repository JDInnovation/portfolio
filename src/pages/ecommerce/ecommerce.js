import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ecommerce.css";
import heroImage from "../../assets/images/852aaa.png";
import section2Image from "../../assets/images/section1.png";
import sectionNewImage from "../../assets/images/new-section.png";
import section3Image from "../../assets/images/section3.png";
import section4Image from "../../assets/images/section4.png";
import section5Image from "../../assets/images/section5.png";
import paymentsImage from "../../assets/images/payments.png"; // Imagem da secção de pagamentos
import supportImage from "../../assets/images/support.png"; // Imagem da secção de suporte
import arrowImage from "../../assets/images/arrow.png";

function Ecommerce(props) {
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

    const scrollToForm = () => {
        document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="ecommerce-main">
            <Header theme={theme} setTheme={props.setTheme} />

            {/* Primeira Secção */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Transforme a sua ideia em uma loja online de sucesso</h1>
                        <button className="cta-button" onClick={() => scrollToForm()}>Peça orçamento grátis</button>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Loja online" />
                    </div>
                </div>
            </section>

            {/* Segunda Secção */}

            <section className="section-two">
                <Fade bottom duration={2000}>
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
                </Fade>
            </section>


            {/* Nova Secção: Solução Personalizada */}
            <section className="section-new">
                <Fade bottom duration={2000}>
                    <div className="section-new-content">
                        <div className="section-new-left">
                            <h3>Solução Personalizada ao Seu Negócio</h3>
                            <h4>Porque cada negócio é único e merece uma solução à medida.</h4>
                            <p>
                                Ao contrário de plataformas genéricas, criamos lojas online personalizadas, feitas à medida das necessidades do seu negócio. Isto significa que desde o layout ao funcionamento, a sua loja refletirá a identidade da sua marca e oferecerá uma experiência de compra única para os seus clientes.
                            </p>
                            <p>
                                Com um design exclusivo e funcionalidades adaptadas ao seu público, garantimos que a sua loja se destaca da concorrência e maximiza o envolvimento dos utilizadores. Essa personalização não só fortalece a sua marca, como também aumenta a lealdade dos clientes e as vendas.
                            </p>
                        </div>
                        <div className="section-new-image">
                            <img src={sectionNewImage} alt="Solução Personalizada" />
                        </div>
                    </div>
                </Fade>
            </section>


            {/* Terceira Secção */}
            <section className="section-three">
                <Fade bottom duration={2000}>
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
                </Fade>
            </section>



            {/* Quarta Secção */}
            <section className="section-four">
                <Fade bottom duration={2000}>
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
                </Fade>
            </section>



            {/* Secção de Otimização para SEO */}
            <section className="section-seo">
                <Fade bottom duration={2000}>
                    <div className="section-seo-content">

                        <div className="section-seo-image">
                            <img src={section5Image} alt="Otimização para SEO" />
                        </div>
                        <div className="section-seo-left">
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
                </Fade>
            </section>




            {/* Secção de Pagamentos Seguros */}
            <section className="section-payments">
                <Fade bottom duration={2000}>
                    <div className="section-payments-content">
                        <div className="section-payments-left">
                            <h3>Integração com Pagamentos Seguros</h3>
                            <h4>Ofereça a tranquilidade de pagamentos seguros e variados.</h4>
                            <p>
                                Proporcionamos integração com as principais plataformas de pagamento, como cartões de crédito, PayPal, MB Way, e outras formas populares, garantindo que os seus clientes têm opções de pagamento rápidas e seguras.
                            </p>
                            <p>
                                A segurança nas transações online é fundamental para gerar confiança no seu cliente e reduzir desistências no momento de pagamento. Utilizamos as melhores práticas e as mais recentes tecnologias de encriptação para garantir a proteção dos dados financeiros.
                            </p>
                        </div>
                        <div className="section-payments-image">
                            <img src={paymentsImage} alt="Integração com Pagamentos Seguros" />
                        </div>
                    </div>
                </Fade>
            </section>


            {/* Secção de Suporte Técnico */}
            <section className="section-support">

                <Fade bottom duration={2000}>
                    <div className="section-support-content">
                        <div className="section-support-image">
                            <img src={supportImage} alt="Suporte Técnico Rápido e Eficaz" />
                        </div>
                        <div className="section-support-right">
                            <h3>Suporte Técnico Rápido e Eficaz</h3>
                            <h4>Estamos consigo em todos os momentos.</h4>
                            <p>
                                Oferecemos suporte técnico dedicado para garantir que a sua loja está sempre em pleno funcionamento. Desde o momento da criação até ao acompanhamento contínuo, estamos disponíveis para resolver qualquer questão ou problema que possa surgir.
                            </p>
                            <p>
                                O nosso objetivo é que tenha tranquilidade ao saber que a sua loja está em boas mãos, com especialistas sempre prontos para ajudar. A disponibilidade do suporte 24/7 significa que pode contar connosco em qualquer altura.
                            </p>
                        </div>
                    </div>
                </Fade>
            </section>



            {/* Secção Nova: Criação de Loja */}
            <section className="section-create-store">
                <Fade bottom duration={2000}>
                    <div className="section-create-store-content">
                        <div className="section-create-store-left">
                            <h3>Crie a Sua Loja Agora e Dê o Próximo Passo no Crescimento do Seu Negócio!</h3>
                            <p>
                                Reforce a importância de agir rapidamente para começar a colher os benefícios de uma loja online otimizada e profissional. Transforme visitantes em clientes e comece a vender mais!
                            </p>
                            <button className="cta-button" onClick={() => scrollToForm()}>Peça orçamento grátis</button>
                        </div>
                        <div className="section-create-store-image">
                            <img src={arrowImage} alt="Seta crescente" />
                        </div>
                    </div>
                </Fade>
            </section>



            {/* Última Secção com o Formulário */}
            <section className="form-section" id="form-section">
                <Fade bottom duration={2000}>
                    <div id="hubspot-form"></div>
                </Fade>
            </section>



            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Ecommerce;
