import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { DefaultModal } from '../../components/Modal/Modal';
import { AuthErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { InputContentUserData, InputRadioUserData } from '../../components/UserData/UserData';

import { authSignin } from '../../services/auth';

import logoBerg from '../../assets/images/logo-berg.png';
import inputRole from '../../assets/icons/input-role.png';
import './Auth.scss'

export const Register = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState ('');
  const userData = {name, email, password, confirmPassword, role};

  const [nameErrorInput, setNameErrorInput] = useState(false);
  const [emailErrorInput, setEmailErrorInput] = useState(false);
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  const [confirmPasswordErrorInput, setConfirmPasswordErrorInput] = useState(false);
  const [roleErrorInput, setRoleErrorInput] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const checkUserDataToSignin = ({userData}) => {
    if (userData.name.length < 7) {   
      setNameErrorInput(true);
      return 'Error';
    }
    else if (!userData.email.includes('@')) {
      setEmailErrorInput(true);
      return 'Error';
    }
    else if (userData.password.length < 6) {
      setPasswordErrorInput(true);
      setConfirmPasswordErrorInput(true);
      return 'Error';
    }
    else if (userData.password !== userData.confirmPassword) {
      setPasswordErrorInput(true);
      setConfirmPasswordErrorInput(true);
      return 'Error';
    } 
    else if (userData.role === '') {
      setRoleErrorInput(true);
      return 'Error';
    } else {
      return 'Sucess';
    }
  }

  const handleSignIn = (event) => {
    const userDataCheckResult = checkUserDataToSignin ({userData});
    userDataCheckResult === 'Sucess' &&
    authSignin(event, {userData})
    .then((responseJson) => {
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      localStorage.setItem('currentEmployeeRole', responseJson.role);
      localStorage.setItem('currentEmployeeName', responseJson.name);
      const role = responseJson.role;
      setModalContent(modalContent => ({...modalContent, 
        Type: 'one-button-modal',
        Text: 'Login realizado com sucesso!', 
        ButtonChildren: 'Ir para Home',
        ButtonClick: () => role === 'kitchen' ? history.push('/kitchen') : history.push('/room')
      }))
      setModal(true)
    })
    .catch((error) => {setModalContent(modalContent => 
      ({...modalContent, 
        Type: 'two-buttons-modal',
        ButtonChildren: 'Tente Novamente',
        ButtonClick: () => setModal(false),
        ButtonSecondChildren:'Entrar com uma conta já existente',
        ButtonSecondClick:() => history.push('/')   
      })
    )
      error.message === '400' ? 
      setModalContent(modalContent => ({...modalContent,  Text: 'Todos os campos são obrigatórios. Verifique seus dados.'})) :
      setModalContent(modalContent => ({...modalContent,  Text: 'Este email já está em uso.'}))
      setModal(true)
    });
  }

  return (
    <div className = 'login-and-register-content register-content'>
      <header className = 'auth-header' data-testid='header'>
        <Header/>
      </header>
      <main className={isLandscape && 'auth-main-landscape'}>
        {isLandscape && 
        <img className='auth-logo-landscape' src={logoBerg} alt='Logo Berg'/>}
        <div className='auth-content-div'>  
          <form className='auth-form'>
            <InputContentUserData 
              Subject='name'
              Error={nameErrorInput}
              InputValue = {name}
              InputOnChange = {(event) => [setName(event.target.value), setNameErrorInput(false)]}
            />
            {nameErrorInput ? <AuthErrorMessages Subject='name'/> : <p className='auth-error-message'>&nbsp;</p>}
            <InputContentUserData 
              Subject='email'
              Error={emailErrorInput}
              InputValue = {email}
              InputOnChange = {(event) => [setEmail(event.target.value), setEmailErrorInput(false)]}
            />
            {emailErrorInput ? <AuthErrorMessages Subject='email'/> : <p className='auth-error-message'>&nbsp;</p>}
            <InputContentUserData 
              Subject='password'
              Error={passwordErrorInput}
              InputValue = {password}
              InputOnChange = {(event) => [setPassword(event.target.value), setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}   
            />
            {passwordErrorInput ? 
              password !== confirmPassword ? 
                <AuthErrorMessages Subject='confirmPassword'/> : <AuthErrorMessages Subject='password'/> 
              : <p className='auth-error-message'>&nbsp;</p>}
            <InputContentUserData 
              Subject='confirmPassword'
              InputValue = {confirmPassword}
              Error={passwordErrorInput}
              InputOnChange = {(event) => [setConfirmPassword(event.target.value),  setPasswordErrorInput(false), setConfirmPasswordErrorInput(false)]}   
            />
            {confirmPasswordErrorInput ? 
              password !== confirmPassword ? 
                <AuthErrorMessages Subject='confirmPassword'/> : <AuthErrorMessages Subject='password'/> 
              : <p className='auth-error-message'>&nbsp;</p>}
            <fieldset className = {roleErrorInput ? 'auth-role-input-fieldset auth-wrong-input' : 'auth-role-input-fieldset auth-correct-input'}>
              <img src={inputRole} alt='Role' className='auth-input-img'/>
              <InputRadioUserData
                Subject='room'
                LabelText='Salão'
                InputChecked={role === 'room'}
                InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
              />
              <InputRadioUserData
                Subject='kitchen'
                LabelText='Cozinha'
                InputChecked={role === 'kitchen'}
                InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
              />
            </fieldset>
            {roleErrorInput ? <AuthErrorMessages Subject='role'/> : <p className='auth-error-message auth-error-message-of-role'>&nbsp;</p>}
          </form>
          <Button 
            ButtonClass = 'auth-submit-form-button'
            ButtonOnClick = {(event) => handleSignIn(event, {userData})} 
            children = 'REGISTRAR'
          /> 
          <div className='auth-route-navigation-div'>
            <p className='auth-route-navigation-p'>Ou</p>
            <Button 
              ButtonClass = 'auth-route-navigation-button'
              ButtonOnClick = {() => history.push('/')} 
              children = 'entre'
            /> 
            <p className='auth-route-navigation-p'> com uma conta existente</p>
          </div>
        </div>
      </main>
      <section>
      {modal && (
        <DefaultModal
          Type = {modalContent.Type}
          ModalContent = {modalContent.Text}
          ButtonChildren = {modalContent.ButtonChildren}
          ButtonOnClick = {modalContent.ButtonClick} 
          ButtonSecondAuthModalOptionChildren = {modalContent.ButtonSecondChildren}
          ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick} 
        />
      )}
    </section>
    </div>
  )
}