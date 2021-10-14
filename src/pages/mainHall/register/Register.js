import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterUser } from '../../../services/Auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import Title from '../../../components/title/Title';
import Modal from '../../../components/modal/Modal';

import garcom from '../../../img/garcom.png';
import cozinheiro from '../../../img/cozinheiro.png';

import '../Style.css';


export default function Register() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('');
    const [modal, setModal] = useState({ text: "", show: false });
    const history = useHistory();
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    
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
                    setModal({ text: "Usuário cadastrado - Salao", show: true });
                } else {
                    setModal({ text: "Usuário cadastrado - Cozinha", show: true });
                }             
            }                 

        } catch (error) {
            setModal({ text: "Favor inserir dados validos", show: true });

        }
    };

    // evento de clique para voltar
    const btnBack = () => {
      localStorage.clear()
      history.push('/')
    };


    // seleciona o role - se cozinha ou salão - pega value e salva no role do servidor
    function handleRoleChange (e) {
        e.preventDefault()
        if(e.target.checked){
            setRole(e.target.value)
        }
    };

    return(
        <div className='container-register'>
            <form className="container-form">
                <LogoImg />
                
                <div>
                    <Title 
                        title='Cadastre-se' 
                        className="title-login"
                    />
                </div>

                <div>
                    <Input 
                        type='text' 
                        name='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Nome'
                        className="inputs"
                    />
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

                <div className='container-checkbox' value={role} onChange={(event) => handleRoleChange(event)}>
                    <Input 
                        type='radio' 
                        name='ocupation'
                        value='salon' 
                        placeholder='salon'
                    />
                    <img src={garcom} alt="waiter" className="waiter-icon"/>
                    <Input 
                        type='radio' 
                        name='ocupation'
                        value='kitchen' 
                        placeholder='kitchen'
                    />
                    <img src={cozinheiro} alt="kitchen" className="kitchen-icon"/>
                </div>

                <Button 
                    text="Cadastrar" 
                    type="submit"
                    onClick={handleClick} 
                    className="buttons" 
                /> 
                <Modal
                    children={modal.text}
                    hide={modal.show}
                    setHide={setModal}
                    callback={btnBack}
                ></Modal>
                <Button 
                    text="Já tenho conta" 
                    type="submit"
                    onClick={btnBack} 
                    className="buttons btn-back" 
                /> 

            </form>
            <Footer
                className="footer"
            />    
        </div>
    );
};
