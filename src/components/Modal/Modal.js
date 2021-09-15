import React from 'react';

import { Button } from '../Button/Button'

export function AuthModal ({
children,
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
          {children}
        </p>
        <Button buttonClass={buttonClass} buttonEvent={buttonEvent}>
          {buttonText}
        </Button>
        <Button buttonClass={buttonIIClass} buttonEvent={buttonIIEvent}>
          {buttonIIText}
        </Button>
      </div>
    </section>
  )
}