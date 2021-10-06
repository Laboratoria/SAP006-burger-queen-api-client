import {useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import { LoginWithEmail } from '../../../services/Auth';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button'
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import Title from '../../../components/title/Title';

import '../Style.css';


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
                    alert('Login com Salão')
                    history.push('/menus')
                } else {
                    alert('Login com Cozinha')
                    history.push('/preparacao')
                }                  
            } 
            if(response.status !== 200){
                throw new Error(response.status)  
            }
        } catch (json) {
            history.push('/notfound') 
            // colocar o modal aqui depois   
        } 
    }

    
    return(
        <div  className="container-main">
            <form className="container-form">
                <LogoImg/>

                <div>
                    <Title 
                        title='Entre com uma conta'
                        className="title-login"
                    />
                </div>

                <div>
                    <Input 
                        type='text' 
                        name='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='E-mail'
                        className="inputs"
                    />
                    <Input 
                        type={showPassword ? 'type': 'password'} 
                        name='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Senha'
                        className="inputs"
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
                    text='Entrar' 
                    type="submit"
                    onClick={handleClick}
                    className="buttons" 
                />

                <div>
                    <div className="register"> 
                        Não tem uma conta? <Link className="link-register" to="/cadastre-se">Cadastre-se</Link> 
                    </div>
                </div>

            </form>        
            <Footer 
                className="footer"
            /> 
        </div>
    );
};
