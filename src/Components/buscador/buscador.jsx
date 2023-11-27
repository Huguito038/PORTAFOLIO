import React, { useState, useEffect } from 'react';
import stilo from "./buscador.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser ,FaBriefcase, FaEnvelope,FaLaptopCode, FaHome } from "react-icons/fa";


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
            <a onClick={() => scrollToSection(homeRef)} className={seccionActual === "home" ? stilo.seleccionado : ""}><FaHome /></a>
            <a onClick={() => scrollToSection(barraRef)}  className={seccionActual === "about" ? stilo.seleccionado : ""}><FaUser /></a>
            <a onClick={() => scrollToSection(skillsRef)} className={seccionActual === "skills" ? stilo.seleccionado : ""}><FaLaptopCode /></a>
            <a onClick={() => scrollToSection(proyectosRef)} className={seccionActual === "proyectos" ? stilo.seleccionado : ""}><FaBriefcase /></a>
            <a onClick={() => scrollToSection(contactoRef)} className={seccionActual === "contact" ? stilo.seleccionado : ""}><FaEnvelope /></a>
        </div>
    );
}

export default Buscador;
