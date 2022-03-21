import React from "react";
import "../Styles/Skills.css";

function Skills(props) {
  function Return() {
    props.setSkillsshow(false);
  }
  return (
    <div className={props.skillsshow == true ? "skills" : "hide"}>
      <div className="skill-content">
        <div className="icons">
          <img src="./html.png" alt="HTML" id="html"></img>
          <img src="./css.png" alt="CSS" id="css"></img>
          <img src="./js.png" alt="JavaScript" id="js"></img>
          <img src="./react.png" alt="React" id="react"></img>
        </div>
        <p>
          Estas são as tecnologias que eu mais possuo familiaridade, sendo React
          meu principal objeto de estudo. Todos meus projetos até então foram
          feitos utilizando <span className="react">React</span>. Além disso,
          também estou estudando <span>Redux</span> e <span>Nodejs</span>.{" "}
        </p>
        <button className="skill-return" onClick={() => Return()}>
          <img src="./return.png" alt="Voltar"></img>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Skills;
