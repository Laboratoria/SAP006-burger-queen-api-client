export const userRegister = (formValues) => {
  return fetch("https://lab-api-bq.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formValues.username,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      restaurant: "Monster Burguer",
    }),
  });
};

export const userLogin = (formValues) => {
  return fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formValues.email,
      password: formValues.password,
    }),
  });
};

export const postOrder = (pedido) => {
  const token = localStorage.getItem("token");
  return fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `${token}` },
    body: JSON.stringify(pedido),
    // .then(response => response.json())
    // .then((json) => console.log(json))
    // .catch((e) => console.log(e))
  });
};
