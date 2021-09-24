export const getAllProducts = (token) => {
  const apiToGetProducts = 'https://lab-api-bq.herokuapp.com/products';
  const result = fetch (apiToGetProducts, {
      headers: {
        accept: 'application/json',
        Authorization:`${token}`
      },
  })
    .then((response) => response.json)
  return result
};