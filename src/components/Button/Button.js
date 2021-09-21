import React from 'react';
import './Buttons.css';

export default function Button({ label, onClick }) {
    return(
        <button onClick={onClick}>{ label }</button>
    )
};

