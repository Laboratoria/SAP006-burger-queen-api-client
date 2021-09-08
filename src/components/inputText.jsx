import React from 'react';

function InputTxt({
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputClassName,
  labelClassName,
  labelHtmlFor,
  labelText,
  inputOnClick
}) {

  return (
    <>
      <label className={labelClassName} htmlFor={labelHtmlFor}>{labelText}</label>
      <input onClick={inputOnClick} type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputOnChange}
       className={inputClassName}/>
    </>
  )

}


export default InputTxt