import React from 'react';
import { useState } from 'react';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import validateLogin from '../Login/validateLogin'
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
        console.log('handleInputChange', name, value);
        setFormValues({ ...formValues, [name]: value })
    };

    // const[value, setValue] = useState ('');

    // const handleInputChange = (e) => {
    //     console.log('handleInputChange', e.target.value);
    //     setValue(e.target.value)
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('handleSubmit', data);

        setErrors(validateLogin(formValues));
    };

    console.log('***formValues', formValues);

    return (

        <main>
            <img src={logo} className="logo" alt="logo" />
            <div className="container">
                <h1>Entrar com email e senha</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <Input
                            inputType="text"
                            inputName="email"
                            inputPlaceholder="Email"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.email || ''} />
                        {errors.email && <p>{errors.email}</p>}
                        <Input
                            inputType="password"
                            inputName="password"
                            inputPlaceholder="Senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password || ''} />
                        {errors.password && <p>{errors.password}</p>}
                        <Button
                            className="login-btn"
                            type="submit"
                            value="Entrar">
                        </Button>
                        <div className="footer-login">
                            Não tem uma conta?
                    <Link className="link" to="/Register">Cadastre-se</Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};
