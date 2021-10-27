import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from "../../auth";
import { validation } from '../../validation';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import logo from '../../img/logo.png'
import './register.css';

function Register() {
    const [errors, setErrors] = useState({})
    function validationValues(values) { //recebe os valores - valida os valores de cada input
        const errorsResult = validation(values)
        setErrors(errorsResult)
        return errorsResult //retorna o resultado
    }
    //useState que recebe os valores iniciais
    //infoUser são os value(nome, email e senha)
    const [infoUser, setInfoUser] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    //Essa função captura qualquer mudança que faço no campo e atualiza os objetos de cima infoUser
    const handleChange = (e) => {
        const selectedInput = e.target.id;
        const inputValue = e.target.value;
        setInfoUser({
            ...infoUser,
            [selectedInput]: inputValue
        })
        console.log(selectedInput)
        console.log(e.target.value, infoUser)
    }

    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault();

        const resultErrors = validationValues(infoUser);

        if (!resultErrors.email && !resultErrors.password && !resultErrors.name) {
            console.log(resultErrors.email, 'não tem erros')

            registerUser(infoUser.name, infoUser.email, infoUser.password, infoUser.role)
                .then(() => {
                    console.log('usuário foi criado');
                    history.push('/')
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
                <div className="container-register">
                   
                    <form className="form-register" action="">

                        <h1 className="title-register">Cadastrar</h1>

                        {errors.name && <span className='form-error'>{errors.name}</span>}
                        <Input
                            requered
                            placeholder="Name"
                            type="name"
                            name="name"                            
                            value={infoUser.name}
                            onChange={handleChange}
                        />

                        
                        {errors.email && <span className='form-error'>{errors.email}</span>}
                        <Input
                            requered
                            placeholder="Email"
                            type="email"
                            name="email"                            
                            value={infoUser.email}
                            onChange={handleChange}
                        />

                        
                        {errors.password && <span className='form-error'>{errors.password}</span>}

                        <Input
                            requered                     
                            placeholder="Senha"
                            type="password"
                            name="password"
                            value={infoUser.password}
                            onChange={handleChange}
                        />
                        {errors.role && <span className='form-error'>{errors.role}</span>}

                        <div className="radio-salao" onChange={handleChange} >
                            <label className="roleLabel">
                                <input
                                    requered
                                    className="roleLabel"
                                    type="radio"
                                    name="role"
                                    value="salao"
                                    id="role"
                                /> &nbsp;Salão
                            </label>

                            <label className="role-cozinha">
                                <input
                                    className="roleLabel"
                                    type="radio"
                                    name="role"
                                    value="cozinha"
                                    id="role"
                                /> &nbsp;Cozinha
                            </label>
                        </div>
                        <Button className="button-global" type='submit' onClick={handleRegister}>Cadastre-se</Button>
                    </form>
                    <p className="question-login">Já tem uma conta?</p>
                    <Link className="link-login" to="/login">Entrar </Link>
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </section>
    );
}
export default Register;
