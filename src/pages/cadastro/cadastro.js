import React, { useState, useEffect } from "react";
import Input from "../../componentes/input.js";
import Button from "../../componentes/button.js";
import validacao from "./validacao.js";
import { cadastro } from "../services/auth.js";

const Cadastro = () => {
  localStorage.clear();
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
      role: "",
      restaurant: "Chilli Burger",
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
          console.log("deu ruim")
        } else if (response.code === 403) {
          console.log("deu ruim")
        } else {
          console.log(response.token);

          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);

          alert("Deu bom")

        }
      })
      .catch((errors) => {
        console.log(errors)
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
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Input
            type="radio"
            onChange={handleChange}
            value="Atendente"
            name="role"
            id="Atendente"
          />
          <Input
            type="radio"
            onChange={handleChange}
            value="Cozinha"
            name="role"
            id="Cozinha"
          />
          <div className="hidden"> {error.role && <p>{error.role}</p>} </div>
          <Input
            type="text"
            placeholder="Insira aqui o seu nome"
            onChange={handleChange}
            value={values.name}
            name="name"
          />
          <div className="hidden"> {error.name && <p>{error.name}</p>} </div>
          <Input
            type="text"
            placeholder="Insira aqui o seu email"
            onChange={handleChange}
            value={values.email}
            name="email"
          />
          <div className="hidden"> {error.email && <p>{error.email}</p>} </div>
          <Input
            type="password"
            placeholder="Insira aqui a sua senha"
            onChange={handleChange}
            value={values.password}
            name="password"
          />
          <div className="hidden">
            {" "}
            {error.password && <p>{error.password}</p>}{" "}
          </div>
          <Button type="submit" onClick={handleSubmit} msg="Enviar">
            {" "}
          </Button>
        </form>
      </div>
   );
  }
  export default Cadastro