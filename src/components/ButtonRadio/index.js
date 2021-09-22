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
	thirdClassName,
	className,
	className2,
	name,

}) {
  return (
    <div className={className2}>
      <input type="radio"
							name={name}
							value={firstInputValue}
							id={firstInputId}
							onChange={onChange}
							data-item={firstLabel}
							price={firstPrice}
					
						
							/>
      <label className={`${firstClassName} ${className}`} htmlFor={firstInputId}><b>{firstLabel}</b><br></br>{firstPrice}</label>

      <input type="radio"
							name={name}
							value={secondInputValue}
							id={secondInputId}
							onChange={onChange}
							data-item={secondLabel}
							price={secondPrice}
							/>
      <label className={`${secondClassName} ${className}`} htmlFor={secondInputId}><b>{secondLabel}</b><br></br>{secondPrice}</label>

	  <input type="radio"
							name={name}
							value={thirdInputValue}
							id={thirdInputId}
							onChange={onChange}
							className={className}
							/>
      <label className={`${thirdClassName} ${className}`} htmlFor={thirdInputId}> <b>{thirdLabel} </b></label>
    </div>
  )
}