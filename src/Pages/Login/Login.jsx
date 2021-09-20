import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoginWithEmail } from '../../services/auth';
import { Login as LoginAuth } from '../../services/auth';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import {Image, LoginBox, Title, Form, PhraseLogin } from './style';
import login from '../../Assets/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [occupation, setOccupation] = useState('');
    const history = useHistory();

    // function navigateTo (user) {
    //     user.occupation === 'Atendente' ? 
    //         history.push('/tables') 
    //         : history.push('/kitchen')
    // }

    function AuthUserLogin() {
        const user = {
            email,
            password, 
            // occupation
        }

        LoginWithEmail(user)
            .then((token) => {
                if(token) {
                    LoginAuth('Vixi', token)
                    history.push('/tables')
                } 
                else {
                    alert('deu errado o token')
                }
                // token ?
                //     (LoginAuth('Vixi', token) && history.push('/tables'))
                //     : alert('deu errado o token')
                    // LoginAuth('Vixi', token) && navigateTo()
                    // : alert('Usuário não encontrado') 
            })
            .catch((error) => 
            console.log(error, 'tente novamente, erro na autenticação do usuário.'))
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