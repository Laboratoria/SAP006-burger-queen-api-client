import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { InputContentUserData } from '../../components/UserData/UserData';

import { authLogin } from '../../services/auth';

import './Auth.scss'

export function Login () {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [authErrorModal, setAuthErrorModal] = useState(false);
  const [authSucessModal, setAuthSucessModal] = useState(false);

  const userData = {email, password}
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

  const handleLogin = (event) => {
   authLogin(event, {userData})
    .then((responseJson) => {
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      localStorage.setItem('currentEmployeeRole', responseJson.role);
      setRole(localStorage.getItem('currentEmployeeRole'))
      setAuthModals.setAuthSucessModal(true)
    })
    .catch(() => setAuthModals.setAuthErrorModal(true))
  };

  return (
  <div className = 'login-and-register-content login-content' data-testid='login-div'>
    <Header/>
    <main>
      <form>
        <InputContentUserData 
          Subject='email'
          InputValue = {email}
          InputOnChange = {(event) => setEmail(event.target.value)}
        />
        <InputContentUserData 
          Subject='password'
          InputValue = {password}
          InputOnChange = {(event) => setPassword(event.target.value)}   
        />
      </form>
        <Button 
          Role = 'authSubmitForm'
          ButtonOnClick = {(event) => handleLogin(event, {userData}, {setAuthModals})} 
          children = 'Entrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => history.push('/register')} 
            children = 'registre-se'
          /> 
        </div>
      </main>
      <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal-login'
            ButtonOnClick = {() => role === 'kitchen' ? history.push('/kitchen') : history.push('/room')}
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal-login'
            ButtonOnClick = {() => setAuthErrorModal(false)} 
            ButtonOnClickSecondOption = {() => history.push('/register')} 
          />
        ): null}
      </section>
  </div>
  )
}