import React from 'react';
import './ErrorMessages.scss'

export function AuthErrorMessages ({Subject}) {

  const ErrorMessagesProps = {
    'name':'Por favor, digite um nome válido.',
    'email':'Por favor, digite um email válido',
    'password':'As senhas devem conter ao menos 6 caracteres',
    'confirmPassword':'As senhas não conferem.',
    'role':'Por favor, selecione um setor de trabalho.',
    'none':'&nbsp;'
  }

  return (
    <p className={Subject === 'role' ? 'auth-error-message auth-error-message-of-role' : 'auth-error-message'}>
      {ErrorMessagesProps[Subject]}
    </p>
  )
}