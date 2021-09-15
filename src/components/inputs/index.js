import React from "react";
// import ReactDOM from 'react-dom';
import "../inputs/style.css";

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className="input"
      onChange={onChange}
    />
  );
};

export default Input;
