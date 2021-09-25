import React from 'react';
import '../styles/login.css';
// import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';


function Login() {

    //o q precisamos para logar o usuário
    // eslint-disable-next-line no-unused-vars
    const [username] = React.useState('');
    // eslint-disable-next-line no-unused-vars
    const [password] = React.useState('');

        function handleSubmit(event){
            event.preventDefault();

            fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //tipo de conteúdo
            },
            body: JSON.stringify({username, password}),
            })

            // para pegar a resposta
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
                     {/* <img src={logo} alt="Logo Burguer Queen" /> */}
            </header>
            </div> 

                <form action="" onSubmit={handleSubmit}>
                    <h1 className="login-name">login</h1>
                    <Input label="Usuário" type="text" name="username" />
                    <Input label="Senha" type="password" name="password" />
                   <Button>Entrar</Button>  
                </form>
            <Link className="link" to="/Register">Cadastre-se</Link>
        </section>
     );
}

export default Login;
