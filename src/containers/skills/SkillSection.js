import React, { useEffect } from 'react';
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { skills } from "../../portfolio";
import FadeInSection from "./FadeInSection";
import "./Skills.css";

// Importing images
import ecom from "../../assets/images/ecom.png";
import webs from "../../assets/images/webs.png";
import marketing from "../../assets/images/marketing.png";
import branding from "../../assets/images/branding.png";
import shopify from "../../assets/images/shopify.png";
import woo from "../../assets/images/iwoocommerce.png";
import wix from "../../assets/images/icons8-wix-256.png";
import react1 from "../../assets/images/react1.png";
import html from "../../assets/images/html-5.png";
import css3 from "../../assets/images/css-3 (1).png";
import azure from "../../assets/images/azure.png";
import github from "../../assets/images/github.png";
import vercel from "../../assets/images/vercel.png";
import javascript from "../../assets/images/java-script.png";
import googleads from "../../assets/images/googleads.png";
import facebook from "../../assets/images/facebook (3).png";
import seo from "../../assets/images/seo.png";
import illustrator from "../../assets/images/illustrator.png";
import photoshop from "../../assets/images/photoshop.png";
import clientsi from "../../assets/images/users-avatar.png";
import projecti from "../../assets/images/project.png";
import yeari from "../../assets/images/calendar (1).png";
import patni from "../../assets/images/heart-partner-handshake.png";
import davide from "../../assets/images/d12.png";
import joaoe from "../../assets/images/j12.png";

function AnimatedNumber({ number }) {
  const { number: animatedNumber } = useSpring({
    from: { number: 0 }, // Começa a partir de 0
    number,
    delay: 4000, // Pode ajustar conforme necessário
    config: { duration: 4000 }, // Reduzido para 2 segundos para um efeito mais rápido
  });

  return <animated.div>{animatedNumber.to((n) => n.toFixed(0))}</animated.div>;
}

