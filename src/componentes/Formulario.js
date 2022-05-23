import React from "react";
import formu from '../css/Formulario.module.css';

function Formulario() {
    return (
      
      <main class="contenedor">
        <h1>Contacto</h1>
        
        <h2>Llene el formulario de Contacto</h2>

        <form className="formulario">
            <fieldset>
                <legend>Informacion Personal</legend>

                <label for="nombre">Nombre :</label>
                <input type="text" placeholder="Tu Nombre" id="nombre" />

                <label className={formu.rotulos}for="email">E-mail :</label>
                <input type="email" placeholder="Tu email" id="email" />

                <label for="telefono">Telefono:</label>
                <input type="tel" placeholder="Telefono" id="telefono" />

                <label for="mensaje">Mensaje </label>
                <textarea id="mensaje"></textarea>
            </fieldset>

            <fieldset>
                <legend>Informacion sobre la propiedad</legend>

                <label for="opciones">Vende o Compra: </label>
                <select name="" id="opciones">
                    <option value="" disabled selected>--Seleccione--</option>
                    <option value="Compra">Compra</option>
                    <option value="Vende">Vende</option>
                </select>

                <label for="presupuesto">Precio o Presupuesto:</label>
                <input type="number" placeholder="Tu precio o Presupuesto" id="presupuesto" />
            </fieldset>

            <fieldset>
                <legend>Informacion sobre la propiedad</legend>

                <p>Como desea ser Contactado</p>

                <div class="forma-contacto">
                    <label for="contactar-telefono">Telefono</label>
                    <input name="contacto" type="radio" value="telefono" id="contactar-telefono" />

                    <label for="contactar-email">E-mail</label>
                    <input name="contacto" type="radio" value="email" id="contactar-email" />
                </div>

                <p>Si eligió télefono, elija la fecha y hora</p>

                <label for="fecha">Fecha:</label>
                <input type="date" id="telefono" />

                <label for="hora">Hora:</label>
                <input type="time" id="hora" min="9:00" max="18:00" />

            </fieldset>

            <input type="submit" value="Enviar" class="boton-verde" />

          </form>

          </main>    
 
    );
  }
  
  export default Formulario;