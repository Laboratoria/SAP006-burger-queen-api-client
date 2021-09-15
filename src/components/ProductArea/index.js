/* eslint-disable react/prop-types */

import React from 'react';
import './productArea.scss';

export default function ProductArea( {
    productImg,
    productImgAlt,
    productName,
    productPrice,
    inputClass,
    inputId,
    inputName,
    inputValue,
    inputChecked,
    // inputOnChange,
    labelClassName,
    productClassName,
    priceClassName,
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
                className={labelClassName}
                >
                <img
                    className='product-image'
                    src={productImg}
                    alt={productImgAlt}
                />
                <p className={productClassName}>{productName}</p>
                <p className={priceClassName}>{productPrice}</p>
            </label>
        </div>
	);
}


