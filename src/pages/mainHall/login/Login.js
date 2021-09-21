import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWithEmail } from '../../../services/Auth';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import Title from '../../../components/title/Title'
// import ValidateInfo from './validateInfo';
import './Login.css';


export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    // const {errors} = ValidateInfo()
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    
   // const [errors, setErrors] = useState({})
   // function validationValues(values){
   //     setErrors(Validation(values))
   // }


    function handleClick (e){
        e.preventDefault()
        const user = {email, password}
        LoginWithEmail(user)
        .then(token => {
            if (token){
                localStorage.setItem('arroz', token)
                history.push('/mesas');
            }
        })
        .catch ((error) => {
            error.code();
            // const errorCode = error.code;
            // switch (errorCode) {
            //     case 400:
            //         error('Dados obrigatórios ausentes');                   
            //         break;
            
            //     default: 
            //         error('Email já em uso');
            // }
        })
    }
    
    return(
        <div className='container login'>
            <LogoImg />
            <div>
                <Title 
                    title='Entre com uma conta' >
                </Title>
            </div>
            <form>
                <Input 
                    type='text' 
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Digite o seu e-mail'
                />
                {/* errors.email && <p>{errors.email}</p> */}
                <Input 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Digite a sua senha'
                />
                {/* errors.password && <p>{errors.password}</p> */}
                <Button 
                    label='Entrar' 
                    type="submit"
                    onClick={handleClick} 
                />

                <div>
                    <span> 
                        Não tem uma conta? <a href="/cadastre-se"> Cadastre-se</a> 
                    </span>
                </div>

            </form>
                        
        <Footer /> 
        </div>
    );
};
