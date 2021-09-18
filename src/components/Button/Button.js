import React from 'react';

const showEvent = () => {
    console.log('evento clicado')
}

export default function Button({ label }) {
    return(
        <div>
            <button onClick={showEvent}>{ label }</button>
        </div>
    )
};

