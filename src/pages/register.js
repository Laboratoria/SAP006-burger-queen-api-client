import React from 'react';
import '../styles/login.css';
// import logo from '../img/logo.png'

import { Link } from 'react-router-dom';
import '../global.css';
import Input from '../components/Input';
import Button from '../components/Button';



function Register() {
    return (
        <div className="pagina-login">
            <header className="pagina-login-header">
                {/* <img src={logo} alt="Logo Burguer Queen" /> */}
            </header>

            <h1 className="login-name">Cadastre-se</h1>
            <form>
                <Input label="Usuário" type="text" name="username" />
                <Input label="E-mail" type="text" name="username" />
                <Input label="Senha" type="password" name="password" />

                <Button>Cadastrar</Button>
                <h2>Já tem uma conta?</h2>
                <button type="submit">
                    <Link className="link" to="/login">Faça login </Link>
                </button>
            </form>

        </div>
    );
}
export default Register;
