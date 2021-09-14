import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render (
<BrowserRouter>
<Switch>

    <Route path='/' component={Login} exact />
    <Route path='/Register' component={Register} />
    <Route path='/Login' component={Login} />
    

</Switch>
</BrowserRouter>,
document.getElementById('root')
);
