import React from 'react';
import './Input.css';

const Input = ({label, type, name, value, onChange, error }) => {
    return (
        <div className='wrapper'> 
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input 
            id={name} 
            name={name} 
            className='input' 
            type={type} 
            value={value} 
            onChange={onChange}
           
            />
            {error && <p className='error'> {Error}</p>}
        </div>
    );
}

export default Input;



