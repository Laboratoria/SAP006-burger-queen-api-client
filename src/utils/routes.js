import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from 'react';

import Hall from "../pages/hall/index.js";
import Kitchen from "../pages/kitchen/index.js";
import Login from "../pages/login/index.js";
import NotFound from "../pages/notfound/index.js";
import Register from "../pages/register/index.js";
import isAuthenticated from "./authentication.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/hall" component={Hall} />
        <PrivateRoute exact path="/kitchen" component={Kitchen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
