import React from "react";

import logoBerg from '../../assets/images/logo-berg.png';
import './NotFound.scss'

export const NotFound = () => {
  return (
  <main className = 'not-found-page'>
    <h1> ERROR 404 </h1>
    <img src = {logoBerg} alt = 'Logo Berg'/>
    <h2> Desculpe-nos, mas esta página não foi encontrada.</h2>
  </main>
  )
}