import React from 'react';
import stilo from "./Barra.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Barra = () => {
    AOS.init();
    return (
        <div className={stilo.contenedor}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#8b1577b7" fill-opacity="1" d="M0,192L0,128L130.9,128L130.9,160L261.8,160L261.8,96L392.7,96L392.7,224L523.6,224L523.6,96L654.5,96L654.5,160L785.5,160L785.5,224L916.4,224L916.4,32L1047.3,32L1047.3,160L1178.2,160L1178.2,128L1309.1,128L1309.1,32L1440,32L1440,0L1309.1,0L1309.1,0L1178.2,0L1178.2,0L1047.3,0L1047.3,0L916.4,0L916.4,0L785.5,0L785.5,0L654.5,0L654.5,0L523.6,0L523.6,0L392.7,0L392.7,0L261.8,0L261.8,0L130.9,0L130.9,0L0,0L0,0Z"></path>
            </svg>
            <h2 data-aos="fade-left"data-aos-duration="1000"className={stilo.titulo}>About Me.</h2>
            <h4 className={stilo.text}>¡Hola! Soy Hugo, un apasionado Full Stack Developer, apasionado en la creación de soluciones tecnológicas innovadoras.
            Mi enfoque se basa en transformar ideas en código, creando aplicaciones web y móviles de alto rendimiento que cautivan a los usuarios.
            </h4>
        </div>
    );
}

export default Barra;
