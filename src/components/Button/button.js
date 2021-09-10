import React from 'react';

function Button({
  buttonOnClick,
  buttonText,
  typeBtn,
  classBtn,

}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={typeBtn}
      className={classBtn}
      onClick={buttonOnClick}
    >
      {buttonText}
    </button>

  );
}

export default Button;
