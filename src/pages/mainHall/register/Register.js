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
    const [role, setRole] = useState('');
    // primeiro elemento é o estado que esta querendo controlar - ex:password
    // e o segundo é a função que vai fazer com que você atualize esse estado - ex:setPassword
    // useState retorna um array e sempre que chama o useState, voce recebe esses 2 parâmentros dentro do array.
    
    const history = useHistory();

// evento de clique
    async function handleClick (e) {
        try {e.preventDefault()
        const user = {name, email, password, role}
        const response = await RegisterUser(user)
            console.log(response.json())
            if (response) {
                localStorage.setItem('arroz', response)
                history.push('/mesas')
            }} catch{console.log('cagou')}
    }

// seleciona o role se cozinha ou salão - pega name e salva no role do servidor
    function handleRoleChange (e) {
        e.preventDefault()
        if(e.target.checked){
            setRole(e.target.name)
        }
    }

    return(
        <div className='container-register'>
            <LogoImg />
            <div>
                <Title 
                    title='Cadastre-se' >
                </Title>
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
                    <Input 
                        type='checkbox' 
                        name='salon' 
                        onChange={(event) => handleRoleChange(event)}

                    />
                    <img src={garcom} alt="waiter" className="waiter-icon"/>

                    <Input 
                        type='checkbox' 
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
                
            </form>

        <Footer />    
        </div>
    );
};
