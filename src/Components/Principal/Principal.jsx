import React from 'react';
import stilo from "./Principal.module.css"
import AOS from "aos";
import "aos/dist/aos.css"; // Asegúrate de que la hoja de estilos se importe después de AOS
import logo from "./github.png"
import logo2 from "./linkedin.png"
import CV from "./CV.pdf"


const Principal = () => {
    AOS.init();
    return (
         <div className={stilo.cont}>
             <div className={stilo.nombre}>
                <h4 data-aos="fade-down"data-aos-duration="500" className={stilo.saludo}>Hola, yo soy</h4>
                <h2 className={stilo.hugo}data-aos="fade-left"data-aos-delay="400"data-aos-duration="1000">Hugo Soler.</h2>
                <h3 className={stilo.saludo2}>Desarrollador Web Full Stack</h3>
             </div>
             <div className={stilo.lateral}>
                <section data-aos="flip-left"data-aos-delay="700">
                        <a href="https://www.linkedin.com/in/hugo-soler-69487a27a/"target="_blank"><img src={logo2} alt="" /></a> 
                        <a href="https://github.com/Huguito038"target="_blank"><img src={logo} alt=""></img></a>
                </section>
             </div>
             <a target="_blank" href={CV} className={stilo.cv}>
             <div data-aos="flip-left"data-aos-delay="700"className={stilo.boton_cv}>
                DESCARGAR CV
             </div></a> 
            <div className={stilo.personaje}></div>
            
        </div>
        
        
           
        
    );
}

export default Principal;
