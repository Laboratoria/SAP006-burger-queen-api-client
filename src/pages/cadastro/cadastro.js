import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cadastro/cadastro.css";
import Logo from "../../componentes/logo";
import Input from "../../componentes/input.js";
import Button from "../../componentes/button.js";
import SalaoIcon from "../../componentes/salao.js";
import CozinhaIcon from "../../componentes/cozinha.js";
import validacao from "./validacao.js";
import { cadastro } from "../services/auth.js";

const Cadastro = () => {
  localStorage.clear();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validacao(values));
    cadastro(values.name, values.email, values.password, values.role)
      .then((response) => {
        if (response.code === 400) {
          console.log("Deu ruim");
        } else if (response.code === 403) {
          console.log("Deu ruim");
        } else {
          console.log(response.token);

          localStorage.setItem("token", response.token);
          localStorage.setItem("id", response.id);

          alert("Deu bom");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="cadastro">
      <Logo />
      <main className="cadastro-page-main">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="form-group input">
            <div className="cargo">
              <Input
                type="radio"
                onChange={handleChange}
                value="Atendente"
                name="role"
                id="Atendente"
              />
              <SalaoIcon />
              <Input
                type="radio"
                onChange={handleChange}
                value="Cozinha"
                name="role"
                id="Cozinha"
              />
              <CozinhaIcon />
            </div>
            <div className="hidden"> {error.role && <p>{error.role}</p>} </div>
            <div className="form-group input">
              <Input
                type="text"
                placeholder="Insira aqui o seu nome"
                onChange={handleChange}
                value={values.name}
                name="name"
              />{" "}
            </div>
            <div className="hidden"> {error.name && <p>{error.name}</p>} </div>
            <div className="form-group input">
              <Input
                type="text"
                placeholder="Insira aqui o seu email"
                onChange={handleChange}
                value={values.email}
                name="email"
              />{" "}
            </div>
            <div className="hidden">
              {" "}
              {error.email && <p>{error.email}</p>}{" "}
            </div>
            <div className="form-group input">
              <Input
                type="password"
                placeholder="Insira aqui a sua senha"
                onChange={handleChange}
                value={values.password}
                name="password"
              />{" "}
            </div>
            <div className="hidden">
              {" "}
              {error.password && <p>{error.password}</p>}{" "}
            </div>
            <Button type="submit" onClick={handleSubmit} msg="Enviar">
              {" "}
            </Button>
            <span className="return-login">Já tem cadastro?</span>
            <Link className="tologin" to="/Login">
              {" "}
              Faça Login{" "}
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Cadastro;
