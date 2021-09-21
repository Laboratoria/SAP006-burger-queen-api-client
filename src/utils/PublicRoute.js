import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated, role } from './Auth'


const path = () => {
    if (role() === "hall") {
        return "/salao"
    }
     return "/cozinha" 
           
}

const PublicRoute = props => isAuthenticated() 
    ? <Redirect to={path()} />
    : <Route {...props} />

export default PublicRoute