import React from 'react';
import Logo from '../../img/Logo.png';

const LogoImg = ({className}) => {
    return (
        <img 
            src={Logo}
            alt="logo"
            className={className}
        />   
    );
}

export default LogoImg;