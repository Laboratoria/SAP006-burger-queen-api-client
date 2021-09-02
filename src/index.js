import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/router'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>,
  document.getElementById('root')
);

