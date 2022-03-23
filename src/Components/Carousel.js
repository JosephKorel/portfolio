import React, { useState } from "react";
import "../Styles/Carousel.css";

function MyCarousel(props) {
  const img = ["./todo edited.png", "./macro original.png", "./portfolio.png"];
  const projectTitle = ["To do list", "Contador de calorias", "Site pessoal"];
  const projectDesc = [
    "Meu primeiro projeto realizado em React. A ideia aqui foi utilizar um hook com o useState sendo um array vazio e um objeto que recebe o input do usuário. Ao clicar em adicionar, o objeto é adicionado ao array vazio e é retornado este array.",
    "Além de programação e idiomas, também sou um ávido praticante de musculação e dieta, e para isso aplicativos para monitorar as calorias são indispensáveis. Também feito em React, o usuário coloca o alimento e a quantidade a ser consumida. Após isso ele adiciona os valores da tabela nutricional e adiciona o alimento. Também fiz uma versão traduzida para coreano como forma de estudo.",
    "Apesar de também ter sido feito utilizando React, trabalhei também bastante CSS e efeitos de animação, no intuito de dar um dinamismo a mais para o site. Além disso o site também é totalmente responsivo.",
  ];

  const projectlink = [
    "https://josephkorel-reacttodo.web.app/",
    "https://josephkorel.github.io/macro-count/",
    "https://josephkorel.github.io/portfolio/",
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

    console.log(projectlink);
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
