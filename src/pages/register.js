import React from 'react';
import '../styles/login.css';
import logo from '../img/logo.png'

import { Link } from 'react-router-dom';
import '../global.css';


    function Register() {
        return (
            <div className="pagina-login">
                <header className="pagina-login-header">
                    <img src={logo} alt="Logo Burguer Queen" />
                </header>
                <div className="pagina-login-main">
                    <div className="card-login">
                        <h1 className="login-name">Cadastre-se</h1>
                        <form className="login-form">
                            <div className="name">
                                <input
                                    name="Nome"
                                    type="text"
                                    placeholder="Nome"
                                />
                            </div>
                            <div className="loginInputEmail">
                                <input
                                    type="text"
                                    placeholder="Digite um email"
                                />
                            </div>
                            <div className="loginInputPassword">
                                <input
                                    type="text"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            <button type="submit">
                                Cadastre-se
                            </button>
                            <h2>Já tem uma conta?</h2>
                            <button type="submit">
                                <Link className="link" to="/login">Faça login </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );    
}
    export default Register;
