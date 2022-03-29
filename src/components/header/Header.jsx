import React from "react";
import "./header.css";
import CTA from "./CTA";
import fotojoao from "../../assets/fotojoao.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>João Luiz Rocha</h1>
        <h5 className="text-light">Desenvolvedor FullStack</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={fotojoao} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
