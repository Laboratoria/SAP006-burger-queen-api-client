import React from "react"
import Button from "../../components/button";
import Input from "../../components/input";
import { useHistory } from 'react-router-dom';
import './Register.css'


const Register = () => {

	const history = useHistory();

	const goToLogin = () => {
		history.push('/Login')
	}

return (
    <>
    <div className='container-register'>
    <div className='register'>
      <Input placeholder='Nome'></Input>
      <Input placeholder='E-mail'></Input>
      <Input placeholder='Senha'></Input>
      <Input placeholder='Confirmação de senha'></Input>
      <p>Não tem uma conta? 
          <Button buttonText='Ir para o Login' buttonOnClick={goToLogin}/>
      </p>
    </div>
    </div>
    </>
)
}

export default Register;