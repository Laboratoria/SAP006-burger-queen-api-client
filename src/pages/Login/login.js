import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button/button';
import InputTxt from '../../components/Input/inputTxt';
import './login.css';
import Logo from '../../img/logo-img.png';
// import Error from '../../components/Errors/errors';

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const routeHistory = useHistory();
  const salao = () => {
    routeHistory.push('/sallon');
  };
  const kitchen = () => {
    routeHistory.push('/kitchen');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginBtn(e) {
    e.preventDefault();
    if (email === '' || password === '') {
      setVisibleInput(true);
    } else {
      fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`,
      })
        .then((response) => response.json())
        .then((json) => {
          const { token } = json;
          const { id } = json;
          const tokenUser = localStorage.setItem('token', token);
          const idUser = localStorage.setItem('id', id);

          if (tokenUser !== null && idUser !== null && json.role === 'cozinha') {
            kitchen();
          } else if (tokenUser !== null && idUser !== null && json.role === 'salao') {
            salao();
          } else {
            setIsModalVisible(true);
          }
        });
    }
  }

  return (

    <div className="Login-container">
      <div className="logo-login">
        <img className="logo-img-login" src={Logo} alt="Logo The Krusty Krab" />
      </div>

      <form className="login-form">
        <h1 className="txt-login">login</h1>
        <InputTxt
          inputType="text"
          inputPlaceholder=" Digite seu E-mail"
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          inputClassName="LoginInput"
          data-testid="emailTest"
        />

        <InputTxt
          inputType="password"
          inputPlaceholder=" Digite sua senha"
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
          inputClassName="LoginInput"
          data-testid="passwordTest"
        />

        <Button
          // eslint-disable-next-line react/jsx-no-bind
          buttonOnClick={loginBtn}
          btnClassName="btnForm"
        > Login
        </Button>
        {isModalVisible ? (
          <div className="error-msg">
            <h1> Usuário não encontrado </h1>
          </div>
        ) : null}
        {visibleInput ? (
          <div className="error-msg">
            <h1> Preencha todos os campos </h1>
          </div>
        ) : null}

        <div className="btn-container-login">
          <h3> Não tem uma conta?   </h3>
          <Link to="/register">
            <h3 className="btnRegister"> Cadastre-se </h3>
          </Link>
        </div>

      </form>
    </div>
  );
}

export default Login;
