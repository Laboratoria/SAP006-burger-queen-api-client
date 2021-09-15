import React from 'react';

export const Button = ({datatestid, buttonType, buttonClass, buttonEvent, children}) => {
  return (
    <button 
      data-testid={datatestid}
      type={buttonType}
      className={buttonClass}
      onClick={buttonEvent}
    >
      {children}
    </button> 
  )
}
