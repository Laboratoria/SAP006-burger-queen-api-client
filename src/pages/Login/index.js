import { useState } from "react";
import { loginWithUserPassword } from "../../services/data.js";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/Button/button.js";
import Input from "../../components/inputs/index.js";
import signInValidation from "./signInValidation.js";
import logoMagic from "../../img/logoMagic.png";
import "./style.css";
import "../signUp/style.css";

function Login() {
  const useForm = (validate) => {
    const history = useHistory();

    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({
      empty: true,
      email: "",
      password: "",
      token: "",
    });

    function navigateToMenu() {
      history.push("/menu");
    }

    function navigateToKitchen() {
      history.push("/kitchen");
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));

      if (errors.empty) {
        loginWithUserPassword(values.email, values.password)
          .then((res) => res.json())
          .then((json) => {
            const token = json.token;
            const id = json.id;
            const role = json.role;
            localStorage.setItem("usersToken", token);

            if (token !== null && id !== null && role === "atendente") {
              navigateToMenu();
            } else if (token !== null && id !== null && role === "cozinheiro") {
              navigateToKitchen();
            } else {
              alert("Usuário não cadastrado");
              console.log("Não cadastrado");
            }
          });
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    return { handleChange, values, handleSubmit, errors };
  };

  const { values, handleChange, handleSubmit, errors } =
    useForm(signInValidation);

  return (
    <form className="container">
      <img src={logoMagic} className="logoMagic" alt="logo" />

      <div className="container-login">
        <div className="input-login">
          <fieldset className="margin-input">
            <Input
              className="input-email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="text"
            ></Input>

            <p className="errorNotice"> {errors.email && errors.email}</p>
          </fieldset>
          <fieldset className="margin-input">
            <Input
              placeholder="Senha"
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
            ></Input>
            <p className="errorNotice">{errors.password && errors.password}</p>
          </fieldset>
        </div>

        <Button
          btnId="btn-enter"
          btnType="button"
          btnClass="goBtn"
          btnText="Entrar"
          btnOnClick={handleSubmit}
        />

        <p className="new-worker">Funcionário novo?</p>
        <Link to="/register">
          <Button
            btnId="btn-register"
            btnType="button"
            btnClass="registerBtn"
            btnText="Cadastre-se"
          />
        </Link>
      </div>
    </form>
  );
}

export default Login;
