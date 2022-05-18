import React, { useState } from "react";
import "../Styles/Carousel.css";

function MyCarousel(props) {
  const img = ["./dic thumb.png", "./diet thumb.png", "./blog thumb.png"];
  const projectTitle = ["English Dictionary", "Diet App", "Blog"];
  const projectDesc = [
    "Um dicionário de inglês que conta com definições, frases de exemplo e pronúncia. Há também uma seção para colar um texto e pesquisar as palavras ao clicar, o que facilita muito a leitura de notícias, artigos e etc. Além disso, é possível salvar palavras e posteriormente filtrá-las em substantivos, verbos ou adjetivos. ",
    "Além de programação e idiomas, também sou um ávido praticante de musculação e dieta, e para isso aplicativos para monitorar as calorias são indispensáveis. O usuário adiciona uma refeição, o horário, e após isso cada alimento a ser consumido. Os valores nutricionais são provenientes de um banco de dados de uma tabela de composição brasileira. O usuário também pode adicionar informações pessoais para obter suas meta diária de nutrientes para seu objetivo específico. Ademais, há uma seção para consultar cada alimento.",
    "Aplicação feita com o firebase, onde é possível criar uma conta com email e senha ou entrar com sua conta do Google. Uma vez logado, o usuário pode fazer postagens, curtir e comentar. ",
  ];

  const projectlink = [
    "https://josephkorel.github.io/dictionary/",
    "https://josephkorel.github.io/diet-app/",
    "https://josephkorel.github.io/blog-app/",
  ];
  const [index, setIndex] = useState(0);

  const [classactive, setClassactive] = useState("active-right");

  function Left() {
    index == 0 ? setIndex(2) : setIndex(index - 1);
    classactive == "active-left"
      ? setClassactive("active-left-2")
      : setClassactive("active-left");
  }

  function Right() {
    index == 2 ? setIndex(0) : setIndex(index + 1);
    classactive == "active-right"
      ? setClassactive("active-right-2")
      : setClassactive("active-right");
  }
  return (
    <div className="carousel">
      <div className="img-container">
        <button onClick={() => Left()} className="left-button">
          <img src="./right white.png" alt="Retroceder"></img>
        </button>
        <img src={img[index]} className={classactive} id="project-thumb"></img>
        <button onClick={() => Right()} className="right-button">
          <img src="./right white.png" alt="Avançar"></img>
        </button>
      </div>
      <div className="label">
        <h1>{projectTitle[index]}</h1>
        <p>
          {projectDesc[index]} <br></br>
          <a href={projectlink[index]} target="_blank">
            Acesse aqui
          </a>
        </p>
      </div>
      <button className="project-return" onClick={() => props.Return()}>
        <img src="./return.png" alt="Voltar"></img>
        Voltar
      </button>
    </div>
  );
}

export default MyCarousel;
