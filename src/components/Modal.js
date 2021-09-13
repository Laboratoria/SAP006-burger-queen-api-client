import React from 'react';

export function AuthModal ({
modalMessage,
buttonClass,
buttonEvent,
buttonText,
buttonIIClass,
buttonIIEvent,
buttonIIText
}) {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p>
          {modalMessage}
        </p>
        <button className={buttonClass} onClick={buttonEvent}>
          {buttonText}
        </button>
        <button className={buttonIIClass} onClick={buttonIIEvent}>
          {buttonIIText}
        </button>
      </div>
    </section>
  )
}