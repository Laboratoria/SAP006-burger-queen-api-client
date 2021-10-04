export const validateForm = (values) => {
  let message;
  let validationFulfilled = false;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailTest = regex.test(values.email);

  if (!values.name) {
    message = 'Insira o seu nome';
    return { validationFulfilled, message }
  } else if (!values.role) {
    message = 'Selecione um cargo';
    return { validationFulfilled, message }
  } else if (emailTest === false) {
    message = 'Email inválido';
    return { validationFulfilled, message }
  } else if (values.password.length < 6) {
    message = 'A senha deve ter pelo menos 6 caracteres';
    return { validationFulfilled, message }
  } else if (values.password !== values.confirmPassword) {
    message = 'As senhas não conferem';
    return { validationFulfilled, message }
  } else {
    message = '';
    validationFulfilled = true;
    return { validationFulfilled, message };
  }
}
