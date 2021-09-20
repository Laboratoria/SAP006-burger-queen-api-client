import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Routes } from '../src/routes/routes'

ReactDOM.render( //o render precisa receber apenas uma saída 
  //poderíamos colocar os dois dentro de um array [<Login />, <Home />]
  //Além disso, poderia ser feito sem refresh com historyAPI, mas é treta 
  <React.StrictMode>
    <BrowserRouter>
      <Routes />      
      
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
