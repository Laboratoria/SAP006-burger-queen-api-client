import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputText from "../../Components/imput/imput";
import "./login.css";
import Logo from '../../img/logo-img-login';


const Login = () => {
  const [verifyInput, setVerifyInput] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const passwordlogin = (e) => {
    e.preventDefault();
    if (userEmail === " " || userPassword === " ") {
      setVerifyInput(true);
    }
    if (userPassword.length < 6) {
      setVerifyPassword(true);
    } else {
      console.log("entrou no else");
    }

    //console.log("cadastrar user")
  };

  return (

    <div className="login-container">
         <img className="logo-img-login" src={Logo} alt="Logo naruto" ></img>
        <form className="login-form">
          <h1 className="text-login">Login</h1>
          <InputText
            inputType="text"
            inputPlaceholder=" Digite seu Email"
            inputValue={userEmail}
            inputOnChange={(event) => setUserEmail(event.target.value)}
          />

          <InputText
            InputType="password"
            inputPlaceholder=" Senha"
            inputValue={userPassword}
            inputOnChange={(event) => setUserPassword(event.target.value)}
          />

          <Button
            buttonOnClick={(e) => passwordlogin(e)}
            buttonClass="btn-form"
          >
            entrar
          </Button>
          {verifyPassword ? (
            <div className="erro">
              <h2>preencha o campo corretamente</h2>
            </div>
          ) : null}
          {verifyInput ? (
            <div className="erro">
              <h2>preencha o campo corretamente</h2>
            </div>
          ) : null}
          
        </form>
      <Link to="/Cadastro">Cadastre aqui</Link>
   </div>
  );
};
export default Login;
