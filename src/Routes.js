import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Registration from './pages/cadastro/Registration';
import PrivateRoute from './PrivateRoutes';

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