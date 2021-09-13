import React from 'react';

export const Button = ({buttonType, buttonClass, buttonEvent, buttonText}) => {
  return (
    <button 
      type={buttonType}
      className={buttonClass}
      onClick={buttonEvent}
    >
      {buttonText}
    </button> 
  )
}
