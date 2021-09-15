import React from 'react';
import { Button } from '../Button/Button';

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
  buttonEvent,
}) {
  return (
    <div data-testid='user-data-div-text-content'>
      <input 
        data-testid='user-data-input-text-content'
        className={inputClass}
        type={inputType}
        required
        placeholder={inputPlaceholder}
        value={inputValue}
        autoComplete='off'
        onChange={inputOnChange}
      />
      <label 
      data-testid='user-data-label-text-content'
      className={labelClass}
      > 
        {labelText}
      </label>
      <img
        data-testid='user-data-img-text-content'
        src={iconSRC} 
        alt={iconAlt}
      />
      <Button
        datatestid='user-data-btn-text-content'
        buttonClass={buttonClass}
        buttonEvent={buttonEvent}
      />
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
