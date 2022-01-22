import React from 'react';
import image from '../images/blanchedalmond.png'


export default function Navbar() {
    return (
        
        <header>
            <nav>
                <h1 className='logo-text'> <span>React</span> Facts</h1>
                <img src={image} alt="react-icon" className='react-icon' width={88} />
                <h5 className='nav-text'> <span>React</span>  Course - Project I</h5>
            </nav>
        </header>
            
    )
  
}
