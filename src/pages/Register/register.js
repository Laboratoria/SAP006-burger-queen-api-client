import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { userRegister } from '../../services/data'
import { validateRegister } from '../Register/validateRegister';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import burgerLeft from '../../assets/img/burger-left.png';
import burgerRight from '../../assets/img/burger-right.png';

export function Register() {

    const history = useHistory();

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        role: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        console.log('handleSubmit');
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

                /*if (json.role === "salão") {
                    history.push('/hall');
                } else if
                    (json.role === "cozinha") {
                    history.push('/kitchen');
                }else {
            setErrors()
          }*/
            })
            /*.then(alert("Cadastro efetuado com sucesso"))*/

            .catch(errors => {
                console.log(errors)
            });
    };
    //console.log('***formValues', formValues);

    return (
        <main>
            <img src={burgerLeft} className="burgerLeft" alt="burgerLeft" />
            <div className="container-register">
                <form className="form" onSubmit={handleSubmit}>
                    <h2> BEST'S BURGER</h2>
                    <h3>Faça seu cadastro para ter acesso ao serviço</h3>
                    <div className="form-register-inputs">
                        <Input
                            inputType="text"
                            inputName="username"
                            inputPlaceholder="Nome Completo"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.username} />
                        {errors.username && <p>{errors.username}</p>}
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
                            inputPlaceholder="Crie sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password} />
                        {errors.password && <p>{errors.password}</p>}
                        <Input
                            inputType="password"
                            inputName="password2"
                            inputPlaceholder="Confirme sua senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password2} />
                        {errors.password2 && <p>{errors.password2}</p>}
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
                        {errors.role && <p>{errors.role}</p>}
                        </select>
                        <Button
                            className="register-btn"
                            type="submit"
                            value="Cadastrar">
                        </Button>
                        <div className="footer-register">
                            Já tem uma conta cadastrada?
                            <Link className="link" to="/Login"> Entre aqui</Link>
                        </div>
                        <img src={burgerRight} className="burgerRight" alt="burgerRight" />
                    </div>
                </form>
            </div>
        </main>
    );
};