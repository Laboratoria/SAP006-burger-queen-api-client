import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { RegisterUser } from '../../services/auth';
import validation from '../../services/validation';
import Button from '../../components/Button';
import Input from '../../components/Input/Input.jsx'
import register from '../../Assets/register.png';

const Register = ({submitForm}) => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        occupation: '',
    });

    const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        // setDataIsCorrect(true);
        RegisterUser();
    };

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && dataIsCorrect) {
    //         submitForm(true)
    //     }
    // }, [errors]);
    
    return (
        <div className='div-style'>
            <img src={register} alt='icon-register' />
            <p>Crie sua conta</p>
            <Input 
                type='text' 
                id='name'
                name='fullName'
                values={values.fullName}
                onChange={handleChange}
                placeholder='nome completo' 
                errorMessage='Por favor, insira um nome válido.' />
            {errors.fullName && <p className='error'>{errors.fullName}</p>}
            <Input 
                type='email' 
                id='email' 
                name='email'
                values={values.email}
                onChange={handleChange}
                placeholder='e-mail'
                errorMessage='Por favor, insira um e-mail válido.' />
            {errors.email && <p className='error'>{errors.email}</p>}
            <Input 
                type='password' 
                id='password' 
                name='password'
                value={values.password}
                onChange={handleChange}
                placeholder='senha'
                errorMessage='Por favor, insira uma senha válida.' />
            {errors.password && <p className='error'>{errors.password}</p>}
            <Input 
                type='password'
                id='confirm-password' 
                name='confirmPassword'
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder='confirmar senha'
                errorMessage='As senhas não conferem.' />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            <form >
                <label><Input 
                    type='radio'
                    name='occupation'
                    value={values.occupation}
                    onChange={handleChange}
                    labelText='Atendente' />
                    Atendente
                </label>
                {errors.occupation && <p className='error'>{errors.occupation}</p>}
                <label>
                    <Input 
                    type='radio' 
                    name='occupation'
                    value={values.occupation}
                    onChange={handleChange}
                    labelText='cozinha' />
                    Cozinha
                </label>
                {errors.occupation && <p className='error'>{errors.occupation}</p>}
            </form>
            <Button variant='enter-app' onClick={handleFormSubmit}>
                <Link to='/'>registrar</Link>
            </Button>
            {}
            <p>Já possui uma conta?
                <Link to='/'>Faça seu login aqui</Link>
            </p>
        </div>
    )
}

export default Register;