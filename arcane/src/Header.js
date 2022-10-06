import React from "react";

// sass
import "./style/Header.sass";

// react-icons
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header-container">

        <i><HiOutlineMenuAlt2/></i>
        <nav className="header-nav">
            <ul>
                <span>
                    <li> 
                        <button>inscreva-se</button> 
                    </li>
                </span>
                
                <li>
                    <button>entrar</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header