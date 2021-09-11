import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import './login.scss'

export default function Login() {
  const url = 'https://lab-api-bq.herokuapp.com/auth';

  const history = useHistory();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errors, setErrors] = useState({
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrorEmail(false);
    setErrorPassword(false);
    setErrors({
    })

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorsObject = validationInputs(values);
    setErrors(errorsObject);

    if (errorsObject.userEmail) {
      setErrorEmail(true);
    }

    if (errorsObject.userPassword) {
      setErrorPassword(true);
    }

    if (
      Object.keys(errorsObject).length === 0 &&
      errorsObject.constructor === Object
    ) {
      const loginData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      };

      fetch(url, loginData)
        .then((response) => response.json())
        .then((userData) => {
          // eslint-disable-next-line eqeqeq
          if (userData.code == '400') {
            throw new Error();
          } else {
            localStorage.setItem('name', userData.name);
            localStorage.setItem('token', userData.token);
            localStorage.setItem('role', userData.role);
            return userData.role;
          }
        })
        .then((role) => {
          loginRedirection(role, history);
        })
        .catch(() => {
          const userNotFound = {
            userPassword: 'Usuário e/ou senha incorreto(s).',
          };
          setErrors(userNotFound);
          setErrorEmail(true);
          setErrorPassword(true);
        });
    }
  };

  return (
    <>
      <div className="container-bg">
        <img src={background} className="bg-login" alt="background"></img>
      </div>

      <div className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
        <h2 className="mb-4">LOGIN</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className={` ${errorEmail ? 'is-invalid' : ''}` }
              type="email"
              placeholder="Email"
              onChange={onChange}
              value={values.email}
              name="email"
              required
              
            />
            {errors.userEmail && (
              <ErrorMessage>{errors.userEmail}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              className={` ${errorPassword ? 'is-invalid' : ''}`}
              type="password"
              placeholder="Senha"
              onChange={onChange}
              value={values.password}
              name="password"
              required
            />
            {errors.userPassword && (
             	<ErrorMessage>{errors.userPassword}</ErrorMessage>
            )}
          </Form.Group>
          <div className="col text-center">
            <Button
              id="btn-signin"
              className="mb-4 btn-default"
              variant="primary"
              type="submit"
              size="lg"
            >
              ENTRAR
            </Button>
          </div>
          <div className=" d-flex justify-content-center link-register">
            <p className="text">PRIMEIRO ACESSO?</p>
            <a href="/cadastro" className=" link d-inline-flex">
              CADASTRE-SE
            </a>
          </div>
        </Form>
      </div>
    </>
  );
}
