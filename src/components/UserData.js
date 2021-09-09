import React from 'react';

export function InputContentUserData ({
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

export function InputRadioUserData ({
  inputType,
  inputValue,
  inputChecked,
  inputOnChange,
  labelText
}) {
  return (
    <div>
      <input 
        type={inputType}
        name='role'
        required
        value={inputValue}
        checked={inputChecked}
        onChange={inputOnChange}
      />
      <label> 
        {labelText}
      </label>
    </div>
  )
}
