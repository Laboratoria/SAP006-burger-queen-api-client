import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        occupation: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        RegisterUser()
            .then((users) => {
                users.role === 'Atendente' ? 
                history.push('/tables') 
                : history.push('/kitchen')
            })
            .catch((error) => console.log(error))
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
                    errorMessage='Por favor, insira um nome válido.' />
                {errors.fullName && <ErrorsMessage className='error'>{errors.fullName}</ErrorsMessage>}
                <Input 
                    type='email' 
                    id='email' 
                    name='email'
                    values={values.email}
                    onChange={handleChange}
                    placeholder='e-mail'
                    errorMessage='Por favor, insira um e-mail válido.' />
                {errors.email && <ErrorsMessage className='error'>{errors.email}</ErrorsMessage>}
                <Input 
                    type='password' 
                    id='password' 
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='senha'
                    errorMessage='Por favor, insira uma senha válida.' />
                {errors.password && <ErrorsMessage className='error'>{errors.password}</ErrorsMessage>}
                <Input 
                    type='password'
                    id='confirm-password' 
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='confirmar senha'
                    errorMessage='As senhas não conferem.' />
                {errors.confirmPassword && <ErrorsMessage className='error'>{errors.confirmPassword}</ErrorsMessage>}
            </Form>
            <InputRadio>
                <label>
                    <Input 
                    type='radio'
                    name='occupation'
                    value={values.occupation}
                    onChange={handleChange}
                    labelText='Atendente' />
                    Atendente
                </label>
                {errors.occupation && <ErrorsMessage className='error'>{errors.occupation}</ErrorsMessage>}
                <label>
                    <Input 
                    type='radio' 
                    name='occupation'
                    value={values.occupation}
                    onChange={handleChange}
                    labelText='cozinha' />
                    Cozinha
                </label>
                {errors.occupation && <ErrorsMessage className='error'>{errors.occupation}</ErrorsMessage>}
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




