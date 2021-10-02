import React from "react";
import Button from "../../componentes/button.js";
import { useHistory } from "react-router";


const NotFound = () => {

  const history = useHistory();
  const Login = () => {
    history.push('/Login')
  }

  return (
  <div className="not-found">
    <main className="not-found-main">
      <div className="notfound-404">
        <h1>Not Found</h1>
      </div>
      <h3>A página não foi encontrada</h3>
      <Button variant="tertiary" onClick={Login} msg="Voltar para Login" > 
      </Button>
    </main>
 </div>


  )
}

export default NotFound;