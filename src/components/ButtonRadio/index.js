/* eslint-disable react/prop-types */

import React from 'react';
import './buttonRadio.scss'

export default function ButtonRadio({ 
	onChange,
	firstInputName,
	firstInputvalue,
	firstInputid,
	firstLabel,
	firstPrice,
	firstClassName,
	secondInputName,
	secondInputvalue,
	secondInputid,
	secondLabel,
	secondPrice,
	secondClassName,
	thirdInputName,
	thirdInputvalue,
	thirdInputid,
	thirdLabel,
	thirdClassName
}) {
  return (
    <div className="switch-field">
      <input type="radio"
							variant="secondary"
							name={firstInputName}
							value={firstInputvalue}
							id={firstInputid}
							onChange={onChange}
							/>
      <label className={firstClassName} htmlFor={firstInputid}>{firstLabel}<br></br>{firstPrice}</label>

      <input type="radio"
							variant="secondary"
							name={secondInputName}
							value={secondInputvalue}
							id={secondInputid}
							onChange={onChange}
							/>
      <label className={secondClassName} htmlFor={secondInputid}>{secondLabel}<br></br>{secondPrice}</label>

	  <input type="radio"
							variant="secondary"
							name={thirdInputName}
							value={thirdInputvalue}
							id={thirdInputid}
							onChange={onChange}
							/>
      <label className={thirdClassName} htmlFor={thirdInputid}> {thirdLabel} </label>
    </div>
  )
}