export const cadastro = async (name, email, password, role) => {
    return await fetch('https://lab-api-bq.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        role: role,
        restaurant: "Chilli Burger"
      }),
    }).then(res => res.json())
  };