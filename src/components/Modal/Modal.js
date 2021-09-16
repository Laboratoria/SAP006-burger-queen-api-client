import React from 'react';
import { Button } from '../Button/Button'

import './Modal.scss';

export function AuthModal ({ Role, ButtonOnClick, ButtonOnClickSecondOption }) {

  const ModalProps = {
    'authSucessModal': {
      'ModalContent':'Cadastro realizado com sucesso!',
      'ButtonChildren':'OK',
    },
    'authErrorModal': {
      'ModalContent':'Usuárie não encontrade. Verifique seus dados.',
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
        { Role === 'authErrorModal' ?
          <Button 
            Role={Role}
            ButtonChildren='Cadastre se com uma nova conta'
            ButtonOnClick={ButtonOnClickSecondOption}
          /> : null
        }
      </div>
    </section>
  )
}