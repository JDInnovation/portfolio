import React from "react";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import "./Skills.css";
import myImage from "../../assets/images/david1a.jpg";
import myImage2 from "../../assets/images/david1a.jpg";
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

function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={"skills-" + index} className="skills-main-div">
              <div className="skills-text-div">
                <div>
                  <h1 className="SD12">SOLUÇÕES DIGITAIS</h1>
                  <div className="accordion">
                    <article>
                      <input id="article1" type="radio" name="articles" defaultChecked />
                      <label htmlFor="article1">
                        <h2 className="sites1">
                          <img src={ecom} alt="Descrição da Imagem" className="icon" title="E-Commerce" />
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

                <div>
                  <h1 className="SD123">QUEM SOMOS</h1>
                  <h3>Somos uma equipa dinâmica de apaixonados por desenvolvimento de soluções digitais. Com uma experiência sólida em criação de sites, e-commerce, marketing digital e branding, já realizamos mais de 40 projetos, cada um deles contribuindo para o aperfeiçoamento contínuo dos nossos serviços.</h3>
                  <h3>O nosso compromisso é entregar soluções inovadoras e personalizadas que impulsionem os negócios e projetos dos nossos clientes. Cada projeto é uma nova oportunidade para superar expectativas e alcançar resultados excepcionais.</h3>
                  <h3>Deixe-nos transformar suas ideias em realidade digital com eficiência e criatividade.</h3>
                  <div className="equipa">
                    
                  </div>
                </div>

                <div>
                  <h1 className="SD12">O QUE JÁ FIZEMOS</h1>
                  <h3>Dois jovens autodidatas com mais de cinco anos de colaboração, são a força por trás de um negócio de soluções digitais inovadoras. Juntos, desenvolveram mais de 50 projetos, combinando suas habilidades em tecnologia e design para criar produtos digitais de alto impacto. Sua dedicação e expertise transformam ideias em soluções eficientes, destacando-se no mercado pela criatividade e qualidade.</h3>
                  <div className="equipa">
                    <main className="main3">
                      <div className="row">
                        <div className="column">
                          <div className="card3">
                            <h2>18</h2>
                            <h3>Estratégias criadas</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            <h2>34</h2>
                            <h3>Estratégias criadas</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            <h2>34</h2>
                            <h3>Estratégias criadas</h3>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card3">
                            <h2>34</h2>
                            <h3>Estratégias criadas</h3>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>

                <Fade right duration={2000}>
                  <div style={{ textAlign: "center" }}>
                    {skill.skills.map((skillSentence, skillIndex) => (
                      <p key={"skill-sentence-" + skillIndex} className="subTitle skills-text" style={{ color: theme.secondaryText }}>
                        {skillSentence}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div key={"skills-" + index} className="skills-main-div">
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
