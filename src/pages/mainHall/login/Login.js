import {useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import { LoginWithEmail } from '../../../services/Auth';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import Title from '../../../components/title/Title';

import './Login.css';


export default function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role] = useState('');
    const history = useHistory();
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    

    // evento de clique do olhinho
    function eyeClick (e){
        e.preventDefault()
        setShowPassword(!showPassword) 
    }

    async function handleClick (e) {
        try {
            e.preventDefault()
            const user = {email, password, role}
            const response = await LoginWithEmail(user)
            const returnJson = await response.json()
            const token = returnJson.token
            const name = returnJson.name
            const roleUser = returnJson.role

            if (token) {
                localStorage.setItem('userName', name)
                localStorage.setItem('userToken', token)
                localStorage.setItem('userRole', roleUser)

                const role = roleUser
                
                if(role === 'salon') {
                    history.push('/mesas')
                } else {
                    alert('Será direcionado para sua ár')
                }                  
            } 
        } catch (error) {
            console.log('cagou')
        }
    }
    
    return(
        <div>
            <form className="container-form">
                <LogoImg />
                <div>
                    <Title 
                        title='Entre com uma conta' >
                    </Title>
                </div>
                <div>
                    <Input 
                        type='text' 
                        name='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Digite o seu e-mail'
                    />

                    <Input 
                        type={showPassword ? 'type': 'password'} 
                        name='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Digite a sua senha'
                    />
                    <span className="login-eye">
                        {showPassword ? 
                        (<FaEye
                            onClick={eyeClick} /> ):
                        (<FaEyeSlash
                            onClick={eyeClick} />)
                        }
                    </span> 
                </div>

                <Button 
                    label='Entrar' 
                    type="submit"
                    onClick={handleClick} 
                />

                <div>
                    <div className="register"> 
                        Não tem uma conta? <Link to="/cadastre-se">Cadastre-se</Link> 
                    </div>
                </div>
            </form>
                        
        <Footer /> 
        </div>
    );
};

 // function handleClick (e){
    //     e.preventDefault()
    //     const user = {email, password}
    //     LoginWithEmail(user)
    //     .then(token => {
    //         if (token) {
    //             localStorage.setItem('arroz', token)
    //             // localStorage.setItem(name, response.id);
    //             history.push('/mesas');
    //             alert('Login Correto')
    //         } else {
    //             alert('Insira uma conta válida')
    //         }
    //     })
    // }

// async function handleClick (e) {
    //     try {
    //         e.preventDefault()
    //         const user = {email, password, role}
    //         const responseLogin = await LoginWithEmail(user)
    //         const returnJsonLogin = await responseLogin.json()
    //         const token = returnJsonLogin.token
    //         console.log(responseLogin.json())

    //         if (token){
    //             localStorage.setItem('arroz', token)
    //             const role = returnJsonLogin.role
    //             if(role === 'salon') {
    //             history.push('/mesas')
    //             } else {
    //                 alert('manda pra cozinha')
    //             }     
    //         } 
    //     } catch (error) {
    //         console.log('mel')
    //     }
        
    // }