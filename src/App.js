
import Testimonio from './componentes/testimonio.js';
import Navbar from './componentes/nav';
import Pie from './componentes/pie.js';




function App() {
  return (
    <>
      <Navbar />
      
      <Navbar />     

      <h1 className='text-center text-4xl font-bold'> Esto dicen nuestros alumnos sobre de los cursos de FreeCodeCamp</h1>
     
      <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-1  mx-10">

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problema para prender Javascript. he tomado muchos Cursos, pero el curso de FreeCodeCamp fue le que se quedo' />

        <Testimonio
          nombre='Cesar Garcia'
          pais='Ecuador'
          imagen='bruce'
          cargo='Desarrollador Web'
          empresa='Facebook'
          testimonio='Siempre he tenido problema para prender Javascript. he tomado muchos Cursos, pero el curso de FreeCodeCamp fue le que se quedo' />

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problema para prender Javascript. he tomado muchos Cursos, pero el curso de FreeCodeCamp fue le que se quedo' />

        <Testimonio
          nombre='Cesar Garcia'
          pais='Ecuador'
          imagen='bruce'
          cargo='Desarrollador Web'
          empresa='Facebook'
          testimonio='Siempre he tenido problema para prender Javascript. he tomado muchos Cursos, pero el curso de FreeCodeCamp fue le que se quedo' />


      </div> 

      <Pie />   

    </>
      
    
  );
}

export default App;

