import React from "react";
import stilo from "./Principal.module.css";
import logo from "./github.png";
import logo2 from "./linkedin.png";
import CV from "./CV.pdf";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const Principal = () => {
  return (
    <div className={stilo.cont}>
      <div className={stilo.nombre}>
        <Bounce left>
          <h4 className={stilo.saludo}>Hola, yo soy</h4>

          <h2 className={stilo.hugo}>Hugo Soler.</h2>
          <h3 className={stilo.saludo2}>Desarrollador Web Full Stack</h3>
        </Bounce>
      </div>
      <div className={stilo.lateral}>
        <Zoom>
          <section>
            <a
              href="https://www.linkedin.com/in/hugo-soler-69487a27a/"
              target="_blank"
            >
              <img src={logo2} alt="" />
            </a>
            <a href="https://github.com/Huguito038" target="_blank">
              <img src={logo} alt=""></img>
            </a>
          </section>
        </Zoom>
      </div>

      <a target="_blank" href={CV} className={stilo.cv}>
        <Flip left>
          <div className={stilo.boton_cv}>DESCARGAR CV</div>
        </Flip>
      </a>

      <div className={stilo.personaje}></div>
    </div>
  );
};

export default Principal;
