import { useState } from "react";
import { loginWithUserPassword } from "../../services/register.js";
import { useHistory } from "react-router-dom";

const useForm = (validate) => {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    empty: true,
    email: "",
    password: "",
  });

  function navigateToMenu() {
    history.push("/menu");
  }

  function navigateToKitchen() {
    history.push("/kitchen");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (errors.empty) {
      loginWithUserPassword(values.email, values.password)
        .then((res) => res.json())
        .then((json) => {
          const token = json.token;
          const id = json.id;
          const role = json.role;
          localStorage.setItem("usersToken", token);

          if (token !== null && id !== null && role === "atendente") {
            navigateToMenu();
          } else {
            console.log("Garçom não cadastrado!");
          }

          if (token !== null && id !== null && role === "cozinheiro") {
            navigateToKitchen();
          } else {
            console.log("Cozinheiro não cadastrado");
          }
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
