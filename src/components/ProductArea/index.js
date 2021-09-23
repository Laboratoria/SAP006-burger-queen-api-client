/* eslint-disable react/prop-types */

import React from 'react';

import './productArea.scss';

export default function ProductArea({
    productImg,
    productImgAlt,
    productName,
    productPrice,
    inputId,
    inputName,
    inputValue,
    inputChecked,
    className,
    onClick
}) {

    
    return (
        <div className="product-container" onClick={onClick}>
            <input
                type='radio'
                className="hidden product-name"
                id={inputId}
                name={inputName}
                value={inputValue}
                checked={inputChecked}
                price={productPrice}
                // onClick = {toggleChecked}
            />
            <label
                htmlFor={inputId}
                className="label-product-box "
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


