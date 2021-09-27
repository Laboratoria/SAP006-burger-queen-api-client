import React from "react";
import { Link, useState} from "react-router-dom";



function FormLogin() {
  const BtnLogin = (e) => {
    e.preventDefault();
    console.log('fazer requisição da API em auth/')
  }
  
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('')

  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="email" name="email" className="InputName" placeholder="E-mail" />
        <input type="password" name="password" className="InputName" placeholder="Senha" />
        <button type="submit" className="ButtonLogin" onClick={BtnLogin}> 
        Entrar
        </button>
        <Link to="/register">Ainda não tem cadastro? Cadastre-se aqui</Link>
      </form>
    </>
  ); 
}

export default FormLogin;