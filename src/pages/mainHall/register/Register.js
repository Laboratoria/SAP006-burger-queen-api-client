import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterUser } from '../../../services/Auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import Title from '../../../components/title/Title'

import cozinheiro from '../../../img/cozinheiro.png'
import garcom from '../../../img/garcom.png'

import './Register.css';


export default function Registration() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    const [role, setRole] = useState('');
    const history = useHistory();

    // evento de clique do olhinho
    function eyeClick (e){
        e.preventDefault()
        setShowPassword(!showPassword) 
    }

    // evento de clique de cadastro
    async function handleClick (e) {
        try {
            e.preventDefault()
            const user = {name, email, password, role}
            const response = await RegisterUser(user)
            const returnJson = await response.json()
            const token = returnJson.token

            if (token) {
                localStorage.setItem('userName', token)
                const role = returnJson.role
                if(role === 'salon') {
                    history.push('/')
                } else {
                    alert('Selecione uma opção')
                } 
                if(role === 'kitchen') {
                    history.push('/cozinha')
                } else {
                    alert('Selecione uma opção')
                }                  
            } 
        } catch (error) {
            console.log('cagou')
        }
    }


    const btnBack = () => {
      localStorage.clear()
      history.push('/')
    }

    // seleciona o role - se cozinha ou salão - pega value e salva no role do servidor
    function handleRoleChange (e) {
        e.preventDefault()
        if(e.target.checked){
            setRole(e.target.name)
        }
    }

    return(
        <div className='container-register'>
            <form className="container-form">
                <LogoImg />
                <div>
                    <Title 
                        title='Cadastre-se' 
                    />
                </div>
                <div>
                    <Input 
                        type='text' 
                        name='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Digite o seu Nome'
                    />

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
                <div className='container-checkbox'>
                    <Input 
                        type='radio' 
                        name='salon' 
                        onChange={(event) => handleRoleChange(event)}
                    />
                    <img src={garcom} alt="waiter" className="waiter-icon"/>

                    <Input 
                        type='radio' 
                        name='kitchen' 
                        onChange={(event) => handleRoleChange(event)}
                    />
                    <img src={cozinheiro} alt="kitchen" className="kitchen-icon"/>
                </div>
                
                <Button 
                    label="Cadastrar" 
                    type="submit"
                    onClick={handleClick} 
                /> 
                <Button 
                    label="Já tenho conta" 
                    type="submit"
                    onClick={btnBack} 
                /> 
            </form>

        <Footer />    
        </div>
    );
};
