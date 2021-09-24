import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { registerUser } from '../../services/auth';
import validation from '../../services/errors';
import { getRouteByRole } from '../../routes/redirections';

import GeneralButton from '../../components/Button/Button';
import { Input }  from '../../components/Input/Input.jsx'

// import './styleRegister.scss';
import register from '../../Assets/register.png';


const Register = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));

        registerUser(values)
            .then((response) => {
                console.log(111, response)
    
                if (response.code && response.code === 400) {
                console.log(response.message)
                } else {
                console.log(response.token);
                }
                 const route = getRouteByRole(values.role);
                history.push(route);
            })
            // .then((json) => {
            //     const token = localStorage.getItem('token')
            //     console.log(token);
               
            // })
            .catch((error) => {
                console.log(error);
            })
    };
    
    return (
        <section className="signUpBox">
            <img className="image" src={register} alt='icon-register' />
            <p className="titleRegister">Crie sua conta</p>
            <form className="form">
                <Input 
                    type='text' 
                    id='name'
                    name='fullName'
                    values={values.fullName}
                    onChange={handleChange}
                    placeholder='nome completo' 
                    errormessage='Por favor, insira um nome válido.' />
                {errors.fullName && <p className='error'>{errors.fullName}</p>}
                <Input 
                    type='email' 
                    id='email' 
                    name='email'
                    values={values.email}
                    onChange={handleChange}
                    placeholder='e-mail'
                    errormessage='Por favor, insira um e-mail válido.' />
                {errors.email && <p className='error errorsMessage'>{errors.email}</p>}
                <Input 
                    type='password' 
                    id='password' 
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='senha'
                    errormessage='Por favor, insira uma senha válida.' />
                {errors.password && <p className='error errorsMessage'>{errors.password}</p>}
                <Input 
                    type='password'
                    id='confirm-password' 
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='confirmar senha'
                    errormessage='As senhas não conferem.' />
                {errors.confirmPassword && <p className='error errorsMessage'>{errors.confirmPassword}</p>}
                </form>
                <form className="inputRadioBox">
                    <label className="labelRadioInput">
                        <Input
                        variant='true'
                        type='radio'
                        name='role'
                        className='input-radio'
                        onChange={handleChange}
                        value='Salão'
                        labelText='Salão' />
                        Salão
                    </label>
                    <label className="labelRadioInput">
                        <Input
                        variant='true'
                        type='radio' 
                        name='role'
                        className='input-radio'
                        onChange={handleChange}
                        value='cozinha'
                        labelText='Cozinha' />
                        Cozinha
                    </label>
                    {errors.role && <p className='error errorsMessage'>{errors.role}</p>}
                </form>
            <GeneralButton className={register} variant="secondary" onClick={handleFormSubmit}>
                Registrar
            </GeneralButton>
            <p className="phraseRegister">Já possui uma conta?<br/> 
                <Link to='/'>Faça seu login aqui</Link>
            </p>
        </section>
    )
}

export default Register;




