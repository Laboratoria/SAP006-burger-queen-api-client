import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Hall from './pages/Hall/Hall';
import Kitchen from './pages/Kitchen/Kitchen';
import OrderReady from './pages/Pedidos/OrderReady';
import PrivateRoute from './PrivateRoute';



import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render (
<BrowserRouter>
<Switch>

    <Route path='/' component={Login} exact />
    <Route path='/Register' component={Register} />
    <Route path='/Login' component={Login} />
    <PrivateRoute path='/Hall' component={Hall} exact />
    <PrivateRoute path='/Kitchen' component={Kitchen} exact />
    <PrivateRoute path='/OrderReady' component={OrderReady} exact />
    

</Switch>
</BrowserRouter>,
document.getElementById('root')
);


