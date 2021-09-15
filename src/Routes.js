/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
// eslint-disable-next-line import/no-unresolved
import Table from './pages/Table/table';
import Page404 from './pages/Page404/index';
// import Initial from './pages/Initial';
import Pedidos from './pages/Pedidos/index';
import GlobalStyle from './components/GlobalStyle';

function Routes() {
  const isAuth = () => {
    const user = localStorage.getItem('token');
    if (!user) return false;

    return true;
  };

  const PrivateRoutes = ({ component: Component, ...rest }) => (

    <Route
      {...rest}
      render={(props) => (
        isAuth()
          ? <Component {...props} />
          : <Redirect to="/" />
      )}
    />
  );
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

        <PrivateRoutes exact path="/table">
          <Table />
        </PrivateRoutes>
        <PrivateRoutes exact path="/table/pedidos/:mesa">
          <Pedidos />
        </PrivateRoutes>
        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

export default Routes;
