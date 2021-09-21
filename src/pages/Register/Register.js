import React, { useState } from "react"
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import { useHistory } from 'react-router-dom';
import ValidateInputs from '../Register/ValidationRegister';
import ValidationMessage from "../../components/ValidationMessage/validationMessage";
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
    role: '',
  })

  const onChangeValues = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
      
    })
    console.log(values)
  }

  const history = useHistory();

  const buttonRegister = (e) => {
    e.preventDefault();
    setErrors(ValidateInputs(values))
    if (errors) {
      fetch('https://lab-api-bq.herokuapp.com/users ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${values.email}&password=${values.password}&name=${values.name}&role=${values.role}&restaurant=Deburger`
      })
        .then((response) => {
          response.json()
            .then((json) => {
              console.log(json);
              if (json.id) {
                history.push('/Login')
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
        <div className='register-form-group'>
          <Input
            type='text'
            name='name'
            className='register-input'
            placeholder='Nome'
            onChange={onChangeValues}
            value={values.name}>
          </Input>
          {errors.name && <ValidationMessage>{errors.name}</ValidationMessage>}
        </div>

        <div className='register-form-group'>
          <Input
            type='text'
            name='email'
            className='register-input'
            placeholder='E-mail'
            onChange={onChangeValues}
            value={values.email}>
          </Input>
          {errors.email && <ValidationMessage>{errors.email}</ValidationMessage>}
        </div>

        <div className='register-form-group'>
          <Input
            type='password'
            name='password'
            className='register-input'
            placeholder='Senha'
            onChange={onChangeValues}
            value={values.password}>
          </Input>
          {errors.password && <ValidationMessage>{errors.password}</ValidationMessage>}
        </div>

        <div className='register-form-group'>
          <Input
            type='password'
            name='confirmPassword'
            className='register-input'
            placeholder='Confirmação de senha'
            onChange={onChangeValues}
            value={values.confirmPassword}>
          </Input>
          {errors.confirmPassword && <ValidationMessage>{errors.confirmPassword}</ValidationMessage>}
        </div>

        <div className='register-options'>
          <input type='radio' name='role' value='hall' onChange={onChangeValues} />
          <label>Atendimento</label>
          <input type='radio' name='role' value='kitchen' onChange={onChangeValues} />
          <label>Cozinha</label>
        </div>

        <Button
          buttonText='CADASTRAR'
          className='button-register'
          buttonOnClick={buttonRegister} />
        <p onClick={goToLogin} className='go-of-register'>Não tem uma conta? Faça o login aqui. </p>
    </form>
    </section>
  )
}

export default Register;


