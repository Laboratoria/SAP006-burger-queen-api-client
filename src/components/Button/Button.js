import React from 'react';
import './Buttons.css';

export default function Button({ label, onClick, className }) {
    return(
        <button 
            className={className}
            onClick={onClick}>{label}
        </button>
    )
};

