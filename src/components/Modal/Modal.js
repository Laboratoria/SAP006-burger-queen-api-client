import React from 'react';
import { Button } from '../Button/Button'

import './Modal.scss';

export function AuthModal ({ Role, ButtonOnClick, ButtonOnClickSecondOption }) {

  const Modal = {
    
    'authSucessModal-login': {
      'ModalContent':'Login realizado com sucesso!',
      'ButtonChildren':'OK',
    },
    'authErrorModal-login': {
      'ModalContent':'Usuárie não encontrade! Verifique seus dados.',
      'ButtonChildren':'Tente Novamente'
    },
    'authSucessModal-register': {
      'ModalContent':'Cadastro realizado com sucesso!',
      'ButtonChildren':'OK',
    },
    'authErrorModal-register': {
      'ModalContent':'Este email já está vinculado a outra conta.',
      'ButtonChildren':'Tente Novamente'
    },
    'test': {
      'ModalContent':'test',
      'ButtonChildren':'test'
    },
  }

  return (
    <section className='modal-background' data-testid='authModalSection'>
      <div className='modal-container' data-testid='authModalDiv'>
        <p data-testid='authModalContent'> {Modal[Role].ModalContent} </p>
        <Button 
          Role={Role}
          children={Modal[Role].ButtonChildren}
          ButtonOnClick={ButtonOnClick}
        />
        { Role === 'authErrorModal-login' ?
          <Button
            Role={Role}
            children='Crie uma nova conta'
            ButtonOnClick={ButtonOnClickSecondOption}
          /> : null
        }
        { Role === 'authErrorModal-register' ?
          <Button 
            Role={Role}
            children='Entre com uma conta já existente'
            ButtonOnClick={ButtonOnClickSecondOption}
          /> : null
        }
      </div>
    </section>
  )
}

export const MenuModal = ({Role, ModalContent, ButtonOnClick}) => {
  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p> {ModalContent} </p>
        <Button 
          Role={Role}
          children='Fechar'
          ButtonOnClick={ButtonOnClick}
        />
      </div>
    </section>
  )
  }