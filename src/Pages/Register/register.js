import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const criarNovoUsuario = (e) => {
    e.preventDefault();
    console.log("cadastrar user");

    //todos deram bom ? navega para menu
    history.push("/menu");
  };

  return (
    <>
       <h1>Cadastro</h1>
      <form>
        <input type="name" name="name" placeholder="Nome" />
        <select name="role">
          <option value="chef">Chefe</option>
          <option value="waiter">Atendente</option>
        </select>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <button type="submit" onClick={criarNovoUsuario}>
          entrar
        </button>
      </form>
      <Link to="/">Tenho Conta</Link>
    </>
  );
};

export default Register;
