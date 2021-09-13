export const authErrors = (errors) => {
  const errorMessages = {};
  if (errors.name.length < 7) {
    errors.name = 'Insira um nome válido.'
  }

  else if (!errors.email.includes('@')) {
    errors.email = 'Insira um email válido.'
  }

  else if (errors.password.length < 6) {
    errors.password = 'A senha deve ser composta por no mínimo 6 caracteres'
  }

  else if (errors.password !== errors.confirmPassword) {
    errors.password = 'As senhas não conferem.'
    errors.confirmPassword = 'As senhas não conferem.'
  }

  else if (errors.role === '') {
    errors.role = 'Por favor, insira um setor.'
  }

  return errorMessages
}
