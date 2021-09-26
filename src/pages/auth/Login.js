import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import logoBerg from '../../assets/images/logo-berg.png';

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

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  const handleLogin = (event) => {
    authLogin(event, {userData})
    .then((responseJson) => {
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      localStorage.setItem('currentEmployeeRole', responseJson.role);
      localStorage.setItem('currentEmployeeName', responseJson.name);
      setRole(localStorage.getItem('currentEmployeeRole'))
      setAuthModals.setAuthSucessModal(true)
    })
    .catch(() => setAuthModals.setAuthErrorModal(true))
  };

  return (
  <div className = 'login-and-register-content login-content'>
    <header className = 'auth-header' data-testid='header'>
      <Header/>
    </header>
    <main className={isLandscape && 'auth-main-landscape'}>
      {isLandscape && <img className='auth-logo-landscape' src={logoBerg} alt='Logo Berg'/>}
      <div className='auth-content-div'>  
        <form className='auth-form'>
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
            ButtonClass = 'auth-submit-form-button'
            ButtonOnClick = {(event) => handleLogin(event, {userData}, {setAuthModals})} 
            children = 'ENTRAR'
          /> 
          <div className='auth-route-navigation-div'>
            <p className='auth-route-navigation-p'>Ou</p>
            <Button 
              ButtonClass = 'auth-route-navigation-button'
              ButtonOnClick = {() => history.push('/register')} 
              children = 'registre-se'
            /> 
          </div>
      </div>
    </main>
    <section>
      {authSucessModal && (
        <AuthModal 
          ModalContent = 'Login realizado com sucesso!'
          Role = 'auth-sucess-modal'
          ButtonChildren = 'Ir para Home'
          ButtonOnClick = {() => role === 'kitchen' ? history.push('/kitchen') : history.push('/room')}
        />
      )}
    </section>
    <section>
      {authErrorModal && (
        <AuthModal 
          ModalContent = 'Usuárie não encontrade!'
          Role = 'auth-error-modal'
          ButtonChildren = 'Tente novamente'
          ButtonOnClick = {() => setAuthErrorModal(false)} 
          ButtonSecondAuthModalOptionChildren = 'Crie uma nova conta.'
          ButtOnClickSecondAuthModalOption = {() => history.push('/register')} 
        />
       )}
    </section>
  </div>
  )
}