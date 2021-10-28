import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validation } from '../../validation';
import { loginUser, loginConfirmed } from '../../auth';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import logo from '../../img/logo.png'
import './login.css';

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

        const resultErrorsLogin = validationValues(infoUser)

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
        } else {
            console.log(resultErrorsLogin, resultErrorsLogin.email, 'usuário não conectado')
        }
    }

    return (
        <section className="login-page" >
            <div className="elipse-background"> </div>
            <header className="header-login"> 
                {<img src={logo} alt="Logo Burguer Queen" />}
            </header>
            <section className="main-login"> 
                <div className="container-login"> 
                    {/*<div className="box-login" > */}
                        <form className="form-login" action="">

                            <h1 className="title-login">Entrar</h1>
                            
                            {errors.email && <span className='form-error'>{errors.email}</span>}
                            <Input 
                                requered
                                placeholder="Email" 
                                type="email" 
                                name="email" 
                                value={infoUser.email}
                                onChange={handleChange}
                            />
                            
                            {errors.password && <span className='form-error'>{errors.password}</span>}
                            <Input
                                requered
                                placeholder="Senha"
                                type="password" 
                                name="password" 
                                value={infoUser.password}
                                onChange={handleChange}
                            />
                           
                            <Button className="button-global" type="submit" onClick={handleLogin}> Entrar </Button>
                        </form>
                        <p className="question-register">Não tem uma conta?</p> 
                        <Link className="link-register" to="/Register">Cadastre-se</Link>
                        
                    {/*</div>*/}
                    
                </div> 
            </section>
            <Footer/>
        </section>
     );
}

export default Login;
