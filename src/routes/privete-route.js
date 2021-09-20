import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../utils/auth'

export const PrivateRoute = props => isLogged()
    ? <Route {...props} />
    : <Redirect to='/' />
