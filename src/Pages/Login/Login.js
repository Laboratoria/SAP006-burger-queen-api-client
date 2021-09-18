import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import LogoImg from "../../components/image/Image";

function initialState() {
    return { user: '', password: ''};
}

function UserLogin() { 
    const [values, setValues] = useState(initialState);    
    // const [email, setEmail] = useState(initialState);
    // const [password, setPassword] = useState(initialState);

    function onChange(event){
        const { value, name } = event.target;
        
        setValues({
            ...values,
            [name]: value,
        });
    }  

    return(
        <div className='container login'>
            <form>
                <LogoImg />
                <Input 
                    id='user' 
                    type='text'
                    placeholder='digite o seu e-mail'
                    name='user'
                    value={values.user}
                    errorMessage='Por favor, insira um e-mail válido.'
                    onChange={onChange}
                />
                <Input 
                    id='password' 
                    type='password' 
                    placeholder='digite a sua senha'
                    name='password'
                    value={values.password}
                    errorMessage='Por favor, insira uma senha válida.'
                    onChange={onChange}
                />

                <Button 
                    label="Entrar"
                    type='submit'>
                    <Link to='/mesas'></Link>
                </ Button>
            </form>
            
        </div>

    );
};
export default UserLogin; 
