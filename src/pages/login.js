import React from 'react';
import '../styles/login.css';
import logo from '../img/logo.png'

import { Link } from 'react-router-dom';

function Login() {
        const  [username, setUsername] = React.useState('');
        const  [password, setPassword] = React.useState('');

        function handleSubmit(event){
            event.preventDefault();

            fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringfy ({username, password}),
            })

            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
            });
        }

       

    return (
        <section>
            <div className="pagina-login" >
                <header className="pagina-login-header">
                    <img src={logo} alt="Logo Burguer Queen" />
                </header>

                <form action="" onSubmit={handleSubmit}>
                    <h1 className="login-name">login</h1>
                    <input
                        type="text"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <button>Entrar</button>

                    <Link className="link" to="/Register">Cadastre-se</Link>

                    
                </form>
               
                
            </div>
        </section>
     );
}

export default Login;
