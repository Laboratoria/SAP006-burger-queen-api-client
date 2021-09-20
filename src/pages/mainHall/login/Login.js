import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import { LoginWithEmail } from '../../../services/Auth';



export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    const history = useHistory();
    
    function handleClick (e){
        e.preventDefault()
        console.log('handleClick')
        const user = {email, password}
        LoginWithEmail(user)
        .then(token => {
            if (token){
                localStorage.setItem('arroz', token)
                history.push('/mesas')
            }
        }) 
    }
    
    return(
        <div className='container login'>
            <LogoImg />
            <div>
                <h2>Entre com uma conta</h2>
            </div>
            <form>
                <Input 
                    type='text' 
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Digite o seu e-mail'
                />

                <Input 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Digite a sua senha'
                />
              
                <Button 
                    label='Entrar' 
                    type="submit"
                    onClick={handleClick}>
            
                </Button>

                <div>
                    <h2>Não tem uma conta? Cadastre-se</h2>
                </div>

            </form>
                        
        <Footer /> 
        </div>
    );
};
