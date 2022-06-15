import React from 'react';
import './Navbar.css';
import { logo } from '../assets';
import { useState } from 'react';


function Navbar() {

    const [clicked, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!clicked)
    };

  return (
    <div className='container navbar'>
        <div className="navbar-brand">
            <img src={logo} width="100%" alt="Rotaract Logo" />
        </div>
        <div onClick={handleClick} className={`hamburger ${clicked ? 'active' : ''}`}>
            <span className='menu-line'></span>
            <span className='menu-line'></span>
            <span className='menu-line'></span>
        </div>      
        <ul className={`navlist ${clicked ? 'active' : ''}`}>
            <li className="navitem"><a href="https://www.instagram.com/ifacundo_">Inicio</a></li>
            <li className="navitem"><a href="https://www.instagram.com/ifacundo_">Sobre nosotros</a></li>
             <li className="navitem"><a href="https://www.instagram.com/ifacundo_">Areas</a></li>
            <li className="navitem"><a href="https://www.instagram.com/ifacundo_">Contacto</a></li>
        </ul>
    </div>
  )
}

export default Navbar