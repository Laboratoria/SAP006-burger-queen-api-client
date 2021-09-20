import React from 'react'

export function Button({
    type,
    className,
    value
}) {
    return (
        <button
            type={type}
            className={className}
            value={value}>
            {value}
        </button>

    )
}




//import { Button } from '../Button/button';

/* function Button(props) {
    const { name, onClick } = props  //mesma coisa de const name = props.name//

    return (
        <button onClick={onClick}>{name}</button>

    )
}

export default Button;*/