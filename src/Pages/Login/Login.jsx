import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Image, LoginBox, Title , Form, PhraseRegister } from './style';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input.jsx'
import { LoginWithEmail } from '../../services/auth';
import login from '../../Assets/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function AuthUserLogin() {
        const user = {
            email,
            password
        }

        LoginWithEmail(user)
            .then((token) => {
                if(token) {
                localStorage.setItem('Vixi', token)
                history.push('/tables')
                } 
                else {
                    alert('deu errado o token')
                }
            })
            .catch(() => {
                alert('tente novamente')
            })
    }

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

                <Button variant='enter-app' onClick={AuthUserLogin}>
                    Login
                </Button>
                <PhraseRegister>Is your first day at Vixi?
                    <Link to='/register'>Sign in here!</Link>
                </PhraseRegister>
            </LoginBox>
    )
}

export default Login;
