import React from 'react';
import './Button.scss';

export const Button = ({ButtonClass, ElementName, ButtonTitle, ButtonId, ButtonOnClick, children}) => {
  return (
    <button 
      data-testid = 'button'
      data-title={ButtonTitle}
      data-element-name={ElementName}
      id={ButtonId}
      type='submit' 
      className={ButtonClass} 
      onClick={ButtonOnClick}
    >
      {children}
    </button> 
  )
}
