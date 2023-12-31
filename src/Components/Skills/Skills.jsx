import React from 'react';
import stilo from "./Skills.module.css"
import java from "./javascript.png"
import html from "./html.png"
import css from "./css-3.png"
import express from "./express.png"
import mongodb from "./mongodb.png"
import redux from "./redux.png"
import node from "./nodejs.png"
import reactt from "./react.png"
import postgress from "./postgres.png"
import git from "./git.png"
import github from "./github.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    AOS.init();
    return (
        <div className={stilo.contenedor}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%">
    <path fill="#1f1f1f" d="M0,0L480,64L960,0L1440,224L1440,0L960,0L480,0L0,0Z"></path>
</svg>
            
           <h2 className={stilo.titulo}>My skills.</h2>
           <section className={stilo.cont_cards}>
            <div data-aos="flip-left"data-aos-delay="00">
                <img className={stilo.imgs}src={html} alt="" />
                <h2>html</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="50">
                <img className={stilo.imgs}src={css} alt="" />
                <h2>css</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="100">
                <img className={stilo.imgs}src={java} alt="" />
                <h2>JavaScript</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="150">
                <img className={stilo.imgs}src={reactt} alt="" />
                <h2>react js</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="200">
                <img className={stilo.imgs}src={redux} alt="" />
                <h2>redux js</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="250">
                <img className={stilo.imgs}src={node} alt="" />
                <h2>node js</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="300">
                <img className={stilo.imgs}src={express} alt="" />
                <h2>express js</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="350">
                <img className={stilo.imgs}src={mongodb} alt="" />
                <h2>mongo db</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="400">
                <img className={stilo.imgs}src={postgress} alt="" />
                <h2>postgres sql</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="450">
                <img className={stilo.imgs}src={git} alt="" />
                <h2>git</h2>
            </div>
            <div data-aos="flip-left"data-aos-delay="500">
                <img className={stilo.imgs}src={github} alt="" />
                <h2>github</h2>
            </div>

           </section>
           
        <div className={stilo.personaje}></div>   
        </div>
    );
}

export default Skills;
