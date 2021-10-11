import { tokenUser } from "./users"

export const getProducts = async () => {
  const url = 'https://lab-api-bq.herokuapp.com/products'

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${tokenUser}`
    },
  }

  const response = await fetch(url, config)
  return response
}