import React from "react";
import "./about.css";
import fotojoao from "../../assets/fotojoao.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conheça um pouco</h5>
      <h2>Sobre Mim:</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={fotojoao} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Mais de 3 anos trabalhando!</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>10+ Clientes Satisfeitos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projetos Completos</small>
            </article>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            adipisci perferendis eaque ullam expedita consequuntur obcaecati
            sunt. Repudiandae beatae ab reiciendis non ipsum nihil quis
            recusandae, voluptatibus fugiat numquam odio.
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
