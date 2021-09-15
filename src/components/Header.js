import React from "react";
import Logo from './Image/Logo.png';

function Header () {
    return(
        <div className="header container">
            <img src= { Logo } alt="logo hamburguer" />
        </div>
        );
}

export default Header;


//<img className="responsive center" src={logoIMG} alt="Logo Burguer Queen" />