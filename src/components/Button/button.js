import React from 'react';

function Button ({
    buttonOnClick,
    buttonText,
    className
}){
    return(
        <button onClick={buttonOnClick} className={className}>
            {buttonText}
        </button>
    );
}

export default Button;
