import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
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
import worker from "../../assets/images/office-worker.png";
import davide from "../../assets/images/d12.png";
import joaoe from "../../assets/images/j12.png";

function AnimatedNumber({ number }) {
  const { number: animatedNumber } = useSpring({
    from: { number: 1 },
    number,
    delay: 400,
    config: { duration: 6000 },
  });


  

  return <animated.div>{animatedNumber.to(n => n.toFixed(0))}</animated.div>;
}

function SkillSection(props) {
  const theme = props.theme;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 });

  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={"skills-" + index} className="skills-main-div">
              <div className="skills-text-div">
              
                <div className="secq">
                <FadeInSection delay={200} duration={750} direction="right">
                   
                  <h1 className="SD12">SOLUÇÕES DIGITAIS</h1>
                  </FadeInSection>
                  
                  <div className="accordion">
                  
                    <article>
                      <input id="article1" type="radio" name="articles" defaultChecked   />
                      <label htmlFor="article1" >
                        <h2 className="sites1">
                          <img src={ecom} alt="Descrição da Imagem" className="icon" title="E-Commerce"  />
                          • E-COMMERCE
                          <p className="setinha">▼</p>
                        </h2>
                      </label>
                      <div>
                        Nosso serviço de e-commerce oferece soluções completas para sua loja online. Desenvolvemos plataformas personalizadas, otimizadas para conversão, com design responsivo e integrações seguras. Aumente suas vendas com uma experiência de compra fluida, gestão eficiente de produtos e suporte contínuo. Transforme visitantes em clientes fiéis.
                        <h2 className="simbolo">
                          <img src={wix} alt="Wix Icon" className="icon" title="Wix" />
                          <img src={woo} alt="WooCommerce Icon" className="icon" title="WooCommerce" />
                          <img src={shopify} alt="Shopify Icon" className="icon" title="Shopify" />
                        </h2>
                      </div>
                    </article>
                    

                    <article>
                      <input id="article2" type="radio" name="articles" />
                      <label htmlFor="article2">
                        <h2 className="sites1">
                          <img src={webs} alt="Descrição da Imagem" className="icon" title="Sites" />
                          • SITES 
                          <p className="setinha">▼</p>
                        </h2>
                      </label>
                      <div>
                        Oferecemos criação de sites modernos e responsivos, adaptados às necessidades do seu negócio. Desenvolvemos sites intuitivos, com design atraente e navegação eficiente. Nossa equipe garante performance otimizada, SEO amigável e suporte contínuo. Estabeleça sua presença online de forma profissional e atraia mais clientes.
                        <h2 className="simbolo">
                          <img src={html} alt="HTML Icon" className="icon" title="HTML" />
                          <img src={css3} alt="CSS Icon" className="icon" title="CSS" />
                          <img src={javascript} alt="JavaScript Icon" className="icon" title="JavaScript" />
                          <img src={react1} alt="React Icon" className="icon" title="React" />
                          <img src={azure} alt="Azure Icon" className="icon" title="Azure" />
                          <img src={github} alt="GitHub Icon" className="icon" title="GitHub" />
                          <img src={vercel} alt="Vercel Icon" className="icon" title="Vercel" />
                        </h2>
                      </div>
                    </article>

                    <article>
                      <input id="article3" type="radio" name="articles" />
                      <label htmlFor="article3">
                        <h2 className="sites1">
                          <img src={marketing} alt="Descrição da Imagem" className="icon" title="Marketing" />
                          • MARKETING
                          <p className="setinha">▼</p>
                        </h2>
                      </label>
                      <div>
                        Maximize sua visibilidade com nossas estratégias de marketing digital. Especializados em Google Ads e campanhas em redes sociais, impulsionamos seu alcance e engajamento. Analisamos e otimizamos anúncios para garantir resultados efetivos, aumentando conversões e ROI. Atraia e retenha clientes com marketing direcionado e eficiente.
                        <h2 className="simbolo">
                          <img src={googleads} alt="Google Ads Icon" className="icon" title="Google Ads" />
                          <img src={facebook} alt="Facebook Icon" className="icon" title="Facebook" />
                          <img src={seo} alt="SEO Icon" className="icon" title="SEO" />
                        </h2>
                      </div>
                    </article>

                    <article>
                      <input id="article4" type="radio" name="articles" />
                      <label htmlFor="article4">
                        <h2 className="sites1">
                          <img src={branding} alt="Descrição da Imagem" className="icon" title="Branding" />
                          • BRANDING
                          <p className="setinha">▼</p>
                        </h2>
                      </label>
                      <div>
                        Destaque-se no mercado com nosso serviço de branding. Criamos identidades visuais impactantes e coerentes, refletindo a essência do seu negócio. Desenvolvemos logotipos, paletas de cores e materiais de comunicação que fortalecem sua marca. Construa uma presença sólida e memorável, conquistando a lealdade de seus clientes.
                        <h2 className="simbolo">
                          <img src={illustrator} alt="Illustrator Icon" className="icon" title="Illustrator" />
                          <img src={photoshop} alt="Photoshop Icon" className="icon" title="Photoshop" />
                        </h2>
                      </div>
                    </article>
                  </div>
                </div>
                

                
                <div className="secq3">
                <FadeInSection delay={100} duration={500} direction="left">
                  <h1 className="SD123">QUEM SOMOS</h1>
                  </FadeInSection>
                  
                 
                  <div className="artqd">
                  
                    <div className="tmd">
                    <p className="qsdef">
                      Somos uma empresa de serviços digitais especializada na criação de lojas online e websites empresariais. <br /> 
                      Desde 2019, João Teixeira e David Claro trabalham juntos para oferecer soluções perfeitas e adaptadas aos objetivos de cada negócio, com foco em aumentar a visibilidade e a faturação dos nossos clientes. <br /> 
                      Em projetos maiores, reunimos freelancers especializados para agilizar o processo e garantir resultados de alta qualidade.
                    </p>
                    </div>
                    
                    
                    <div className="caixa1">
                      <div className="cartoesapr">
                        <div className="our-team">
                          <div className="picture">
                            <img src={joaoe} alt="Descrição da Imagem" className="img-fluid" title="Branding" />
                          </div>
                          <div className="team-content">
                            <h3 className="name">João Teixeira</h3>
                            <h4 className="title">Web Developer</h4>
                          </div>
                          <ul className="social">
                            <p>emailz@rapaz</p>
                          </ul>
                        </div>
                      </div>
                      <div className="cartoesapr">
                        <div className="our-team">
                          <div className="picture">
                            <img src={davide} alt="Descrição da Imagem" className="img-fluid" title="Branding" />
                          </div>
                          <div className="team-content">
                            <h3 className="name">David Claro</h3>
                            <h4 className="title">Web Developer</h4>
                          </div>
                          <ul className="social">
                            <p>emailz@rapaz</p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                

                
                <div ref={ref}>
                <FadeInSection delay={100} duration={500} direction="right">
                  <h1 className="SD12">A NOSSA MISSÃO</h1>
                  </FadeInSection>
                  <FadeInSection delay={300} duration={600} direction="right">
                  <h4 className="missao20">
                    Valorizamos a confiança e buscamos relações duradouras e benéficas com nossos clientes. <br />
                    Oferecemos total personalização durante a criação dos projetos e garantimos orçamentos precisos para cada serviço. <br />
                    Nossa missão é tornar o processo simples e satisfatório, sempre focando na satisfação total dos nossos clientes.
                  </h4>
                  </FadeInSection>
                  <FadeInSection delay={400} duration={700} direction="left">
                  <div className="equipa">
                    <main className="main3">
                      <div className="row">
                        <div className="column">
                          <div className="card3">
                            {inView && <AnimatedNumber number={6} />}
                            <img src={yeari} alt="Descrição da Imagem" className="icon7" title="Sites" />
                            <h3 className="numberdef">Anos<br />Experiencia</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            {inView && <AnimatedNumber number={54} />}
                            <img src={projecti} alt="Descrição da Imagem" className="icon7" title="Sites" />
                            <h3 className="numberdef">Projetos<br />Realizados</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            {inView && <AnimatedNumber number={43} />}
                            <img src={clientsi} alt="Descrição da Imagem" className="icon7" title="Sites" />
                            <h3 className="numberdef">Clientes<br />Satisfeitos</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            {inView && <AnimatedNumber number={4} />}
                            <img src={patni} alt="Descrição da Imagem" className="icon7" title="Sites" />
                            <h3 className="numberdef">Parceiros<br />Estratégicos</h3>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                  </FadeInSection>
                </div>
                
                <FadeInSection>
                <div className="secq4">
                  <h1 className="SD123">Obtenha Orçamento Gratis</h1>
                  <div>
                    <h4 className="missao20">Quer serviços de alta qualidade a preços acessíveis? Estamos aqui para ajudar! Clique no botão abaixo e receba um orçamento personalizado que atenda às suas necessidades e expectativas.</h4>
                    <button className="button2">pedir orçamento</button>
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
    </div>
  );
}

export default SkillSection;
