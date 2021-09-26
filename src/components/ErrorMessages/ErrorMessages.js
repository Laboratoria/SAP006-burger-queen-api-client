import React from 'react';
import './ErrorMessages.scss'

export function AuthErrorMessages ({Subject}) {

  const ErrorMessages = {
    'name':'Por favor, digite um nome válido.',
    'email':'Por favor, digite um email válido',
    'password':'As senhas devem conter ao menos 6 caracteres',
    'confirmPassword':'As senhas não conferem.',
    'role':'Por favor, selecione um setor de trabalho.',
    'none':'&nbsp;',
    'test':'Test error message'
  };

  return (
    <p 
      data-testid='errorMessage'
      className={Subject === 'role' ? 'auth-error-message auth-error-message-of-role' : 'auth-error-message'}>
      {ErrorMessages[Subject]}
    </p>
  )
}