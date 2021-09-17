import { useState } from "react";
import Input from "../../components/inputs/index.js";
import Button from "../../components/Button/button.js";
import "../signUp/style.css";
import logoMagic from "../../img/logoMagic.png";
// import ValueAndError from "./formValueAndError.js";
import validateValues from "./ValidateRegister.js";
// import { signUpWithEmailAndPassword } from "../../services/data.js";



const SignUp = () => {

  const ValueAndError = (validate) => {
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
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const ErrorsValidation = validate(values);
      console.log(ErrorsValidation);

      setErrors(ErrorsValidation)
    };
  
    const handleChange = (e) => {
      console.log(e.target.value)
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    return { handleChange, values, handleSubmit, errors };
  };

   const { handleChange, values, handleSubmit, errors } = ValueAndError(validateValues);


    // function handleClick(e) {
    //   e.preventDefault()
    //   signUpWithEmailAndPassword(values)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // };

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
            <p className="errorMessage"> {errors.email && errors.email}</p>
          </fieldset>

          <fieldset className="margin-input">
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Senha"
              value={values.password} //{errors.password ? errors.password : values.password}
              onChange={handleChange}
            />
            <p className="errorMessage"> {errors.password && errors.password}</p>
          </fieldset>
        </section>

        <hr className="line" />
        <p>Selecione seu cargo:</p>
        <label>
          <input type="radio" name="role" value="atendente" onChange={handleChange} />
          Atendente
        </label>
        <label>
          <input type="radio" name="role" value="cozinheiro" onChange={handleChange} />
          Cozinheiro(a)
        </label>
        <p className="errorMessage"> {errors.role && errors.role}</p>
        <Button
          btnClass="createAccount"
          btnText="Cadastrar"
          btnType="submit"
          // btnOnClick={handleClick}
        />
      </form>
    </main>
  );
}

export default SignUp;
