import './App.css';
import Principal from './Components/Principal/Principal';
import Barra from './Components/Barra/Barra';
import Skills from './Components/Skills/Skills';
import Proyectos from './Components/proyectos/proyectos';
import Contacto from './Components/Contacto/contacto';
import { useRef } from 'react';
import Buscador from './Components/buscador/buscador';
import BarraRedes from './Components/BarraRedes/BarraRedes';


function App() {
  const homeRef = useRef(null)
  const barraRef = useRef(null);
  const skillsRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);


  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='conte'>
      <Buscador scrollToSection={scrollToSection} barraRef={barraRef} skillsRef={skillsRef} proyectosRef={proyectosRef}contactoRef={contactoRef}homeRef={homeRef}></Buscador>
      <div ref={homeRef}>
        <Principal></Principal>
      </div>
      <div ref={barraRef}>
        <Barra></Barra>
      </div>
      <div ref={skillsRef}>
        <Skills></Skills>
      </div>
      <div ref={proyectosRef}>
        <Proyectos></Proyectos>
      </div>
      <div ref={contactoRef}>
        <Contacto></Contacto>
      </div>
      
     
    </div>
    
  );
}

export default App;
