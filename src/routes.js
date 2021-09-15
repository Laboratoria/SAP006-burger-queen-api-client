import React from 'react';
import reactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login/login';
import Home from './pages/Home/home';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}  />
      <Route exact path='/home' component={Home} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  )
}