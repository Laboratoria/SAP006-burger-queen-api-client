import React from 'react';

export function InputContentUserData ({
  inputType,
  inputValue,
  inputOnChange,
  labelText,
  iconSRC,
  iconAlt,
  eyeClass,
  buttonEvent
}) {
  return (
    <div>
      <input 
        type={inputType}
        required
        value={inputValue}
        autoComplete='off'
        onChange={inputOnChange}
      />
      <label> 
        {labelText}
      </label>
      <img 
        src={iconSRC} 
        alt={iconAlt}
      />
      <button
        className={eyeClass}
        onClick={buttonEvent}
      />
    </div>
  )
}

export function InputRadioUserData ({
  inputType,
  inputValue,
  inputChecked,
  inputOnChange,
  inputOnKeyUp,
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
        onKeyPress={inputOnKeyUp}
      />
      <label> 
        {labelText}
      </label>
    </div>
  )
}
