/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  // eslint-disable-next-line react/prop-types
  buttonOnClick,
  buttonText,
  buttonClass,

}) {
  return (

    <button onClick={buttonOnClick} className={buttonClass}>{buttonText}</button>
  );
}

export default Button;
