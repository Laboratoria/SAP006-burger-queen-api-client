import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { loginWithEmail } from '../../services/auth';
import { getRouteByRole } from '../../routes/redirections'

import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import {Image, LoginBox, Title, Form, PhraseLogin } from './style';
import login from '../../Assets/login.png';

const Login = ({Login}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        return Login();
    }

    function authUserLogin() {
        const user = {
            email,
            password,
        }

        loginWithEmail(user)
        .then((json) => {
            const route = getRouteByRole(json.role);
            history.push(route);      
        })
    }

    return (
            <LoginBox>
                <Image src={login} alt='icon-login' />
                <Title>login</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type='email' 
                        id='email' 
                        placeholder='email'
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
                <Button primary onClick={authUserLogin}>
                    Login
                </Button>
                <PhraseLogin>É o seu primeiro dia no Vixi? <br />
                    <Link to='/register'>Crie sua conta aqui!</Link>
                </PhraseLogin>
            </LoginBox>
    )
}

export default Login;
