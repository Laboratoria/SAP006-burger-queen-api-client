<<<<<<< HEAD
import '../styles/login.css';
import logo from '../img/logo.png'
import { MdEmail, MdLock } from "react-icons/md";

function login() {
    return (
        <div className="pagina-login">
            <header className="pagina-login-header">
                <img src={logo} alt="Logo Burguer Queen" />
            </header>
            <div className="pagina-login-main">
                <h1>login</h1>
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
                        Cadastre-se
                    </button>
                </form>
            
            </div>
        </div>
    );
}
=======
import React from 'react';

const Login = () => <h1>Login</h1>
>>>>>>> 870b64bb8be4304bfd65eb9f5d61cd4a49e2c36d

export default Login;
