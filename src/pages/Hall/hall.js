import React from 'react';
import { useHistory } from "react-router";
//import { Button } from '../../components/Button/index.js';

export const Hall = () => {

  const history = useHistory();

  return (
    <div className="container-hall">
      <h1>Cozinha</h1>
      <button className='hall-btn' onClick={() => {
        localStorage.removeItem('token')
        history.push('/')
      }}>Sair
      </button>
    </div >
  );
};