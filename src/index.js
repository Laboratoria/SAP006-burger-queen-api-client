import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Hall from './pages/Hall';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render (
<BrowserRouter>
<Switch>

    <Route path='/' component={Login} exact />
    <Route path='/Register' component={Register} />
    <Route path='/Login' component={Login} />
    <Route path='/Hall' component={Hall} exact />
    

</Switch>
</BrowserRouter>,
document.getElementById('root')
);

/*import Kitchen from './pages/Kitchen.js';
import OrderReady from './pages/OrderReady.js';
import OrderFinished from './pages/OrdersFinished.js';
*/