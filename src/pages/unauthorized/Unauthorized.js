import React from "react";
import logoBerg from '../../assets/images/logo-berg.png';

import { Button } from "../../components/Button/Button";
import { useHistory } from 'react-router-dom';

import { logout } from "../../routes/utils/auth";

import './Unauthorized.scss'

export const Unauthorized = () => {
  const history = useHistory();
  const currentEmployeeRole = localStorage.getItem('currentEmployeeRole')

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
  <div className = 'unauthorized'>
    <h1> ERROR 401 </h1>
    <img src = {logoBerg} alt = 'Logo Berg'/>
    <h2> Desculpe-nos, mas você não possui permissão para acessar esta seção :( <br/>
    <br/>Entre em contato com um administrador.</h2>
       <Button Role='unauhtorized-sign-out'
        ButtonOnClick={() => handleLogout ()}
      />
  
       <Button Role='unauhtorized-goback' 
        ButtonOnClick = {() => currentEmployeeRole === 'kitchen' ? 
        history.push('/kitchen') : history.push('/room')}
      />
  </div>
  )
}