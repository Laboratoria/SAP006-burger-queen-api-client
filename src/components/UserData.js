import React from 'react';

export function InputContentUserData ({
  inputData,
  inputConfirmPassword,
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  labelClass,
  labelText,
  iconSRC,
  iconAlt
}) {
  return (
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
      <label className={labelClass}> 
        {labelText}
      </label>
      <img 
        src={iconSRC} 
        alt={iconAlt}
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
