export const userRegister = (formValues) => {
    return fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formValues.username,
        email: formValues.email,
        password: formValues.password,
        role: formValues.role,
        restaurant: 'Monster Burguer',
      })
    });
  };
  
  
  
  export const userLogin = (formValues) => {
    console.log(formValues)
    return fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": formValues.email,
        "password": formValues.password
      }),
    });
  };
