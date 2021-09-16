import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './authenticated';

export const PrivateRoute = props => isAuthenticated()
    ? <Route {...props} />
    : <Redirect to='/' />
