import React from "react";
// import ReactDOM from 'react-dom';
import "../inputs/style.css";

const Input = ({ name, type, placeholder, value, onChange, max, min }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className="input"
      onChange={onChange}
      max={max}
      min={min}
    />
  );
};

export default Input;
