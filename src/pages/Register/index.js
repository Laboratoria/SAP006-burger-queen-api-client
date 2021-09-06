import React, { useState } from 'react';

import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';



import './register.css'

const Register = () => {

  const [validated, setValidated] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <>
      <div className="container-bg">
        <img src={background} className="bg-login" alt="background"></img>
      </div>

      <div className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
        <h2 className="mb-4">CADASTRO</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Insira um e-mail válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" required />
            <Form.Control.Feedback type="invalid">
              Senha com mínimo de 6 caracteres.
            </Form.Control.Feedback>

          </Form.Group>
          <ButtonGroup className="mb-5 d-flex justify-content-center" required>
            <ToggleButton
              type="radio"
              variant="secondary"
              name="radio"
              value="hall"
              id="hall"
              checked={radioValue === "hall"}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="radio-btn"
            >
              Salão
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="secondary"
              name="radio"
              value="kitchen"
              id="kitchen"
              checked={radioValue === "kitchen"}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="radio-btn"
            >
              Cozinha
            </ToggleButton>
          </ButtonGroup>
          <div className="col text-center">
            <Button id="btn-register" className="mb-4" variant="primary" type="submit" size="lg">
              CADASTRAR
            </Button>
          </div>

        </Form>
      </div>


    </>
  )

};

export default Register;