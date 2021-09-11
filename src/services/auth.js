import React from 'react';
import { AuthModal } from '../components/Modal'

export const registerAnEmployee = (event, {userData}) => {
  const apiToRegister = 'https://lab-api-bq.herokuapp.com/users'
  event.preventDefault();
    if (userData.name.length < 7) {   
      return 'name'
    }
    else if (!userData.email.includes('@')) {
      return 'email'
    }
    else if (userData.password.length < 6) {
      return 'password'
    }
    else if (userData.password !== userData.confirmPassword) {
      return 'confirmPassword'
    } 
    else if (userData.role === '') {
      return 'role'
    }
    else {
      fetch(apiToRegister, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify 
          ({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role:userData.role,
          restaurant:'Combos Burger'
          })
      }).then((response) => { 
          return response.json()
      }).then((json) => {
        const token = json.token;
        localStorage.setItem('currentEmployeeToken', token)
        if (json.token !== undefined) {
          document.body.appendChild(<AuthModal/>)
          setTimeout(() => {
            console.log('rota para orders')
          }, 1000) 
        } else {
          throw new Error (json.message)
        }
      }).catch((error) => alert(error))
    }
}