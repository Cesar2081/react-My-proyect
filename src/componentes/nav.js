
import React, {useState} from 'react';
import {BiMenu} from "react-icons/bi"
import { AiOutlineClose } from 'react-icons/ai';
import log  from '../assets/logo.png';
import estiloBanner from '../css/estiloBanner.module.css';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const backgroundImageURL ="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg";
    // const BackgroundImageURL="../assets/8.jpg";
       const containerStyle = {
            backgroundImage:`url(${backgroundImageURL})`,
            height: '800px',                        
        };
        
        
    return (
        <header className={estiloBanner.banner}  style={containerStyle}>

            <nav className={estiloBanner.navegacion}>

                <div >
                    <a href="/"><img src={log} width="120" height="100" alt="" /></a>
                </div>

                <div className="hidden md:flex ">
                    <ul className="flex text-black items-center space-x-8">
                        <li><a href="/">Clientes</a></li>
                        <li><a href="/">Usuarios</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Clientes</a></li>
                        <button className='ml-4'>Use Defi</button>
                    </ul>
                </div>


                {/* Hamburger menu */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} className='text-black' /> : <BiMenu size={30} className='text-black' />}
                </div>



                <div className={nav ? 'w-full bg-black text-white absolute top-[60px] left-0 flex justify-center text-center' :
                    'absolute left-[-100%]'}>
                    <ul className='pt-[20px] uppercase'>
                        <li><a href="/" className="p-4">otros</a></li>
                        <li><a href="/" className="p-4">lucha</a></li>
                        <li><a href="/" className="p-4">Blog</a></li>
                        <li><a href="/" className="p-4">Clientes</a></li>
                    </ul>
                </div>


            </nav>
            <section>
                <h1 className='text-4xl text-slate-100'>Aumenta tu potencial al 200%</h1>
                <h2>Con un pagina web potente</h2>
            </section>

        </header>
    );
};

export default Navbar;   