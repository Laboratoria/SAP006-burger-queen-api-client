import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Page404 from './pages/Page404/index';
import Initial from './pages/Initial';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Initial />
          <Login />
        </Route>

        <Route exact path="/register">
          <Initial />
          <Register />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

export default Routes;
