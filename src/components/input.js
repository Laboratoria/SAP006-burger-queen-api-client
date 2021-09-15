import React from 'react';



const Input = ({placeholder, className, onChange, value, name}) => {
return (
    <input type='text' placeholder={placeholder} className={className} name={name} onChange={onChange} value={value}></input>
)
}
export default Input;