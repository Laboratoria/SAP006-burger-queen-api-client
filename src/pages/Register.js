import React from "react"
import { Link, useHistory } from "react-router-dom";
import Button from "../components/button.js";
import Input from "../components/input.js";


const Register = () => {

	const history = useHistory();

	const goToLogin = () => {
		history.push('/Login')
	}

return (
    <>
      <h1>Cadastro</h1>
    <div className='login'>
      <Input placeholder='Nome'></Input>
      <Input placeholder='E-mail'></Input>
      <Input placeholder='Senha'></Input>
      <Input placeholder='Confirmação de senha'></Input>
      <p>Não tem uma conta? 
          <Button buttonText='Ir para o Login' buttonOnClick={goToLogin}/>
      </p>
    </div>
    </>
)
}

export default Register;