import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/button/Button';
import LogoImg from '../../../components/images/LogoImg';
import Footer from '../../../components/footer/Footer';
import { useHistory } from 'react-router-dom';
import { RegisterUser } from '../../../services/Auth';


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
                localStorage.setItem ('arroz', token)
                history.push('/')
            }
        })

    }

    return(
        <div className='container register'>
            <LogoImg />
            <div>
                <h2>Cadastre-se</h2>
            </div>
            <form>
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
                    <Input type='checkbox' name='checkbox' />
                        <div>
                            <img src="#" alt="salão"/>
                        </div>
                    <Input type='checkbox' name='checkbox' />
                        <div>
                            <img src="#" alt="cozinha"/>
                        </div>
                </div>
                <Button 
                    label='Cadastrar' 
                    type="submit"
                    onClick={handleClick} >
                </Button>

            </form>

        <Footer />    
        </div>
    );
};
