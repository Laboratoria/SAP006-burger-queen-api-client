export const loginWithEmail = async (user) => {
  return await fetch('https://lab-api-bq.herokuapp.com/auth', {
      method:'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body:({
          "email": user.email,
          "password": user.password,
      }),
  })
      .then((response) => response.json())
      .then((res) => {
          //saveStorageKey(res.token);
          console.log(res.token)
          return res;
      })
      .catch((error) => console.log(error, 'erro de token na LoginWithEmail'))
};