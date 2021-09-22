import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'

const PrivateRoute = props => isAuthenticated()
    ? <Route { ...props }/>
    : <Redirect to="/"/>

export default PrivateRoute