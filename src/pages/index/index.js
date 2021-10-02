import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../componentes/button.js";
import Cadastro from "../cadastro/cadastro.js";
import Login from "../login/login.js";

const Home = () => {
  const history = useHistory();
  const Login = () => {
    history.push('/Login')
  }
  const Cadastro = () => {
    history.push('/Cadastro')
  }

return (
    <div className="home">
      <main className="home-main">
        <h3>Clique na opção desejada</h3>
        <Button variant="tertiary" onClick={Login} msg="Login" > 
        </Button>
        <Button variant="tertiary" onClick={Cadastro} msg="Cadastro" > 
        </Button>
   
   </main>
   </div>

  )
}

export default Home;