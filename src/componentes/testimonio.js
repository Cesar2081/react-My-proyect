import React from "react";

function Testimonio(props) {
  return (
    <dir className='max-w-md mx-auto bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>

      <div className='md:flex'>

        <div className='md:shrink-0'>
          <img className='h-48 w-full md:h-full md:w-48'
            src={require(`../assets/${props.imagen}.jpg`)}
            alt="No se encontro la imagen" />
        </div>

        <div className='p-8'>
          <p className='uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold'>{props.nombre} en {props.pais}</p>
          <p className='text-red-700 '>{props.cargo} en {props.empresa}</p>
          <p className='texto-testimonio mt-2 text-slate-500'>"{props.testimonio}"</p>
        </div>
      </div>

    </dir>
    
    
  );
}

export default Testimonio;