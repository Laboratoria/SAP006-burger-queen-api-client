import React from "react";
import { Link } from "react-router-dom";
//import "./login.css";

const Login = () => {
  const logar = () => {};

  return (
    <>
      <h1>Login</h1>

      <button type="submit" onClick={logar}>
        entrar
      </button>
      <Link to="/Cadastro">Cadastre aqui</Link>
    </>
  );
};

export default Login;
