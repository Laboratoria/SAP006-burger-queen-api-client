import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterUser } from '../../../services/Auth';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import cozinheiro from '../../../img/cozinheiro.png'
import garcom from '../../../img/garcom.png'
import Title from '../../../components/title/Title'
import './Register.css';


export default function Registration() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    
    const history = useHistory();

    function handleClick (e) {
        e.preventDefault()
        const user = {name, email, password}
        RegisterUser(user)
        .then(token => {
            if (token) {
                localStorage.setItem ('userToken', token)
                history.push('/login')
            }
        })
    }

    return(
        <div className='container-register'>
            <form className="container-form">
                <LogoImg />
                <div>
                    <Title 
                        title='Cadastre-se' >
                    </Title>
                </div>
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
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Digite a sua senha'
                />

                <div className='container-checkbox'>
                    <Input type='checkbox' name='checkbox' className="checkbox"/>
                            <img src={garcom} alt="waiter" className="waiter-icon"/>
                            <p className="text">Salão</p>
                    <Input type='checkbox' name='checkbox'/>
                            <img src={cozinheiro} alt="kitchen" className="kitchen-icon"/>
                            <p className="text">Cozinha</p>
                </div>
                <Button 
                    label="Cadastrar" 
                    type="submit"
                    onClick={handleClick} >
                </Button>

            </form>

        <Footer />    
        </div>
    );
};
