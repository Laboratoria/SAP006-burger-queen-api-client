export const validateForm = (name, email, password, confirmPassword, role) => {
  let message;
  let validationFulfilled = false;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailTest = regex.test(email);

  if (!name) {
    message = 'Insira o seu nome';
    console.log(message);
  } else if (!emailTest) {
    message = 'Email inválido';
    console.log(message)
  } else if (password.length < 6) {
    message = 'A senha deve ter pelo menos 6 caracteres';
    console.log(message);
  } else if (password !== confirmPassword) {
    message = 'As senhas não conferem';
    console.log(message);
  } else if (!role) {
    message = 'Selecione um cargo';
    console.log(message);
  } else {
    validationFulfilled = true;
    console.log('validação bem sucedida', validationFulfilled)
    return validationFulfilled;
  }

  return validationFulfilled;
}
