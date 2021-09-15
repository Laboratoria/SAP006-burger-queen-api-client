import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
// eslint-disable-next-line import/no-unresolved
import Table from './pages/Table/table';
import Page404 from './pages/Page404/index';
import Pedidos from './pages/Pedidos/index';
import Kitchen from './pages/Kitchen/kitchen';
import GlobalStyle from './components/GlobalStyle';

function Routes() {
  return (
    <Router>
      <GlobalStyle />
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

        <Route exact path="/kitchen">
          <Kitchen />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

export default Routes;
