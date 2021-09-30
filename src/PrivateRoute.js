import React from 'react'
import { Route, Redirect } from 'react-router'

const isLogged = () => localStorage.getItem('userToken')


const PrivateRoute = props => isLogged()
 ? <Route { ...props } /> : <Redirect to='/'/>

export default PrivateRoute

