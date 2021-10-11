import React from 'react';
import Logo from '../../img/Logo.png';

export default function LogoImg ({className}) {

    return (
        <img 
            src={Logo}
            alt="logo"
            className={className}
        />   
    );
};
