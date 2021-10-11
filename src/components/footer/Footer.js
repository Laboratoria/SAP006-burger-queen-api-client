import React from 'react';
import './Footer.css';

export default function Footer ({className}) {
    
    return (
        <div>
            <p className="footer"> Desenvolvido por
                <a className="name-footer" href="https://github.com/biancacristinaalves" target="blank"> Bianca Alves</a> e 
                <a className="name-footer" href="https://github.com/ThalitaNeves95" target="blank"> Thalita Neves</a> |  Copyright © 2021
            </p>
        </div>
    );
};

