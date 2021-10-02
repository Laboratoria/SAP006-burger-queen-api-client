import { React, useState } from 'react';
import '../styles/login.css';
import logo from '../img/logo.png'
import { Link, useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { validation } from '../validation';
import { loginUser, loginConfirmed } from '../auth';
// import useForm from '../Hooks/useForm';

function Login() {
    const [errors, setErrors] = useState({})
    function validationValues(values) {
        const errorsResult = validation(values)
        setErrors(errorsResult)
        return errorsResult;
    }

    const [infoUser, setInfoUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const informationUser = e.target.id;
        setInfoUser({ ...infoUser, [informationUser]: e.target.value })
        console.log(e.target.value, infoUser)
        // if (informationUser === 'password') {      
        // }
    }

    let history = useHistory()
    const handleLogin = (e) => {  //handleSubmit? 
        e.preventDefault();

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

                            <Link 
                                className="link" to="/Register"> 
                                Cadastre-se 
                            </Link>
                        </form>
                    </div>
                </div>
        </section>
     );
}

export default Login;
