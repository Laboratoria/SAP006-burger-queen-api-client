import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form} from 'react-bootstrap';
import background from '../../img/bg-login3.png';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import ButtonDefault from '../../components/ButtonDefault';
import ButtonRadio from '../../components/ButtonRadio';
import Loader from '../../components/Loader';


import './register.scss';

const Register = () => {
	const [loading, setLoading] = useState(false);

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
		console.log(values)

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
			setLoading(true);
		
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
					// eslint-disable-next-line eqeqeq
					if (userData.code == '403') {
            throw new Error();
					}
					
					localStorage.setItem('name', userData.name);
					localStorage.setItem('token', userData.token);
					localStorage.setItem('role', userData.role);
					return userData.role;
				})
				.then((role) => {
          setTimeout(() => {
            loginRedirection(role, history)
          },
            2000)
        })
				.catch(() => {
          setLoading(false);
					setErrors({
						...errors,
						fail: `Ocorreu um erro, tente novamente.`,
					});
        
        });
		}
	};

	return (
		<>
			{loading ? <Loader /> : false}
			<div className="container-bg">
				<img src={background} className="bg-login" alt="background"></img>
			</div>

			<section className="container-login">
				<h2>CADASTRO</h2>
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

						<Form.Group >
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
						<div className="radio-wrapper">
							<ButtonRadio onChange={onChange} />
							{errors.role && (
								<ErrorMessage>{errors.role}</ErrorMessage>
							)}
						</div>
						
						{errors.fail && (
								<ErrorMessage >{errors.fail}</ErrorMessage>
							)}
						<div>
							<ButtonDefault
								id="btn-register"
								className="btn-default margin-bottom-4 margin-top-2"
								onClick={(event) => handleSubmit(event)}
							>
								CADASTRAR
							</ButtonDefault>
						</div>
					</Form>
		
			</section>
		

		</>
	);
};

export default Register;
