import React from 'react';
import './input.css';


const Input = ({label, type, name, value, onChange,className,placeholder }) => {
    return (
        <div className='input-container'> 
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input 
            id={name} 
            name={name} 
            className={className?className:"input"}
            placeholder={placeholder}
            type={type} 
            value={value} 
            onChange={onChange}
            />
            {/* {error && <p className='error'> {Error}</p>} */}
        </div>
    );
}


export default Input;



