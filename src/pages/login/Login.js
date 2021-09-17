import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import ValidateInputs from "../login/ValidationLogin"

import './Login.css'

const Login = () => {
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

	const history = useHistory();

	const buttonLogin = (e) => {
		e.preventDefault();
		setErrors(ValidateInputs(values))
		if (errors.empty) {
			fetch('https://lab-api-bq.herokuapp.com/auth/', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `email=${values.email}&password=${values.password}`
			})
				.then((response) => response.json())
				.then((json) => {
					const { token } = json;
					const { id } = json;

					if (token !== null && id !== null) {
						history.push('/Hall')
					} else {
						alert('erro');
					}
				})
		}

	}
	return (

		<section className='container'>
			<div className='logo' />
			<form className='login'>

				<Input
					data-testid='email-input'
					placeholder='E-mail'
					className='login-input'
					name='email'
					value={values.email}
					onChange={onChangeValues}>
				</Input>

				<div className="hidden">{errors.email && <p className='hidden-warning'>{errors.email}</p>}</div>

				<Input
					placeholder='Senha'
					className='login-input'
					name='password'
					value={values.password}
					onChange={onChangeValues}>
				</Input>

				<div className="hidden">{errors.email && <p className='hidden-warning'>{errors.email}</p>}</div>

				<Button
					buttonText='LOGIN'
					className='button'
					buttonOnClick={buttonLogin} />

				<p className='link'>Não tem uma conta? <Link to='./Register/index.js'>
					Registre-se
				</Link></p>
			</form>
		</section>
	)
}


export default Login;
