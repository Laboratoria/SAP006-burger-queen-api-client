import React from "react"

const Button = ({type,onClick,msg}) => {
    return (
    <button type={type} onClick={onClick}> {msg} </button>
    )
}
export default Button