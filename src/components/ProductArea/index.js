/* eslint-disable react/prop-types */

import React from 'react';
import './productArea.scss';

export default function ProductArea( {
    productImg,
    productImgAlt,
    productName,
    productPrice,
    inputId,
    inputName,
    inputValue,
    inputChecked,
    // inputOnChange,
}) {
	return (
		<div className="product-container">
            <input
                type='radio'
                className="hidden product-name"
                id={inputId}
                name={inputName}
                value={inputValue}
                checked={inputChecked}
                // onChange={() => inputOnChange(inputId)}
            />
            <label
                htmlFor={inputId}
                className="label-product-box"
                >
                <img
                    className='product-image'
                    src={productImg}
                    alt={productImgAlt}
                />
                <p className="product-name">{productName}</p>
                <p className="product-price">{productPrice}</p>
            </label>
        </div>
	);
}


