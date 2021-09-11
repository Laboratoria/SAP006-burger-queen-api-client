import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import background from '../../img/bg-login3.png';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import ButtonDefault from '../../components/ButtonDefault';

import './register.scss';

const Register = () => {

	const apiURL = 'https://lab-api-bq.herokuapp.com';
	const apiUsers = `${apiURL}/users`;
	const history = useHistory();

	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [errors, setErrors] = useState({
	});

	const [values, setValues] = useState({
		name: '',
		email: '',
		role: '',
		restaurant: 'Divino Burger',
		password: '',
	});

	const onChange = (e) => {
		const { value, name } = e.target;
		setValues({
			...values,
			[name]: value,
		});

		setErrorName(false);
		setErrorEmail(false);
		setErrorPassword(false);
		setErrors({
		})

	};


	const handleSubmit = (event) => {
		event.preventDefault()
		const errorsObject = validationInputs(values);
		setErrors(errorsObject);

		if (errorsObject.userName) {
			setErrorName(true);
		}

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
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values),
			};

			fetch(apiUsers, requestOptions)
				.then((response) => response.json())
				.then((userData) => {
					localStorage.setItem('name', userData.name);
					localStorage.setItem('token', userData.token);
					localStorage.setItem('role', userData.role);
					return userData.role;
				})
				.then((role) => {
					loginRedirection(role, history);
				});
		}
	};

	return (
		<>
			<div className="container-bg">
				<img src={background} className="bg-login" alt="background"></img>
			</div>

			<div className="container-login">
				<h2 className="mb-4">CADASTRO</h2>
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Group className="mb-4">
						<Form.Control
							className={` ${errorName ? 'is-invalid' : ''}`}
							type="text"
							placeholder="Nome completo"
							onChange={onChange}
							value={values.name}
							name="name"
							required
						/>
						{errors.userName && (
							<ErrorMessage>{errors.userName}</ErrorMessage>
						)}
					</Form.Group>

					<Form.Group className="mb-4" controlId="formBasicEmail">
						<Form.Control
							className={` ${errorEmail ? 'is-invalid' : ''}`}
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

					<Form.Group className="mb-4" >
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


					<ToggleButtonGroup className=" d-flex justify-content-center" name="role" type="radio"  >
						<ToggleButton
							type="radio"
							variant="secondary"
							name="role"
							value="hall"
							id="hall"
							onChange={onChange}
							className="radio-btn"
						>
							Salão
						</ToggleButton>
						<ToggleButton
							type="radio"
							variant="secondary"
							name="role"
							value="kitchen"
							id="kitchen"
							onChange={onChange}
							className="radio-btn"
						>
							Cozinha
						</ToggleButton>
					</ToggleButtonGroup>
					{errors.role && (
						<ErrorMessage>{errors.role}</ErrorMessage>
					)}


					<div className="col text-center">
						<ButtonDefault
							id="btn-register"
							className="mb-4 mt-4"
							variant="primary"
							type="submit"
							size="lg"
							onClick={(event) => handleSubmit(event)}
						>
							CADASTRAR
						</ButtonDefault>
					</div>
				</Form>
			</div>
		</>
	);
};

export default Register;
