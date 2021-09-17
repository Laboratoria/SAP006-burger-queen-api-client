import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button/Button';
import LogoImg from '../../Components/Image/Image';
import Validation from '../../Components/Validation';

const Login = ({submitForm}) => { 
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]); 

    return(
        <div className='container login'>
            <LogoImg />
            <div>
                <h2>Login</h2>
            </div>
            <form>
                <Input 
                    type='text' 
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    errorMessage='Por favor, insira um e-mail válido.'
                    placeholder='digite o seu e-mail'
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <Input 
                    type='password' 
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    errorMessage='Por favor, insira uma senha válida.'
                    placeholder='digite a sua senha'
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <Button label='Entrar' type="submit" onClick={handleFormSubmit}></ Button>
            </form>
            
        </div>

    );
};

export default Login;
