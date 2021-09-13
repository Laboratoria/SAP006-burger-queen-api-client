import React from 'react';

export function AuthErrorMessages ({
  textErrorMessage
}) {
  return (
    <p className='auth-error-message'>{textErrorMessage}</p>
  )
}