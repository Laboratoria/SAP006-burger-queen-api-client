import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/router'
import {BrowserRouter} from 'react-router-dom'
import './index.css';

ReactDOM.render(
    
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>,
  document.getElementById('root')
);

