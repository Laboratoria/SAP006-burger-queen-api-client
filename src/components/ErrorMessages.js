import React from 'react';

export function AuthErrorMessages ({
  errorMessageText,
  errorMessageClass
}) {
  return (
    <p className={errorMessageClass}>{errorMessageText}</p>
  )
}