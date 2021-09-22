import React from 'react';
import GeneralInput from './style'

const Input = ({id, variant, ...props}) => {

    const classes = `input ${variant}`;

    return (
        <GeneralInput id={id} variant className={classes} {...props} />
    )
}

export { Input };