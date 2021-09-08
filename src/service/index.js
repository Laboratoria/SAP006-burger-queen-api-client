function verifyPassword(password) {
  if (password.length < 8 || password.length > 20) {
    return { verify: false, text: 'Senha deve conter mais de 8 digitos.' };
  }
  return { verify: true, text: '' };
}

function verifyName(name) {
  if (name.length < 2) {
    return { verify: false, text: 'O nome deve conter 2 letras ou mais.' };
  }
  return { verify: true, text: '' };
}

export { verifyPassword, verifyName };