function SkillSection(props) {
  const theme = props.theme;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Ajustado para 0.3

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.row');
      elements.forEach(el => {
        el.classList.add('line-animate'); // Adiciona a classe para ativar a animação
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div>
        {skills.data.map((skill, index) => {
          if (index % 2 === 0) {
            return (
              <div key={"skills-" + index} className="skills-main-div">
                <div className="skills-text-div">
                  <div className="sec13-background"></div>
                  <div className="sec13-background2"></div>

                  <div className="secq">
                    <FadeInSection delay={200} duration={750} direction="right">
                    <h1 className="SD12" id="solucoes-digitais">SOLUÇÕES DIGITAIS</h1>
                      <p className="missao20">
                        As nossas soluções digitais abrangem desde a criação de
                        lojas online e websites profissionais até estratégias de
                        marketing e branding profissional. Explore os nossos
                        serviços de E-commerce, Desenvolvimento de Sites,
                        Marketing Digital e Branding. Estamos prontos
                        para elevar sua presença digital ao próximo nível com
                        soluções personalizadas para a necessidade de cada
                        projeto.
                      </p>
                    </FadeInSection>

                    <div className="accordion">
                      <article>
                        <input
                          id="article1"
                          type="radio"
                          name="articles"
                          defaultChecked
                        />
                        <label htmlFor="article1">
                          <h2 className="sites1">
                            <img
                              src={ecom}
                              alt="Descrição da Imagem"
                              className="icon"
                              title="E-Commerce"
                            />
                            • E-COMMERCE
                            <p className="setinha">▼</p>
                          </h2>
                        </label>
                        <div>
                          Os nossos serviços de e-commerce oferecem soluções completas
                          para sua loja online. Desenvolvemos plataformas
                          personalizadas, otimizadas para conversão, com design
                          responsivo e integrações seguras. Aumente suas vendas
                          com uma experiência de compra fluida, gestão eficiente
                          de produtos e suporte contínuo. Transforme visitantes em
                          clientes fiéis.
                          <h2 className="simbolo">
                            <img
                              src={wix}
                              alt="Wix Icon"
                              className="icon"
                              title="Wix"
                            />
                            <img
                              src={woo}
                              alt="WooCommerce Icon"
                              className="icon"
                              title="WooCommerce"
                            />
                            <img
                              src={shopify}
                              alt="Shopify Icon"
                              className="icon"
                              title="Shopify"
                            />
                          </h2>
                        </div>
                      </article>

                      <article>
                        <input id="article2" type="radio" name="articles" />
                        <label htmlFor="article2">
                          <h2 className="sites1">
                            <img
                              src={webs}
                              alt="Descrição da Imagem"
                              className="icon"
                              title="Sites"
                            />
                            • WEBSITES
                            <p className="setinha">▼</p>
                          </h2>
                        </label>
                        <div>
                          Oferecemos criação de sites modernos e responsivos,
                          adaptados às necessidades do seu negócio. Desenvolvemos
                          sites intuitivos, com design atraente e navegação
                          eficiente. A nossa equipa garante performance otimizada,
                          SEO avançado e suporte contínuo. Estabeleça a sua presença
                          online de forma profissional e atraia mais clientes.
                          <h2 className="simbolo">
                            <img
                              src={html}
                              alt="HTML Icon"
                              className="icon"
                              title="HTML"
                            />
                            <img
                              src={css3}
                              alt="CSS Icon"
                              className="icon"
                              title="CSS"
                            />
                            <img
                              src={javascript}
                              alt="JavaScript Icon"
                              className="icon"
                              title="JavaScript"
                            />
                            <img
                              src={react1}
                              alt="React Icon"
                              className="icon"
                              title="React"
                            />
                            <img
                              src={azure}
                              alt="Azure Icon"
                              className="icon"
                              title="Azure"
                            />
                            <img
                              src={github}
                              alt="GitHub Icon"
                              className="icon"
                              title="GitHub"
                            />
                            <img
                              src={vercel}
                              alt="Vercel Icon"
                              className="icon"
                              title="Vercel"
                            />
                          </h2>
                        </div>
                      </article>



                      <article>
                        <input id="article3" type="radio" name="articles" />
                        <label htmlFor="article3">
                          <h2 className="sites1">
                            <img
                              src={marketing}
                              alt="Descrição da Imagem"
                              className="icon"
                              title="Marketing"
                            />
                            • MARKETING
                            <p className="setinha">▼</p>
                          </h2>
                        </label>
                        <div>
                          Maximize sua visibilidade com as nossas estratégias de
                          marketing digital. Especializados em Google Ads e
                          campanhas em redes sociais, impulsionamos o seu alcance e
                          envolvimento dos clientes. Analisamos e otimizamos anúncios para
                          garantir resultados de alta performance, aumentando conversões e
                          ROI. Atraia e retenha clientes com marketing direcionado
                          e eficiente.
                          <h2 className="simbolo">
                            <img
                              src={googleads}
                              alt="Google Ads Icon"
                              className="icon"
                              title="Google Ads"
                            />
                            <img
                              src={facebook}
                              alt="Facebook Icon"
                              className="icon"
                              title="Facebook"
                            />
                            <img
                              src={seo}
                              alt="SEO Icon"
                              className="icon"
                              title="SEO"
                            />
                          </h2>
                        </div>
                      </article>

                      <article>
                        <input id="article4" type="radio" name="articles" />
                        <label htmlFor="article4">
                          <h2 className="sites1">
                            <img
                              src={branding}
                              alt="Descrição da Imagem"
                              className="icon"
                              title="Branding"
                            />
                            • BRANDING
                            <p className="setinha">▼</p>
                          </h2>
                        </label>
                        <div>
                          Destaque-se no mercado com o nosso serviço de branding.
                          Criamos identidades visuais impactantes e coerentes,
                          refletindo a essência do seu negócio. Desenvolvemos
                          logotipos, paletas de cores e materiais de comunicação
                          que fortalecem a sua marca. Construa uma presença sólida e
                          memorável, conquistando a lealdade dos seus clientes.
                          <h2 className="simbolo">
                            <img
                              src={illustrator}
                              alt="Illustrator Icon"
                              className="icon"
                              title="Illustrator"
                            />
                            <img
                              src={photoshop}
                              alt="Photoshop Icon"
                              className="icon"
                              title="Photoshop"
                            />
                          </h2>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="sec14-container">
                    <div className="secq3">
                      <div className="sec14-background"></div>
                      <FadeInSection delay={100} duration={500} direction="left">
                        <h1 className="SD123">QUEM SOMOS</h1>
                      </FadeInSection>
                      <div className="artqd">
                        <div className="tmd">
                          <p className="qsdef">
                            Somos uma empresa de serviços digitais especializada na criação de lojas online e websites empresariais. <br></br><br></br>Desde 2019, João Teixeira e David Claro, ambos com formação em Marketing e Engenharia Informática, têm trabalhado juntos para oferecer soluções personalizadas, focadas em aumentar a visibilidade e a faturação dos nossos clientes.<br></br><br></br> Em projetos maiores, contamos com uma rede de freelancers especializados para garantir agilidade e resultados de alta qualidade.
                          </p>
                        </div>
                        <div className="caixa1">
                          <div className="cartoesapr">
                            <div className="our-team">
                              <div className="picture">
                                <img
                                  src={joaoe}
                                  alt="Descrição da Imagem"
                                  className="img-fluid"
                                  title="Branding"
                                />
                              </div>
                              <div className="team-content">
                                <h3 className="name">João Teixeira</h3>
                                <h4 className="title">Web Developer</h4>
                              </div>
                              <ul className="social">
                                <p>joaoteixeira@click-spot.com</p>
                              </ul>
                            </div>
                          </div>
                          <div className="cartoesapr">
                            <div className="our-team">
                              <div className="picture">
                                <img
                                  src={davide}
                                  alt="Descrição da Imagem"
                                  className="img-fluid"
                                  title="Branding"
                                />
                              </div>
                              <div className="team-content">
                                <h3 className="name">David Claro</h3>
                                <h4 className="title">Web Developer</h4>
                              </div>
                              <ul className="social">
                                <p>davidclaro@click-spot.com</p>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div ref={ref}  className="padding-bottom-5vw">
                    <FadeInSection delay={100} duration={500} direction="right">
                      <h1 className="SD12">A NOSSA MISSÃO</h1>
                    </FadeInSection>
                    <FadeInSection delay={300} duration={600} direction="right">
                      <h4 className="missao20">
                      Valorizamos a confiança e procuramos estabelecer relações duradouras e vantajosas com os nossos clientes. A nossa missão é compreender plenamente a visão de cada cliente, oferecendo soluções personalizadas que vão ao encontro das suas expectativas. Garantimos orçamentos precisos e um processo simples e eficiente, com o objetivo de assegurar a total satisfação dos nossos clientes.
                      </h4>
                    </FadeInSection>
                    <FadeInSection delay={400} duration={700} direction="left">
                      <div className="equipa">
                        <main className="main3">
                          <div className="row">
                            <div className="column">
                              <div className="card3">
                                {inView && <AnimatedNumber number={6} />}
                                <img
                                  src={yeari}
                                  alt="Descrição da Imagem"
                                  className="icon7"
                                  title="WEBSITES"
                                />
                                <h3 className="numberdef">
                                  Anos
                                  <br />
                                  Experiencia
                                </h3>
                              </div>
                            </div>
                            <div className="column">
                              <div className="card3">
                                {inView && <AnimatedNumber number={54} />}
                                <img
                                  src={projecti}
                                  alt="Descrição da Imagem"
                                  className="icon7"
                                  title="Sites"
                                />
                                <h3 className="numberdef">
                                  Projetos
                                  <br />
                                  Realizados
                                </h3>
                              </div>
                            </div>
                            <div className="column">
                              <div className="card3">
                                {inView && <AnimatedNumber number={43} />}
                                <img
                                  src={clientsi}
                                  alt="Descrição da Imagem"
                                  className="icon7"
                                  title="Sites"
                                />
                                <h3 className="numberdef">
                                  Clientes
                                  <br />
                                  Satisfeitos
                                </h3>
                              </div>
                            </div>
                            <div className="column">
                              <div className="card3">
                                {inView && <AnimatedNumber number={4} />}
                                <img
                                  src={patni}
                                  alt="Descrição da Imagem"
                                  className="icon7"
                                  title="Sites"
                                />
                                <h3 className="numberdef">
                                  Parceiros
                                  <br />
                                  Estratégicos
                                </h3>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </FadeInSection>
                  </div>


                  <div className="sec15-container" id="precos">
                    <div className="sec15-background"></div>
                    <section className="pricing-section">
                      <div className="pricing-header">
                        <h1 className="SD123">Serviços e Preços</h1>
                        <p className="qsdef">
                          Escolha a solução que melhor corresponde às necessidades do seu
                          negócio.
                        </p>
                      </div>
                      <div className="pricing-cards">
                        <div className="pricing-card">
                          <h3>Website Simples</h3>
                          <p className="price">€490</p>
                          <ul className="features">
                            <li>Design Responsivo</li>
                            <li>5 Páginas Incluídas</li>
                            <li>Redes Sociais Integradas</li>
                            <li>SEO Básico</li>
                            <li>Formulário Contato</li>
                            <li>Suporte 3 Meses</li>
                          </ul>
                        </div>
                        <div className="pricing-card">
                          <h3>Website Avançado</h3>
                          <p className="price">€990</p>
                          <ul className="features">
                            <li>Design Responsivo Personalizado</li>
                            <li>10 Páginas Incluídas</li>
                            <li>SEO Avançado</li>
                            <li>Blog Integrado</li>
                            <li>Google Analytics</li>
                            <li>Suporte 6 Meses</li>
                          </ul>
                        </div>
                        <div className="pricing-card">
                          <h3>E-commerce Simples</h3>
                          <p className="price">€790</p>
                          <ul className="features">
                            <li>50 Produtos Máximos</li>
                            <li>Design Responsivo</li>
                            <li>Pagamentos Integrados</li>
                            <li>SEO Básico</li>
                            <li>Suporte 6 Meses</li>
                          </ul>
                          <a href="/#/ecommerce" className="button-ecommerce">Saber Mais</a>
                        </div>
                        <div className="pricing-card">
                          <h3>E-commerce Avançado</h3>
                          <p className="price">€1.290</p>
                          <ul className="features">
                            <li>Produtos Ilimitados</li>
                            <li>Design Personalizado Responsivo</li>
                            <li>Marketing Ferramentas</li>
                            <li>Gestão Avançada Stocks</li>
                            <li>Suporte 1 Ano</li>
                          </ul>
                          <a href="/#/ecommerce" className="button-ecommerce">Saber Mais</a>
                        </div>
                        <div className="pricing-card">
                          <h3>Website Personalizado</h3>
                          <p className="price">€2.290</p>
                          <ul className="features">
                            <li>Solução Sob Medida</li>
                            <li>Design Exclusivo</li>
                            <li>Funcionalidades Customizadas</li>
                            <li>SEO Completo</li>
                            <li>Análise Mensal Performance</li>
                            <li>Suporte Dedicado 1 Ano</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>


                  <FadeInSection>
                    <div className="secq4">
                      <h1 className="SD12">Orçamento Gratis</h1>
                      <div className="sec7cont">
                        <h4 className="missao20">
                          Quer serviços de alta qualidade a preços acessíveis?
                          Estamos aqui para ajudar! Clique no botão abaixo e
                          receba um orçamento personalizado que atenda às suas
                          necessidades e expectativas.
                        </h4>
                        <a href="#/contacto" className="button2">pedir orçamento</a>
                      </div>
                    </div>
                  </FadeInSection>

                </div>
              </div>
            );
          } else {
            return (
              <div key={"skills-" + index} className="skills-main-div"></div>
            );
          }
        })}
      </div></div>
  );
}

export default SkillSection;
