import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { AuthErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import { StandardModal, StandardModalWithTwoOptions } from '../../components/Modal/Modal';
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
  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);
  const [authErrorModalMessage, setAutherrorModalMessage] = useState('');
  const [nameErrorInput, setNameErrorInput] = useState(false);
  const [emailErrorInput, setEmailErrorInput] = useState(false);
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  const [confirmPasswordErrorInput, setConfirmPasswordErrorInput] = useState(false);
  const [roleErrorInput, setRoleErrorInput] = useState(false);

  const userData = {name, email, password, confirmPassword, role};
  const setAuthInputs = {setNameErrorInput, setEmailErrorInput, setPasswordErrorInput,
  setConfirmPasswordErrorInput, setRoleErrorInput};
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal};

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const checkUserDataToSignin = ({userData}, {setAuthInputs}) => {
    if (userData.name.length < 7) {   
      setAuthInputs.setNameErrorInput(true);
      return 'Error';
    }
    else if (!userData.email.includes('@')) {
      setAuthInputs.setEmailErrorInput(true);
      return 'Error';
    }
    else if (userData.password.length < 6) {
      setAuthInputs.setPasswordErrorInput(true);
      setAuthInputs.setConfirmPasswordErrorInput(true);
      return 'Error';
    }
    else if (userData.password !== userData.confirmPassword) {
      setAuthInputs.setPasswordErrorInput(true);
      setAuthInputs.setConfirmPasswordErrorInput(true);
      return 'Error';
    } 
    else if (userData.role === '') {
      setAuthInputs.setRoleErrorInput(true);
      return 'Error';
    } else {
      return 'Sucess';
    }
  }

  const handleSignIn = (event) => {
    const userDataCheckResult = checkUserDataToSignin ({userData}, {setAuthInputs});
    userDataCheckResult === 'Sucess' &&
    authSignin(event, {userData})
    .then((responseJson) => {
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      localStorage.setItem('currentEmployeeRole', responseJson.role);
      localStorage.setItem('currentEmployeeName', responseJson.name);
      setRole(localStorage.getItem('currentEmployeeRole'));
      setAuthModals.setAuthSucessModal(true);
    })
    .catch((error) => {
      switch (error.message) {
        case '400':
          setAutherrorModalMessage('Todos os campos são obrigatórios. Verifique seus dados.');
          setAuthModals.setAuthErrorModal(true);
          break;
          case '403':
          setAutherrorModalMessage('Este email já está em uso.');
          setAuthModals.setAuthErrorModal(true);
          break;
        default:
          setAutherrorModalMessage('Desculpe, ocorreu um erro. Verifique seus dados.');
          setAuthModals.setAuthErrorModal(true);
      }
    })
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
        {authSucessModal && (
          <StandardModal 
            ModalContent = 'Cadastro realizado com sucesso!'
            ButtonChildren = 'Ir para Home'
            ButtonOnClick = {() => role === 'kitchen' ? history.push('/kitchen') : history.push('/room')}
          />
        )}
      </section>
      <section>
        {authErrorModal && (
          <StandardModalWithTwoOptions
            ModalContent = {authErrorModalMessage}
            ButtonChildren = 'Tente novamente'
            ButtonOnClick = {() => setAuthErrorModal(false)} 
            ButtonSecondAuthModalOptionChildren = 'Entre com uma conta já existente.'
            ButtOnClickSecondAuthModalOption = {() => history.push('/register')} 
          />
        )}
      </section>
    </div>
  )
}