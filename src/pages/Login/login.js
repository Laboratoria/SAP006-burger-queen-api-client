import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '../../components/Button/button';
//import './login.css';

export const Login = () => (
    <div>
        <header>Entrar com email e senha</header>
        <p className="new-register">
            Não tem uma senha? <Link className="link" to="/Register">Cadastre agora</Link>
        </p>
    </div>
);



//export default Login;