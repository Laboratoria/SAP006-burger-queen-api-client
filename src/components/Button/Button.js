import React from 'react';

export const Button = ({buttonType, buttonClass, buttonEvent, children}) => {
  return (
    <button 
      type={buttonType}
      className={buttonClass}
      onClick={buttonEvent}
    >
      {children}
    </button> 
  )
}
