import React from "react";
import Navbar from "./Navbar";
import ban from '../css/Hero.module.css';
import primario from '../css/boton.module.css'
import { FcSupport, FcPlanner } from "react-icons/fc";


function Hero() {  

    return (
      <section className={ban.banner}>

          <Navbar />

          <div className={ban.orga}>

            <div>
              <h1 className={ ban.tiHero} ><FcPlanner size={100} /> Genial Lo Lograste</h1>
              <p className={ban.subHero}><FcSupport size={100} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid incidunt ullam nostrum dignissimos ea pariatur rem, provident consequatur esse a, animi, doloribus est optio! Rerum odio voluptate corrupti eligendi.</p>
            </div>           
            
            <div>
              <button className={primario.primero}>Saber mas</button>
            </div>

          </div>      
          
        </section>
       
    );
}

export default Hero;