import React from "react";
import "./Button.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn-global">   
      {children}
    </button>
  );
};

export default Button;

// import React from 'react'

// export const Button = ({
//     type,
//     className,
//     value,
//     onClick
// }) => {
//     return (
//         <button
//             type={type}
//             className={className}
//             value={value}
//             onClick={onClick}>
//             {value}
//         </button>

//     )
// }

// export default Button;
