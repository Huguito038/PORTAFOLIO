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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(47, 44, 61)" fill-opacity="1" d="M0,320L12.6,314.7C25.3,309,51,299,76,277.3C101.1,256,126,224,152,181.3C176.8,139,202,85,227,106.7C252.6,128,278,224,303,218.7C328.4,213,354,107,379,85.3C404.2,64,429,128,455,149.3C480,171,505,149,531,154.7C555.8,160,581,192,606,170.7C631.6,149,657,75,682,42.7C707.4,11,733,21,758,48C783.2,75,808,117,834,138.7C858.9,160,884,160,909,133.3C934.7,107,960,53,985,58.7C1010.5,64,1036,128,1061,149.3C1086.3,171,1112,149,1137,128C1162.1,107,1187,85,1213,96C1237.9,107,1263,149,1288,160C1313.7,171,1339,149,1364,144C1389.5,139,1415,149,1427,154.7L1440,160L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path></svg>
            <h2 className={stilo.titulo}>mis proyectos.</h2>
            <section className={stilo.contenedor_proyectos}>
                <div data-aos-duration="1000" className={stilo.proyecto}>
                    <img  className={stilo.img_proyect}src={proyecto1} alt="" />
                    <div className={stilo.info}>
                        <h2>Club pro manager</h2>
                        <div className={stilo.informacion}><h4>Web de control de socios y jugadores de un club, fue un trabajo dificil pero quedo funcional.</h4></div>
                        <div className={stilo.logos}>
                            <a target="blank"href="https://club-gestor.vercel.app/"><img src={logo2} alt="" /></a>
                            <a target="blank"href="https://github.com/Huguito038/CLUB_GESTOR"><img  src={github} alt="" /></a>  
                        </div>

                    </div>
                </div>
                <div data-aos-duration="1000"className={stilo.proyecto}>
                    <div className={stilo.info2}>
                        <h2>web tiro federal </h2>
                        <div className={stilo.informacion2}><h4>Landing Page para club de mi pueblo donde aplique mis conocimientos de enrutado y bastante css.</h4></div>
                        <div className={stilo.logos2}>
                            <a target="blank"className={stilo.prim}href="https://github.com/Huguito038/Club-Atletico-Tiro-Federal"><img  src={github} alt="" /></a>
                            <a target="blank" href="https://tirofederal.netlify.app/"><img src={logo2} alt="" /></a>
                        </div>

                    </div>
                    <img  className={stilo.img_proyect2}src={proyecto2} alt="" />
                </div>
                <div data-aos-duration="1000"className={stilo.proyecto}>
                    <img  className={stilo.img_proyect}src={proyecto3} alt="" />
                    <div className={stilo.info}>
                        <h2>padel cordoba</h2>
                        <div className={stilo.informacion}><h4>Catalogo online de una pagina de venta de paletas y accesorios de padel.</h4></div>
                        <div className={stilo.logos}>
                            <a target="blank"href="https://incandescent-puffpuff-553c04.netlify.app/"><img src={logo2} alt="" /></a>
                            <a target="blank"href="https://github.com/Huguito038/Padel-Shop-Cordoba"><img  src={github} alt="" /></a>   
                        </div>

                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Proyectos;
