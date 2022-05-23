import React from "react";


function Card() {
  return (
    
    <div className='max-w-md mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <img className='h-48 w-full md:h-full md:w-48' 
            src={require('../assets/11.avif')}  
            alt="Man looking at item at a store"/>
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Case study</div>
            <a href='/' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>Finding customers for your new business</a>
            <p className=' space-x-2 mt-2 text-slate-500'>Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div>
  );
}

export default Card;