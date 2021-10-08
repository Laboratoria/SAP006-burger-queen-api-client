/* eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import Input from "../../Components/input/input";

const Register = () => {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmail, setUserEmail] = useState();

  console.log(userName);
  const criarNovoUsuario = () => {
    console.log("cadastrar user");
  };

  return (
    <>
      <section className="container">
        <div className="container-form">
          <h1>Cadastro</h1>
        </div>
        <form className="formulario">
          <Input
            InputType="text"
            inputPlaceholder=" Digite seu Nome"
            inputValue={userName}
            inputOnClick={(event) => setUserName(event.target.value)}
          />

          <Input
            InputType="text"
            inputPlaceholder=" Digite seu Email"
            inputValue={userEmail}
            inputOnClick={(event) => setUserEmail(event.target.value)}
          />

          <Input
            InputType="password"
            inputPlaceholder=" Senha"
            inputValue={userPassword}
            inputOnClick={(event) => setUserPassword(event.target.value)}
          />
          <select name="role">
            <option value="chef">Chefe</option>
            <option value="waiter">Atendente</option>
          </select>

          <Button
            buttonClass="btn-form"
            buttonOnClick={() => criarNovoUsuario()}
          >
            entrar
          </Button>
        </form>
      </section>
      <Link to="/">Tenho Conta</Link>
    </>
  );
};

export default Register;
