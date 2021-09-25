export const authLogin = (event, {userData}) => {
  const apiToLogin = 'https://lab-api-bq.herokuapp.com/auth';
  event.preventDefault();
  const result = fetch (apiToLogin, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: userData.email,
      password: userData.password
    })
  })
  .then((response) => {
    switch (response.status) {
      case 200: 
        return response.json();
      default:
        throw new Error(response.status)
    }
  })
  return result 
};


export const authSignin = (event, {userData}) => {
  const apiToSignin = 'https://lab-api-bq.herokuapp.com/users'
  event.preventDefault();
  const result = fetch(apiToSignin , {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify ({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role:userData.role,
      restaurant:'Berg'})
    }).then((response) => {
      switch (response.status) {
        case 200: 
          return response.json();
        default:
          throw new Error(response.status)
      }
    })
    return result 
  };
  