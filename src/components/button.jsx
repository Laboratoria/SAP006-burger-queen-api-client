/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  // eslint-disable-next-line react/prop-types
  buttonOnClick,
  buttonText,

}) {
  return (

    <button onClick={buttonOnClick}>{buttonText}</button>
  );
}

export default Button;
