import React from 'react';

export function InputUserData ({
  inputType,
  inputValue,
  inputOnChange,
  labelText,
  iconSRC,
  iconAlt,
  eyeClass,
  passwordStatusSRC,
  passwordStatusAlt
}) {
  return (
    <div>
      <input 
        type={inputType}
        required
        value={inputValue}
        onChange={inputOnChange}
      />
      <label> 
        {labelText}
      </label>
      <img 
        src={iconSRC} 
        alt={iconAlt}
      />
      <img 
        className={eyeClass}
        src={passwordStatusSRC}
        alt={passwordStatusAlt}
      />
    </div>
  )
}