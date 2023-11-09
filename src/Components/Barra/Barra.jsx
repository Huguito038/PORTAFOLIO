import React from 'react';
import stilo from "./Barra.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Barra = () => {
    AOS.init();
    return (
        <div className={stilo.contenedor}>
           <svg className={stilo.pixeles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cc1dbd" fill-opacity="1" d="M0,288L0,96L120,96L120,224L240,224L240,96L360,96L360,192L480,192L480,32L600,32L600,192L720,192L720,224L840,224L840,64L960,64L960,192L1080,192L1080,32L1200,32L1200,128L1320,128L1320,224L1440,224L1440,0L1320,0L1320,0L1200,0L1200,0L1080,0L1080,0L960,0L960,0L840,0L840,0L720,0L720,0L600,0L600,0L480,0L480,0L360,0L360,0L240,0L240,0L120,0L120,0L0,0L0,0Z"></path></svg>
            <h2 data-aos="fade-left"data-aos-duration="1000"className={stilo.titulo}>about me.</h2>
            <h4  data-aos="fade-left" data-aos-duration="1000"className={stilo.text}>¡Hola! Soy Hugo, un apasionado Full Stack Developer con 2 años de experiencia en el fascinante mundo del desarrollo web. Mi misión es transformar ideas en código, dando vida a proyectos increíbles.
            </h4>
            <h4  data-aos="fade-left"data-aos-delay="100" data-aos-duration="1000"className={stilo.text2}>Me emociona la oportunidad de aplicar mis conocimientos y habilidades para enfrentar desafíos emocionantes. Mi enfoque se centra en la creación de soluciones efectivas y la búsqueda constante de la excelencia.</h4>
            <h4  data-aos="fade-left"data-aos-delay="200" data-aos-duration="1000"className={stilo.text2}>A lo largo de mi carrera, he contribuido a proyectos exitosos y participado activamente en la comunidad de código abierto. Mi dedicación se refleja en mantenerme siempre actualizado con las últimas tendencias tecnológicas.</h4>
        </div>
    );
}

export default Barra;
