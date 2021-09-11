import React from 'react';

import { Button } from './Button';

export function AuthModal ({
modalMessage,
}) {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p>
          {modalMessage}
        </p>
        <Button />
      </div>
    </section>
  )
}