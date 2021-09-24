import React from "react";
import { Link } from "react-router-dom";

const BtnRegister = (e) => {
  e.preventDefault();
  console.log('fazer requisição da API em auth/')
}

function Formulario() {
  return (
    <>
      <h1>Cadastre-se</h1>
      <form>
        <input type="name" name="name" placeholder="Nome completo" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <input type="password" name="password" placeholder="Confirme a senha" />
        <div onChange>
          <input type="radio" value="chef" name="gender" /> Cozinha
          <input type="radio" value="waiter" name="gender" /> Salão
        </div>
        <button type="submit" className="button-register" onClick={BtnRegister}>
            Cadastrar
        </button>
        <Link to="/">Já tem o cadastro? Faça o login aqui</Link>
      </form>
    </>
  ); 
}

export default Formulario;
