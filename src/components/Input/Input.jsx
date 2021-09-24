import React from 'react';
import './input.scss';

const Input = ({id, variant, ...props}) => {

    const classes = `input ${variant}`;

    return (
        <input id={id} variant className={classes} {...props} />
    )
}

export { Input };