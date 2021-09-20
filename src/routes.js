import React from "react";
import { isAuthenticated } from '../src/services/auth';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    )}
    />
);


export default PrivateRoute;

