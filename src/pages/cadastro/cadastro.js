import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
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
          <h1 className="h1-cadastro"> SELECIONE ABAIXO </h1>
            <div className="cargo">
              <div className="cargo-salao">
              <Input
                type="radio"
                onChange={handleChange}
                value="Atendente"
                name="role"
                id="Atendente"
              />
              <SalaoIcon />
              </div>
              <div className="cargo-cozinha">
              <Input
                type="radio"
                onChange={handleChange}
                value="Cozinha"
                name="role"
                id="Cozinha"
              />
              <CozinhaIcon />
              </div>
            </div>
            <div className="hidden"> {error.role && <p>{error.role}</p>} </div>
            <div className="form-group input">
              <Input
                type="text"
                placeholder="INSIRA SEU NOME"
                onChange={handleChange}
                value={values.name}
                name="name"
              />{" "}
            </div>
            <div className="hidden"> {error.name && <p>{error.name}</p>} </div>
            <div className="form-group input">
              <Input
                type="text"
                placeholder="INSIRA SEU EMAIL"
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
                placeholder="INSIRA SUA SENHA"
                onChange={handleChange}
                value={values.password}
                name="password"
              />{" "}
            </div>
            <div className="hidden">
              {" "}
              {error.password && <p>{error.password}</p>}{" "}
            </div>
            <div className="button-cadastro">
            <Button type="submit" onClick={handleSubmit} msg="Enviar">
              {" "}
            </Button></div>
            <span className="voltar-login">Já tem cadastro?</span>
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
