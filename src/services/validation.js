const validation = (values) => {

  let errors = {};

  if (!values.name) {
    errors.name = 'É necessário digitar seu nome!'
  }
  if (!values.email) {
    errors.email = 'É necessario digitar seu e-mail!'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Digite um e-mail válido!'
  }
  if (!values.password) {
    errors.password = 'É necessario digitar sua senha!'
  } else if (values.password.length < 6) {
    errors.password = 'Digite uma senha com 6 caracteres ou mais!'
  }

  return (
    errors
  )
}
export default validation;
