import React from 'react';

export function InputContentUserData ({
  inputClass,
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  labelClass,
  labelText,
  iconSRC,
  iconAlt,
  buttonClass,
  buttonEvent
}) {
  return (
    <div>
      <input 
        className={inputClass}
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
      <button
        className={buttonClass}
        onClick={buttonEvent}/>
    </div>
  )
}

export function InputRadioUserData ({
  divClass,
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
      <div className={divClass}>
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
