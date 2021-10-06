import React from "react";

import { Link } from "react-router-dom";
const Login = () => {
  const logar = () => {};

  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="email" name="email" placeholder="Digite o e-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <button type="submit" onClick={logar}>
          entrar
        </button>
        <Link to="/Cadastro">Cadastre aqui</Link>
      </form>
    </>
  );
};

export default Login;
