import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';

const Login = () => { 
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [values] = useState({
        email: '',
        password: '',
    });

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
                    // onChange={handleChange}
                    errorMessage='Por favor, insira um e-mail válido.'
                    placeholder='digite o seu e-mail'
                />
                <Input 
                    type='password' 
                    name='password'
                    value={values.password}
                    // onChange={handleChange}
                    errorMessage='Por favor, insira uma senha válida.'
                    placeholder='digite a sua senha'
                />
              
                <Button label='Entrar' type="submit" ></ Button>
            </form>
            
        </div>

    );
};

export default Login;
