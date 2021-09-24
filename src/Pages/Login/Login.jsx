import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { loginWithEmail } from '../../services/auth';
import { getRouteByRole } from '../../routes/redirections'

import GeneralButton from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import './login.scss'
import vixiLogo from '../../Assets/vixiLogo.png';

const Login = () => {
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
    
    // function handleSubmit() {
    //     const user = {
    //         email,
    //         password,
    //     }

    //     loginWithEmail(user)
    //     .then((json) => {
    //         const route = getRouteByRole(json.role);
    //         history.push(route);      
    //     })
    // }

    return (
            <section className="mainBox">
                <img className="imgLogo" src={vixiLogo} alt='icon-login' />
                <div className="loginBox">
                    <p className="title">login</p>
                    <form className="form" onSubmit={handleSubmit}>
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
                            placeholder="senha"
                            value={password}
                            errormessage='Por favor, insira uma senha válida.'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </form>
                    <GeneralButton variant="primary" type="submit" onClick={authUserLogin}>
                        Entrar
                    </GeneralButton>
                    <p className="phraseLogin">É o seu primeiro dia no Vixi? <br />
                        <Link to='/register'>Crie sua conta aqui!</Link>
                    </p>
                </div>
            </section>
    )
}

export default Login;
