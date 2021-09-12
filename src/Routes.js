import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Table from './pages/Table/table';
import Page404 from './pages/Page404/index';
// import Initial from './pages/Initial';
import Pedidos from './pages/Pedidos/index';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/table">
          <Table />
        </Route>

        <Route exact path="/table/pedidos">
          <Pedidos />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

export default Routes;
