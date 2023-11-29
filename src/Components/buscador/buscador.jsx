import React, { useState, useEffect } from 'react';
import stilo from "./buscador.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser ,FaBriefcase, FaEnvelope,FaLaptopCode, FaHome,} from "react-icons/fa";


const Buscador = ({ scrollToSection, barraRef, homeRef, skillsRef, proyectosRef, contactoRef }) => {
    AOS.init();

    const [seccionActual, setSeccionActual] = useState("home");

    const handleScroll = () => {
        if (barraRef.current && homeRef.current && skillsRef.current && proyectosRef.current && contactoRef.current) {
            const scrollPosition = window.scrollY;
            const offsets = {
                home: homeRef.current.offsetTop -100,
                about: barraRef.current.offsetTop -100,
                skills: skillsRef.current.offsetTop - 100,
                proyectos: proyectosRef.current.offsetTop - 100,
                contact: contactoRef.current.offsetTop - 100
            };

            if (scrollPosition < offsets.about) {
                setSeccionActual("home");
            } else if (scrollPosition < offsets.skills) {
                setSeccionActual("about");
            } else if (scrollPosition < offsets.proyectos) {
                setSeccionActual("skills");
            } else if (scrollPosition < offsets.contact) {
                setSeccionActual("proyectos");
            } else {
                setSeccionActual("contact");
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [barraRef, homeRef, skillsRef, proyectosRef, contactoRef]);

    return (
        <div data-aos="flip-left" data-aos-delay="1000" className={stilo.contenedor}>
            <a>
                <FaHome onClick={() => scrollToSection(homeRef)} className={`${stilo.logo} ${seccionActual === "home" ? stilo.seleccionado : ""}`}/>
                <p>Home</p>
            </a>
            <a>
                <FaUser onClick={() => scrollToSection(barraRef)} className={`${stilo.logo} ${seccionActual === "about" ? stilo.seleccionado : ""}`}/>
                <p>Sobre mi</p>
            </a>
            <a>
                <FaLaptopCode onClick={() => scrollToSection(skillsRef)} className={`${stilo.logo} ${seccionActual === "skills" ? stilo.seleccionado : ""}`}/>
                <p>skills</p>
            </a>
            <a>
                <FaBriefcase onClick={() => scrollToSection(proyectosRef)} className={`${stilo.logo} ${seccionActual === "proyectos" ? stilo.seleccionado : ""}`}/>
                <p>proyectos</p>
            </a>
            <a>
                <FaEnvelope onClick={() => scrollToSection(contactoRef)} className={`${stilo.logo} ${seccionActual === "contact" ? stilo.seleccionado : ""}`}/>
                <p>contacto</p>
            </a>

            
        </div>
    );
}

export default Buscador;
