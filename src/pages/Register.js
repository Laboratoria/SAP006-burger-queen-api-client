import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../styles/register.css';
import logo from '../img/logo.png'
import { registerUser } from "../auth";
import { validation } from '../validation';
import Input from '../components/Input';
import Button from '../components/Button';
/*import useForm from '../Hooks/useForm';*/
import '../styles/login.css';
import '../global.css';

function Register() {
    // const history = useHistory();
    const [errors, setErrors] = useState({})
    function validationValues(values) {
        const errorsResult = validation(values)
        setErrors(errorsResult)
        return errorsResult
    }

    const [infoUser, setInfoUser] = useState({
        email: '', 
        password: '',
        role: '',
    });

    //Essa função captura qualquer mudança que faço no campo

    const handleChange = (e) => {
        const informationUser = e.target.id;
        setInfoUser({ ...infoUser, [informationUser]: e.target.value })
        console.log(informationUser)
        console.log(e.target.value, infoUser)
        // if (informationUser === 'password') {      
        // }
    }

    let history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault();

        const resultErrors = validationValues(infoUser);

        if (!resultErrors.email && !resultErrors.password) {
            console.log(resultErrors.email, 'não tem erros')

            registerUser(infoUser.email, infoUser.password, infoUser.role)
                .then((banana) => {
                    console.log(banana)
                    console.log('usuário foi criado');
                    history.push('/') //trocar pelo modal de aviso de cadastro com sucesso 
                })
        } else {
            console.log(resultErrors, resultErrors.email, 'cadastro não concluído ')
            //se quisermos colocar um modal avisando que nao foi concluído
        }
    }
    return (
        <section className="register-page">
            <div className="elipse-background"> </div>
            <header className="header-register">
                {<img src={logo} alt="Logo Burguer Queen" />}
            </header>
            <div className="main-register">

                <div className="box-register">


                    <h1 className="title">Cadastre-se</h1>

                    <Input
                        type="email"
                        name="email"
                        inputClass="inputEmail"
                        value={infoUser.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className='form-error email'>{errors.email}</span>}

                    <p className="labelInputs">Senha</p>
                    <Input
                        type="password"
                        name="password"
                        inputClass="inputPassword"
                        value={infoUser.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className='form-error'>{errors.password}</span>}

                    <div className="radio-buttons" onChange={handleChange} >
                       
                            <label className="roleLabel">
                                <input type="radio" 
                                    name="role" 
                                    value="salao"
                                    id = "role"
                                />
                                &nbsp;Salão
                            </label>
          
                            <label className="roleLabel">
                                <input
                                    type="radio"
                                    name="role"
                                    value="cozinha"
                                    id = "role"
                                />
                                &nbsp;Cozinha
                            </label>
                
                    </div>


                    <Button type='submit' onClick={handleRegister}>Cadaste-se</Button>

                    <button type="submit">
                        <Link className="link" to="/login">Faça login </Link>
                    </button>
                </div>
            </div>


        </section>

    );
}
export default Register;
