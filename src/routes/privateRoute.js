import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => localStorage.getItem('token');

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
     <Route
      {...rest}
        render={props =>
        isAuthenticated() ? (
        <Component {...props} />
        ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
        }
        />
    )
}

export default PrivateRouter;