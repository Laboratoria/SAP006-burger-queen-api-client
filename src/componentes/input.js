import React from "react"

const Input = ({type,placeholder,onChange,value,name,id}) => {
    return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} id={id}/>
    )
}
export default Input