export function validateValues(values) {

  let errors = { empty: true };

  if (!values.name.trim()) {
    errors.name = "Insira seu nome";
    errors.empty = false;
  }

  if (!values.email) {
    errors.email = "Insira seu email";
    errors.empty = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato de email inválido";
    errors.empty = false;
  }

  // if (values.status === 403) {
  //   errors.email = "E-mail já cadastrado, insira outro";
  //   errors.empty = false
  // }

  if (!values.password) {
    errors.password = "Insira uma senha";
    errors.empty = false;
  } else if (values.password.length < 6) {
    errors.password = "A senha deve conter no mínimo 6 caracteres";
    errors.empty = false;
  }

  if (values.role !== "atendente" && values.role !== "cozinheiro") {
    errors.role = "Preencha seu cargo";
    errors.empty = false;
  }

  return errors;
}
