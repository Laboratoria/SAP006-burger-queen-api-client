import React from 'react';

function Button ({
    buttonOnClick,
    buttonText,
}){
    return(
        <button onClick={buttonOnClick}>
            {buttonText}
        </button>
    );
}

export default Button;
