import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '../../components/Button/button';
//import './login.css';

export const Register = () => (
    <div>
        <header>Crie a sua conta aqui</header>
        <p className="login">
            Já tem uma conta cadastrada? Faça o<Link className="link" to="/Login"> login</Link>
        </p>
    </div>
);