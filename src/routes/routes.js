import React from 'react';
import reactDom from 'react-dom';
import { Router, Switch, Route, useHistory  } from 'react-router-dom';

import { PrivateRoute } from './privete-route'

import Login from '../pages/login/login';
import Home from '../pages/home/home';

export const Routes = () => {
  const history = useHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/home' component={Home} />
        <Route component={() => <div>Page 404</div>} />
      </Switch>
    </Router>
  )
}