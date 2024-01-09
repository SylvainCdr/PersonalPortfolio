import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom'


 function Header() {

    // const Linkedin = "www.linkedin.com/in/sylvain-cadoret"

    return (
        <>
            <div class="header">

                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/competences">Compétences</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <span>
                    <a href="https://github.com/SylvainCdr" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=48&id=bVGqATNwfhYq&format=png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/sylvain-cadoret/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" /></a>
                    </span>

                </ul>
            
              
            </div>
        </>
    );
}

export default Header;