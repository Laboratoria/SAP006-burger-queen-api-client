import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/mainHall/login/Login';
import Registration from './pages/mainHall/register/Register';
import { isAuthenticated } from './services/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={props => (
        isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    )}/>
);

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastre-se" component={Registration} />
                <Route path="*" element={<h1>Not Found</h1>} /> 
                <PrivateRoute path="/" component={ Login }/>               
            </Switch>
            
        </BrowserRouter> 
    );  
};

export default Routes;