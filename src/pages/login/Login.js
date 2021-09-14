import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const buttonLogin = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			console.log('erro')
		} else {
			console.log(email)
			fetch('https://lab-api-bq.herokuapp.com/auth/', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `email=${email}&password=${password}`
			})
				.then((response) => response.json())
				.then((json) => {
					const { token } = json;
					if(token){
						history.push('/Hall')
					}else {
					alert('erro');
					}
				})
		}
	}

	return (
		<>
			<h1>Login</h1>
			<div className='login'>
				<Input placeholder='E-mail' className='login-input' value={email} onChange={(event) => setEmail(event.target.value)}></Input>
				<Input placeholder='Senha' className='login-input' value={password} onChange={(event) => setPassword(event.target.value)}></Input>
				<Button buttonText='LOGIN' className='button' buttonOnClick={buttonLogin} />
				<p>Não tem uma conta? <Link to='./Register/index.js'>
					Registre-se
				</Link></p>
			</div>
		</>
	)
}

export default Login;