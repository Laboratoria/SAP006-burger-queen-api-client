import React from 'react';

function Select({
  selectName,
  selectValue,
  selectOnChange,
  selectClassName,
  optionValue1,
  optionValue2,
  optionValue3,
  optionText1,
  optionText2,
  optionText3,
  optionClassName,
  optionDisabled,
  labelClassName,
  labelHtmlFor,
  labelText
}) {

  return (
    <>
      <label className={labelClassName} htmlFor={labelHtmlFor}>{labelText}</label>
      <select name={selectName} className={selectClassName} value={selectValue} onChange={selectOnChange}>
        <option className={optionClassName} disabled={optionDisabled} value={optionValue1}>{optionText1}</option>
        <option className={optionClassName} value={optionValue2}>{optionText2}</option>
        <option className={optionClassName} value={optionValue3}>{optionText3}</option>
      </select>
    </>
  )

}


export default Select