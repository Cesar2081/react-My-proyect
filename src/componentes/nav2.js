import React from "react";

function Nav2( ) { 

       const backgroundImageURL ="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg";
       const containerStyle = {
            backgroundImage:`url(${backgroundImageURL})`,
            height: '600px',            
        };

      return (  
       <header className='bg-local bg-cover w-full ' style={containerStyle}>
            <nav>
                <a href="/">UNo</a>
                <a href="/">d</a>
                <a href="/">d</a>
                <a href="/">d</a>
                <a href="/">d</a>
            </nav>
            <section>
                <h1>Aumenta tu potencial al 200%</h1>
                <h2>Con un pagina web potente</h2>
            </section>
        </header>
    );
}

export default Nav2;