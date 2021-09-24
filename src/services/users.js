
export const listUsers = (token) => {
  const apiToGetOrders= 'https://lab-api-bq.herokuapp.com/users';
  const result = fetch (apiToGetOrders, {
    headers: {
    accept: 'application/json',
    Authorization: token
    },
  }).then((response) => response.json())
  return result
};

export const deleteUser = (token, uid) => {
  const apiToGetUsers= `https://lab-api-bq.herokuapp.com/users/${uid}`
  const result = fetch (apiToGetUsers, {
    method: 'DELETE',
    headers: {
    accept: 'application/json',
    Authorization: token,
    },
  }).then((response) => response.json())
  return result
};

export const updateUser = (token, uid, newName, newRole) => {
  const apiToGetUsers= `https://lab-api-bq.herokuapp.com/users/${uid}`
  const result = fetch (apiToGetUsers, {
    method: 'DELETE',
    headers: {
    accept: 'application/json',
    Authorization: `${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify(
      { 
        name:newName, 
        role:newRole
      })
  }).then((response) => response.json())
  return result
};

export const getUserById = (token, uid) => {
  const apiToGetUsers= `https://lab-api-bq.herokuapp.com/users/${uid}`
  const result = fetch (apiToGetUsers, {
    method:'GET',
    headers: {
    accept: 'application/json',
    Authorization: token
    },
  }).then((response) => response.json())
  return result
};