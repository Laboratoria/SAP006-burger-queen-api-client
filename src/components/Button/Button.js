import React from 'react';

export default function Button ({ onClick, className, type, text, img }) {
    return(
        <button 
            type={type}
            onClick={onClick}
            className={className}
            image={img}
        >
            {text}     
        </button>
    );
};

