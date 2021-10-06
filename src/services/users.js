import { useHistory } from "react-router";



export const tokenUser = localStorage['BOORGIR'];// localStorage.getItem('BOORGIR') uma outra alternativa

export const userRole = localStorage.getItem(tokenUser.role)


export const Logout = () => {
  const history = useHistory()
  localStorage.clear()
  if (tokenUser === '') {
    history.push('/')
  }
}