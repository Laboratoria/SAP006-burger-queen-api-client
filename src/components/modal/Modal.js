import React from 'react';

export default function Modal ({showModal, setShowModal, children}) {
    return (
    <>
    {showModal ? (
        <div>
            <div showModal={showModal}>
            <div>
                {children}
            </div>
            <div aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
            </div>
        </div>

    
    ): null}
        
    </>
    
    )
};

