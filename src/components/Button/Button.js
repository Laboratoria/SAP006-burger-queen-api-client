import React from 'react';
import './Buttons.css';

export default function Button ({ label, onClick, className, type, text }) {
    return(
        <button 
            type={type}
            onClick={onClick}
            className={className}
        >
            {text}     
        </button>
    );
};

