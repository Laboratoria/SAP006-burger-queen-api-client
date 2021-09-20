import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthErrorMessages } from '../../components/ErrorMessages/ErrorMessages';
import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { InputContentUserData } from '../../components/UserData/UserData';
import { InputRadioUserData } from '../../components/UserData/UserData';

import inputRole from '../../assets/icons/input-role.png';

import { login } from '../../routes/utils/auth';

import './Auth.scss'

export const Register = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState ('');
  const userData = {name, email, password, confirmPassword, role};

  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

  const [nameErrorInput, setNameErrorInput] = useState(false);
  const [emailErrorInput, setEmailErrorInput] = useState(false);
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  const [confirmPasswordErrorInput, setConfirmPasswordErrorInput] = useState(false);
  const [roleErrorInput, setRoleErrorInput] = useState(false);

  const setAuthInputs = {setNameErrorInput, setEmailErrorInput, setPasswordErrorInput,
  setConfirmPasswordErrorInput, setRoleErrorInput}

  const handleSignin = () => {
    const token = localStorage.getItem('currentEmployeeToken')
    const role = localStorage.getItem('currentEmployeeRole')
    login(token)
    role === 'kitchen' ? history.push('/kitchen') : history.push('/room')
  }

  const navigateTo = (history, path, setModalState) => {
    setModalState(false);
    history.push(path);
  }

  const checkUserDataToSignin = ({userData}, {setAuthInputs}) => {
    if (userData.name.length < 7) {   
      setAuthInputs.setNameErrorInput(true);
      return 'Error'
    }
    else if (!userData.email.includes('@')) {
      setAuthInputs.setEmailErrorInput(true);
      return 'Error'
    }
    else if (userData.password.length < 6) {
      setAuthInputs.setPasswordErrorInput(true);
      setAuthInputs.setConfirmPasswordErrorInput(true);
      return 'Error'
    }
    else if (userData.password !== userData.confirmPassword) {
      setAuthInputs.setPasswordErrorInput(true);
      setAuthInputs.setConfirmPasswordErrorInput(true);
      return 'Error'
    } 
    else if (userData.role === '') {
      setAuthInputs.setRoleErrorInput(true);
      return 'Error'
    } else {
      return 'Sucess'
    }
  }

  const authSignin = (event, {userData}, {setAuthModals}, {setAuthInputs}) => {
    const apiToSignin = 'https://lab-api-bq.herokuapp.com/users'
    event.preventDefault();

    const userDataCheckResult = checkUserDataToSignin ({userData}, {setAuthInputs})
    if (userDataCheckResult === 'Sucess') {
      fetch(apiToSignin , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify 
          ({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role:userData.role,
          restaurant:'Berg'
          })
      }).then((response) => { 
        return response.json();
      }).then((responseJson) => {
        localStorage.setItem('currentEmployeeName', responseJson.name);
        localStorage.setItem('currentEmployeeEmail', responseJson.email);
        localStorage.setItem('currentEmployeeToken', responseJson.token);
        localStorage.setItem('currentEmployeeRole', responseJson.role);
        if (responseJson.token !== undefined) {
          setAuthModals.setAuthSucessModal(true)
        } else {
          throw new Error (responseJson.message);
        }
      }).catch(() => {
        setAuthModals.setAuthErrorModal(true)
      })
    }
  }

  
  return (
    <div className = 'login-and-register-content register-content'>
    <Header/>
      <main>
        <form>
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
            <img src={inputRole} alt='Role'/>
            <InputRadioUserData
              Subject='room'
              InputChecked={role === 'room'}
              InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
            />
            <InputRadioUserData
              Subject='kitchen'
              InputChecked={role === 'kitchen'}
              InputOnChange={(event) => [setRole(event.target.value), setRoleErrorInput(false)]}
            />
          </fieldset>
          {roleErrorInput ? <AuthErrorMessages Subject='role'/> : <p className='auth-error-message auth-error-message-of-role'>&nbsp;</p>}
        </form>
        <Button 
          Role = 'authSubmitForm'
          ButtonOnClick = {(event) => authSignin(event, {userData}, {setAuthModals}, {setAuthInputs}, checkUserDataToSignin)} 
          children = 'Registrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthSucessModal)} 
            children = 'entre'
          /> 
          <p> com uma conta existente</p>
        </div>
      </main>
      <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal-register'
            ButtonOnClick = {() => handleSignin()} 
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal-register'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthErrorModal)}
            ButtonOnClickSecondOption = {() => navigateTo(history, '/', setAuthErrorModal)}
          />
        ): null}
      </section>
    </div>
  )
}