import React from 'react';
import reactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/login';
import Register  from '../pages/Register/register';
import Home from '../pages/home/home';

import PrivateRoute from './privete-route';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}  />
      <Route exact path='/register' component={Register}  />
      <PrivateRoute exact path='/home' component={Home} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  )
}