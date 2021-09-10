import React from 'react';
import ReactDOM from 'react-dom';
import '../inputs/style.css';

const Input = ({ placeholder }) => {
    return <input type="text" placeholder={placeholder} className="input"></input>
}

export default Input;