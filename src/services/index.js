export const loginRedirection = (role, history) => {
	switch (role) {
		case 'hall':
			history.push('/salao');
			break;
		case 'kitchen':
			history.push('/cozinha');
			break;
		case '/':
			history.push('/');
			break;
		default:
			break;
	}
};

export const validationInputs = (values) => {
	const errors = {
	};

	if (values.name === '') {
		errors.userName = 'Insira seu nome completo.';
	}

	if (values.email === '') {
		errors.userEmail = 'Preencha o campo Email.';
	}

	if (values.email !== '' && !values.email.includes('@')) {
		errors.userEmail = 'Insira um email válido.';
	}

	if (values.password === '') {
		errors.userPassword = 'Preencha o campo Senha.';
	}

	if (values.password.length > 0 && values.password.length < 6) {
		errors.userPassword = 'Insira uma senha válida.';
	}

	if (values.role === '') {
		errors.role = 'Selecione seu setor de trabalho.';
	}

	return errors;
};
