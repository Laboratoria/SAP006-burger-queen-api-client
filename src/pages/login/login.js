import React,{ useState } from 'react';
import { useHistory } from 'react-router';
import { userLogin } from '../../services/api.js';
import { Input } from '../../components/Input/Input.js';
import { Button } from '../../components/Button/Button.js';
import { Link } from 'react-router-dom';
import validateLogin from './validateLogin';
import logoMonsterGrande from '../../img/logoMonsterGrande.png';
import './login.css';


export function Login() {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateLogin(formValues));

        userLogin(formValues)
            .then(response => response.json())
            .then((json) => {
                console.log(json);

                const token = json.token
                localStorage.setItem("token", token);

                if (json.role === "salão") {
                    history.push('/Hall');
                } else if
                    (json.role === "cozinha") { 
                    history.push('/Kitchen');
                }
            })

            .catch(errors => {
                console.log(errors)
            })
    };

    return (

        <main className="container">
            <div className="div-logo">
              <h1 className="letra-logo">Monster Burguer</h1>
              <img className="imgRegister" src={logoMonsterGrande} alt="icon-register" />
            </div>
            <div className="div-login">
                <form onSubmit={handleSubmit}>
                    <div className="form-login">
                        <h2>
                            Login
                        </h2>
                        <Input
                            inputType="text"
                            inputName="email"
                            inputPlaceholder="E-mail"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.email} />
                        {errors.email && <p>{errors.email}</p>}
                        <Input
                            inputType="password"
                            inputName="password"
                            inputPlaceholder="Senha"
                            inputOnChange={handleInputChange}
                            inputValue={formValues.password} />
                        {errors.password && <p>{errors.password}</p>}
                        <Button
                            type="submit"> Entrar
                        </Button>
                        <div className="footer-login">
                            Não tem uma conta?
                    <Link className="link" to="/Register"> Cadastre-se </Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};
