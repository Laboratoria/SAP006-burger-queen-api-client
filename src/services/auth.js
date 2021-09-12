import React from 'react';
import ReactDOM from 'react-dom';
import { closeAuthModal } from '../pages/auth/Functions';
import { AuthModal } from '../components/Modal'


export const AuthSignin = (event, {userData}, navigateTo) => {
  const apiToSignin = 'https://lab-api-bq.herokuapp.com/users'
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
  } else {
    fetch(apiToSignin , {
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
        const modal = document.createElement("div");
        document.body.appendChild(modal)
        ReactDOM.render(
        <AuthModal 
          modalMessage = 'Cadastro realizado com sucesso!'
          buttonText = 'OK'
          buttonEvent = {(event) => closeAuthModal(event, navigateTo, 'orders')}
          buttonIIClass = 'display-none'
        />, modal);
      } else {
        throw new Error (json.message)
      }
    }).catch(() => {
      const modal = document.createElement("div");
      document.body.appendChild(modal)
      ReactDOM.render(
        <AuthModal 
          modalMessage = 'Este email já está cadastrado no sistema.'
          buttonText = 'Cadastre um novo email.'
          buttonEvent = {(event) => closeAuthModal(event, navigateTo, 'register')}
          buttonIIText = 'Entre com uma conta já existente.'
          buttonIIEvent = {(event) => closeAuthModal(event, navigateTo, '/')}
        />, modal);
    })
  }
}

export const AuthLogin = (event, {userData}, navigateTo) => {
  const apiToLogin = 'https://lab-api-bq.herokuapp.com/auth';
  event.preventDefault();

  if (!userData.email.includes('@')) {
    return 'email'
  } else if (userData.password.length < 6) {
    return 'password'
  } else {
    fetch (apiToLogin, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password
      })
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    }).then((responseJson) => {
      localStorage.setItem('currentEmployeeToken', responseJson.token);
      if (responseJson.token !== undefined) {
        const modal = document.createElement("div");
        document.body.appendChild(modal)
        ReactDOM.render(
        <AuthModal 
          modalMessage = 'Login realizado com sucesso!'
          buttonText = 'OK'
          buttonEvent = {(event) => closeAuthModal(event, navigateTo, 'orders')}
          buttonIIClass = 'display-none'
        />, modal);
      }
    }).catch(() => {
      const modal = document.createElement("div");
      document.body.appendChild(modal)
      ReactDOM.render(
      <AuthModal 
        modalMessage = 'Email e/ou senha inválidos.'
        buttonText = 'OK'
        buttonEvent = {(event) => closeAuthModal(event, navigateTo, '/')}
        buttonIIClass = 'display-none'
      />, modal);
    })
  }
}