import React from 'react';
import stilo from "./buscador.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Buscador = ({scrollToSection, barraRef,homeRef,skillsRef,proyectosRef,contactoRef}) => {
     AOS.init()
    return (
        <div data-aos="flip-left"data-aos-delay="1000" className={stilo.contenedor}> 
            <a onClick={()=> scrollToSection(homeRef)}>HOME</a>
            <a onClick={()=> scrollToSection(barraRef)}>about me.</a>
            <a onClick={()=> scrollToSection(skillsRef)}>mi skills</a>
            <a onClick={()=> scrollToSection(proyectosRef)}>proyectos</a>
            <a onClick={()=> scrollToSection(contactoRef)}>contact</a>
        </div>
    );
}

export default Buscador;
