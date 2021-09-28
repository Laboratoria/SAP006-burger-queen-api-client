import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { DefaultModal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { InputContentUserData } from '../../components/UserData/UserData';

import { authLogin } from '../../services/auth';

import logoBerg from '../../assets/images/logo-berg.png';
import './Auth.scss';

export function Login () {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  const userData = {email, password};

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const handleLogin = (event) => {
    authLogin(event, {userData})
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
      setModal(true);
    })
    .catch(() => {setModalContent(modalContent => 
      ({...modalContent, 
        Type: 'two-buttons-modal',
        Text: 'Usuárie não encontrade!', 
        ButtonChildren: 'Tente Novamente',
        ButtonClick: () => setModal(false),
        ButtonSecondChildren:'Criar uma nova conta',
        ButtonSecondClick:() => history.push('/register')   
      })
      )
      setModal(true)
    })
    ;
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
            ButtonOnClick = {(event) => handleLogin(event, {userData})} 
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