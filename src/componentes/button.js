import React from "react"

const Button = ({type,onClick,msg,className}) => {
    return (
    <button type={type} onClick={onClick} className={className}> {msg} </button>
    )
}
export default Button