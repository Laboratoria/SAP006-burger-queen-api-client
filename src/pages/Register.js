import React from "react"
import { Link } from "react-router-dom";
import Button from "../components/button.js";
import Input from "../components/input.js";


const Register = () => {
return (
    <>
    <div className='register'>
      <h1>Cadastro</h1>
      <Input placeholder='Nome'></Input>
      <Input placeholder='E-mail'></Input>
      <Input placeholder='Senha'></Input>
      <Input placeholder='Confirmação de senha'></Input>
      <p>Não tem uma conta? <Link to='./Login/index.js'>
          <Button buttonText='Ir para o Login'/>
          </Link></p>
    </div>
    </>
)
}

export default Register;