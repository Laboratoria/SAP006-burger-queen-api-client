import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input/Input.jsx'
import { LoginWithEmail } from '../../services/auth';
import login from '../../Assets/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <div className='div-style'>
                <img src={login} alt='icon-login' />
                <p>login</p>
                <form>
                    <Input 
                        type='email' 
                        id='email' 
                        placeholder='e-mail'
                        value={email}
                        errorMessage='Por favor, insira um e-mail válido.'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        id='password' 
                        placeholder='senha'
                        value={password}
                        errorMessage='Por favor, insira uma senha válida.'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </form>

            <Button variant='enter-app' onClick={LoginWithEmail}>
                <Link to='/tables'>entrar</Link>
            </Button>
            <p>É o seu primeiro dia no Vixi?
                <Link to='/register'>Cadastre-se aqui</Link>
            </p>
        </div>
    )
}

export default Login;