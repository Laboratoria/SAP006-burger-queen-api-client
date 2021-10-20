import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <p className='footer-text'>
                Desenvolvido por&nbsp;
                <a href='https://github.com/belobruna' title='GitHub' target="_blank" rel="noopener noreferrer" className='footer-link'>Bruna Belo</a>
                &nbsp;&&nbsp;
                <a href='https://github.com/Magnadutra' title='GitHub' target="_blank" rel="noopener noreferrer" className='footer-link'>Magna Dutra</a>
                &emsp;|&emsp;Copyright 2021
            </p>
        </footer>
    );
}

export default Footer


