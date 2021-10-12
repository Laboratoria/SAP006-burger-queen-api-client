import React from 'react';
import './Inputs.css';

export default function Input ({ name, id, placeholder, type, value, onChange, className }) {
    
    return (
            <input 
                name={name}
                id={id}
                placeholder={placeholder} 
                type={type} 
                value ={value} 
                onChange={onChange} 
                className={className}
            />  
    );
};
