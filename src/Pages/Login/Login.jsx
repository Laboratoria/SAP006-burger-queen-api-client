import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Image, LoginBox, Title , Form, InputForm , LoginButton, PhraseRegister } from './style';

import Button from '../../components/Button';
import Input from '../../components/Input/Input.jsx'
import { LoginWithEmail } from '../../services/auth';
import login from '../../Assets/login.png';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <LoginBox>
                <Image src={login} alt='icon-login' />
                <Title>login</Title>
                <Form>
                    <InputForm 
                        type='email' 
                        id='email' 
                        placeholder='e-mail'
                        value={email}
                        errorMessage='Por favor, insira um e-mail válido.'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <InputForm 
                        type='password' 
                        id='password' 
                        placeholder='senha'
                        value={password}
                        errorMessage='Por favor, insira uma senha válida.'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form>

                <LoginButton variant='enter-app' onClick={LoginWithEmail}>
                    <Link to='/tables'>entrar</Link>
                </LoginButton>
                <PhraseRegister>É o seu primeiro dia no Vixi?
                    <Link to='/register'>Cadastre-se aqui</Link>
                </PhraseRegister>
            </LoginBox>
    )
}

export default Login;