import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { registerUser } from '../../services/auth';
import validation from '../../services/errors';
import { getRouteByRole } from '../../routes/redirections';

import GeneralButton from '../../components/Button/Button';
import { Input }  from '../../components/Input/Input.jsx'

import register from '../../Assets/register.png';
import { SignUpBox, Image, TitleRegister, Form, InputRadioBox, LabelRadioInput,ErrorsMessage, PhraseRegister } from './style';

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
        <SignUpBox>
            <Image src={register} alt='icon-register' />
            <TitleRegister>Crie sua conta</TitleRegister>
            <Form>
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
                {errors.email && <ErrorsMessage className='error'>{errors.email}</ErrorsMessage>}
                <Input 
                    type='password' 
                    id='password' 
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='senha'
                    errormessage='Por favor, insira uma senha válida.' />
                {errors.password && <ErrorsMessage className='error'>{errors.password}</ErrorsMessage>}
                <Input 
                    type='password'
                    id='confirm-password' 
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='confirmar senha'
                    errormessage='As senhas não conferem.' />
                {errors.confirmPassword && <ErrorsMessage className='error'>{errors.confirmPassword}</ErrorsMessage>}
                </Form>
                <InputRadioBox>
                    <LabelRadioInput><Input
                        variant='true'
                        type='radio'
                        name='role'
                        className='input-radio'
                        onChange={handleChange}
                        value='Salão'
                        labelText='Salão' />
                        Salão
                    </LabelRadioInput>
                    <LabelRadioInput>
                        <Input
                        variant='true'
                        type='radio' 
                        name='role'
                        className='input-radio'
                        onChange={handleChange}
                        value='cozinha'
                        labelText='Cozinha' />
                        Cozinha
                    </LabelRadioInput>
                    {errors.role && <ErrorsMessage className='error'>{errors.role}</ErrorsMessage>}
                </InputRadioBox>
            <GeneralButton className={register} variant="secondary" onClick={handleFormSubmit}>
                Registrar
            </GeneralButton>
            <PhraseRegister>Já possui uma conta?<br/> 
                <Link to='/'>Faça seu login aqui</Link>
            </PhraseRegister>
        </SignUpBox>
    )
}

export default Register;




