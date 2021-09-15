import React from 'react';

import Button from '../../components/Button';
import login from '../../Assets/login.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input.jsx'

const Login = () => {
    return (
            <div className='div-style'>
                <img src={login} alt='icon-login' />
                <p>login</p>
                <form>
                    <Input 
                        type='email' 
                        id='email' 
                        placeholder='e-mail'
                        errorMessage='Por favor, insira um e-mail válido.' 
                    />
                    <Input 
                        type='password' 
                        id='password' 
                        placeholder='senha'
                        errorMessage='Por favor, insira uma senha válida.' 
                    />
                </form>

            <Button variant='enter-app' onClick={login}>
                <Link to='/tables'>entrar</Link>
            </Button>
            <p>É o seu primeiro dia no Vixi?
                <Link to='/register'>Cadastre-se aqui</Link>
            </p>
        </div>
    )
}

export default Login;