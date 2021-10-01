import React from 'react'

export function Button({
    type,
    className,
    value,
    onClick
}) {
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