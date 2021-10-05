export const validacao = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "Insira o nome corretamente";
    }
    if (!values.email) {
      error.email = "Insira o email corretamente";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      error.email = "Preencha seu e-mail corretamente";
    }
    if (!values.password) {
      error.password = "Insira a senha corretamente";
    } else if (values.password.length < 6) {
      error.password = "Insira a senha de 6 digitos";
    }
    if (values.role !== "Atendente" && values.role !== "Cozinha") {
      error.role = "Insira a sua função";
    }
    return error;
  };
  export default validacao