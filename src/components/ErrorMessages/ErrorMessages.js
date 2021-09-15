import React from 'react';

export function AuthErrorMessages ({
  children,
  errorMessageClass
}) {
  return (
    <p className={errorMessageClass}>{children}</p>
  )
}