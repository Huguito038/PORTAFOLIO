import React from 'react';
import stilo from "./Principal.module.css"
import AOS from "aos";
import "aos/dist/aos.css"; // Asegúrate de que la hoja de estilos se importe después de AOS
import logo from "./github.png"
import logo2 from "./linkedin.png"

const Principal = () => {
    AOS.init();
    return (
         <div className={stilo.cont}>
             <div className={stilo.nombre}>
                <h4 data-aos="fade-down"data-aos-duration="500">Hola, este es mi portafolio</h4>
                <h2 data-aos="fade-left"data-aos-anchor="#example-anchor" data-aos-delay="400"data-aos-duration="1000">Hugo Soler.</h2>
             </div>
             <div className={stilo.lateral}>
                <section data-aos="flip-left"data-aos-delay="700">
                        <a href="https://www.linkedin.com/in/hugo-soler-69487a27a/"><img src={logo2} alt="" /></a> 
                        <a href="https://github.com/Huguito038"><img src={logo}></img></a>
                </section>
             </div>
             <div className={stilo.boton_cv}>
                DESCARGAR CV
             </div>
            <div className={stilo.personaje}></div>
            <svg data-aos="zoom-out-down" data-aos-delay="1000"className={stilo.flecha} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill="%23000"><g transform="rotate(90)" transform-origin="center"><path d="M437.86 230.56c-46.6-16.95-79.02-35.1-125.57-52.17a6362.55 6362.55 0 0 1-63.34-23.24l-.07-.07c-.77-.4-.95-.31-1.47-.5-2.56.17-4.13 1.61-4.49 3.73a5.58 5.58 0 0 0 .18 3.69c6.64 9.54 29.99 37.7 40.96 50.62-82.21-3.13-164.47-2.69-246.72-2.55-4.52.19-5.98 5.7-4.44 9.39.49 6.63 43.96 22.56 51.8 26.74-10.49 5.43-21 10.79-31.43 16.33-5.8 4.13-21.49 9.97-22.47 16.96-.83 4.17 1.34 9.36 6.04 9.21 29.27-1.77 182.4-9.11 236.77-12.24-16.66 17.19-30.05 30.41-45.18 48.84-2.63 3.39-6.75 5.07-9.42 8.31-2.44 3.87-.86 10.33 3.67 11.8 13.99-2 27.26-9.77 40.85-14.06 59.83-22.6 139.76-56.86 184.97-69.03 7.03-2.74 18.7-2.45 20.76-11.34 2.07-13.69-22.12-15.43-31.4-20.44Zm-189.43 90.92c10.47-12.01 21.6-20.65 32.64-32.88 5.75-5.99 10.85-9.42 15.47-15.84 2.2-4.61-.77-11.18-6.12-11.54-80.31 3.33-149.22 6.91-227.11 11.58a1129.8 1129.8 0 0 0 23.97-13.01c8.93-4.34 22.76-13.53 8.24-21.3-12.17-5.23-24.37-10.43-36.52-15.73 65.91.17 158.66 1.9 200.52 2.55 10.23-.83 30.56 2.87 38.42-2.84 5.53-6.68-2.11-12.89-5.96-17.92l-14.45-17.18c-4.18-4.73-8.91-9.57-12.95-14.44 62.29 26.02 115.11 51.37 180.12 75.21-72.02 19.1-126.69 47.08-196.27 73.34Z"></path></g></svg>
            
        </div>
        
        
           
        
    );
}

export default Principal;
