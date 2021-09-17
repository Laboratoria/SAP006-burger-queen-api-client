import React from "react";

const Input = ({name, id, placeholder, type, value, handleChange}) => {
    
    return (
            <input 
                name={name}
                id={id}
                placeholder={placeholder} 
                type={type} 
                value ={value} 
                onChange={handleChange} 
            />  
    );
}

export default Input;


