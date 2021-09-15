import React from 'react';



const Input = ({placeholder, className, onChange, value}) => {
return (
    <input type='text' placeholder={placeholder} className={className} onChange={onChange} value={value}></input>
)
}
export default Input;