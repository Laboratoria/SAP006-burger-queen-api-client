/* eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputText from "../../Components/input/input";

const Register = () => {
  const [verifyInput, setVerifyInput] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const passwordRegis = (e) => {
    e.preventDefault();
    if (userEmail === " " || userPassword === " " || userName === " ") {
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
    <>
      <section className="container">
        <div className="container-form">
          <h1>Cadastro</h1>
        </div>
        <form className="formulario">
          <InputText
            InputType="text"
            inputPlaceholder=" Digite seu Nome"
            inputValue={userName}
            inputOnChange={(event) => setUserName(event.target.value)}
          />

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
            buttonOnClick={(e) => passwordRegis(e)}
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
      </section>
      <Link to="/">Tenho Conta</Link>
    </>
  );
};

export default Register;
