import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../img/logo.png';
import ButtonDefault from '../../components/ButtonDefault';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import './login.scss'
import Loader from '../../components/Loader';
import Input from '../../components/Input';

export default function Login() {
  const [loading, setLoading] = useState(false);

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
      ...values, [name]: value,
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
     ;
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
          setTimeout(() => {
            loginRedirection(role, history)
          },
            1000)
        })
        .catch(() => {
          const userNotFound = {
            userPassword: 'Usuário e/ou senha incorreto(s).',
          };
          setLoading(false);
          setErrors(userNotFound);
          setErrorEmail(true);
          setErrorPassword(true);
        });
    }
  };

  return (
    <>
      {loading ? <Loader /> : false}
      <div className="container-bg">
      </div>

      <section className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
         <div className="form">
          <h2 className="uppercase">Login</h2>
          <div className="form-wrapper margin-top-1">
            <form>
              <fieldset className="margin-input">
                <Input
                  className={`${errorEmail ? 'is-invalid' : ''}`}
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
              </fieldset>

              <fieldset className="margin-input">
                <Input
                  className={` ${errorPassword ? 'is-invalid' : ''}`}
                  type="password"
                  placeholder="Senha"
                  onChange={onChange}
                  value={values.password}
                  name="password"

                />
                {errors.userPassword && (
                  <ErrorMessage>{errors.userPassword}</ErrorMessage>
                )}
              </fieldset>

              <div className="button-login">
                <ButtonDefault
                  id="btn-signin"
                  className="btn-default margin-top-1 uppercase"
                  onClick={handleSubmit}
                >
                  Entrar
                </ButtonDefault>
              </div>
              <div className=" link-register uppercase">
                <span className="text">Primeiro acesso?</span>
                <a href="/cadastro" >
                  Cadastre-se
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
