import React from 'react';

export function Button ({
  buttonType,
  buttonClass,
  buttonEvent,
  buttonText
}) {
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