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
    <form className='register'>
      <Input className='register-input' placeholder='Nome'></Input>
      <Input className='register-input' placeholder='E-mail'></Input>
      <Input className='register-input' placeholder='Senha'></Input>
      <Input className='register-input' placeholder='Confirmação de senha'></Input>
      <p>Não tem uma conta? 
          <Button buttonText='Ir para o Login' buttonOnClick={goToLogin}/>
      </p>
    </form>
    </div>
    </>
)
}

export default Register;