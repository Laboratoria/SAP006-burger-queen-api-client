import React from 'react';
// import ReactDOM from 'react-dom';
import '../inputs/style.css';

const Input = ({ name, placeholder, onChange, value, type }) => {
    return <input name={name} 
    placeholder= {placeholder} 
    onChange= {onChange}
    value= {value}
    type= {type} 
    className="input"></input>
}

export default Input;