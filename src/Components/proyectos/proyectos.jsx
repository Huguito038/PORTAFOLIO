import React from 'react';
import stilo from "./proyectos.module.css"
import proyecto1 from "./img/proyecto1.png"
import github from "../Principal/github.png"
import proyecto2 from "./img/proyecto2.png"
import proyecto3 from "./img/proyecto3.png"
import logo2 from "./web.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Proyectos = () => {
    AOS.init()
    return (
        <div className={stilo.contenedor}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8b1577b7" fill-opacity="1" d="M0,288L0,192L96,192L96,64L192,64L192,64L288,64L288,96L384,96L384,160L480,160L480,128L576,128L576,256L672,256L672,160L768,160L768,224L864,224L864,32L960,32L960,96L1056,96L1056,192L1152,192L1152,32L1248,32L1248,256L1344,256L1344,96L1440,96L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"></path></svg>
            <h2 className={stilo.titulo}>my proyects.</h2>
            <section className={stilo.contenedor_proyectos}>
                <div data-aos="fade-left"data-aos-duration="1000" className={stilo.proyecto}>
                    <img  className={stilo.img_proyect}src={proyecto1} alt="" />
                    <div className={stilo.info}>
                        <h2>Club pro manager</h2>
                        <div className={stilo.informacion}><h4>Web de control de socios y jugadores de un club, fue un trabajo dificil pero quedo funcional.</h4></div>
                        <div className={stilo.logos}>
                            <a href="https://club-gestor.vercel.app/"><img src={logo2} alt="" /></a>
                            <a href="https://github.com/Huguito038/CLUB_GESTOR"><img  src={github} alt="" /></a>  
                        </div>

                    </div>
                </div>
                <div  data-aos="fade-right"data-aos-duration="1000"className={stilo.proyecto}>
                    <div className={stilo.info2}>
                        <h2>web tiro federal </h2>
                        <div className={stilo.informacion2}><h4>Landing Page para club de mi pueblo donde aplique mis conocimientos de enrutado y bastante css.</h4></div>
                        <div className={stilo.logos2}>
                            <a href="https://github.com/Huguito038/Club-Atletico-Tiro-Federal"><img  src={github} alt="" /></a>
                            <a href="https://tirofederal.netlify.app/"><img src={logo2} alt="" /></a>
                        </div>

                    </div>
                    <img  className={stilo.img_proyect2}src={proyecto2} alt="" />
                </div>
                <div data-aos="fade-left"data-aos-duration="1000"className={stilo.proyecto}>
                    <img  className={stilo.img_proyect}src={proyecto3} alt="" />
                    <div className={stilo.info}>
                        <h2>padel cordoba</h2>
                        <div className={stilo.informacion}><h4>Catalogo online de una pagina de venta de paletas y accesorios de padel.</h4></div>
                        <div className={stilo.logos}>
                            <a href="https://incandescent-puffpuff-553c04.netlify.app/"><img src={logo2} alt="" /></a>
                            <a href="https://github.com/Huguito038/Padel-Shop-Cordoba"><img  src={github} alt="" /></a>   
                        </div>

                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Proyectos;
