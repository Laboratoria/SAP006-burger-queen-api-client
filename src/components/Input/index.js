import React from "react";

export function Input ({
    inputType,
    inputName,
    inputPlaceholder,
    inputOnChange,
    inputValue  
}) {
    return (
        <input 
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={inputOnChange}
            value={inputValue}
            />
    )
}