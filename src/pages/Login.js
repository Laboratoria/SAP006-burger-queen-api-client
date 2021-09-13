import React from "react"
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

const Login = () => {
return (
    <>
    <div className='login'>
      <h1>Login</h1>
      <Input placeholder='E-mail'></Input>
      <Input placeholder='Senha'></Input>
      <p>Não tem uma conta? <Link to='./Register/index.js'>
          <Button buttonText='Registre-se'/>
          </Link></p>
    </div>
    </>
)
}

export default Login;