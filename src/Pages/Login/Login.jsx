import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Image, LoginBox, Title, Form, PhraseLogin } from './style';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input.jsx'
import { LoginWithEmail } from '../../services/auth';
import login from '../../Assets/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const history = useHistory();

    function navigateTo (user) {
        user.occupation === 'Atendente' ? 
            history.push('/tables') 
            : history.push('/kitchen')
    }

    function AuthUserLogin() {
        const user = {
            email,
            password, 
            occupation
        }

        LoginWithEmail(user)
            .then((token) => {
                token ?
                    // localStorage.setItem('Vixi', token) && history.push('/tables')
                    // : alert('deu errado o token')
                    localStorage.setItem('Vixi', token) && navigateTo()
                    : alert('deu errado o token') 
            })
            .catch(() => {
                alert('tente novamente, erro no catch')
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
                {/* <Form>
                    <label>
                        <Input 
                        type='radio'
                        name='occupation'
                        value={occupation}
                        onChange={(event) => setOccupation(event.target.value)}
                        labelText='Atendente' />
                        Atendente
                    </label>
                    <label>
                        <Input 
                        type='radio' 
                        name='occupation'
                        value={occupation}
                        onChange={(event) => setOccupation(event.target.value)}
                        labelText='cozinha' />
                        Cozinha
                    </label>
                </Form> */}
                <Button variant='enter-app' onClick={AuthUserLogin}>
                    Login
                </Button>
                <PhraseLogin>É o seu primeiro dia no Vixi? <br />
                    <Link to='/register'>Crie sua conta aqui!</Link>
                </PhraseLogin>
            </LoginBox>
    )
}

export default Login;

// { user.occupation === 'Atendente' ? history.push('/tables') : history.push('/kitchen') }