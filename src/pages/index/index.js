import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../componentes/button.js";


const Index = () => {
  const history = useHistory();
  const Login = () => {
    history.push('/Login')
  }
  const Cadastro = () => {
    history.push('/Cadastro')
  }

return (
    <div className="index">
      <main className="index-main">
        <h3>Clique na opção desejada</h3>
        <Button variant="tertiary" onClick={Login} msg="Login" > 
        </Button>
        <Button variant="tertiary" onClick={Cadastro} msg="Cadastro" > 
        </Button>
   
   </main>
   </div>

  )
}

export default Index;