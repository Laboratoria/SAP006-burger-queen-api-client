function signInValidation(values) {
    let errors = {};

    if (!values.email) {
        errors.email = "Preencha seu email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato de email inválido"
    }

    if (!values.password) {
        errors.password = "Preencha sua senha";
      }

      else if(values.token === null){
          errors.token = "Usuário não encontrado"
      }

    return errors;  
}

export default signInValidation;