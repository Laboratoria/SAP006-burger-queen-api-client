import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../services/auth';
import validation from '../../services/errors';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input.jsx'
import register from '../../Assets/register.png';
import { SignUpBox, Image, TitleRegister, Form, InputRadio, ErrorsMessage, PhraseRegister } from './style';


const Register = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));

        RegisterUser(values)
            .then((json) => {
                console.log(json);
            })
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
                <InputRadio>
                <label><Input 
                    type='radio'
                    name='role'
                    className='input-radio'
                    onChange={handleChange}
                    value='Salão'
                    labeltext='Salão' />
                    Salão
                </label>
                {errors.role && <ErrorsMessage className='error'>{errors.role}</ErrorsMessage>}
                <label>
                    <Input 
                    type='radio' 
                    name='role'
                    className='input-radio'
                    onChange={handleChange}
                    value='cozinha'
                    labeltext='Cozinha' />
                    Cozinha
                </label>
                {errors.role && <ErrorsMessage className='error'>{errors.role}</ErrorsMessage>}
                </InputRadio>
            <Button variant='enter-app' onClick={handleFormSubmit}>
                <Link to='/'>registrar</Link>
            </Button>
            <PhraseRegister>Já possui uma conta?<br/> 
                <Link to='/'>Faça seu login aqui</Link>
            </PhraseRegister>
        </SignUpBox>
    )
}

export default Register;




