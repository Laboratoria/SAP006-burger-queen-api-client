/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Saloon from './pages/Saloon/saloon';
import Page404 from './pages/Page404/index';
import Pedidos from './pages/Pedidos/index';
import Kitchen from './pages/Kitchen/kitchen';
import GlobalStyle from './components/GlobalStyle';
import AllDay from './pages/Pedidos/allDay/index';

import PrivateRoute from './service/PrivateRoute';

function Routes() {
  /* const isAuth = () => {
    const user = localStorage.getItem('token');
    if (!user) return false;

    return true;
  };

  /*
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
*/
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <PrivateRoute exact path="/saloon">
          <Saloon />
        </PrivateRoute>

        <PrivateRoute exact path="/saloon/pedidos/:mesa">
          <Pedidos />
        </PrivateRoute>

        <PrivateRoute exact path="/kitchen">
          <Kitchen />
        </PrivateRoute>

        <Route exact path="/allday">
          <AllDay />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

export default Routes;
