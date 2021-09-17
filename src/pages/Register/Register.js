import React, { useState } from "react"
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import { useHistory } from 'react-router-dom';
import ValidateInputs from '../login/ValidationLogin';
import './Register.css'



const Register = () => {

  const goToLogin = () => {
    history.push('/Login')
  }

  const [errors, setErrors] = useState({})

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChangeValues = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const history = useHistory();

  const buttonRegister = (e) => {
    e.preventDefault();
    setErrors(ValidateInputs(values))
    if (errors.empty) {
      fetch('https://lab-api-bq.herokuapp.com/users ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${values.email}&password=${values.password}&name=${values.name}&role=cozinha&restaurant=Deburguer`
      })
        .then((response) => {
          response.json()
            .then((json) => {
              console.log(json);
              if (json.id) {
                history.push('/Hall')
              } else {
                console.log(' não rodouuuuuu')
              }
            })
        })
    }
  }

  return (
    <section className='container-register'>
      <div className='logo-register' />
      <form className='register'>
        <Input name='name'
          className='register-input'
          placeholder='Nome'
          onChange={onChangeValues}
          value={values.name}>
        </Input>

        <div className="hidden">{errors.name && <p className='hidden-warning'>{errors.name}</p>}</div>

        <Input name='email'
          className='register-input'
          placeholder='E-mail'
          onChange={onChangeValues}
          value={values.email}>
        </Input>

        <div className="hidden">{errors.email && <p className='hidden-warning'>{errors.email}</p>}</div>

        <Input name='password'
          className='register-input'
          placeholder='Senha'
          onChange={onChangeValues}
          value={values.password}>
        </Input>

        <div className="hidden">{errors.password && <p className='hidden-warning'>{errors.password}</p>}</div>

        <Input name='confirmPassword'
          className='register-input'
          placeholder='Confirmação de senha'
          onChange={onChangeValues}
          value={values.confirmPassword}>
        </Input>

        <div className="hidden">{errors.confirmPassword && <p className='hidden-warning'>{errors.confirmPassword}</p>}</div>

        <Button
          buttonText='CADASTRAR'
          className='button'
          buttonOnClick={buttonRegister} />
        <p className='p-register'>Não tem uma conta?
          <Button buttonText='Ir para o Login' buttonOnClick={goToLogin} />
        </p>
      </form>
    </section>
  )
}

export default Register;


