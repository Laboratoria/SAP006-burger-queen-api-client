import React from 'react';
import { Button } from '../Button/Button'

import './Modal.scss';

export function AuthModal ({ Role, ButtonOnClick, ButtonOnClickSecondOption }) {

  const ModalProps = {
    'authSucessModal-login': {
      'ModalContent':'Cadastro realizado com sucesso!',
      'ButtonChildren':'OK',
    },
    'authErrorModal-login': {
      'ModalContent':'Usuárie não encontrade. Verifique seus dados.',
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
  }

  return (
    <section className='modal-background'>
      <div className='modal-container'>
        <p> {ModalProps[Role].ModalContent} </p>
        <Button 
          Role={Role}
          ButtonChildren={ModalProps[Role].ButtonChildren}
          ButtonOnClick={ButtonOnClick}
        />
        { Role === 'authErrorModal-login' ?
          <Button 
            Role={Role}
            ButtonChildren='Crie uma nova conta.'
            ButtonOnClick={ButtonOnClickSecondOption}
          /> : null
        }
        { Role === 'authErrorModal-register' ?
          <Button 
            Role={Role}
            ButtonChildren='Entre com uma conta já existente.'
            ButtonOnClick={ButtonOnClickSecondOption}
          /> : null
        }
      </div>
    </section>
  )
}