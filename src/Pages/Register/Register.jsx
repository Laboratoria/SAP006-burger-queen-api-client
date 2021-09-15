// import { Redirect } from 'react-router-dom';

import Button from '../../components/Button';
import register from '../../Assets/register.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input.jsx'
import { RegisterUser } from '../../services/auth';

const Register = () => {

    return (
        <div className='div-style'>
            <img src={register} alt='icon-register' />
            <p>Cadastre-se</p>
            <form>
                <Input 
                    type='text' 
                    id='name' 
                    placeholder='nome completo' 
                    errorMessage='Por favor, insira um nome válido.' />
                <Input 
                    type='email' 
                    id='email' 
                    placeholder='e-mail'
                    errorMessage='Por favor, insira um e-mail válido.' />
                <Input 
                    type='password' 
                    id='password' 
                    placeholder='senha'
                    errorMessage='Por favor, insira uma senha válida.' />
                <Input 
                    type='password'  
                    id='confirm-password' 
                    placeholder='confirmar senha'
                    errorMessage='As senhas não conferem.' />
                <label><Input 
                    type='radio' 
                    labelText='salão' 
                    value='salão' />
                    Salão
                </label>
                <label>
                    <Input 
                    type='radio' 
                    labelText='cozinha' 
                    value='cozinha' />
                    Cozinha
                </label>
            </form>
            <Button variant='enter-app' onClick={RegisterUser}>
                <Link to='/tables'>registrar</Link>
            </Button>
            <p>Já possui uma conta?
                <Link to='/'>Faça seu login aqui</Link>
            </p>
        </div>
    )
}

export default Register;