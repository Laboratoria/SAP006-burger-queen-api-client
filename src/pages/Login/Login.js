import { React, useState } from 'react';
import '../styles/login.css';
import logo from '../img/logo.png'
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { validation } from '../../validation';
import { loginUser, loginConfirmed } from '../../auth';

function Login() {
    const [errors, setErrors] = useState({})
    function validationValues(values) {
        const errorsResult = validation(values)
        setErrors(errorsResult)
        return errorsResult;
    }

    const [infoUser, setInfoUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const selectedInput = e.target.id;
        const inputValue = e.target.value;
        setInfoUser({
            ...infoUser,
            [selectedInput]: inputValue
        })
        console.log(e.target.value, infoUser)
    }

    const history = useHistory()
    const handleLogin = (e) => { //handleSubmit?
        e.preventDefault();//previne o comportamento padrão o carregamento 

        const resultErrorsLogin = validationValues(infoUser);

        if (!resultErrorsLogin.email && !resultErrorsLogin.password) {

            loginUser(infoUser.email, infoUser.password)
                .then((responseLogin) => {
                    responseLogin.json().then((user) => {
                        loginConfirmed(user.token)
                        console.log(user, user.token)
                      
                        if (user.role) {
                            history.push(`/${user.role}`)
                        }

                    })

                })

            /*.catch((error) => {
              console.log(error.message)
            })*/
        } else {
            console.log(resultErrorsLogin, resultErrorsLogin.email, 'usuário não conectado')
        }
    };


    return (
        <section className="login-page" >
                <div className="elipse-background"> </div>
                <header className="header-login"> 
                     {<img src={logo} alt="Logo Burguer Queen" />}
                </header>
            <div className="container-login">
                <div className="main-login">
                    
                    <div className="box-login" > 
                        <form className="forms" action="">
                            <h1 className="title">Login</h1>

                       
                            <Input 
                                label="Usuário" 
                                type="email" 
                                name="email" 
                            value={infoUser.email}
                            onChange={handleChange}
                            />
                            {errors.email && <span className='form-error'>{errors.email}</span>}
                        
                            <Input 
                                label="Senha" 
                                type="password" 
                                name="password" 
                            value={infoUser.password}
                            onChange={handleChange}
                            />
                            {errors.password && <span className='form-error'>{errors.password}</span>}
                        
                            <Button 
                                type="submit" 
                                onClick={handleLogin}>
                                Entrar
                            </Button>
                        </form>
                        <p>Não tem uma conta?</p> 
                        <Link
                            className="link" to="/Register">
                            Cadastre-se
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Login;
