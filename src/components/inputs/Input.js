import React from 'react';

const Input = ({name, id, placeholder, type, value, onChange}) => {
    
    return (
            <input 
                name={name}
                id={id}
                placeholder={placeholder} 
                type={type} 
                value ={value} 
                onChange={onChange} 
            />  
    );
}

export default Input;

