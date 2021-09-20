import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import ValidateInputs from "../login/ValidationLogin"
import ValidationMessage from "../../components/ValidationMessage/validationMessage";

import './Login.css'

const Login = () => {
	const history = useHistory();
	const [errors, setErrors] = useState({})
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})

	}

	const buttonLogin = (e) => {
		e.preventDefault();
		setErrors(ValidateInputs(values))
		if (errors) {
			fetch('https://lab-api-bq.herokuapp.com/auth/', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `email=${values.email}&password=${values.password}`
			})
				.then((response) => {
					response.json()
						.then((json) => {
							if (json.id) {
								console.log(json.id)
								history.push('/Hall')
							} else {
								console.log('nao rodou')
							}
						})
				})
		}

	}
	return (

		<section className='container'>
			<div className='logo' />
			<form className='login'>
				<div className='form-group'>

					<Input
						type='text'
						placeholder='E-mail'
						className='login-input'
						name='email'
						value={values.email}
						onChange={onChangeValues}>
					</Input>
					{errors.email && <ValidationMessage>{errors.email}</ValidationMessage>}
				</div>

				<div className='form-group'>
					<Input
						type='password'
						placeholder='Senha'
						className='login-input'
						name='password'
						value={values.password}
						onChange={onChangeValues}>
					</Input>
					{errors.password && <ValidationMessage>{errors.password}</ValidationMessage>}
				</div>

				<Button
					type='submit'
					buttonText='LOGIN'
					className='button'
					buttonOnClick={buttonLogin} />

				<p className='go-to'>Não tem uma conta? <Link to='./Register/index.js'>
					Cadastre-se
				</Link></p>
			</form>
		</section>
	)
}


export default Login;
