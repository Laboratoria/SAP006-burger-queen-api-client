import React from 'react';

import { useHistory } from 'react-router-dom';
import { AuthModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { InputContentUserData } from '../../components/UserData/UserData';

import { login } from '../../routes/utils/auth';

import '../../styles/Auth.scss'

export function Login () {
  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const userData = {email, password}

  const [authErrorModal, setAuthErrorModal] = React.useState(false);
  const [authSucessModal, setAuthSucessModal] = React.useState(false);
  const setAuthModals = {setAuthErrorModal, setAuthSucessModal}

  const handleLogin = () => {
    const token = localStorage.getItem('currentEmployeeToken')
    const role = localStorage.getItem('currentEmployeeRole')
    login(token)
    role === 'kitchen' ? history.push('/kitchen') : history.push('/room')
  }

  const navigateTo = (history, path, setModalState) => {
    setModalState(false);
    history.push(path);
  }

  const authLogin = (event, {userData}, {setAuthModals}) => {
    const apiToLogin = 'https://lab-api-bq.herokuapp.com/auth';
    event.preventDefault();
    fetch (apiToLogin, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password
        })
    }).then((response) => {
      if (response.status === 200) {
          return response.json();
      } else {
        throw new Error(response.status);
      }
    }).then((responseJson) => {
      localStorage.setItem('currentEmployeeName', responseJson.name);
      localStorage.setItem('currentEmployeeEmail', responseJson.email);
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      localStorage.setItem('currentEmployeeRole', responseJson.role);
      if (responseJson.token !== undefined) {
        setAuthModals.setAuthSucessModal(true);
      }
    }).catch(() => {
        setAuthModals.setAuthErrorModal(true);
    })
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
          ButtonOnClick = {(event) => authLogin(event, {userData}, {setAuthModals})} 
          children = 'Entrar'
        /> 
        <div className='auth-navigation-div'>
          <p>Ou</p>
          <Button 
            Role = 'authNavigateTo'
            ButtonOnClick = {() => navigateTo(history, '/register', setAuthSucessModal)} 
            children = 'registre-se'
          /> 
        </div>
          <section>
        {authSucessModal ? (
          <AuthModal 
            Role = 'authSucessModal-login'
            ButtonOnClick = {() => handleLogin()}
          />
        ): null}
      </section>
      <section>
        {authErrorModal ? (
          <AuthModal 
            Role = 'authErrorModal-login'
            ButtonOnClick = {() => navigateTo(history, '/', setAuthErrorModal)}
            ButtonOnClickSecondOption = {() => navigateTo(history, '/register', setAuthErrorModal)}
          />
        ): null}
      </section>
    </main>
  </div>
  )
}