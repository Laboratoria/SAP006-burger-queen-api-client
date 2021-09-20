import { useState } from "react";
import Input from "../../components/inputs/index.js";
import Button from "../../components/Button/button.js";
import "../signUp/style.css";
import logoMagic from "../../img/logoMagic.png";
import { validateValues } from "./ValidateRegister.js";
import { signUpWithEmailAndPassword } from "../../services/data.js";
import { useHistory } from "react-router";


const SignUp = () => {
  const ValueAndError = (validate) => {
    const history = useHistory();

    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
      role: "",
    });

    const [errors, setErrors] = useState({
      name: "",
      email: "",
      password: "",
      role: "",
      message: "",
    });

    function navigateToLogin() {
      history.push("/");
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const ErrorsValidation = validate(values);
      console.log(ErrorsValidation);

      setErrors(ErrorsValidation)

      if(errors.empty === true) {

        console.log(errors.empty)
        console.log(values)
        console.log('Entrou?')
        signUpWithEmailAndPassword(values)
        .then((response) => {
          if (response.message) {
            console.log(response.message);
            alert(response.message);
            // errors.message = response.message;
            // return errors;
          } else if (response.token) {
            console.log(response)
            alert("Usuário cadastrado com sucesso!")
            navigateToLogin()
          }
        })
        .catch((error) => {
          console.log(error)
        })
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

  const { handleChange, values, handleSubmit, errors } =
    ValueAndError(validateValues);

  return (
    <main>
      <img alt="" src={logoMagic}></img>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Bem Vindo!</h1>
        <section className="form-input">
          <fieldset className="margin-input">
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
            />
            <p className="errorMessage"> {errors.name && errors.name}</p>
          </fieldset>

          <fieldset className="margin-input">
            <Input
              name="email"
              id="email"
              type="text"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            <p className="errorMessage"> {errors.email && errors.email} {errors.message && errors.message}</p>
            {/* <p className="errorMessage"> {errors.message && errors.message}</p> */}
          </fieldset>

          <fieldset className="margin-input">
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Senha"
              value={values.password}
              onChange={handleChange}
            />
            <p className="errorMessage">
              {" "}
              {errors.password && errors.password}
            </p>
          </fieldset>
        </section>

        <p class="line">Selecione seu cargo:</p>
        <label>
          <input
            type="radio"
            name="role"
            value="atendente"
            onChange={handleChange}
          />
          Atendente
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="cozinheiro"
            onChange={handleChange}
          />
          Cozinheiro(a)
        </label>
        <p className="errorMessage"> {errors.role && errors.role}</p>
        <Button
          btnClass="createAccount"
          btnText="Cadastrar"
          btnType="submit"
        />
      </form>
    </main>
  );
};

export default SignUp;
