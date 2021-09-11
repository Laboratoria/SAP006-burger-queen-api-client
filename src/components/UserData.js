import React from 'react';

export function InputContentUserData ({
  inputData,
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
        data-input={inputData}
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
  inputData,
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
        data-input={inputData}
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
