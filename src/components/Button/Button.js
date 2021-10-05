import React from 'react'

export const Button = ({
    type,
    className,
    value,
    onClick
}) => {
    return (
        <button
            type={type}
            className={className}
            value={value}
            onClick={onClick}>
            {value}
        </button>

    )
}

export default Button;