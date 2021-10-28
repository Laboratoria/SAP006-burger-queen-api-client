import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { userRegister } from '../../services/api.js'
import { validateRegister } from '../register/validateRegister';
import { Button } from '../../components/Button/Button.js';
import { Input } from '../../components/Input/Input.js';
import { Link } from 'react-router-dom';
import logoMonsterGrande from '../../img/logoMonsterGrande.png';
import '../register/register.css';

export function Register() {

    const history = useHistory();

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        role: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        role: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateRegister(formValues));

        userRegister(formValues)
            .then(response => response.json())
            .then((json) => {
                const token = json.token
                localStorage.setItem("token", token);

                if (json.id !== undefined) {
                    history.push('/login');
                    alert("Cadastro efetuado com sucesso")
                }
            })
            
            .catch(errors => {
            });
    };

    return (
        <main className="container">
             <div className="div-logo">
             <h1 className="letra-logo">Monster Burguer</h1>
              <img className="imgRegister" src={logoMonsterGrande} alt="icon-register" />
            </div>
            <div className="container-register">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Cadastre-se</h2>
                    <div className="form-register-inputs">
                        <Input
                            inputType="text"
                            inputName="username"
                            inputPlaceholder="Nome Completo"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.username} />
                        {errors.username && <p className="message-error">{errors.username}</p>}
                        <Input
                            inputType="text"
                            inputName="email"
                            inputPlaceholder="E-mail"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.email} />
                        {errors.email && <p className="message-error">{errors.email}</p>}
                        <Input
                            inputType="password"
                            inputName="password"
                            inputPlaceholder="Crie sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password} />
                        {errors.password && <p className="message-error">{errors.password}</p>}
                        <Input
                            inputType="password"
                            inputName="password2"
                            inputPlaceholder="Confirme sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password2} />
                        <div className="select"></div>
                        <select
                            className="form-select"
                            name="role"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={formValues.role}>
                            <option value=" ">Selecione sua área de trabalho</option>
                            <option value="salão">Salão</option>
                            <option value="cozinha">Cozinha</option>
                        {errors.role && <p className="message-error">{errors.role}</p>}
                        </select>
                        <Button
                            className="register-btn"
                            type="submit"
                            value="Cadastrar">
                                Cadastrar
                        </Button>
                        <div className="footer-register">
                            Já tem uma conta cadastrada?
                            <Link className="link" to="/Login"> Entre aqui</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Register;