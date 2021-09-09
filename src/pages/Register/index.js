import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';

import './register.css';
import { loginRedirection } from '../../services';

const Register = () => {
	const [validated, setValidated] = useState(false);
	const [radioValue, setRadioValue] = useState('');

	const apiURL = 'https://lab-api-bq.herokuapp.com';
	const apiUsers = `${apiURL}/users`;
	const history = useHistory();

	const [workerName, setWorkerName] = useState('');
	const [workerEmail, setWorkerEmail] = useState('');
	const [workerPassword, setWorkerPassword] = useState('');

	const [workerConfirmPassword, setWorkerConfirmPassword] = useState('');
	const [equalPasswords, setEqualPasswords] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (workerPassword !== workerConfirmPassword) {
			setEqualPasswords(false);
		}

		if (workerPassword === workerConfirmPassword) {
			const form = event.currentTarget;
			if (form.checkValidity() === false) {
				event.stopPropagation();
			}
			setValidated(true);

			const requestOptions = {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json' 
				},
				body: JSON.stringify({
					name: workerName,
					email: workerEmail,
					role: radioValue,
					restaurant: 'Divino Burger',
					password: workerPassword,
				}),
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
				<img src={logo} className="logo" alt="logo"></img>
				<h2 className="mb-4">CADASTRO</h2>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className="mb-4">
						<Form.Control
							type="text"
							placeholder="Nome completo"
							required
							onChange={(event) => setWorkerName(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Insira seu nome completo.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-4" controlId="formBasicEmail">
						<Form.Control
							type="email"
							placeholder="Email"
							required
							onChange={(event) => setWorkerEmail(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Insira um e-mail válido.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-4" controlId="formBasicPassword">
						<Form.Control
							type="password"
							placeholder="Senha"
							required
							onChange={(event) => setWorkerPassword(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Senha com mínimo de 6 caracteres.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-4" controlId="formBasicConfirmPassword">
						<Form.Control
							type="password"
							placeholder="Confirmar Senha"
							required
							onChange={(event) => setWorkerConfirmPassword(event.target.value)}
						/>
						{!equalPasswords && (
							<p style={{
								 color: 'red', fontWeight: 'lighter' 
								 }}>
								Senha não equivalente.
							</p>
						)}
					</Form.Group>

					<ButtonGroup className="mb-5 d-flex justify-content-center" required>
						<ToggleButton
							type="radio"
							variant="secondary"
							name="radio"
							value="hall"
							id="hall"
							checked={radioValue === 'hall'}
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
							checked={radioValue === 'kitchen'}
							onChange={(e) => setRadioValue(e.currentTarget.value)}
							className="radio-btn"
						>
							Cozinha
						</ToggleButton>
					</ButtonGroup>
					<div className="col text-center">
						<Button
							id="btn-register"
							className="mb-4"
							variant="primary"
							type="submit"
							size="lg"
							onClick={(event) => handleSubmit(event)}
						>
							CADASTRAR
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
};

export default Register;
