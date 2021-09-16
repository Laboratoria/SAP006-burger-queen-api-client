import React from 'react';
import GeneralInput from './style'

const Input = ({id, ...props}) => {

    return (
        <GeneralInput id={id} {...props} />
    )
}

export default Input;