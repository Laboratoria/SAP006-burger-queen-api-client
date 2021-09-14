/* eslint-disable react/prop-types */

import React from 'react';
import './productArea.scss';

export default function ProductArea( {
    menuItemSrc,
    menuItemDescription,
    menuItemText,
    inputClass,
    inputId,
    inputName,
    inputValue,
    inputChecked,
    // inputOnChange,
    labelClass,
    menuItemClassName,
}) {
	return (
		<div className="product-container">
            <input
                type='radio'
                className={inputClass}
                id={inputId}
                name={inputName}
                value={inputValue}
                checked={inputChecked}
                // onChange={() => inputOnChange(inputId)}
            />
            <label
                htmlFor={inputId}
                className={labelClass}
                >
                <img
                    className='product-image'
                    src={menuItemSrc}
                    alt={menuItemDescription}
                />
                <p className={menuItemClassName}>{menuItemText}</p>
            </label>
        </div>
	);
}


