export default function validateValues(values) {
  let errors = { empty: true};

  if (!values.name.trim()) {
    errors.name = "Insira seu nome";
    console.log('1')
    errors.empty = false
  }

  if (!values.email) {
    errors.email = "Insira seu email";
    console.log('2')
    errors.empty = false
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato de email inválido";
    console.log('3')
    errors.empty = false
  }

  if (!values.password) {
    errors.password = "Insira uma senha";
    errors.empty = false
    console.log('4')
  } else if (values.password.length < 6) {
    errors.password = "A senha deve conter no mínimo 6 caracteres";
    errors.empty = false
    console.log('5')
  }

  if (
    values.workingOptions !== "atendente" &&
    values.workingOptions !== "cozinheiro"
  ) {
    errors.workingOptions = "Preencha seu cargo";
    errors.empty = false
    console.log('6')
  }

  return errors;
}
