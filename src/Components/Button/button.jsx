import React from 'react';

function Button({
    buttonOnClick,
    buttonClass,
    children,
    
}) {
    return (
        <button onClick={buttonOnClick} className={buttonClass}>{children}</button>
    );
}

export default Button;