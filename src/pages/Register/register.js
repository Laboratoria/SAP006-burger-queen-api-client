import React from 'react';
import { useState } from 'react';
//import { useHistory } from 'react-router';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import validateRegister from '../Register/validateRegister'
//import logo from '../../assets/img/logo.png';

export function Register() {

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('handleInputChange', name, value);
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('handleSubmit', data);

        setErrors(validateRegister(formValues));
    };

    console.log('***formValues', formValues);

    return (

        <main>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <h2>
                            Faça seu cadastro para ter acesso ao serviço
                            </h2>
                        <Input
                            inputType="text"
                            inputName="username"
                            inputPlaceholder="Nome Completo"
                            onChange={handleInputChange}
                            inputValue={formValues.username || ''} />
                        {errors.username && <p>{errors.username}</p>}
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
                            inputPlaceholder="Crie sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password || ''} />
                        {errors.password && <p>{errors.password}</p>}
                        <Input
                            inputType="password"
                            inputName="password2"
                            inputPlaceholder="Confirme sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password2 || ''} />
                        {errors.password2 && <p>{errors.password2}</p>}
                        <div className="radios">
                            <Input
                                inputType="radio"
                                inputValue="Salão"
                                inputName="hall"
                                inputOnChange={handleInputChange}
                                inputChecked={formValues.hall === 'Salão'} /> Salão
                                <Input
                                inputType="radio"
                                inputValue="Cozinha"
                                inputName="kitchen"
                                inputOnChange={handleInputChange}
                                inputChecked={formValues.kitchen === 'Cozinha'} /> Cozinha
                        </div>
                        <Button
                            className="register-btn"
                            type="submit"
                            value="Cadastrar">
                        </Button>
                        <div className="footerRegister">
                            Já tem uma conta cadastrada?
                            <Link className="link" to="/Login"> Entre aqui</Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
};