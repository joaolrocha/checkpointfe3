import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais as minhas Habilidades</h5>
      <h2>Experiencias:</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experiente</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediario</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small className="text-light">Experiente</small>
            </article>{" "}
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experiente</small>
            </article>{" "}
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>ReactJs</h4>
              <small className="text-light">Experiente</small>
            </article>
          </div>
        </div>
        {/* end of frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Node Js</h4>
              <small className="text-light">Experiente</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MongoDb</h4>
              <small className="text-light">Intermediario</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Experiente</small>
            </article>{" "}
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Experiente</small>
            </article>{" "}
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Experiente</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
