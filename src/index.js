import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './components/router';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
  //   <BrowserRouter>
  //   <Routes/>
  //   </BrowserRouter>,
  // document.getElementById('root')
);
