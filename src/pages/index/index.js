import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../componentes/button.js";
import Logo from "../../componentes/logo";
import "../index/index.css";

const Index = () => {
  const history = useHistory();
  const Login = () => {
    history.push("/Login");
  };
  const Cadastro = () => {
    history.push("/Cadastro");
  };

  return (
    <div className="index">
      <Logo />
      <main className="index-main">
        <h1>CLIQUE NA OPÇÃO DESEJADA</h1>
        <div className="btnLogin">
          <Button
            className="botaoLogin"
            variant="tertiary"
            onClick={Login}
            msg="Login"
          ></Button>
        </div>
        <div className="btnCadastro">
          <Button
            className="botaoCadastro"
            variant="tertiary"
            onClick={Cadastro}
            msg="Cadastro"
          ></Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
