import { signUpWithEmailAndPassword } from "../../services/data.js";

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
    values.role !== "atendente" &&
    values.role !== "cozinheiro"
  ) {
    errors.role = "Preencha seu cargo";
    errors.empty = false
    console.log('6')
  }

  
  if(errors.empty === true) {

    console.log(errors.empty)
    console.log(values)
    console.log('Entrou?')
    signUpWithEmailAndPassword(values)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })
   }



  return errors;
}
