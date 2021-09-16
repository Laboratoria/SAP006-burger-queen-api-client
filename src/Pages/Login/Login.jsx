import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Image, LoginBox, Title , Form, PhraseRegister } from './style';

import Button from '../../components/Button/Button';
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
                    <Input
                        type='email' 
                        id='email' 
                        placeholder='e-mail'
                        value={email}
                        errormessage='Por favor, insira um e-mail válido.'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type='password' 
                        id='password' 
                        placeholder='senha'
                        value={password}
                        errormessage='Por favor, insira uma senha válida.'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form>

                <Button variant='enter-app' onClick={LoginWithEmail}>
                    <Link to='/tables'>Login</Link>
                </Button>
                <PhraseRegister>Is your first day at Vixi?
                    <Link to='/register'>Sign in here!</Link>
                </PhraseRegister>
            </LoginBox>
    )
}

export default Login;
