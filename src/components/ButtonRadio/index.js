/* eslint-disable react/prop-types */

import React from 'react';
import './buttonRadio.scss'

export default function ButtonRadio({ 
	onChange,
	firstInputName,
	firstInputValue,
	firstInputId,
	firstLabel,
	firstPrice,
	firstClassName,
	secondInputName,
	secondInputValue,
	secondInputId,
	secondLabel,
	secondPrice,
	secondClassName,
	thirdInputName,
	thirdInputValue,
	thirdInputId,
	thirdLabel,
	thirdClassName
}) {
  return (
    <div className="switch-field">
      <input type="radio"
							variant="secondary"
							name={firstInputName}
							value={firstInputValue}
							id={firstInputId}
							onChange={onChange}
							/>
      <label className={firstClassName} htmlFor={firstInputId}>{firstLabel}<br></br>{firstPrice}</label>

      <input type="radio"
							variant="secondary"
							name={secondInputName}
							value={secondInputValue}
							id={secondInputId}
							onChange={onChange}
							/>
      <label className={secondClassName} htmlFor={secondInputId}>{secondLabel}<br></br>{secondPrice}</label>

	  <input type="radio"
							variant="secondary"
							name={thirdInputName}
							value={thirdInputValue}
							id={thirdInputId}
							onChange={onChange}
							/>
      <label className={thirdClassName} htmlFor={thirdInputId}> {thirdLabel} </label>
    </div>
  )
}