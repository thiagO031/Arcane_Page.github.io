import React from 'react'

// sass
// import './style/Header.sass';

// react-icons
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header-container">
        {/* <div className="header-icon">icon</div> */}
        <i><HiOutlineMenuAlt2/></i>
        <nav className="header-nav">
            <ul>
                <span>
                    <li> 
                        <p>inscreva-se</p> 
                    </li>
                </span>
                
                <li>
                    <p>entrar</p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header