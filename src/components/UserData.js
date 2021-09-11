import React from 'react';

export function InputContentUserData ({
  inputData,
  inputConfirmPassword,
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  labelText,
  iconSRC,
  iconAlt,
  eyeClass,
  buttonEvent,
  errorMessage
}) {
  return (
    <div>
      <div>
        <input 
          data-input={inputData}
          data-input-confirm-password={inputConfirmPassword}
          type={inputType}
          required
          placeholder={inputPlaceholder}
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
      <p className='auth-error-message'>
        {errorMessage}
      </p>
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
  labelText,
  errorMessage
}) {
  return (
    <div>
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
      <p className='auth-error-message'>
        {errorMessage}
      </p>
    </div>
  )
}
