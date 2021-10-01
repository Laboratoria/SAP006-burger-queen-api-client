import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginWithEmail } from "../../services/api";
import monsterLogo from "../../img/monsterLogo.png";

function FormLogin() {
  const BtnLogin = (e) => {
    loginWithEmail({
      email: email,
      password: password,
    });
    e.preventDefault();
    console.log("fazer requisição da API em auth/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();
  console.log(email);

  return (
    <section className="mainBox">
      <img className="imgLogo" src={monsterLogo} alt="icon-login" />
      <div className="loginBox">
        <p className="title">login</p>
        <form className="form">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            errormessage="Por favor, insira um e-mail válido."
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            errormessage="Por favor, insira uma senha válida."
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <button type="submit" onClick={BtnLogin}>
          Entrar
        </button>
        <p className="phraseLogin">
          Não tem cadastro? <br />
          <Link to="/register">Crie sua conta aqui!</Link>
        </p>
      </div>
    </section>
  );
}

export default FormLogin;
