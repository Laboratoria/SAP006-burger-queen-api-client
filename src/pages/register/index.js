import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import monsterLogo from "../../img/monsterLogo.png";
import { createUser } from "../../services/api";
import { validateRegister } from "../register/validateRegister";

function FormRegister() {
  const BtnRegister = (e) => {
    createUser({});
    e.preventDefault();
    console.log("fazer requisição da API em auth/");
  };

  const history = useHistory();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })

  const [errors, setErrors] = useState({});

  const handleChange = e => {
      console.log(handleChange)
      const { name, value } = e.target
      setValues({
          ...values,
          [name]: value     
      })
  }

  const handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    setErrors(validateRegister(values));

    createUser(values)
        .then(response => response.json())
        .then((json) => {
            const token = json.token
            localStorage.setItem("token", token);

            if (json.id !== undefined) {
                history.push('/login');
                alert("Cadastro efetuado com sucesso")
            }

            /*if (json.role === "salão") {
                history.push('/hall');
            } else if
                (json.role === "cozinha") {
                history.push('/kitchen');
            }else {
        setErrors()
      }*/
        })
        /*.then(alert("Cadastro efetuado com sucesso"))*/

        .catch(errors => {
            console.log(errors)
        });
};
//console.log('***formValues', formValues);
  
  return (
    <section className="mainBox">
      <img className="imgRegister" src={monsterLogo} alt="icon-register" />
      <div className="signUpBox">
        <p className="titleRegister">Crie sua conta</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="fullName"
            values={values.fullName}
            onChange={(event) => setValues(event.target.value)}
            placeholder="Nome completo"
            errormessage="Por favor, insira um nome válido."
          />
          {errors.fullName && <p className='error'>{errors.fullName}</p>}
          <input
            type="email"
            id="email"
            name="email"
            values={values.email}
            onChange={(event) => setValues(event.target.value)}
            placeholder="E-mail"
            errormessage="Por favor, insira um e-mail válido."
          />
          {errors.email && <p className='error errorsMessage'>{errors.email}</p>} 
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={(event) => setValues(event.target.value)}
            placeholder="Senha"
            errormessage="Por favor, insira uma senha válida."
          />
          {errors.password && <p className='error errorsMessage'>{errors.password}</p>}
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={(event) => setValues(event.target.value)}
            placeholder="Confirmar senha"
            errormessage="As senhas não conferem."
          />
          {errors.confirmPassword && <p className='error errorsMessage'>{errors.confirmPassword}</p>}
        </form>
        <form className="inputRadioBox">
          <label className="labelRadioInput">
            <input
              variant="true"
              type="radio"
              name="role"
              className="input-radio"
              onChange={handleChange}
              value="Salão"
              labelText="Salão"
            />
            Salão
          </label>
          <label className="labelRadioInput">
            <input
              variant="true"
              type="radio"
              name="role"
              className="input-radio"
              onChange={handleChange}
              value="cozinha"
              labelText="Cozinha"
            />
            Cozinha
          </label>
          {errors.role && <p className='error errorsMessage'>{errors.role}</p>}
        </form>
        <button variant="secondary" onClick={BtnRegister}>
          Entrar
        </button>
        <p className="phraseRegister">
          Já possui uma conta?
          <br />
          <Link to="/">Faça seu login aqui</Link>
        </p>
      </div>
    </section>
  );
}

export default FormRegister;
