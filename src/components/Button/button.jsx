/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  // eslint-disable-next-line react/prop-types
  buttonOnClick,
  buttonClass,
  children,

}) {
  return (

    <button onClick={buttonOnClick} className={buttonClass}>{children}</button>
  );
}

export default Button;
