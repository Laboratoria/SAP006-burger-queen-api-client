import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import { Form, Button } from 'react-bootstrap';

import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';

import './login.css'
import { loginRedirection } from '../../services';

export default function Login() {

  const url = 'https://lab-api-bq.herokuapp.com/auth';

  const history = useHistory();

  const [values, setValues] = useState({ email: '', password: '' });
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values)
  }




  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const loginData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        values
      )
    };

    fetch(url, loginData)
      .then((response) => response.json())
      .then((userData)=>{
        console.log(userData);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
        return userData.role;
      })
      .then((role) => {
        loginRedirection(role, history)
       })
      
  }

  return (
    <>
      <div className="container-bg">
        <img src={background} className="bg-login" alt="background"></img>
      </div>

      <div className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
        <h2 className="mb-4" >LOGIN</h2>
        <Form Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" onChange={onChange} value={values.email} name="email" required />
            <Form.Control.Feedback type="invalid">
              Email inválido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" onChange={onChange} value={values.password} name="password" required />
            <Form.Control.Feedback type="invalid">
              Senha inválida.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="col text-center">
            <Button id="btn-signin" className="mb-4 btn-default" variant="primary" type="submit" size="lg">
              ENTRAR
            </Button>
          </div>
          <div className="mb-5 d-flex justify-content-center">
            <p className="text">PRIMEIRO ACESSO?</p>
            <a href="/cadastro" className=" link d-inline-flex">CADASTRE-SE</a>
          </div>
        </Form>
      </div>


    </>
  )

}


