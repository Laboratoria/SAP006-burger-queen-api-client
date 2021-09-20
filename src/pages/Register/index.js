import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrow from '../../img/arrow.png';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import ButtonDefault from '../../components/ButtonDefault';
import ButtonRadioRegister from '../../components/ButtonRadioRegister';
import Loader from '../../components/Loader';

import './register.scss';
import Input from '../../components/Input';

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

		setErrorName(false);
		setErrorEmail(false);
		setErrorPassword(false);
		setErrors({			
		});
	};

	const goBack = () => {
		loginRedirection('/', history);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
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
					'Content-Type': 'application/json',
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
						loginRedirection(role, history);
					}, 2000);
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
			<div className="container-bg"></div>

			<section className="container-login">
				<button className="goback-btn" onClick={goBack}>
					<img src={arrow} alt="arrow" />
				</button>
				<div className="form form-register">
					<h2 className="uppercase">Cadastro</h2>
					<div className="form-wrapper margin-top-1">
						<form>
							<fieldset className="margin-input">
								<Input
									className={` ${errorName ? 'is-invalid' : ''}`}
									type="text"
									placeholder="Nome completo"
									onChange={onChange}
									value={values.name}
									name="name"
								/>
								{errors.userName && (
									<ErrorMessage>{errors.userName}</ErrorMessage>
								)}
							</fieldset>

							<fieldset className="margin-input">
								<Input
									className={` ${errorEmail ? 'is-invalid' : ''}`}
									type="email"
									placeholder="Email"
									onChange={onChange}
									value={values.email}
									name="email"
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
									required
								/>
								{errors.userPassword && (
									<ErrorMessage>{errors.userPassword}</ErrorMessage>
								)}
							</fieldset>
							<div className="radio-wrapper">
								<ButtonRadioRegister onChange={onChange} />
								{errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
							</div>

							{errors.fail && <ErrorMessage>{errors.fail}</ErrorMessage>}
							<div>
								<ButtonDefault
									id="btn-register"
									className="btn-default  margin-top-3 uppercase"
									onClick={handleSubmit}
								>
									Cadastrar
								</ButtonDefault>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Register;
