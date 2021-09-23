
  const listUsers = (token) => {
    const apiToGetOrders= 'https://lab-api-bq.herokuapp.com/users';
    fetch (apiToGetOrders, {
      headers: {
      accept: 'application/json',
      Authorization: token
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const orders = responseJson
        console.log(orders)
      })
  };

  const deleteUsers = (token) => {
    const apiToGetOrders= 'https://lab-api-bq.herokuapp.com/users';
    fetch (apiToGetOrders, {
      headers: {
      accept: 'application/json',
      Authorization: token,
      },
      path:{
        uid: '2269'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const orders = responseJson
        console.log(orders)
      })
  };
