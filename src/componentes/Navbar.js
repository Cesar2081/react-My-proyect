import { IoMenu } from "react-icons/io5";

import { useState } from 'react';
import log  from '../assets/logo.png';
//import Navlinks from './Navlinks';
import nav from '../css/Navbar.module.css';

const Navbar = () => {      
        
    const [open, setOpen] = useState(false);
        
    return (       
            <nav className={nav.navegacion} >                
                    <img src={log} className={nav.logo} alt="imagen" />

                    <ul className={nav.menu}>
                        <li className={nav.menu_li}><a href="/">About</a></li>
                        <li className={nav.menu_li}><a href="/">Home</a></li>
                        <li className={nav.menu_li}><a href="/">Blog</a></li>
                        <li className={nav.menu_li}><a href="/">Users</a></li>                        
                    </ul>

                    <ul className={`nav.menu_lateral md:hidden  ${open ? "right-0" : "right-[-100%]"} `}>
                        <ul className={nav.menu}>
                        <li className={nav.menu_li}><a href="/">About</a></li>
                        <li className={nav.menu_li}><a href="/">Home</a></li>
                        <li className={nav.menu_li}><a href="/">Blog</a></li>
                        <li className={nav.menu_li}><a href="/">Users</a></li>                        
                    </ul>
                    </ul>

            <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
                <IoMenu color="#ffffff" />
            </div>                        
                                 
            </nav>        
    );
};

export default Navbar;   