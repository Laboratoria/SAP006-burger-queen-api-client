import { React, useState } from 'react';
import { Link /*useHistory*/ } from 'react-router-dom';


// import logo from '../img/logo.png'
import validation from '../validation';
import Input from '../components/Input';
import Button from '../components/Button';
/*import useForm from '../Hooks/useForm';*/
import '../styles/login.css';
import '../global.css';

function Register() {
    /*const history = useHistory();*/

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "",
        password: "",
        role: "",
        restaurant: "testeBurger"
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values))

        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)

        })
            .then(res => res.json())
            .then((json) => {
                const token = json.token
                const role = json.role
                localStorage.setItem("usersToken", token);
                localStorage.setItem("role", role)
                // /*if (json.id !== undefined && role === "hall") {
                //     //navigateToRoles();
                //     navigateToMenu()
                // } else if (json.id !== undefined && role === "kitchen") {
                //     navigateToKitchen() */
                }
            )
    }
    return (
        <div className="pagina-login">
            <header className="pagina-login-header">
                 {/* <img src={logo} alt="Logo Burguer Queen" />  */}
            </header>
            
        
                <h1 className="title">Cadastre-se</h1>
            <Input
                type="email"
                name="email"
                inputClass="inputEmail"
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <p className="msgErro">{errors.email}</p>}

            <p className="labelInputs">Senha</p>
            <Input
                type="password"
                name="password"
                inputClass="inputPassword"
                value={values.password}
                onChange={handleChange}
            />
            {/* {errors.password && <p className="msgErro">{errors.password}</p>} */}

            <div className="radioBtn">
                <div className="radioBtn1">
                    <label className="roleLabel">
                        <input type="radio" name="role" value="hall"
                            onChange={handleChange}
                        />
                        &nbsp;Salão
                    </label>
                </div>

                <div className="radioBtn2">
                    <label className="roleLabel">
                        <input
                            type="radio"
                            name="role"
                            value="kitchen"
                            onChange={handleChange}
                        />
                        &nbsp;Cozinha
                    </label>
                </div>
            </div>
            {/* {errors.role && <p className="msgErro">{errors.role}</p>} */}


            <Button type="submit"
                className="orangeBtn"
                id="registerBtn"
                onClick={handleFormSubmit}>Cadastrar</Button>

            <button type="submit">
                <Link className="link" to="/login">Faça login </Link>
            </button>
        </div>    
        
    );
}
export default Register;
