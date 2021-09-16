export default function validateValues(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Insira seu nome";
  }

  if (!values.email) {
    errors.email = "Insira seu email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato de email inválido";
  }

  if (!values.password) {
    errors.password = "Insira uma senha";
  } else if (values.password.length < 6) {
    errors.password = "A senha deve conter no mínimo 6 caracteres";
  }

  if (
    values.workingOptions !== "atendente" &&
    values.workingOptions !== "cozinheiro"
  ) {
    errors.workingOptions = "Selecione seu cargo";
  }

  return errors;
}
