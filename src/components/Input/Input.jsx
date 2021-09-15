import React from 'react';

const Input = ({id, ...props}) => {

    return (
        <input id={id} {...props} />
    )
}



export default Input;