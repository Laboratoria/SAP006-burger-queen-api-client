import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { userLogin } from '../../services/data';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import validateLogin from '../Login/validateLogin';

//import Burger from '../../assets/img/burger.png';

//import './login.css';

export function Login() {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateLogin(formValues));

        userLogin(formValues)
            .then(response => response.json())
            .then((json) => {
                console.log(json);

                const token = json.token
                localStorage.setItem("token", token);

                if (json.role === "salão") {
                    history.push('/Hall');
                } else if
                    (json.role === "cozinha") {
                    history.push('/Kitchen');
                }
            })

            .catch(errors => {
                console.log(errors)
            })
    };



    //console.log('***formValues', formValues);

    return (

        <main>
            <img src={logo} className="logo" alt="logo" />
            <div className="container-login">
                <form onSubmit={handleSubmit}>
                    <div className="form-login-inputs">
                        <h1>
                            Entrar com email e senha
                        </h1>
                        <Input
                            inputType="text"
                            inputName="email"
                            inputPlaceholder="Email"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.email} />
                        {errors.email && <p>{errors.email}</p>}
                        <Input
                            inputType="password"
                            inputName="password"
                            inputPlaceholder="Senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password} />
                        {errors.password && <p>{errors.password}</p>}
                        <Button
                            className="login-btn"
                            type="submit"
                            value="Entrar">
                        </Button>
                        <div className="footer-login">
                            Não tem uma conta?
                    <Link className="link" to="/Register"> Cadastre-se </Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};
