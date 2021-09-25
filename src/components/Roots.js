import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from '../history';

import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

const Roots = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default Roots; 
