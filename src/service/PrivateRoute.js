/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authUser from './auth';

const PrivateRoute = (props) => authUser()
  ? <Route {...props} />
  : <Redirect to="/" />;

export default PrivateRoute;
