 import React from 'react';

import '../styles/login.css';
import logo from '../img/logo.png'
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from 'react-router-dom'; 

function Login() {
    return (
        <div className="pagina-login">
            <header className="pagina-login-header">
                <img src={logo} alt="Logo Burguer Queen" />
            </header>
            <div className="pagina-login-main">
                <div className="card-login">
                    <h1 className="login-name">login</h1>
                    <form className="login-form">
                        <div className="loginInputEmail">
                            <MdEmail />
                            <input
                            type="text"
                            placeholder="Digite um email"
                            />
                        </div>
                        <div className="loginInputPassword">
                            <MdLock />
                            <input
                                type="text"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button type="submit">
                            Entrar
                        </button>
                        
                        <h2>Não tenho conta!</h2>

                        <button type="submit">
                            <Link className="link" to="/Register">Cadastre-se</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
