import React from "react";

function Fig() {
  return (
    <figure className='bg-slate-100 max-w-md shadow-md m-20 rounded-xl p-8'>
        <img className='w-24 h-24 rounded-full mx-auto md:w-48 md:m-auto md:rounded-none' src={require("../imagenes/10.jpg")}  alt="" />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
            <blockquote>
                <p className='font-semibold text-slate-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, impedit repudiandae natus atque unde nesciunt quod maxime dolores ea perferendis dolor ab eius quaerat officia, aspernatur illum odit. Officia, dicta.</p>
            </blockquote>
        
        <figcaption classname="font-medium">
            <div className='text-sky-500 dark:text-sky-400'>
                Saray Dhan
            </div>
            <div className='text-slate-700 dark:text-slate-400'>
                Staff Engeniere, Algolia
            </div>
        </figcaption> 
    </div>
    </figure>
  );
}

export default Fig;