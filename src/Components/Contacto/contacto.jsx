import React from "react";
import stilo from "./contacto.module.css";
import mail from "./mail.png";
import whats from "./what.png";
import link from "./link.png";

const Contacto = () => {


const handleClick = (http)=>{
    window.open(http, '_blank');
} 
  return (
    <div className={stilo.contenedor}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,192L60,181.3C120,171,240,149,360,144C480,139,600,149,720,160C840,171,960,181,1080,154.7C1200,128,1320,64,1380,32L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <h2 className={stilo.titulo}>contact me.</h2>
      <div className={stilo.contacto}>
        <button onClick={()=>handleClick("https://wa.me/3541218866")} className={`${stilo.btn} ${stilo.cube} ${stilo["cube-hover"]}`}>
          <div className={stilo["bg-top"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo["bg-right"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.bg}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.text}>WHATSAPP</div>
        </button>
        <button onClick={()=>handleClick("mailto:hugosoler@hotmail.com")} className={`${stilo.btn} ${stilo.cube} ${stilo["cube-hover"]}`}>
          <div className={stilo["bg-top"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo["bg-right"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.bg}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.text}>MAIL ME</div>
        </button>
        <button onClick={()=>handleClick("https://www.linkedin.com/in/hugo-soler-69487a27a")} className={`${stilo.btn} ${stilo.cube} ${stilo["cube-hover"]}`}>
          <div className={stilo["bg-top"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo["bg-right"]}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.bg}>
            <div className={stilo["bg-inner"]}></div>
          </div>
          <div className={stilo.text}>LINKEDIN</div>
        </button>
      
      </div>
      <div className={stilo.personaje}></div>
    </div>
  );
};

export default Contacto;
