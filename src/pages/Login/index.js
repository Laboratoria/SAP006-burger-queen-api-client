import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';



import './login.css'

const Login = () =>{

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <>
      <div className="container-bg">
        <img src={background} className="bg-login" alt="background"></img>
      </div>

      <div className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
        <h2 className="mb-4" >LOGIN</h2>
        <Form Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Email inválido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" required/>
            <Form.Control.Feedback type="invalid">
              Senha inválida.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="col text-center">
            <Button id="btn-signin" className="mb-4 btn-default" variant="primary" type="submit" size="lg">
              ENTRAR
            </Button>
          </div>
          <div  className="mb-5 d-flex justify-content-center">
            <p className="text">PRIMEIRO ACESSO?</p>
            <a  href="/cadastro" className=" link d-inline-flex">CADASTRE-SE</a>
          </div>
        </Form>
      </div>
     
      
    </>
  )
  
};

export default Login;