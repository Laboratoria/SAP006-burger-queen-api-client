import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';

export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    errorMessage='Por favor, insira um e-mail válido.'
                    placeholder='Digite o seu e-mail'
                />

                <Input 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    errorMessage='Por favor, insira uma senha válida.'
                    placeholder='Digite a sua senha'
                />
              
                <Button 
                    label='Entrar' 
                    type="submit"
                    // onClick={} -- colocar a função do botão dentro do bigode quando fizer
                />

                <div>
                    <h2>Não tem uma conta? Cadastre-se</h2>
                </div>

            </form>
                        
        <Footer /> 
        </div>
    );
};
