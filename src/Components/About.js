import React from "react";
import "../Styles/About.css";

function About(props) {
  function Return() {
    props.setAboutshow(false);
  }
  return (
    <div
      className={props.aboutshow == true ? "about" : "hide"}
      id="about-content"
    >
      <div className="content">
        <img src="./eu.png" alt="José Carlos" className="my-image"></img>
        <div className="description">
          <h1>
            José Carlos, 22 anos, natural de Porto Alegre, Rio Grande do Sul.
          </h1>
          <h2>
            Estudante de Análise e Desenvolvimento de Sistemas pela Uninter.
          </h2>
          <p>
            Sempre gostei de estudar de forma autodidata, a quantidade de
            conteúdo que podemos aprender online hoje em dia é algo incrível e
            ao mesmo tempo assustador. Sou dedicado e diligente em relação às
            metas que me proponho. Além do interesse por programação, também sou
            apaixonado por idiomas, atualmente falando fluentemente português,
            inglês, japonês, e estudando coreano.
          </p>
        </div>
        <button className="return-button" onClick={() => Return()}>
          <img src="./return.png" alt="Voltar"></img>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default About;
