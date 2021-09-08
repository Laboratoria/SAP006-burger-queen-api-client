export const loginRedirection = (role, history) => {
	switch (role) {
		case 'hall':
			history.push('/salao');
			break;
		case 'kitchen':
			history.push('/cozinha');
			break;
		default:
			break;
	}
};

export const validateLogin = (values) => {
	const errors = {
};

	if (values.email === '') {
		errors.userEmail = 'Preencha o campo Email.';
	}

	if (!values.email.includes('@')) {
		errors.userEmail = 'Insira um email válido.';
	}

	if (values.password === '') {
		errors.userPassword = 'Preencha o campo Senha.';
	}

	if (values.password.length < 6) {
		errors.userPassword = 'Insira uma senha válida.';
	}

	return errors;
};
